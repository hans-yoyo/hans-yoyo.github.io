---
slug: mysql-event-scheduler
title: MySQL定时任务(Event Scheduler) 
# authors:
#   name: Hans
tags: [MySQL]
---

主要介绍了MySQL Event Scheduler的语法，及一部分示例

<!-- truncate -->

基于 MySQL 5.7，官方文档地址：

CREATE：[https://dev.mysql.com/doc/refman/5.7/en/create-event.html](https://dev.mysql.com/doc/refman/5.7/en/create-event.html)

ALTER EVENT: [https://dev.mysql.com/doc/refman/5.7/en/alter-event.html](https://dev.mysql.com/doc/refman/5.7/en/alter-event.html)

## 前置条件

在创建EVENT之前，需要先确认 `Event Scheduler` 功能是否开启。[https://dev.mysql.com/doc/refman/5.7/en/events-configuration.html](https://dev.mysql.com/doc/refman/5.7/en/events-configuration.html)

```SQL
-- 查看开启状态 
SHOW GLOBAL VARIABLES like '%event_scheduler%'; 
-- 开启 
SET GLOBAL event_scheduler = ON; 
-- 关闭 
SET GLOBAL event_scheduler = OFF;
```


## CREATE Event

语法

```SQL

CREATE
    [DEFINER = user]
    EVENT
    [IF NOT EXISTS]
    event_name
    ON SCHEDULE schedule
    [ON COMPLETION [NOT] PRESERVE]
    [ENABLE | DISABLE | DISABLE ON SLAVE]
    [COMMENT 'string']
    DO event_body;

schedule: {
    AT timestamp [+ INTERVAL interval] ...
  | EVERY interval
    [STARTS timestamp [+ INTERVAL interval] ...]
    [ENDS timestamp [+ INTERVAL interval] ...]
}

interval:
    quantity {YEAR | QUARTER | MONTH | DAY | HOUR | MINUTE |
              WEEK | SECOND | YEAR_MONTH | DAY_HOUR | DAY_MINUTE |
              DAY_SECOND | HOUR_MINUTE | HOUR_SECOND | MINUTE_SECOND}
              
```

-   DEFINER，定义用户
-   schedule，执行计划，有两种方式：`ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR` 或 `EVERY 1 DAY STARTS CURRENT_TIMESTAMP`
-   `ON COMPLETION [NOT] PRESERVE`, 默认EVENT过期后就丢弃(NOT PRESERVE)，可通过 `ON COMPLETION PRESERVE` 申明过期后仍然保留，一般用于到了时间点，上一个任务还没有执行完成，当前的这个任务是直接丢弃，还是等上个任务执行完成后再执行
-   `[ENABLE | DISABLE | DISABLE ON SLAVE]`, 申明从库，一般不申明

对于DO操作中比较复杂的执行计划，可以通过以下2种方式

-   `DO` 中申明 `BEGIN` 和 `END`
-   改成调用储存过程的方式

## 示例

**1. 官方示例**

```SQL
-- 示例：每小时更新一次
CREATE EVENT myevent
    ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR
    DO
      UPDATE myschema.mytable SET mycol = mycol + 1;
```

```SQL
delimiter $$

CREATE EVENT e
    ON SCHEDULE
      EVERY 5 SECOND
    DO
      BEGIN
        DECLARE v INTEGER;
        -- 这里的 BEGIN END，不清楚是否是笔误
        DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;

        SET v = 0;

        WHILE v < 5 DO
          INSERT INTO t1 VALUES (0);
          UPDATE t2 SET s1 = s1 + 1;
          SET v = v + 1;
        END WHILE;
    END $$

delimiter ;
```

```SQL
CREATE EVENT e_call_myproc
    ON SCHEDULE
      AT CURRENT_TIMESTAMP + INTERVAL 1 DAY
    DO CALL myproc(5, 27);
```


**2. 工程实践**

滚动删除历史数据，删除当前时间往前15的历史数据。没有设置 `ON COMPLETION PRESERVE` 的原因是，如果漏掉一次对事件本身影响不大。

```SQL
-- CREATE
delimiter $$

CREATE EVENT IF NOT EXISTS records_interval_clear
    ON SCHEDULE
      EVERY 1 DAY STARTS '2021-08-06 01:00:00'        
    DO
      BEGIN
        DECLARE v_time BIGINT(20) DEFAULT 0;
        -- 当前日期往前15天
        SET v_time = (SELECT UNIX_TIMESTAMP(DATE_SUB(CURDATE(), INTERVAL 15 DAY)) * 1000);
        DELETE FROM t_history WHERE create_time < v_time;
       END $$

delimiter ;
```

## 其他命令

查看执行计划：

```SQL
SELECT * FROM INFORMATION_SCHEMA.events;
```


禁用 `EVENT`

```SQL
ALTER EVENT myevent DISABLE;
```

DROP

```SQL
DROP EVENT [IF EXISTS] event_name
```

## 注意

1. 在定时任务开启前，需要预估下第一次执行时删除的历史数据量，以免因删除数据量过多导致数据库卡死的情况，建议第一次先手动删除历史数据
2. 删除大表后，数据库的存储空间大小不会改变，需要通过 `optimize table` 语句释放表空间，后续优化可参考：[https://help.aliyun.com/document_detail/41720.html](https://help.aliyun.com/document_detail/41720.html) 或 磁盘碎片无锁表空间清理阿里云文档：[https://help.aliyun.com/document_detail/128340.html](https://help.aliyun.com/document_detail/128340.html)
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7999],{3905:(e,n,t)=>{t.d(n,{Zo:()=>o,kt:()=>u});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function E(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=r.createContext({}),m=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):E(E({},n),e)),t},o=function(e){var n=m(e.components);return r.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},N=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),N=m(t),u=l,T=N["".concat(p,".").concat(u)]||N[u]||c[u]||a;return t?r.createElement(T,E(E({ref:n},o),{},{components:t})):r.createElement(T,E({ref:n},o))}));function u(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,E=new Array(a);E[0]=N;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,E[1]=i;for(var m=2;m<a;m++)E[m]=t[m];return r.createElement.apply(null,E)}return r.createElement.apply(null,t)}N.displayName="MDXCreateElement"},4855:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>E,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=t(7462),l=(t(7294),t(3905));const a={},E=void 0,i={unversionedId:"mysql/MySQL\u5b9a\u65f6\u4efb\u52a1(Event Scheduler)",id:"mysql/MySQL\u5b9a\u65f6\u4efb\u52a1(Event Scheduler)",title:"MySQL\u5b9a\u65f6\u4efb\u52a1(Event Scheduler)",description:"\u57fa\u4e8e MySQL 5.7\uff0c\u5b98\u65b9\u6587\u6863\u5730\u5740\uff1a",source:"@site/wiki/database/mysql/MySQL\u5b9a\u65f6\u4efb\u52a1(Event Scheduler).md",sourceDirName:"mysql",slug:"/mysql/MySQL\u5b9a\u65f6\u4efb\u52a1(Event Scheduler)",permalink:"/wiki/database/mysql/MySQL\u5b9a\u65f6\u4efb\u52a1(Event Scheduler)",draft:!1,tags:[],version:"current",lastUpdatedBy:"hyman213",lastUpdatedAt:1677503089,formattedLastUpdatedAt:"2023\u5e742\u670827\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MySQL\u5b57\u6bb5\u7c7b\u578b",permalink:"/wiki/database/mysql/MySQL\u5b57\u6bb5\u7c7b\u578b"},next:{title:"MySQL\u5e38\u7528\u6a21\u7248",permalink:"/wiki/database/mysql/MySQL\u5e38\u7528\u6a21\u7248"}},p={},m=[{value:"\u524d\u7f6e\u6761\u4ef6",id:"\u524d\u7f6e\u6761\u4ef6",level:2},{value:"CREATE Event",id:"create-event",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2},{value:"\u5176\u4ed6\u547d\u4ee4",id:"\u5176\u4ed6\u547d\u4ee4",level:2},{value:"\u6ce8\u610f",id:"\u6ce8\u610f",level:2}],o={toc:m};function c(e){let{components:n,...t}=e;return(0,l.kt)("wrapper",(0,r.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u57fa\u4e8e MySQL 5.7\uff0c\u5b98\u65b9\u6587\u6863\u5730\u5740\uff1a"),(0,l.kt)("p",null,"CREATE\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/create-event.html"},"https://dev.mysql.com/doc/refman/5.7/en/create-event.html")),(0,l.kt)("p",null,"ALTER EVENT: ",(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/alter-event.html"},"https://dev.mysql.com/doc/refman/5.7/en/alter-event.html")),(0,l.kt)("h2",{id:"\u524d\u7f6e\u6761\u4ef6"},"\u524d\u7f6e\u6761\u4ef6"),(0,l.kt)("p",null,"\u5728\u521b\u5efaEVENT\u4e4b\u524d\uff0c\u9700\u8981\u5148\u786e\u8ba4 ",(0,l.kt)("inlineCode",{parentName:"p"},"Event Scheduler")," \u529f\u80fd\u662f\u5426\u5f00\u542f\u3002",(0,l.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/events-configuration.html"},"https://dev.mysql.com/doc/refman/5.7/en/events-configuration.html")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"-- \u67e5\u770b\u5f00\u542f\u72b6\u6001 \nSHOW GLOBAL VARIABLES like '%event_scheduler%'; \n-- \u5f00\u542f \nSET GLOBAL event_scheduler = ON; \n-- \u5173\u95ed \nSET GLOBAL event_scheduler = OFF;\n")),(0,l.kt)("h2",{id:"create-event"},"CREATE Event"),(0,l.kt)("p",null,"\u8bed\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"\nCREATE\n    [DEFINER = user]\n    EVENT\n    [IF NOT EXISTS]\n    event_name\n    ON SCHEDULE schedule\n    [ON COMPLETION [NOT] PRESERVE]\n    [ENABLE | DISABLE | DISABLE ON SLAVE]\n    [COMMENT 'string']\n    DO event_body;\n\nschedule: {\n    AT timestamp [+ INTERVAL interval] ...\n  | EVERY interval\n    [STARTS timestamp [+ INTERVAL interval] ...]\n    [ENDS timestamp [+ INTERVAL interval] ...]\n}\n\ninterval:\n    quantity {YEAR | QUARTER | MONTH | DAY | HOUR | MINUTE |\n              WEEK | SECOND | YEAR_MONTH | DAY_HOUR | DAY_MINUTE |\n              DAY_SECOND | HOUR_MINUTE | HOUR_SECOND | MINUTE_SECOND}\n              \n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"DEFINER\uff0c\u5b9a\u4e49\u7528\u6237"),(0,l.kt)("li",{parentName:"ul"},"schedule\uff0c\u6267\u884c\u8ba1\u5212\uff0c\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a",(0,l.kt)("inlineCode",{parentName:"li"},"ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"li"},"EVERY 1 DAY STARTS CURRENT_TIMESTAMP")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ON COMPLETION [NOT] PRESERVE"),", \u9ed8\u8ba4EVENT\u8fc7\u671f\u540e\u5c31\u4e22\u5f03(NOT PRESERVE)\uff0c\u53ef\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"ON COMPLETION PRESERVE")," \u7533\u660e\u8fc7\u671f\u540e\u4ecd\u7136\u4fdd\u7559\uff0c\u4e00\u822c\u7528\u4e8e\u5230\u4e86\u65f6\u95f4\u70b9\uff0c\u4e0a\u4e00\u4e2a\u4efb\u52a1\u8fd8\u6ca1\u6709\u6267\u884c\u5b8c\u6210\uff0c\u5f53\u524d\u7684\u8fd9\u4e2a\u4efb\u52a1\u662f\u76f4\u63a5\u4e22\u5f03\uff0c\u8fd8\u662f\u7b49\u4e0a\u4e2a\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u540e\u518d\u6267\u884c"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"[ENABLE | DISABLE | DISABLE ON SLAVE]"),", \u7533\u660e\u4ece\u5e93\uff0c\u4e00\u822c\u4e0d\u7533\u660e")),(0,l.kt)("p",null,"\u5bf9\u4e8eDO\u64cd\u4f5c\u4e2d\u6bd4\u8f83\u590d\u6742\u7684\u6267\u884c\u8ba1\u5212\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b2\u79cd\u65b9\u5f0f"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"DO")," \u4e2d\u7533\u660e ",(0,l.kt)("inlineCode",{parentName:"li"},"BEGIN")," \u548c ",(0,l.kt)("inlineCode",{parentName:"li"},"END")),(0,l.kt)("li",{parentName:"ul"},"\u6539\u6210\u8c03\u7528\u50a8\u5b58\u8fc7\u7a0b\u7684\u65b9\u5f0f")),(0,l.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. \u5b98\u65b9\u793a\u4f8b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"-- \u793a\u4f8b\uff1a\u6bcf\u5c0f\u65f6\u66f4\u65b0\u4e00\u6b21\nCREATE EVENT myevent\n    ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR\n    DO\n      UPDATE myschema.mytable SET mycol = mycol + 1;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"delimiter $$\n\nCREATE EVENT e\n    ON SCHEDULE\n      EVERY 5 SECOND\n    DO\n      BEGIN\n        DECLARE v INTEGER;\n        -- \u8fd9\u91cc\u7684 BEGIN END\uff0c\u4e0d\u6e05\u695a\u662f\u5426\u662f\u7b14\u8bef\n        DECLARE CONTINUE HANDLER FOR SQLEXCEPTION BEGIN END;\n\n        SET v = 0;\n\n        WHILE v < 5 DO\n          INSERT INTO t1 VALUES (0);\n          UPDATE t2 SET s1 = s1 + 1;\n          SET v = v + 1;\n        END WHILE;\n    END $$\n\ndelimiter ;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE EVENT e_call_myproc\n    ON SCHEDULE\n      AT CURRENT_TIMESTAMP + INTERVAL 1 DAY\n    DO CALL myproc(5, 27);\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. \u5de5\u7a0b\u5b9e\u8df5")),(0,l.kt)("p",null,"\u6eda\u52a8\u5220\u9664\u5386\u53f2\u6570\u636e\uff0c\u5220\u9664\u5f53\u524d\u65f6\u95f4\u5f80\u524d15\u7684\u5386\u53f2\u6570\u636e\u3002\u6ca1\u6709\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"ON COMPLETION PRESERVE")," \u7684\u539f\u56e0\u662f\uff0c\u5982\u679c\u6f0f\u6389\u4e00\u6b21\u5bf9\u4e8b\u4ef6\u672c\u8eab\u5f71\u54cd\u4e0d\u5927\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"-- CREATE\ndelimiter $$\n\nCREATE EVENT IF NOT EXISTS records_interval_clear\n    ON SCHEDULE\n      EVERY 1 DAY STARTS '2021-08-06 01:00:00'        \n    DO\n      BEGIN\n        DECLARE v_time BIGINT(20) DEFAULT 0;\n        -- \u5f53\u524d\u65e5\u671f\u5f80\u524d15\u5929\n        SET v_time = (SELECT UNIX_TIMESTAMP(DATE_SUB(CURDATE(), INTERVAL 15 DAY)) * 1000);\n        DELETE FROM t_history WHERE create_time < v_time;\n       END $$\n\ndelimiter ;\n")),(0,l.kt)("p",null,"\u6570\u636e\u91cf\u8f83\u591a\uff0c\u5faa\u73af\u5206\u6279\u5220\u9664\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"\ndelimiter $$\nCREATE EVENT IF NOT EXISTS event_t_printer_online_log_interval_clear\n    ON SCHEDULE\n      -- \u6bcf\u5929\u51cc\u6668\u6267\u884c\u4e00\u6b21\n      EVERY 1 DAY STARTS '2022-09-14 23:10:00'        \n    DO\n      BEGIN\n        DECLARE v_time BIGINT(20) DEFAULT 0;\n        DECLARE v_record INT(11) DEFAULT 0;\n        -- \u6bcf\u4e00\u6b21\u5220\u9664\u7684\u8bb0\u5f55\u6570\u91cf\n        DECLARE v_del INT(11) DEFAULT 500000;\n        -- \u6e05\u740615\u5929\u524d\u7684\u8bb0\u5f55\n        SET v_time = (SELECT UNIX_TIMESTAMP(DATE_SUB(CURDATE(), INTERVAL 15 DAY)) * 1000);\n        SET v_record = (SELECT count(*) FROM t_printer_online_log WHERE create_time < v_time);\n        WHILE v_record > 0 DO\n            DELETE FROM t_printer_online_log WHERE create_time < v_time LIMIT v_del;\n            SET v_record = v_record - v_del;\n        END WHILE;\n       END $$\ndelimiter ;\n")),(0,l.kt)("h2",{id:"\u5176\u4ed6\u547d\u4ee4"},"\u5176\u4ed6\u547d\u4ee4"),(0,l.kt)("p",null,"\u67e5\u770b\u6267\u884c\u8ba1\u5212\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"SELECT * FROM INFORMATION_SCHEMA.events;\n")),(0,l.kt)("p",null,"\u7981\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"EVENT")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"ALTER EVENT myevent DISABLE;\n")),(0,l.kt)("p",null,"DROP"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-SQL"},"DROP EVENT [IF EXISTS] event_name\n")),(0,l.kt)("h2",{id:"\u6ce8\u610f"},"\u6ce8\u610f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5728\u5b9a\u65f6\u4efb\u52a1\u5f00\u542f\u524d\uff0c\u9700\u8981\u9884\u4f30\u4e0b\u7b2c\u4e00\u6b21\u6267\u884c\u65f6\u5220\u9664\u7684\u5386\u53f2\u6570\u636e\u91cf\uff0c\u4ee5\u514d\u56e0\u5220\u9664\u6570\u636e\u91cf\u8fc7\u591a\u5bfc\u81f4\u6570\u636e\u5e93\u5361\u6b7b\u7684\u60c5\u51b5\uff0c\u5efa\u8bae\u7b2c\u4e00\u6b21\u5148\u624b\u52a8\u5220\u9664\u5386\u53f2\u6570\u636e"),(0,l.kt)("li",{parentName:"ol"},"\u5220\u9664\u5927\u8868\u540e\uff0c\u6570\u636e\u5e93\u7684\u5b58\u50a8\u7a7a\u95f4\u5927\u5c0f\u4e0d\u4f1a\u6539\u53d8\uff0c\u9700\u8981\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"li"},"optimize table")," \u8bed\u53e5\u91ca\u653e\u8868\u7a7a\u95f4\uff0c\u540e\u7eed\u4f18\u5316\u53ef\u53c2\u8003\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://help.aliyun.com/document_detail/41720.html"},"https://help.aliyun.com/document_detail/41720.html")," \u6216 \u78c1\u76d8\u788e\u7247\u65e0\u9501\u8868\u7a7a\u95f4\u6e05\u7406\u963f\u91cc\u4e91\u6587\u6863\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://help.aliyun.com/document_detail/128340.html"},"https://help.aliyun.com/document_detail/128340.html"))))}c.isMDXComponent=!0}}]);
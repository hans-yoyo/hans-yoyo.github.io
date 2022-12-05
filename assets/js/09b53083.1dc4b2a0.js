"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},c=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return t?n.createElement(g,o(o({ref:r},d),{},{components:t})):n.createElement(g,o({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2111:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=t(7462),a=(t(7294),t(3905));const i={title:"SpringBoot \u6574\u5408 MySQL\u4ee5\u53ca\u8fde\u63a5\u6c60",description:"SpringBoot \u6574\u5408 MySQL\u4ee5\u53ca\u8fde\u63a5\u6c60",slug:"springboot-mysql-conn-pool",sidebar_position:4,keywords:["SpringBoot","MySQL","\u8fde\u63a5\u6c60"],tags:["SpringBoot"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2022-11-13 21:42",author:"Hans"}},o=void 0,s={unversionedId:"springboot/SpringBoot \u6574\u5408 MySQL\u4ee5\u53ca\u8fde\u63a5\u6c60",id:"springboot/SpringBoot \u6574\u5408 MySQL\u4ee5\u53ca\u8fde\u63a5\u6c60",title:"SpringBoot \u6574\u5408 MySQL\u4ee5\u53ca\u8fde\u63a5\u6c60",description:"SpringBoot \u6574\u5408 MySQL\u4ee5\u53ca\u8fde\u63a5\u6c60",source:"@site/wiki/spring/springboot/04-SpringBoot \u6574\u5408 MySQL\u4ee5\u53ca\u8fde\u63a5\u6c60.md",sourceDirName:"springboot",slug:"/springboot/springboot-mysql-conn-pool",permalink:"/wiki/spring/springboot/springboot-mysql-conn-pool",draft:!1,tags:[{label:"SpringBoot",permalink:"/wiki/spring/tags/spring-boot"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1668346920,formattedLastUpdatedAt:"2022\u5e7411\u670813\u65e5",sidebarPosition:4,frontMatter:{title:"SpringBoot \u6574\u5408 MySQL\u4ee5\u53ca\u8fde\u63a5\u6c60",description:"SpringBoot \u6574\u5408 MySQL\u4ee5\u53ca\u8fde\u63a5\u6c60",slug:"springboot-mysql-conn-pool",sidebar_position:4,keywords:["SpringBoot","MySQL","\u8fde\u63a5\u6c60"],tags:["SpringBoot"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2022-11-13 21:42",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"SpringBoot\u65e5\u5fd7\u914d\u7f6e",permalink:"/wiki/spring/springboot/springboot-logging"},next:{title:"SpringBoot \u6574\u5408 H2\u6570\u636e\u5e93",permalink:"/wiki/spring/springboot/springboot-h2"}},l={},p=[{value:"\u5feb\u901f\u96c6\u6210",id:"\u5feb\u901f\u96c6\u6210",level:2},{value:"\u96c6\u6210MySQL\u548cHikiriCP\u8fde\u63a5\u6c60",id:"\u96c6\u6210mysql\u548chikiricp\u8fde\u63a5\u6c60",level:2},{value:"\u96c6\u6210MySQL\u548cDruid\u8fde\u63a5\u6c60",id:"\u96c6\u6210mysql\u548cdruid\u8fde\u63a5\u6c60",level:2}],d={toc:p};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5feb\u901f\u96c6\u6210"},"\u5feb\u901f\u96c6\u6210"),(0,a.kt)("p",null,"1) \u5f15\u5165\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"\n<dependencies>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-web</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-jdbc</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>mysql</groupId>\n        <artifactId>mysql-connector-java</artifactId>\n        <scope>runtime</scope>\n    </dependency>\n</dependencies>\n")),(0,a.kt)("p",null,"2) \u6dfb\u52a0\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  application:\n    name: MySQL-Demo-Application\n  datasource:\n    url: jdbc:mysql://localhost:3306/learn_springboot?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&useSSL=false&serverTimezone=UTC\n    username: root\n    password: root\nserver:\n  port: 8085\n\nlogging:\n  level:\n    com.hans: DEBUG\n  pattern:\n    console: '%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n'\n    file: '%d{yyyy-MM-dd HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n'\n  file:\n    path: ./logs\n    name: ${logging.file.path}/${spring.application.name}.log\n  logback:\n    rollingpolicy:\n      max-file-size: 50MB\n      max-history: 7\n")),(0,a.kt)("p",null,"\u5feb\u901f\u96c6\u6210\u53ea\u9700\u8981\u6dfb\u52a0\u4e0a\u9762\u4e09\u4e2a\u914d\u7f6e(url\u3001username\u3001password)\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u66f4\u591a\u914d\u7f6e\u8bf4\u660e\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html"},"https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html"),"\n\u641c\u7d22: ",(0,a.kt)("inlineCode",{parentName:"p"},"spring.datasource")),(0,a.kt)("p",null,"3) \u6d4b\u8bd5"),(0,a.kt)("p",null,"\u542f\u52a8\u5e76\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"p"},"JdbcTemplate")," \u67e5\u8be2\u6570\u636e\u5e93"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'\n@Slf4j\n@RestController\n@SpringBootApplication\npublic class MySQLApplication {\n\n    @Autowired\n    private JdbcTemplate jdbcTemplate;\n\n    public static void main(String[] args) {\n        SpringApplication.run(MySQLApplication.class, args);\n    }\n\n    @RequestMapping("/")\n    public String index() {\n        List<Map<String, Object>> results = jdbcTemplate.queryForList("SELECT * FROM t_employee LIMIT 2");\n        log.debug("results: {}", results);\n        return "SUCCESS";\n    }\n\n}\n')),(0,a.kt)("p",null,"\u542f\u52a8\u65f6\u770b\u5230HikariPool\u65e5\u5fd7\uff0c\u8bf4\u660e\u9ed8\u8ba4\u662f\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"HikariCP"),"\u8fde\u63a5\u6c60"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"2022-10-30 21:27:57.641 [main] INFO  com.zaxxer.hikari.HikariDataSource - HikariPool-1 - Starting...\n2022-10-30 21:27:57.963 [main] INFO  com.zaxxer.hikari.HikariDataSource - HikariPool-1 - Start completed.\n")),(0,a.kt)("h2",{id:"\u96c6\u6210mysql\u548chikiricp\u8fde\u63a5\u6c60"},"\u96c6\u6210MySQL\u548cHikiriCP\u8fde\u63a5\u6c60"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1) \u4f7f\u7528\u6570\u636e\u5e93\u8fde\u63a5\u6c60\u7684\u597d\u5904")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u6700\u5927\u9650\u5ea6\u7684\u91cd\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u8d44\u6e90\u66f4\u8fc5\u901f\uff0c\u7cfb\u7edf\u54cd\u5e94\u66f4\u5feb"),(0,a.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u7ba1\u7406\u66f4\u65b9\u4fbf")),(0,a.kt)("p",null,"HikiriCP\u662fSpringBoot\u9ed8\u8ba4\u6570\u636e\u5e93\u8fde\u63a5\u6c60"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  datasource:\n    # \u6307\u5b9a\u4e3aHikariDataSource\n    type: com.zaxxer.hikari.HikariDataSource\n    driver-class-name: com.mysql.cj.jdbc.Driver\n    url: jdbc:mysql://127.0.0.1:3306/learn_springboot?useUnicode=true&characterEncoding=UTF-8&autoReconnect=true&useSSL=false\n    username: root\n    password: root\n    # hikari\u8fde\u63a5\u6c60\u914d\u7f6e\n    hikari:\n      #\u8fde\u63a5\u6c60\u540d\n      pool-name: HikariCP\n      #\u6700\u5c0f\u7a7a\u95f2\u8fde\u63a5\u6570\n      minimum-idle: 2\n      # \u8fde\u63a5\u6c60\u6700\u5927\u8fde\u63a5\u6570\uff0c\u9ed8\u8ba4\u662f10\n      maximum-pool-size: 8\n      # \u6b64\u5c5e\u6027\u63a7\u5236\u4ece\u6c60\u8fd4\u56de\u7684\u8fde\u63a5\u7684\u9ed8\u8ba4\u81ea\u52a8\u63d0\u4ea4\u884c\u4e3a,\u9ed8\u8ba4\u503c\uff1atrue\n      auto-commit: true\n      # \u7a7a\u95f2\u8fde\u63a5\u5b58\u6d3b\u6700\u5927\u65f6\u95f4\uff0c\u9ed8\u8ba410\u5206\u949f\n      idle-timeout: 300000\n      # \u6b64\u5c5e\u6027\u63a7\u5236\u6c60\u4e2d\u8fde\u63a5\u7684\u6700\u957f\u751f\u547d\u5468\u671f\uff0c\u503c0\u8868\u793a\u65e0\u9650\u751f\u547d\u5468\u671f\uff0c\u9ed8\u8ba430\u5206\u949f\n      max-lifetime: 1800000\n      # \u6570\u636e\u5e93\u8fde\u63a5\u8d85\u65f6\u65f6\u95f4,\u9ed8\u8ba430\u79d2\n      connection-timeout: 30000\n      # \u8fde\u63a5\u6d4b\u8bd5query\n      connection-test-query: SELECT 1\n      data-source-properties: {cachePrepStmts: true, prepStmtCacheSize: 250, prepStmtCacheSqlLimit: 2048, useServerPrepStmts: true}\n\n")),(0,a.kt)("p",null,"\u66f4\u591aHikariCP\u914d\u7f6e\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/brettwooldridge/HikariCP"},"https://github.com/brettwooldridge/HikariCP"),"\u3002\n\u5176\u4e2d\u5305\u542b\u4e86\u5fc5\u987b\u7684(",(0,a.kt)("inlineCode",{parentName:"p"},"Essentials"),")\u3001\u5e38\u7528\u7684(",(0,a.kt)("inlineCode",{parentName:"p"},"Frequently used"),")\u3001\u4e0d\u5e38\u7528\u7684(",(0,a.kt)("inlineCode",{parentName:"p"},"Infrequently used"),")"),(0,a.kt)("p",null,"HikariCP\u8be6\u7ec6\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/east7/p/14900555.html"},"https://www.cnblogs.com/east7/p/14900555.html")),(0,a.kt)("h2",{id:"\u96c6\u6210mysql\u548cdruid\u8fde\u63a5\u6c60"},"\u96c6\u6210MySQL\u548cDruid\u8fde\u63a5\u6c60"),(0,a.kt)("p",null,"wiki: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/alibaba/druid/tree/master/druid-spring-boot-starter"},"https://github.com/alibaba/druid/tree/master/druid-spring-boot-starter")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n   <groupId>com.alibaba</groupId>\n   <artifactId>druid-spring-boot-starter</artifactId>\n   <version>1.1.17</version>\n</dependency>\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"# JDBC\u914d\u7f6e\nspring.datasource.druid.url= # \u6216spring.datasource.url= \nspring.datasource.druid.username= # \u6216spring.datasource.username=\nspring.datasource.druid.password= # \u6216spring.datasource.password=\nspring.datasource.druid.driver-class-name= #\u6216 spring.datasource.driver-class-name=\n\n# \u8fde\u63a5\u6c60\u914d\u7f6e\nspring.datasource.druid.initial-size=\nspring.datasource.druid.max-active=\nspring.datasource.druid.min-idle=\nspring.datasource.druid.max-wait=\nspring.datasource.druid.pool-prepared-statements=\nspring.datasource.druid.max-pool-prepared-statement-per-connection-size=\nspring.datasource.druid.max-open-prepared-statements= #\u548c\u4e0a\u9762\u7684\u7b49\u4ef7\nspring.datasource.druid.validation-query=\nspring.datasource.druid.validation-query-timeout=\nspring.datasource.druid.test-on-borrow=\nspring.datasource.druid.test-on-return=\nspring.datasource.druid.test-while-idle=\nspring.datasource.druid.time-between-eviction-runs-millis=\nspring.datasource.druid.min-evictable-idle-time-millis=\nspring.datasource.druid.max-evictable-idle-time-millis=\nspring.datasource.druid.filters= #\u914d\u7f6e\u591a\u4e2a\u82f1\u6587\u9017\u53f7\u5206\n\n# \u76d1\u63a7\u914d\u7f6e\n# WebStatFilter\u914d\u7f6e\uff0c\u8bf4\u660e\u8bf7\u53c2\u8003Druid Wiki\uff0c\u914d\u7f6e_\u914d\u7f6eWebStatFilter\nspring.datasource.druid.web-stat-filter.enabled= #\u662f\u5426\u542f\u7528StatFilter\u9ed8\u8ba4\u503cfalse\nspring.datasource.druid.web-stat-filter.url-pattern=\nspring.datasource.druid.web-stat-filter.exclusions=\nspring.datasource.druid.web-stat-filter.session-stat-enable=\nspring.datasource.druid.web-stat-filter.session-stat-max-count=\nspring.datasource.druid.web-stat-filter.principal-session-name=\nspring.datasource.druid.web-stat-filter.principal-cookie-name=\nspring.datasource.druid.web-stat-filter.profile-enable=\n\n# StatViewServlet\u914d\u7f6e\uff0c\u8bf4\u660e\u8bf7\u53c2\u8003Druid Wiki\uff0c\u914d\u7f6e_StatViewServlet\u914d\u7f6e\nspring.datasource.druid.stat-view-servlet.enabled= #\u662f\u5426\u542f\u7528StatViewServlet\uff08\u76d1\u63a7\u9875\u9762\uff09\u9ed8\u8ba4\u503c\u4e3afalse\uff08\u8003\u8651\u5230\u5b89\u5168\u95ee\u9898\u9ed8\u8ba4\u5e76\u672a\u542f\u52a8\uff0c\u5982\u9700\u542f\u7528\u5efa\u8bae\u8bbe\u7f6e\u5bc6\u7801\u6216\u767d\u540d\u5355\u4ee5\u4fdd\u969c\u5b89\u5168\uff09\nspring.datasource.druid.stat-view-servlet.url-pattern=\nspring.datasource.druid.stat-view-servlet.reset-enable=\nspring.datasource.druid.stat-view-servlet.login-username=\nspring.datasource.druid.stat-view-servlet.login-password=\nspring.datasource.druid.stat-view-servlet.allow=\nspring.datasource.druid.stat-view-servlet.deny=\n\n# Spring\u76d1\u63a7\u914d\u7f6e\uff0c\u8bf4\u660e\u8bf7\u53c2\u8003Druid Github Wiki\uff0c\u914d\u7f6e_Druid\u548cSpring\u5173\u8054\u76d1\u63a7\u914d\u7f6e\nspring.datasource.druid.aop-patterns= # Spring\u76d1\u63a7AOP\u5207\u5165\u70b9\uff0c\u5982x.y.z.service.*,\u914d\u7f6e\u591a\u4e2a\u82f1\u6587\u9017\u53f7\u5206\u9694\n")),(0,a.kt)("p",null,"\u4e3a\u76d1\u63a7\u800c\u751f\u7684\u6570\u636e\u5e93\u8fde\u63a5\u6c60"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<bean id="dataSource" class="com.alibaba.druid.pool.DruidDataSource" init-method="init" destroy-method="close">\n    <property name="driverClassName" value="com.mysql.jdbc.Driver" />\n    \x3c!-- \u57fa\u672c\u5c5e\u6027 URL\u3001user\u3001password --\x3e\n    <property name="url" value="jdbc:mysql://ip:port/db?autoReconnect=true&rewriteBatchedStatements=true&socketTimeout=30000&connectTimeout=3000" />\n    <property name="username" value="root" />\n    <property name="password" value="123456" />\n    \x3c!-- \u914d\u7f6e\u521d\u59cb\u5316\u5927\u5c0f\u3001\u6700\u5c0f\u3001\u6700\u5927 --\x3e\n    <property name="maxActive" value="20" />\n    <property name="initialSize" value="3" />\n    <property name="minIdle" value="3" />\n    \x3c!-- maxWait \u83b7\u53d6\u8fde\u63a5\u7b49\u5f85\u8d85\u65f6\u7684\u65f6\u95f4 --\x3e\n    <property name="maxWait" value="60000" />\n    \x3c!-- timeBetweenEvictionRunsMillis \u95f4\u9694\u591a\u4e45\u624d\u8fdb\u884c\u4e00\u6b21\u68c0\u6d4b\uff0c\u68c0\u6d4b\u9700\u8981\u5173\u95ed\u7684\u7a7a\u95f2\u8fde\u63a5\uff0c\u5355\u4f4d\u662f\u6beb\u79d2 --\x3e\n    <property name="timeBetweenEvictionRunsMillis" value="60000" />\n    \x3c!-- minEvictableIdleTimeMillis \u4e00\u4e2a\u8fde\u63a5\u5728\u6c60\u4e2d\u6700\u5c0f\u7a7a\u95f2\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2--\x3e\n    <property name="minEvictableIdleTimeMillis" value="300000" />\n    \x3c!-- \u68c0\u6d4b\u8fde\u63a5\u662f\u5426\u53ef\u7528\u7684 SQL --\x3e\n    <property name="validationQuery" value="select \'z\' from dual" />\n    \x3c!-- \u662f\u5426\u5f00\u542f\u7a7a\u95f2\u8fde\u63a5\u68c0\u67e5 --\x3e\n    <property name="testWhileIdle" value="true" />\n    \x3c!-- \u662f\u5426\u5728\u83b7\u53d6\u8fde\u63a5\u524d\u68c0\u67e5\u8fde\u63a5\u72b6\u6001 --\x3e\n    <property name="testOnBorrow" value="false" />\n    \x3c!-- \u662f\u5426\u5728\u5f52\u8fd8\u8fde\u63a5\u65f6\u68c0\u67e5\u8fde\u63a5\u72b6\u6001 --\x3e\n    <property name="testOnReturn" value="false" />\n    \x3c!-- \u662f\u5426\u5728\u56fa\u5b9a\u65f6\u95f4\u5173\u95ed\u8fde\u63a5\u3002\u589e\u52a0\u6b64\u53c2\u6570\u53ef\u4ee5\u5747\u8861\u540e\u7aef\u670d\u52a1\u8282\u70b9\u53c2\u6570 --\x3e\n    <property name="phyTimeoutMillis" value="600000" />\n    \x3c!-- \u662f\u5426\u5728\u56fa\u5b9aSQL\u4f7f\u7528\u6b21\u6570\u4e4b\u540e\u5173\u95ed\u8fde\u63a5\uff0c\u589e\u52a0\u6b64\u53c2\u6570\u53ef\u4ee5\u5747\u8861\u540e\u7aef\u670d\u52a1\u8282\u70b9\u53c2\u6570--\x3e\n    <property name="phyMaxUseCount" value="10000" />\n</bean>\n')),(0,a.kt)("p",null,"\u6700\u4f73\u5b9e\u8df5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-properties"},"spring.datasource.druid.driver-class-name=com.mysql.jdbc.Driver\nspring.datasource.druid.url=jdbc:mysql://127.0.0.1:3306/springboot_test?useUnicode=true&characterEncoding=utf8&useSSL=false\nspring.datasource.druid.username=root\nspring.datasource.druid.password=root\n# \u914d\u7f6e\u521d\u59cb\u5316\u5927\u5c0f\u3001\u6700\u5c0f\u3001\u6700\u5927\nspring.datasource.druid.initial-size=1\nspring.datasource.druid.max-active=20\nspring.datasource.druid.min-idle=2\n# \u83b7\u53d6\u8fde\u63a5\u7b49\u5f85\u8d85\u65f6\u7684\u65f6\u95f4, \u6beb\u79d2\nspring.datasource.druid.max-wait=60000\n# \u68c0\u6d4b\nspring.datasource.druid.validation-query=SELECT 'X'\n#spring.datasource.druid.validation-query-timeout=\nspring.datasource.druid.test-on-borrow=false\nspring.datasource.druid.test-on-return=false\nspring.datasource.druid.test-while-idle=true\n# \u95f4\u9694\u591a\u4e45\u624d\u8fdb\u884c\u4e00\u6b21\u68c0\u6d4b\uff0c\u68c0\u6d4b\u9700\u8981\u5173\u95ed\u7684\u7a7a\u95f2\u8fde\u63a5\uff0c\u5355\u4f4d\u662f\u6beb\u79d2\nspring.datasource.druid.time-between-eviction-runs-millis=60000\n# \u4e00\u4e2a\u8fde\u63a5\u5728\u6c60\u4e2d\u6700\u5c0f\u751f\u5b58\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u662f\u6beb\u79d2\nspring.datasource.druid.min-evictable-idle-time-millis=300000\n#spring.datasource.druid.max-evictable-idle-time-millis=\n# \u6253\u5f00PSCache\uff0c\u5e76\u4e14\u6307\u5b9a\u6bcf\u4e2a\u8fde\u63a5\u4e0aPSCache\u7684\u5927\u5c0f\n#spring.datasource.druid.pool-prepared-statements=true\n#spring.datasource.druid.max-pool-prepared-statement-per-connection-size=\nspring.datasource.druid.filter.stat.merge-sql=true\nspring.datasource.druid.filter.stat.log-slow-sql=true\nspring.datasource.druid.filter.stat.slow-sql-millis=5000\n#spring.datasource.druid.filters= #\u914d\u7f6e\u591a\u4e2a\u82f1\u6587\u9017\u53f7\u5206\u9694\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u901a\u5e38\u6765\u8bf4\uff0c\u53ea\u9700\u8981\u4fee\u6539initialSize\u3001minIdle\u3001maxActive"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u7528Oracle\uff0c\u5219\u628apoolPreparedStatements\u914d\u7f6e\u4e3atrue\uff0cmysql\u53ef\u4ee5\u914d\u7f6e\u4e3afalse\u3002\u5206\u5e93\u5206\u8868\u8f83\u591a\u7684\u6570\u636e\u5e93\uff0c\u5efa\u8bae\u914d\u7f6e\u4e3afalse\u3002"),(0,a.kt)("li",{parentName:"ol"},"removeabandoned\u4e0d\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u6253\u5f00"),(0,a.kt)("li",{parentName:"ol"},"testOnBorrow\u5efa\u8bae\u914d\u7f6e\u4e3atrue,\u9632\u6b62\u53d6\u5230\u7684\u8fde\u63a5\u4e0d\u53ef\u7528\u3002\u4f46\u4f1a\u6d88\u8017\u6027\u80fd")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4467],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>c});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function E(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),s=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=E(e,["components","mdxType","originalType","parentName"]),u=s(t),c=r,p=u["".concat(o,".").concat(c)]||u[c]||m[c]||l;return t?a.createElement(p,i(i({ref:n},d),{},{components:t})):a.createElement(p,i({ref:n},d))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=u;var E={};for(var o in n)hasOwnProperty.call(n,o)&&(E[o]=n[o]);E.originalType=e,E.mdxType="string"==typeof e?e:r,i[1]=E;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1661:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>E,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const l={title:"MySQL\u8bed\u6cd5\u57fa\u7840-\u64cd\u4f5c\u7bc7",description:"MySQL\u8bed\u6cd5\u57fa\u7840-\u64cd\u4f5c\u7bc7",slug:"syntax-operate",sidebar_position:1,keywords:["MySQL"],tags:["MySQL"],draft:!1,toc_min_heading_level:3,toc_max_heading_level:5,hide_table_of_contents:!1,last_update:{date:"2023-04-03 21:42",author:"Hans"}},i=void 0,E={unversionedId:"mysql/MySQL\u8bed\u6cd5\u57fa\u7840-\u64cd\u4f5c\u7bc7",id:"mysql/MySQL\u8bed\u6cd5\u57fa\u7840-\u64cd\u4f5c\u7bc7",title:"MySQL\u8bed\u6cd5\u57fa\u7840-\u64cd\u4f5c\u7bc7",description:"MySQL\u8bed\u6cd5\u57fa\u7840-\u64cd\u4f5c\u7bc7",source:"@site/docs/02.mysql/01.MySQL\u8bed\u6cd5\u57fa\u7840-\u64cd\u4f5c\u7bc7.md",sourceDirName:"02.mysql",slug:"/mysql/syntax-operate",permalink:"/docs/mysql/syntax-operate",draft:!1,tags:[{label:"MySQL",permalink:"/docs/tags/my-sql"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1680529320,formattedLastUpdatedAt:"2023\u5e744\u67083\u65e5",sidebarPosition:1,frontMatter:{title:"MySQL\u8bed\u6cd5\u57fa\u7840-\u64cd\u4f5c\u7bc7",description:"MySQL\u8bed\u6cd5\u57fa\u7840-\u64cd\u4f5c\u7bc7",slug:"syntax-operate",sidebar_position:1,keywords:["MySQL"],tags:["MySQL"],draft:!1,toc_min_heading_level:3,toc_max_heading_level:5,hide_table_of_contents:!1,last_update:{date:"2023-04-03 21:42",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"MySQL",permalink:"/docs/category/mysql"},next:{title:"MySQL\u8bed\u6cd5\u57fa\u7840-\u7ba1\u7406\u7bc7",permalink:"/docs/mysql/syntax-admin"}},o={},s=[{value:"\u64cd\u4f5c\u7bc7",id:"\u64cd\u4f5c\u7bc7",level:2},{value:"\u6570\u636e\u5e93",id:"\u6570\u636e\u5e93",level:3},{value:"\u521b\u5efa\u5e93",id:"\u521b\u5efa\u5e93",level:4},{value:"\u5220\u9664\u5e93",id:"\u5220\u9664\u5e93",level:4},{value:"\u6570\u636e\u8868",id:"\u6570\u636e\u8868",level:3},{value:"\u521b\u5efa\u8868",id:"\u521b\u5efa\u8868",level:4},{value:"\u5220\u9664\u8868",id:"\u5220\u9664\u8868",level:4},{value:"\u6e05\u7a7a\u8868",id:"\u6e05\u7a7a\u8868",level:4},{value:"\u4fee\u6539\u8868",id:"\u4fee\u6539\u8868",level:4},{value:"\u590d\u5236\u8868",id:"\u590d\u5236\u8868",level:4},{value:"\u67e5\u8be2\u8868\u5b57\u6bb5\u540d\u53ca\u6ce8\u91ca",id:"\u67e5\u8be2\u8868\u5b57\u6bb5\u540d\u53ca\u6ce8\u91ca",level:4},{value:"\u8868\u5b57\u6bb5",id:"\u8868\u5b57\u6bb5",level:3},{value:"\u589e\u52a0\u5b57\u6bb5",id:"\u589e\u52a0\u5b57\u6bb5",level:4},{value:"\u5220\u9664\u5b57\u6bb5",id:"\u5220\u9664\u5b57\u6bb5",level:4},{value:"\u4fee\u6539\u5b57\u6bb5\u5b9a\u4e49",id:"\u4fee\u6539\u5b57\u6bb5\u5b9a\u4e49",level:4},{value:"\u8868\u8bb0\u5f55",id:"\u8868\u8bb0\u5f55",level:3},{value:"\u65b0\u589e",id:"\u65b0\u589e",level:4},{value:"\u67e5\u8be2\u8bb0\u5f55",id:"\u67e5\u8be2\u8bb0\u5f55",level:4},{value:"\u66f4\u65b0\u8bb0\u5f55",id:"\u66f4\u65b0\u8bb0\u5f55",level:4},{value:"\u5220\u9664\u8bb0\u5f55",id:"\u5220\u9664\u8bb0\u5f55",level:4},{value:"@ rownum\u67e5\u8be2\u8bb0\u5f55\u5728\u5f53\u524d\u7ed3\u679c\u96c6\u7684\u884c\u53f7",id:"-rownum\u67e5\u8be2\u8bb0\u5f55\u5728\u5f53\u524d\u7ed3\u679c\u96c6\u7684\u884c\u53f7",level:4},{value:"\u7d22\u5f15\u3001\u5916\u952e",id:"\u7d22\u5f15\u5916\u952e",level:3},{value:"\u7d22\u5f15",id:"\u7d22\u5f15",level:4},{value:"\u5916\u952e",id:"\u5916\u952e",level:4},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:3},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:4},{value:"\u5b58\u50a8\u8fc7\u7a0b",id:"\u5b58\u50a8\u8fc7\u7a0b",level:4},{value:"\u89e6\u53d1\u5668",id:"\u89e6\u53d1\u5668",level:4},{value:"\u5b9a\u65f6\u4efb\u52a1",id:"\u5b9a\u65f6\u4efb\u52a1",level:4},{value:"\u89c6\u56fe",id:"\u89c6\u56fe",level:4},{value:"FQA",id:"fqa",level:2},{value:"<code>count(1)\u3001count(*)\u3001count(\u5217\u540d)</code> \u7684\u533a\u522b",id:"count1countcount\u5217\u540d-\u7684\u533a\u522b",level:4},{value:"\u6570\u636e\u5e93\u5b57\u7b26\u96c6",id:"\u6570\u636e\u5e93\u5b57\u7b26\u96c6",level:4}],d={toc:s};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4ecb\u7ecdMySQL\u57fa\u7840\u8bed\u6cd5\uff0c\u4ee5\u53ca\u4e00\u4e9b\u793a\u4f8b\uff0c\u57fa\u4e8eMySQL 5.7\u7248\u672c\u3002"),(0,r.kt)("p",null,"\u5b98\u65b9\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/sql-statements.html"},"https://dev.mysql.com/doc/refman/5.7/en/sql-statements.html")),(0,r.kt)("h2",{id:"\u64cd\u4f5c\u7bc7"},"\u64cd\u4f5c\u7bc7"),(0,r.kt)("h3",{id:"\u6570\u636e\u5e93"},"\u6570\u636e\u5e93"),(0,r.kt)("h4",{id:"\u521b\u5efa\u5e93"},"\u521b\u5efa\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:"\u521b\u5efa","\u521b\u5efa":!0},"-- \u521b\u5efa\nCREATE {DATABASE | SCHEMA} [IF NOT EXISTS] db_name\n    [create_option] ...\n\ncreate_option: [DEFAULT] {\n    CHARACTER SET [=] charset_name\n  | COLLATE [=] collation_name\n}\n\n-- \u521b\u5efa\u793a\u4f8b\nCREATE DATABASE mydb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\n")),(0,r.kt)("h4",{id:"\u5220\u9664\u5e93"},"\u5220\u9664\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u5220\u9664\nDROP {DATABASE | SCHEMA} [IF EXISTS] db_name;\n\n-- \u793a\u4f8b\nDROP DATABASE IF EXISTS mydb;\n")),(0,r.kt)("h3",{id:"\u6570\u636e\u8868"},"\u6570\u636e\u8868"),(0,r.kt)("h4",{id:"\u521b\u5efa\u8868"},"\u521b\u5efa\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"--\u521b\u5efa\u8bed\u6cd5\nCREATE [TEMPORARY] TABLE [IF NOT EXISTS] tbl_name\n    (create_definition,...)\n    [table_options]\n    [partition_options]\n\ncreate_definition: {\n    col_name column_definition\n  | {INDEX | KEY} [index_name] [index_type] (key_part,...)\n      [index_option] ...\n  | {FULLTEXT | SPATIAL} [INDEX | KEY] [index_name] (key_part,...)\n      [index_option] ...\n  | [CONSTRAINT [symbol]] PRIMARY KEY\n      [index_type] (key_part,...)\n      [index_option] ...\n  | [CONSTRAINT [symbol]] UNIQUE [INDEX | KEY]\n      [index_name] [index_type] (key_part,...)\n      [index_option] ...\n  | [CONSTRAINT [symbol]] FOREIGN KEY\n      [index_name] (col_name,...)\n      reference_definition\n  | CHECK (expr)\n}\n\ncolumn_definition: {\n    data_type [NOT NULL | NULL] [DEFAULT default_value]\n      [AUTO_INCREMENT] [UNIQUE [KEY]] [[PRIMARY] KEY]\n      [COMMENT 'string']\n      [COLLATE collation_name]\n      [COLUMN_FORMAT {FIXED | DYNAMIC | DEFAULT}]\n      [STORAGE {DISK | MEMORY}]\n      [reference_definition]\n  | data_type\n      [COLLATE collation_name]\n      [GENERATED ALWAYS] AS (expr)\n      [VIRTUAL | STORED] [NOT NULL | NULL]\n      [UNIQUE [KEY]] [[PRIMARY] KEY]\n      [COMMENT 'string']\n      [reference_definition]\n}\n\n-- \u521b\u5efa\u793a\u4f8b\nCREATE TABLE `t_product`  (\n  `id` bigint UNSIGNED NOT NULL COMMENT '\u4e3b\u952eID',\n  `model` varchar(64) NOT NULL COMMENT '\u4ea7\u54c1\u578b\u53f7',\n  `name` varchar(64) NOT NULL COMMENT '\u4ea7\u54c1\u540d\u79f0',\n  `icon` varchar(128) NULL COMMENT '\u4ea7\u54c1logo\u5730\u5740',\n  `create_time` bigint UNSIGNED NOT NULL COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `create_by` varchar(64) NULL COMMENT '\u521b\u5efa\u4eba',\n  `update_time` bigint UNSIGNED NULL COMMENT '\u66f4\u65b0\u65f6\u95f4',\n  `update_by` varchar(64) NULL COMMENT '\u66f4\u65b0\u4eba',\n  `update_version` int UNSIGNED NOT NULL DEFAULT 0 COMMENT '\u4e50\u89c2\u9501',\n  PRIMARY KEY (`id`),\n  UNIQUE INDEX `uk_model`(`model`) USING BTREE COMMENT '\u4ea7\u54c1\u578b\u53f7'\n) ENGINE = InnoDB CHARACTER SET = utf8mb4 COMMENT = '\u4ea7\u54c1\u8868';\n\n-- \u5982\u679c\u8003\u8651\u4f7f\u7528timestamp\nCREATE TABLE `t_example` (\n  `id` bigint UNSIGNED NOT NULL COMMENT '\u4e3b\u952eID',\n  `name` varchar(64) NOT NULL COMMENT '\u4ea7\u54c1\u540d\u79f0',\n  `createtime` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '\u521b\u5efa\u65f6\u95f4',\n  `updatetime` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '\u4fee\u6539\u65f6\u95f4',\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;\n")),(0,r.kt)("p",null,"\u521b\u5efa\u5206\u533a\u8868: [","[MySQL\u5206\u533a\u8868]","]"),(0,r.kt)("admonition",{title:"\u5efa\u8868\u89c4\u8303",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"-- Normal Format, NF"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"- \u6bcf\u4e2a\u8868\u4fdd\u5b58\u4e00\u4e2a\u5b9e\u4f53\u4fe1\u606f\n- \u6bcf\u4e2a\u5177\u6709\u4e00\u4e2aID\u5b57\u6bb5\u4f5c\u4e3a\u4e3b\u952e\n- ID\u4e3b\u952e + \u539f\u5b50\u8868\n")),(0,r.kt)("p",{parentName:"admonition"},"-- 1NF, \u7b2c\u4e00\u8303\u5f0f\n\u5b57\u6bb5\u4e0d\u80fd\u518d\u5206\uff0c\u5c31\u6ee1\u8db3\u7b2c\u4e00\u8303\u5f0f\u3002\n-- 2NF, \u7b2c\u4e8c\u8303\u5f0f\n\u6ee1\u8db3\u7b2c\u4e00\u8303\u5f0f\u7684\u524d\u63d0\u4e0b\uff0c\u4e0d\u80fd\u51fa\u73b0\u90e8\u5206\u4f9d\u8d56\u3002\n\u6d88\u9664\u7b26\u5408\u4e3b\u952e\u5c31\u53ef\u4ee5\u907f\u514d\u90e8\u5206\u4f9d\u8d56\u3002\u589e\u52a0\u5355\u5217\u5173\u952e\u5b57\u3002\n-- 3NF, \u7b2c\u4e09\u8303\u5f0f\n\u6ee1\u8db3\u7b2c\u4e8c\u8303\u5f0f\u7684\u524d\u63d0\u4e0b\uff0c\u4e0d\u80fd\u51fa\u73b0\u4f20\u9012\u4f9d\u8d56\u3002\n\u67d0\u4e2a\u5b57\u6bb5\u4f9d\u8d56\u4e8e\u4e3b\u952e\uff0c\u800c\u6709\u5176\u4ed6\u5b57\u6bb5\u4f9d\u8d56\u4e8e\u8be5\u5b57\u6bb5\u3002\u8fd9\u5c31\u662f\u4f20\u9012\u4f9d\u8d56\u3002\n\u5c06\u4e00\u4e2a\u5b9e\u4f53\u4fe1\u606f\u7684\u6570\u636e\u653e\u5728\u4e00\u4e2a\u8868\u5185\u5b9e\u73b0\u3002")),(0,r.kt)("h4",{id:"\u5220\u9664\u8868"},"\u5220\u9664\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u8bed\u6cd5\nDROP [TEMPORARY] TABLE [IF EXISTS]\n    tbl_name [, tbl_name] ...\n    [RESTRICT | CASCADE]\n\n-- \u793a\u4f8b\nDROP TABLE IF EXISTS `t_example`;\n\n-- \u6e05\u7a7a\u8868\nTRUNCATE [TABLE] \u8868\u540d\n\n-- \u5220\u9664\u6570\u636e\u5e93\u4e2d\u6240\u6709\u8868\nSELECT CONCAT('DROP TABLE ', TABLE_NAME, ';') FROM information_schema.`TABLES` WHERE table_schema = 'dbname'\n")),(0,r.kt)("h4",{id:"\u6e05\u7a7a\u8868"},"\u6e05\u7a7a\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u8bed\u6cd5\nTRUNCATE [TABLE] tbl_name\n\n-- \u793a\u4f8b\nTRUNCATE TABLE t_example;\n")),(0,r.kt)("h4",{id:"\u4fee\u6539\u8868"},"\u4fee\u6539\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u8bed\u6cd5\nALTER TABLE tbl_name\n    [alter_option [, alter_option] ...]\n    [partition_options]\n\n-- \u4fee\u6539\u8868\u672c\u8eab\u5c5e\u6027\nALTER TABLE \u8868\u540d \u8868\u7684\u9009\u9879\neg: ALTER TABLE \u8868\u540d ENGINE=MYISAM;\n\n-- \u4fee\u6539\u8868\u540d\nALTER TABLE \u65e7\u8868\u540d rename as \u65b0\u8868\u540d\nRENAME TABLE \u539f\u8868\u540d TO \u5e93\u540d.\u8868\u540d\n\n-- \u4fee\u6539\u8868\u5b57\u6bb5\nALTER TABLE \u8868\u540d \u64cd\u4f5c\u540d\n    -- \u64cd\u4f5c\u540d\n    ADD[ COLUMN] \u5b57\u6bb5\u5b9a\u4e49       -- \u589e\u52a0\u5b57\u6bb5\n        AFTER \u5b57\u6bb5\u540d          -- \u8868\u793a\u589e\u52a0\u5728\u8be5\u5b57\u6bb5\u540d\u540e\u9762\n        FIRST               -- \u8868\u793a\u589e\u52a0\u5728\u7b2c\u4e00\u4e2a\n    ADD PRIMARY KEY(\u5b57\u6bb5\u540d)   -- \u521b\u5efa\u4e3b\u952e\n    ADD UNIQUE [\u7d22\u5f15\u540d] (\u5b57\u6bb5\u540d)-- \u521b\u5efa\u552f\u4e00\u7d22\u5f15\n    ADD INDEX [\u7d22\u5f15\u540d] (\u5b57\u6bb5\u540d) -- \u521b\u5efa\u666e\u901a\u7d22\u5f15\n    DROP[ COLUMN] \u5b57\u6bb5\u540d      -- \u5220\u9664\u5b57\u6bb5\n    MODIFY[ COLUMN] \u5b57\u6bb5\u540d \u5b57\u6bb5\u5c5e\u6027     -- \u652f\u6301\u5bf9\u5b57\u6bb5\u5c5e\u6027\u8fdb\u884c\u4fee\u6539\uff0c\u4e0d\u80fd\u4fee\u6539\u5b57\u6bb5\u540d(\u6240\u6709\u539f\u6709\u5c5e\u6027\u4e5f\u9700\u5199\u4e0a)\n    CHANGE[ COLUMN] \u539f\u5b57\u6bb5\u540d \u65b0\u5b57\u6bb5\u540d \u5b57\u6bb5\u5c5e\u6027      -- \u652f\u6301\u5bf9\u5b57\u6bb5\u540d\u4fee\u6539\n    DROP PRIMARY KEY    -- \u5220\u9664\u4e3b\u952e(\u5220\u9664\u4e3b\u952e\u524d\u9700\u5220\u9664\u5176AUTO_INCREMENT\u5c5e\u6027)\n    DROP INDEX \u7d22\u5f15\u540d -- \u5220\u9664\u7d22\u5f15\n    DROP FOREIGN KEY \u5916\u952e    -- \u5220\u9664\u5916\u952e\n")),(0,r.kt)("h4",{id:"\u590d\u5236\u8868"},"\u590d\u5236\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u4ec5\u8868\u7ed3\u6784\nCREATE TABLE \u8868\u540d LIKE \u8981\u590d\u5236\u7684\u8868\u540d\n\n-- \u8868\u7ed3\u6784\u548c\u6570\u636e\nCREATE TABLE \u8868\u540d [AS] SELECT * FROM \u8981\u590d\u5236\u7684\u8868\u540d\nINSERT INTO `t_tempupdatedata` SELECT * FROM `t_tempupdatedata_recycle`\n")),(0,r.kt)("h4",{id:"\u67e5\u8be2\u8868\u5b57\u6bb5\u540d\u53ca\u6ce8\u91ca"},"\u67e5\u8be2\u8868\u5b57\u6bb5\u540d\u53ca\u6ce8\u91ca"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT COLUMN_NAME,column_comment,data_type FROM INFORMATION_SCHEMA.Columns WHERE table_name='tablename' AND table_schema='dbname';\n")),(0,r.kt)("h3",{id:"\u8868\u5b57\u6bb5"},"\u8868\u5b57\u6bb5"),(0,r.kt)("h4",{id:"\u589e\u52a0\u5b57\u6bb5"},"\u589e\u52a0\u5b57\u6bb5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"alter table \u8868\u540d add \u5b57\u6bb5\u540d \u5217\u7c7b\u578b [\u5c5e\u6027]\n\n-- \u793a\u4f8b\nALTER TABLE t_app ADD COLUMN `app_type` VARCHAR(20) NOT NULL DEFAULT 'NORMAL' COMMENT '\u5e94\u7528\u7c7b\u578b' AFTER `app_name`;\n\n-- \u540c\u65f6\u589e\u52a0\u591a\u5217\nALTER TABLE `t_user`\nADD COLUMN `status` TINYINT(1)\xa0\xa0DEFAULT 0 COMMENT '\u72b6\u6001' AFTER `id`,\nADD COLUMN `password` VARCHAR(20)\xa0NOT NULL COMMENT '\u7528\u6237\u5bc6\u7801' AFTER `name`;\n")),(0,r.kt)("h4",{id:"\u5220\u9664\u5b57\u6bb5"},"\u5220\u9664\u5b57\u6bb5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u8bed\u6cd5\nALTER TABLE \u8868\u540d DROP COLUMN \u5b57\u6bb5\u540d\n\n-- \u793a\u4f8b\nALTER TABLE t_user DROP COLUMN `remark`;\n")),(0,r.kt)("h4",{id:"\u4fee\u6539\u5b57\u6bb5\u5b9a\u4e49"},"\u4fee\u6539\u5b57\u6bb5\u5b9a\u4e49"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u4fee\u6539\u8868\u5b57\u6bb5\nALTER TABLE t_user MODIFY COLUMN `role` varchar(32) NOT NULL COMMENT '\u89d2\u8272';\n\n-- \u4fee\u6539\u81ea\u589e\u957f\u503c\nSELECT AUTO_INCREMENT FROM information_schema.`TABLES` WHERE table_schema='oilset' AND table_name = 'sys_config';\nALTER TABLE sys_config AUTO_INCREMENT = 18\n")),(0,r.kt)("h3",{id:"\u8868\u8bb0\u5f55"},"\u8868\u8bb0\u5f55"),(0,r.kt)("h4",{id:"\u65b0\u589e"},"\u65b0\u589e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT [INTO] \u8868\u540d [(\u5b57\u6bb5\u5217\u8868)] VALUES (\u503c\u5217\u8868)[, (\u503c\u5217\u8868), ...]\n\ninsert into emp (name,lastname,dept) values('new name','new last name','Accounts');\n\ninsert into emp (id,name,lastname,dept) values('key that already exists', 'new name','new last name','Accounts')\non duplicate KEY UPDATE name='default name', lastname='default last name';\n")),(0,r.kt)("h4",{id:"\u67e5\u8be2\u8bb0\u5f55"},"\u67e5\u8be2\u8bb0\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u8bed\u6cd5\nSELECT\n    [ALL | DISTINCT | DISTINCTROW ]\n    [HIGH_PRIORITY]\n    [STRAIGHT_JOIN]\n    [SQL_SMALL_RESULT] [SQL_BIG_RESULT] [SQL_BUFFER_RESULT]\n    [SQL_CACHE | SQL_NO_CACHE] [SQL_CALC_FOUND_ROWS]\n    select_expr [, select_expr] ...\n    [into_option]\n    [FROM table_references\n      [PARTITION partition_list]]\n    [WHERE where_condition]\n    [GROUP BY {col_name | expr | position}\n      [ASC | DESC], ... [WITH ROLLUP]]\n    [HAVING where_condition]\n    [ORDER BY {col_name | expr | position}\n      [ASC | DESC], ...]\n    [LIMIT {[offset,] row_count | row_count OFFSET offset}]\n    [PROCEDURE procedure_name(argument_list)]\n    [into_option]\n    [FOR UPDATE | LOCK IN SHARE MODE]\n\ninto_option: {\n    INTO OUTFILE 'file_name'\n        [CHARACTER SET charset_name]\n        export_options\n  | INTO DUMPFILE 'file_name'\n  | INTO var_name [, var_name] ...\n}\n\n-- \u793a\u4f8b\nSELECT id, model, name FROM t_product WHERE status=0 GROUP BY product_type HAVING model LIKE 'P_%' ORDER BY create_time ASC LIMIT 10;\n")),(0,r.kt)("p",null,"\u8054\u5408\u67e5\u8be2"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-XML"},"-- \u5185\u8fde\u63a5(inner join)\n    - \u9ed8\u8ba4\u5c31\u662f\u5185\u8fde\u63a5\uff0c\u53ef\u7701\u7565inner\u3002\n    - \u53ea\u6709\u6570\u636e\u5b58\u5728\u65f6\u624d\u80fd\u53d1\u9001\u8fde\u63a5\u3002\u5373\u8fde\u63a5\u7ed3\u679c\u4e0d\u80fd\u51fa\u73b0\u7a7a\u884c\u3002\n    on \u8868\u793a\u8fde\u63a5\u6761\u4ef6\u3002\u5176\u6761\u4ef6\u8868\u8fbe\u5f0f\u4e0ewhere\u7c7b\u4f3c\u3002\u4e5f\u53ef\u4ee5\u7701\u7565\u6761\u4ef6\uff08\u8868\u793a\u6761\u4ef6\u6c38\u8fdc\u4e3a\u771f\uff09\n    \u4e5f\u53ef\u7528where\u8868\u793a\u8fde\u63a5\u6761\u4ef6\u3002\n    \u8fd8\u6709 using, \u4f46\u9700\u5b57\u6bb5\u540d\u76f8\u540c\u3002using(\u5b57\u6bb5\u540d)\n\n    -- \u4ea4\u53c9\u8fde\u63a5 cross join\n        \u5373\uff0c\u6ca1\u6709\u6761\u4ef6\u7684\u5185\u8fde\u63a5\u3002\n        select * from tb1 cross join tb2;\n-- \u5916\u8fde\u63a5(outer join)\n    - \u5982\u679c\u6570\u636e\u4e0d\u5b58\u5728\uff0c\u4e5f\u4f1a\u51fa\u73b0\u5728\u8fde\u63a5\u7ed3\u679c\u4e2d\u3002\n    -- \u5de6\u5916\u8fde\u63a5 left join\n        \u5982\u679c\u6570\u636e\u4e0d\u5b58\u5728\uff0c\u5de6\u8868\u8bb0\u5f55\u4f1a\u51fa\u73b0\uff0c\u800c\u53f3\u8868\u4e3anull\u586b\u5145\n    -- \u53f3\u5916\u8fde\u63a5 right join\n        \u5982\u679c\u6570\u636e\u4e0d\u5b58\u5728\uff0c\u53f3\u8868\u8bb0\u5f55\u4f1a\u51fa\u73b0\uff0c\u800c\u5de6\u8868\u4e3anull\u586b\u5145\n")),(0,r.kt)("h4",{id:"\u66f4\u65b0\u8bb0\u5f55"},"\u66f4\u65b0\u8bb0\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"UPDATE t_task SET status='DOING' WHERE task_create_time<10000000000 AND status = 'DOING';\n\n-- \u8054\u8868\nUPDATE items,\n       (SELECT id, retail / wholesale AS markup, quantity FROM items)\n       AS discounted\n    SET items.retail = items.retail * 0.9\n    WHERE discounted.markup >= 1.3\n    AND discounted.quantity < 100\n    AND items.id = discounted.id;\n")),(0,r.kt)("h4",{id:"\u5220\u9664\u8bb0\u5f55"},"\u5220\u9664\u8bb0\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELETE FROM somelog WHERE user = 'jcole';\n\n-- \u5220\u9664\u91cd\u8981\u6570\u636e\u65f6\uff0c\u4f7f\u7528LIMIT\u53ef\u4ee5\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u907f\u514d\u8bef\u5220\u6570\u636e\nDELETE FROM t_employee WHERE id = 195 LIMIT 1;\n\n")),(0,r.kt)("h4",{id:"-rownum\u67e5\u8be2\u8bb0\u5f55\u5728\u5f53\u524d\u7ed3\u679c\u96c6\u7684\u884c\u53f7"},"@ rownum\u67e5\u8be2\u8bb0\u5f55\u5728\u5f53\u524d\u7ed3\u679c\u96c6\u7684\u884c\u53f7"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},'-- (SELECT @rownum := 0) temp \u4e3a\u4e00\u5f20\u4e34\u65f6\u8868\u3002\u884c\u53f7\u7ed3\u679c\u4ece 1 \u5f00\u59cb\nSELECT id, task_code, @rownum :=@rownum + 1 AS item FROM\n    t_task t ,\n     (SELECT @rownum := 0) temp\nWHERE\n    t.user_id = \'123\' \n    AND t.task_status IN (\'cancel\') \n    AND t.whether_delete = 0;\n\n-- Repository \u5b8c\u6210\u4ee3\u7801\uff1a\u67e5\u8be2\u5f53\u524d\u4efb\u52a1\u7684\u6392\u884c\n@Query(value = "select b.rownum from (select @rownum\\\\:=@rownum+1 as rownum,t.task_code from " +  \n        "(SELECT @rownum\\\\:=0) r , t_task t where t.user_id = ?1 and t.task_status in" +  \n        " (?2) and t.whether_delete = 0 ) b where b.task_code = ?3", nativeQuery = true)  \nInteger queryRank(String userId, List<String> status, String taskCode);\n')),(0,r.kt)("h3",{id:"\u7d22\u5f15\u5916\u952e"},"\u7d22\u5f15\u3001\u5916\u952e"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://dev.mysql.com/doc/refman/5.7/en/create-index.html"},"https://dev.mysql.com/doc/refman/5.7/en/create-index.html")),(0,r.kt)("h4",{id:"\u7d22\u5f15"},"\u7d22\u5f15"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1\u3001\u65b0\u5efa")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE [UNIQUE | FULLTEXT | SPATIAL] INDEX index_name\n    [index_type]\n    ON tbl_name (key_part,...)\n    [index_option]\n    [algorithm_option | lock_option] ...\n\nkey_part:\n    col_name [(length)] [ASC | DESC]\n\nindex_option: {\n    KEY_BLOCK_SIZE [=] value\n  | index_type\n  | WITH PARSER parser_name\n  | COMMENT 'string'\n}\n\nindex_type:\n    USING {BTREE | HASH}\n\nalgorithm_option:\n    ALGORITHM [=] {DEFAULT | INPLACE | COPY}\n\nlock_option:\n    LOCK [=] {DEFAULT | NONE | SHARED | EXCLUSIVE}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u666e\u901a\u7d22\u5f15\nALTER TABLE t_order ADD INDEX idx_orderId ( order_id );\nCREATE INDEX part_of_name ON customer (name(10));\n\n-- \u552f\u4e00\u7d22\u5f15\nCREATE UNIQUE INDEX uk_model ON t_product (model) USING BTREE COMMENT '\u4ea7\u54c1\u578b\u53f7';\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"1. PRIMARY \u4e3b\u952e\n    - \u80fd\u552f\u4e00\u6807\u8bc6\u8bb0\u5f55\u7684\u5b57\u6bb5\uff0c\u53ef\u4ee5\u4f5c\u4e3a\u4e3b\u952e\u3002\n    - \u4e00\u4e2a\u8868\u53ea\u80fd\u6709\u4e00\u4e2a\u4e3b\u952e\u3002\n    - \u4e3b\u952e\u5177\u6709\u552f\u4e00\u6027\u3002\n    - \u58f0\u660e\u5b57\u6bb5\u65f6\uff0c\u7528 primary key \u6807\u8bc6\u3002\n        \u4e5f\u53ef\u4ee5\u5728\u5b57\u6bb5\u5217\u8868\u4e4b\u540e\u58f0\u660e\n            \u4f8b\uff1acreate table tab ( id int, stu varchar(10), primary key (id));\n    - \u4e3b\u952e\u5b57\u6bb5\u7684\u503c\u4e0d\u80fd\u4e3anull\u3002\n    - \u4e3b\u952e\u53ef\u4ee5\u7531\u591a\u4e2a\u5b57\u6bb5\u5171\u540c\u7ec4\u6210\u3002\u6b64\u65f6\u9700\u8981\u5728\u5b57\u6bb5\u5217\u8868\u540e\u58f0\u660e\u7684\u65b9\u6cd5\u3002\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2\u3001\u5220\u9664")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u5220\u9664\u7d22\u5f15\nDROP INDEX index_name ON table_name\n")),(0,r.kt)("h4",{id:"\u5916\u952e"},"\u5916\u952e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"# \u65b0\u5efa\u5916\u952e\nALTER TABLE \u8868\u540d ADD CONSTRAINT FK_ID FOREIGN KEY(\u5916\u952e\u5b57\u6bb5\u540d) REFERENCES \u5916\u8868\u8868\u540d(\u4e3b\u952e\u5b57\u6bb5\u540d);\n# \u5220\u9664\u5916\u952e\nALTER TABLE \u8868\u540d DROP FOREIGN KEY \u5916\u952e\u540d;\n")),(0,r.kt)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,r.kt)("h4",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"DELIMITER $$\n\nCREATE FUNCTION `rand_string`(n INT) RETURNS VARCHAR(255)\nBEGIN\n    DECLARE chars_str VARCHAR(100) DEFAULT 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';\n    DECLARE return_str VARCHAR(255) DEFAULT '';\n    DECLARE i INT DEFAULT 0;\n    WHILE i < n DO\n        SET return_str = CONCAT(return_str,SUBSTRING(chars_str , FLOOR(1 + RAND()*62 ),1));\n        SET i = i +1;\n    END WHILE;\n    RETURN return_str;\nEND $$\n\nDELIMITER ;\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u8c03\u7528\u51fd\u6570\nSELECT rand_string(100);\n-- \u5220\u9664\u51fd\u6570\nDROP FUNCTION `rand_string`;\n")),(0,r.kt)("h4",{id:"\u5b58\u50a8\u8fc7\u7a0b"},"\u5b58\u50a8\u8fc7\u7a0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u5b9a\u4e49\ndelimiter $$\n\nCREATE PROCEDURE citycount (IN country CHAR(3), OUT cities INT)\nBEGIN\n SELECT COUNT(*) INTO cities FROM world.city\n WHERE CountryCode = country;\nEND $$\n\ndelimiter ;\n\n-- \u8c03\u7528\nCALL citycount('JPN', @cities);\nSELECT @cities;\n")),(0,r.kt)("p",null,"\u5faa\u73af\u63d2\u5165\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u521b\u5efa procedure\ndelimiter $$\ncreate procedure idata()\nbegin\n  declare i int;\n  set i=1;\n  while(i<=100000)do\n    insert into t values(i, i, i);\n    set i=i+1;\n  end while;\nend $$\n\ndelimiter ;\n\n-- \u8c03\u7528\ncall idata();\n")),(0,r.kt)("p",null,"\u53c2\u8003 [","[MySQL\u5b58\u50a8\u8fc7\u7a0b\u793a\u4f8b]","]"),(0,r.kt)("h4",{id:"\u89e6\u53d1\u5668"},"\u89e6\u53d1\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u67e5\u770b\u89e6\u53d1\nSHOW TRIGGERS;\n-- \u5220\u9664\u89e6\u53d1\u5668\nDROP TRIGGER [IF EXISTS] trigger_name;\n-- \u793a\u4f8b\nDROP TRIGGER IF EXISTS\xa0Delete_TempData_Trigger\n\n-- \u521b\u5efa\nDELIMITER $$\n\nCREATE TRIGGER `Delete_TempData_Trigger` BEFORE\nDELETE ON `t_tempupdatedata` FOR EACH ROW BEGIN\nINSERT INTO t_tempupdatedata_recycle(UID, CheckDate, InstrumentId,\xa0DataText, CreateDate, Remark) VALUES(old.UID, old.CheckDate, old.InstrumentId, old.DataText, old.CreateDate, old.Remark);\n\nEND;\n$$\n")),(0,r.kt)("p",null,"\u53c2\u8003 [","[MySQL\u89e6\u53d1\u5668\u3001\u5b9a\u65f6\u4efb\u52a1\u793a\u4f8b]","]"),(0,r.kt)("h4",{id:"\u5b9a\u65f6\u4efb\u52a1"},"\u5b9a\u65f6\u4efb\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\n-- \u67e5\u770b\u5f00\u542f\u72b6\u6001 \nSHOW GLOBAL VARIABLES like '%event_scheduler%';\n-- \u5f00\u542f \nSET GLOBAL event_scheduler = ON;\n-- \u5173\u95ed \nSET GLOBAL event_scheduler = OFF;\n\n-- CREATE\ndelimiter $$\n\nCREATE EVENT IF NOT EXISTS event_records_interval_clear\n    ON SCHEDULE\n      EVERY 1 DAY STARTS '2022-06-10 01:05:00'\n    DO\n      BEGIN\n        DECLARE v_time BIGINT(20) DEFAULT 0;\n        \n        SET v_time = (SELECT UNIX_TIMESTAMP(DATE_SUB(CURDATE(), INTERVAL 15 DAY)) * 1000);\n\n        DELETE FROM t_record WHERE create_time < v_time;\n\n       END $$\n\ndelimiter ;\n\n")),(0,r.kt)("h4",{id:"\u89c6\u56fe"},"\u89c6\u56fe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"\nDROP VIEW IF EXISTS `v_sysuser`;\n\nCREATE VIEW v_sysuser AS\n\nSELECT su.*, sr.id roleid, sr.rolename rolename, sr.RoleKey rolekey, com.CompanyName companyname, a.UserName creator, b.UserName updator FROM sys_user su\nLEFT JOIN `sys_user_role` sur ON su.ID = sur.UserId\nLEFT JOIN `sys_role` sr ON sur.UserRoleId = sr.id AND sr.isDelete = 0\nLEFT JOIN `t_company` com ON com.id = su.CompanyId AND com.IsDelete = 0\nLEFT JOIN `sys_user` a ON a.id = su.UpdateManId\nLEFT JOIN `sys_user` b ON b.id = su.UpdateManId;\n\nSELECT * FROM v_sysuser;\n\n")),(0,r.kt)("h2",{id:"fqa"},"FQA"),(0,r.kt)("h4",{id:"count1countcount\u5217\u540d-\u7684\u533a\u522b"},(0,r.kt)("inlineCode",{parentName:"h4"},"count(1)\u3001count(*)\u3001count(\u5217\u540d)")," \u7684\u533a\u522b"),(0,r.kt)("p",null,"\u6267\u884c\u7ed3\u679c\u4e0a\uff0c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count(1)"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"count(*)")," \u4f1a\u7edf\u8ba1\u8868\u4e2d\u7684\u6240\u6709\u7684\u8bb0\u5f55\u6570\uff0c\u5305\u542b\u5b57\u6bb5\u4e3anull \u7684\u8bb0\u5f55\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"count(\u5217\u540d)")," \u4f1a\u7edf\u8ba1\u8be5\u5b57\u6bb5\u5728\u8868\u4e2d\u51fa\u73b0\u7684\u6b21\u6570\uff0c\u5ffd\u7565\u5b57\u6bb5\u4e3anull \u7684\u60c5\u51b5\u3002\u5373\u4e0d\u7edf\u8ba1\u5b57\u6bb5\u4e3anull \u7684\u8bb0\u5f55\u3002")),(0,r.kt)("p",null,"\u6267\u884c\u6548\u7387\u4e0a\uff0c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5217\u540d\u4e3a\u4e3b\u952e\uff0ccount(\u5217\u540d)\u4f1a\u6bd4count(1)\u5feb"),(0,r.kt)("li",{parentName:"ul"},"\u5217\u540d\u4e0d\u4e3a\u4e3b\u952e\uff0ccount(1)\u4f1a\u6bd4count(\u5217\u540d)\u5feb"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u6709\u4e3b\u952e\uff0c\u5219 select count\uff08\u4e3b\u952e\uff09\u7684\u6267\u884c\u6548\u7387\u662f\u6700\u4f18\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u8868\u53ea\u6709\u4e00\u4e2a\u5b57\u6bb5\uff0c\u5219 ",(0,r.kt)("inlineCode",{parentName:"li"},"count\uff08*\uff09"),"\u6700\u4f18")),(0,r.kt)("h4",{id:"\u6570\u636e\u5e93\u5b57\u7b26\u96c6"},"\u6570\u636e\u5e93\u5b57\u7b26\u96c6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SHOW VARIABLES LIKE "%char%";\n')),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/hyman213/FigureBed/master/2019/10/20191028163327.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MySQL \u4e2d\u5b57\u7b26\u96c6\u76f8\u5173\u53d8\u91cf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"character_set_client\uff1a\u5ba2\u6237\u7aef\u8bf7\u6c42\u6570\u636e\u7684\u5b57\u7b26\u96c6\ncharacter_set_connection\uff1a\u4ece\u5ba2\u6237\u7aef\u63a5\u6536\u5230\u6570\u636e\uff0c\u7136\u540e\u4f20\u8f93\u7684\u5b57\u7b26\u96c6\ncharacter_set_database\uff1a\u9ed8\u8ba4\u6570\u636e\u5e93\u7684\u5b57\u7b26\u96c6\uff0c\u65e0\u8bba\u9ed8\u8ba4\u6570\u636e\u5e93\u5982\u4f55\u6539\u53d8\uff0c\u90fd\u662f\u8fd9\u4e2a\u5b57\u7b26\u96c6\uff1b\u5982\u679c\u6ca1\u6709\u9ed8\u8ba4\u6570\u636e\u5e93\uff0c\u90a3\u5c31\u4f7f\u7528 character_set_server\u6307\u5b9a\u7684\u5b57\u7b26\u96c6\uff0c\u8fd9\u4e2a\u53d8\u91cf\u5efa\u8bae\u7531\u7cfb\u7edf\u81ea\u5df1\u7ba1\u7406\uff0c\u4e0d\u8981\u4eba\u4e3a\u5b9a\u4e49\u3002\ncharacter_set_filesystem\uff1a\u628a\u64cd\u4f5c\u7cfb\u7edf\u4e0a\u7684\u6587\u4ef6\u540d\u8f6c\u5316\u6210\u6b64\u5b57\u7b26\u96c6\uff0c\u5373\u628a character_set_client\u8f6c\u6362character_set_filesystem\uff0c \u9ed8\u8ba4binary\u662f\u4e0d\u505a\u4efb\u4f55\u8f6c\u6362\u7684\ncharacter_set_results\uff1a\u7ed3\u679c\u96c6\u7684\u5b57\u7b26\u96c6\ncharacter_set_server\uff1a\u6570\u636e\u5e93\u670d\u52a1\u5668\u7684\u9ed8\u8ba4\u5b57\u7b26\u96c6\ncharacter_set_system\uff1a\u5b58\u50a8\u7cfb\u7edf\u5143\u6570\u636e\u7684\u5b57\u7b26\u96c6\uff0c\u603b\u662f utf8\uff0c\u4e0d\u9700\u8981\u8bbe\u7f6e\n")))}m.isMDXComponent=!0}}]);
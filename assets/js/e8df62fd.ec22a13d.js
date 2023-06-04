"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5285],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),i=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,y=u["".concat(d,".").concat(m)]||u[m]||p[m]||l;return n?r.createElement(y,o(o({ref:t},c),{},{components:n})):r.createElement(y,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const l={title:"MySQL\u8bed\u6cd5\u57fa\u7840-\u7ba1\u7406\u7bc7",description:"MySQL\u8bed\u6cd5\u57fa\u7840-\u7ba1\u7406\u7bc7",slug:"syntax-admin",sidebar_position:2,keywords:["MySQL"],tags:["MySQL"],draft:!1,toc_min_heading_level:3,toc_max_heading_level:5,hide_table_of_contents:!1,last_update:{date:"2023-04-04 23:01",author:"Hans"}},o=void 0,s={unversionedId:"mysql/MySQL \u8bed\u6cd5\u57fa\u7840-\u7ba1\u7406\u7bc7",id:"mysql/MySQL \u8bed\u6cd5\u57fa\u7840-\u7ba1\u7406\u7bc7",title:"MySQL\u8bed\u6cd5\u57fa\u7840-\u7ba1\u7406\u7bc7",description:"MySQL\u8bed\u6cd5\u57fa\u7840-\u7ba1\u7406\u7bc7",source:"@site/docs/02.mysql/02.MySQL \u8bed\u6cd5\u57fa\u7840-\u7ba1\u7406\u7bc7.md",sourceDirName:"02.mysql",slug:"/mysql/syntax-admin",permalink:"/docs/mysql/syntax-admin",draft:!1,tags:[{label:"MySQL",permalink:"/docs/tags/my-sql"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1680620460,formattedLastUpdatedAt:"2023\u5e744\u67084\u65e5",sidebarPosition:2,frontMatter:{title:"MySQL\u8bed\u6cd5\u57fa\u7840-\u7ba1\u7406\u7bc7",description:"MySQL\u8bed\u6cd5\u57fa\u7840-\u7ba1\u7406\u7bc7",slug:"syntax-admin",sidebar_position:2,keywords:["MySQL"],tags:["MySQL"],draft:!1,toc_min_heading_level:3,toc_max_heading_level:5,hide_table_of_contents:!1,last_update:{date:"2023-04-04 23:01",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"MySQL\u8bed\u6cd5\u57fa\u7840-\u64cd\u4f5c\u7bc7",permalink:"/docs/mysql/syntax-operate"},next:{title:"MySQL\u6570\u636e\u7c7b\u578b",permalink:"/docs/mysql/date-types"}},d={},i=[{value:"\u7ba1\u7406\u7bc7",id:"\u7ba1\u7406\u7bc7",level:2},{value:"\u8fde\u63a5\u4e0e\u65ad\u5f00\u670d\u52a1\u5668",id:"\u8fde\u63a5\u4e0e\u65ad\u5f00\u670d\u52a1\u5668",level:3},{value:"\u67e5\u8be2\u6570\u636e\u5e93\u8bbe\u7f6e/\u8fd0\u884c\u72b6\u6001",id:"\u67e5\u8be2\u6570\u636e\u5e93\u8bbe\u7f6e\u8fd0\u884c\u72b6\u6001",level:3},{value:"\u4fee\u6539\u5bc6\u7801",id:"\u4fee\u6539\u5bc6\u7801",level:3},{value:"\u6062\u590d\u4e0e\u5907\u4efd",id:"\u6062\u590d\u4e0e\u5907\u4efd",level:3},{value:"\u7528\u6237\u7ba1\u7406",id:"\u7528\u6237\u7ba1\u7406",level:3},{value:"\u65b0\u589e\u7528\u6237",id:"\u65b0\u589e\u7528\u6237",level:4},{value:"\u5220\u9664\u7528\u6237",id:"\u5220\u9664\u7528\u6237",level:4},{value:"\u6388\u6743-GRANT\u547d\u4ee4",id:"\u6388\u6743-grant\u547d\u4ee4",level:4},{value:"REVOKE",id:"revoke",level:4}],c={toc:i};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u7ba1\u7406\u7bc7"},"\u7ba1\u7406\u7bc7"),(0,a.kt)("h3",{id:"\u8fde\u63a5\u4e0e\u65ad\u5f00\u670d\u52a1\u5668"},"\u8fde\u63a5\u4e0e\u65ad\u5f00\u670d\u52a1\u5668"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"/* \u8fde\u63a5\u4e0e\u65ad\u5f00\u670d\u52a1\u5668 */\nmysql -h \u5730\u5740 -P \u7aef\u53e3 -u \u7528\u6237\u540d -p \u5bc6\u7801\n")),(0,a.kt)("h3",{id:"\u67e5\u8be2\u6570\u636e\u5e93\u8bbe\u7f6e\u8fd0\u884c\u72b6\u6001"},"\u67e5\u8be2\u6570\u636e\u5e93\u8bbe\u7f6e/\u8fd0\u884c\u72b6\u6001"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"SHOW PROCESSLIST -- \u663e\u793a\u54ea\u4e9b\u7ebf\u7a0b\u6b63\u5728\u8fd0\u884c\nSHOW VARIABLES -- \u663e\u793a\u7cfb\u7edf\u53d8\u91cf\u4fe1\u606f\n\nSHOW VARIABLES LIKE 'character_set_%'   -- \u67e5\u770b\u6240\u6709\u5b57\u7b26\u96c6\u7f16\u7801\u9879\n")),(0,a.kt)("h3",{id:"\u4fee\u6539\u5bc6\u7801"},"\u4fee\u6539\u5bc6\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysqladmin -u\u7528\u6237\u540d -p\u65e7\u5bc6\u7801 password \u65b0\u5bc6\u7801\n")),(0,a.kt)("h3",{id:"\u6062\u590d\u4e0e\u5907\u4efd"},"\u6062\u590d\u4e0e\u5907\u4efd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"-- \u5907\u4efd\nmysqldump -h host -u root -p dbname >dbname_backup.sql\n-- \u6062\u590d\nmysqldump -h host -u root -p dbname < dbname_backup.sql\n")),(0,a.kt)("h3",{id:"\u7528\u6237\u7ba1\u7406"},"\u7528\u6237\u7ba1\u7406"),(0,a.kt)("h4",{id:"\u65b0\u589e\u7528\u6237"},"\u65b0\u589e\u7528\u6237"),(0,a.kt)("p",null,"MySQL8.0 \u521b\u5efa\u7528\u6237\u53ca\u6388\u6743: ",(0,a.kt)("a",{parentName:"p",href:"https://blog.csdn.net/baidu_25986059/article/details/104042858"},"https://blog.csdn.net/baidu_25986059/article/details/104042858"),"\n\u5bc6\u7801\u5f3a\u5ea6\u9700\u8981\u5927\u5c0f\u5199\u53ca\u6570\u5b57\u5b57\u6bcd\uff0c\u5426\u5219\u4f1a\u62a5\u5bc6\u7801\u5f3a\u5ea6\u4e0d\u7b26\u5408"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE USER '\u7528\u6237'@'\u4e3b\u673a' IDENTIFIED BY '\u5bc6\u7801';\ngrant \u6743\u9650 on \u6743\u9650\u8303\u56f4\xa0\xa0to \u7528\u6237\xa0\xa0identified\xa0\xa0by '\u5bc6\u7801'\n\n# \u4f8b1: \u7528\u6237\u53ea\u80fd\u901a\u8fc710.0.0.0/24\u7f51\u6bb5\u8bbf\u95ee\uff0c\u7528\u6237\u540d\u4e3aclsn \u5bc6\u7801\u4e3a123; \u8fd9\u4e2a\u7528\u6237\u53ea\u80fd\u5bf9clsn\u6570\u636e\u5e93\u4e0b\u7684\u5bf9\u8c61\u8fdb\u884c\u589einsert create\u3001\u6539update \u3001\u67e5select\uff1b\ngrant select,create,insert,update on clsn.* to 'clsn'@'10.0.0.%' identified by '123';\n\n# \u4f8b2: \u6388\u6743\u6240\u6709\u6743\u9650\u7ed9clsn\u7528\u6237\nGRANT ALL ON *.* TO 'clsn'@'localhost';\n\n")),(0,a.kt)("h4",{id:"\u5220\u9664\u7528\u6237"},"\u5220\u9664\u7528\u6237"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"\ndrop user 'user'@'\u4e3b\u673a\u57df'\n\n")),(0,a.kt)("h4",{id:"\u6388\u6743-grant\u547d\u4ee4"},"\u6388\u6743-GRANT\u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"# \u67e5\u770b\u7528\u6237\u6743\u9650\uff1a\u5f53\u524d\u7528\u6237/\u5176\u4ed6\u7528\u6237\nshow grants;\nSHOW GRANTS FOR root@localhost;\nSELECT * FROM mysql.`user` WHERE USER\xa0\xa0= 'ctrmodel';\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/hyman213/FigureBed/master/2019/10/20191028160402.png",alt:null})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"GRANT\u547d\u4ee4")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"# GRANT\u547d\u4ee4\ngrant \u6743\u9650 on \u6570\u636e\u5e93\u5bf9\u8c61 to \u7528\u6237\n\ngrant \u666e\u901a\u6570\u636e\u7528\u6237\uff0c\u67e5\u8be2\u3001\u63d2\u5165\u3001\u66f4\u65b0\u3001\u5220\u9664 \u6570\u636e\u5e93\u4e2d\u6240\u6709\u8868\u6570\u636e\u7684\u6743\u5229\ngrant select, insert, update, delete on testdb.* to common_user@'%'\n\ngrant\xa0\u6570\u636e\u5e93\u5f00\u53d1\u4eba\u5458 \u521b\u5efa\u3001\u4fee\u6539\u3001\u5220\u9664 MySQL \u6570\u636e\u8868\u7ed3\u6784\u6743\u9650\u3002\ngrant create on testdb.* to developer@'192.168.0.%';\ngrant alter on testdb.* to developer@'192.168.0.%';\ngrant drop on testdb.* to developer@'192.168.0.%';\n\ngrant \u64cd\u4f5c MySQL \u5916\u952e\u6743\u9650\ngrant references on testdb.* to developer@'192.168.0.%';\ngrant \u64cd\u4f5c MySQL \u7d22\u5f15\u6743\u9650\ngrant index on testdb.* to developer@'192.168.0.%';\ngrant \u64cd\u4f5c MySQL \u89c6\u56fe\u3001\u67e5\u770b\u89c6\u56fe\u6e90\u4ee3\u7801 \u6743\u9650\u3002\ngrant create view on testdb.* to developer@'192.168.0.%';\ngrant show view on testdb.* to developer@'192.168.0.%';\n\ngrant \u64cd\u4f5c MySQL \u5b58\u50a8\u8fc7\u7a0b\u3001\u51fd\u6570 \u6743\u9650\u3002\ngrant create routine on testdb.* to developer@'192.168.0.%'; -- now, can show procedure status\ngrant alter routine on testdb.* to developer@'192.168.0.%'; -- now, you can drop a procedure\ngrant execute on testdb.* to developer@'192.168.0.%';\n\ngrant \u666e\u901a DBA \u7ba1\u7406\u67d0\u4e2a MySQL \u6570\u636e\u5e93\u7684\u6743\u9650\ngrant all privileges on testdb to dba@'localhost'\n\u5176\u4e2d\uff0c\u5173\u952e\u5b57 \u201cprivileges\u201d \u53ef\u4ee5\u7701\u7565\u3002\n\ngrant \u9ad8\u7ea7 DBA \u7ba1\u7406 MySQL \u4e2d\u6240\u6709\u6570\u636e\u5e93\u7684\u6743\u9650\ngrant all on *.* to dba@'localhost'\n\n\u64a4\u9500\u6743\u9650\uff08revoke \u8ddf grant \u7684\u8bed\u6cd5\u5dee\u4e0d\u591a\uff0c\u53ea\u9700\u8981\u628a\u5173\u952e\u5b57 \u201cto\u201d \u6362\u6210 \u201cfrom\u201d \u5373\u53ef\uff09\nrevoke all on *.* from dba@localhost;\n")),(0,a.kt)("h4",{id:"revoke"},"REVOKE"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> revoke all on *.* from root@'%';\nQuery OK, 0 rows affected (0.00 sec)\n\nmysql> flush privileges;\nQuery OK, 0 rows affected (0.00 sec)\n\n# \u67e5\u770b\u5f53\u524d\u6388\u6743\u7528\u6237, \u5220\u9664\u7528\u6237\nmysql> use mysql;\nDatabase changed\n\nmysql> select  User,authentication_string,Host from user;\n\nmysql> delete from user where User='root' AND Host = '%';\n\n")))}p.isMDXComponent=!0}}]);
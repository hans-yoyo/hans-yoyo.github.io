"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1247],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>s});var a=n(7294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=a.createContext({}),m=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=m(t.components);return a.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,d=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=m(n),s=l,N=k["".concat(d,".").concat(s)]||k[s]||o[s]||r;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function s(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=k;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3623:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var a=n(7462),l=(n(7294),n(3905));const r={title:"EXPLAIN \u547d\u4ee4\u8be6\u89e3",description:"EXPLAIN \u547d\u4ee4\u8be6\u89e3",slug:"explain-cmd",sidebar_position:10,keywords:["MySQL"],tags:["MySQL"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2023-04-16 11:26",author:"Hans"}},i=void 0,p={unversionedId:"mysql/EXPLAIN \u547d\u4ee4\u8be6\u89e3.mdx",id:"mysql/EXPLAIN \u547d\u4ee4\u8be6\u89e3.mdx",title:"EXPLAIN \u547d\u4ee4\u8be6\u89e3",description:"EXPLAIN \u547d\u4ee4\u8be6\u89e3",source:"@site/docs/02.mysql/10.EXPLAIN \u547d\u4ee4\u8be6\u89e3.mdx.md",sourceDirName:"02.mysql",slug:"/mysql/explain-cmd",permalink:"/docs/mysql/explain-cmd",draft:!1,tags:[{label:"MySQL",permalink:"/docs/tags/my-sql"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1681615560,formattedLastUpdatedAt:"2023\u5e744\u670816\u65e5",sidebarPosition:10,frontMatter:{title:"EXPLAIN \u547d\u4ee4\u8be6\u89e3",description:"EXPLAIN \u547d\u4ee4\u8be6\u89e3",slug:"explain-cmd",sidebar_position:10,keywords:["MySQL"],tags:["MySQL"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2023-04-16 11:26",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"MySQL MVCC \u591a\u7248\u672c\u5e76\u53d1\u63a7\u5236\u539f\u7406",permalink:"/docs/mysql/mvcc"},next:{title:"\u6570\u636e\u5e93\u7d22\u5f15\u5931\u6548\u7684\u51e0\u79cd\u573a\u666f",permalink:"/docs/mysql/\u6570\u636e\u5e93\u7d22\u5f15\u5931\u6548\u7684\u51e0\u79cd\u573a\u666f"}},d={},m=[{value:"EXPLAIN Output Columns",id:"explain-output-columns",level:2},{value:"id",id:"id",level:3},{value:"select_type",id:"select_type",level:3},{value:"table",id:"table",level:3},{value:"type",id:"type",level:3},{value:"possible_keys",id:"possible_keys",level:3},{value:"key",id:"key",level:3},{value:"key_len",id:"key_len",level:3},{value:"ref",id:"ref",level:3},{value:"rows",id:"rows",level:3},{value:"Extra",id:"extra",level:3}],u={toc:m};function o(t){let{components:e,...r}=t;return(0,l.kt)("wrapper",(0,a.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"EXPLAIN \u6267\u884c\u793a\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"mysql> EXPLAIN SELECT * FROM t_file WHERE file_id=6865899292144099329 ORDER BY create_time DESC limit 1;\n+----+-------------+---------------+------------+------+---------------+-------------+---------+-------+------+----------+---------------------------------------+\n| id | select_type | table         | partitions | type | possible_keys | key         | key_len | ref   | rows | filtered | Extra                                 |\n+----+-------------+---------------+------------+------+---------------+-------------+---------+-------+------+----------+---------------------------------------+\n|  1 | SIMPLE      | t_file | NULL       | ref  | idx_fileId   | idx_fileId | 259     | const |    1 |   100.00 | Using index condition; Using filesort |\n+----+-------------+---------------+------------+------+---------------+-------------+---------+-------+------+----------+---------------------------------------+\n"))),(0,l.kt)("h2",{id:"explain-output-columns"},"EXPLAIN Output Columns"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(3880).Z,width:"920",height:"1024"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5217\u540d"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u7f16\u53f7\uff0c\u6807\u8bc6select\u6240\u5c5e\u7684\u884c\u3002\u5982\u679c\u5728\u8bed\u53e5\u4e2d\u6ca1\u5b50\u67e5\u8be2\u6216\u5173\u8054\u67e5\u8be2\uff0c\u53ea\u6709\u552f\u4e00\u7684select\uff0c\u6bcf\u884c\u90fd\u5c06\u663e\u793a1\u3002\u5426\u5219\uff0c\u5185\u5c42\u7684select\u8bed\u53e5\u4e00\u822c\u4f1a\u987a\u5e8f\u7f16\u53f7\uff0c\u5bf9\u5e94\u4e8e\u5176\u5728\u539f\u59cb\u8bed\u53e5\u4e2d\u7684\u4f4d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"select_type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u672c\u884c\u662f\u7b80\u5355\u6216\u590d\u6742select\u3002\u5982\u679c\u67e5\u8be2\u6709\u4efb\u4f55\u590d\u6742\u7684\u5b50\u67e5\u8be2\uff0c\u5219\u6700\u5916\u5c42\u6807\u8bb0\u4e3aPRIMARY\uff08DERIVED\u3001UNION\u3001UNION RESUlT\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bbf\u95ee\u5f15\u7528\u54ea\u4e2a\u8868\uff08\u5f15\u7528\u67d0\u4e2a\u67e5\u8be2\uff0c\u5982\u201cderived3\u201d\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6570\u636e\u8bbf\u95ee/\u8bfb\u53d6\u64cd\u4f5c\u7c7b\u578b\uff08ALL\u3001index\u3001range\u3001ref\u3001eq_ref\u3001const/system\u3001NULL\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"possible_keys"),(0,l.kt)("td",{parentName:"tr",align:null},"\u63ed\u793a\u54ea\u4e00\u4e9b\u7d22\u5f15\u53ef\u80fd\u6709\u5229\u4e8e\u9ad8\u6548\u7684\u67e5\u627e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793amysql\u51b3\u5b9a\u91c7\u7528\u54ea\u4e2a\u7d22\u5f15\u6765\u4f18\u5316\u67e5\u8be2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key_len"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793amysql\u5728\u7d22\u5f15\u91cc\u4f7f\u7528\u7684\u5b57\u8282\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null},"\u663e\u793a\u4e86\u4e4b\u524d\u7684\u8868\u5728key\u5217\u8bb0\u5f55\u7684\u7d22\u5f15\u4e2d\u67e5\u627e\u503c\u6240\u7528\u7684\u5217\u6216\u5e38\u91cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rows"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e3a\u4e86\u627e\u5230\u6240\u9700\u7684\u884c\u800c\u9700\u8981\u8bfb\u53d6\u7684\u884c\u6570\uff0c\u4f30\u7b97\u503c\uff0c\u4e0d\u7cbe\u786e\u3002\u901a\u8fc7\u628a\u6240\u6709rows\u5217\u503c\u76f8\u4e58\uff0c\u53ef\u7c97\u7565\u4f30\u7b97\u6574\u4e2a\u67e5\u8be2\u4f1a\u68c0\u67e5\u7684\u884c\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extra"),(0,l.kt)("td",{parentName:"tr",align:null},"\u989d\u5916\u4fe1\u606f\uff0c\u5982using index\u3001filesort\u7b49")))),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://file.huhan.tech/images/202208302109716.png",alt:null})),(0,l.kt)("h3",{id:"id"},"id"),(0,l.kt)("p",null,"id\u662f\u7528\u6765\u987a\u5e8f\u6807\u8bc6\u6574\u4e2a\u67e5\u8be2\u4e2dSELELCT \u8bed\u53e5\u7684\uff0c\u5728\u5d4c\u5957\u67e5\u8be2\u4e2did\u8d8a\u5927\u7684\u8bed\u53e5\u8d8a\u5148\u6267\u884c\u3002\u8be5\u503c\u53ef\u80fd\u4e3aNULL\uff0c\u5982\u679c\u8fd9\u4e00\u884c\u7528\u6765\u8bf4\u660e\u7684\u662f\u5176\u4ed6\u884c\u7684\u8054\u5408\u7ed3\u679c\u3002"),(0,l.kt)("h3",{id:"select_type"},"select_type"),(0,l.kt)("p",null,"\u8868\u793a\u67e5\u8be2\u7684\u7c7b\u578b"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"simple"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b80\u5355\u5b50\u67e5\u8be2\uff0c\u4e0d\u5305\u542b\u5b50\u67e5\u8be2\u548cunion")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"primary"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5305\u542bunion\u6216\u8005\u5b50\u67e5\u8be2\uff0c\u6700\u5916\u5c42\u7684\u90e8\u5206\u6807\u8bb0\u4e3aprimary")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subquery"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u822c\u5b50\u67e5\u8be2\u4e2d\u7684\u5b50\u67e5\u8be2\u88ab\u6807\u8bb0\u4e3asubquery\uff0c\u4e5f\u5c31\u662f\u4f4d\u4e8eselect\u5217\u8868\u4e2d\u7684\u67e5\u8be2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"derived"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d3e\u751f\u8868\u2014\u2014\u8be5\u4e34\u65f6\u8868\u662f\u4ece\u5b50\u67e5\u8be2\u6d3e\u751f\u51fa\u6765\u7684\uff0c\u4f4d\u4e8eform\u4e2d\u7684\u5b50\u67e5\u8be2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"union"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f4d\u4e8eunion\u4e2d\u7b2c\u4e8c\u4e2a\u53ca\u5176\u4ee5\u540e\u7684\u5b50\u67e5\u8be2\u88ab\u6807\u8bb0\u4e3aunion\uff0c\u7b2c\u4e00\u4e2a\u5c31\u88ab\u6807\u8bb0\u4e3aprimary\u5982\u679c\u662funion\u4f4d\u4e8efrom\u4e2d\u5219\u6807\u8bb0\u4e3aderived")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"union result"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u4ece\u533f\u540d\u4e34\u65f6\u8868\u91cc\u68c0\u7d22\u7ed3\u679c\u7684select\u88ab\u6807\u8bb0\u4e3aunion result")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dependent union"),(0,l.kt)("td",{parentName:"tr",align:null},"\u987e\u540d\u601d\u4e49\uff0c\u9996\u5148\u9700\u8981\u6ee1\u8db3UNION\u7684\u6761\u4ef6\uff0c\u53caUNION\u4e2d\u7b2c\u4e8c\u4e2a\u4ee5\u53ca\u540e\u9762\u7684SELECT\u8bed\u53e5\uff0c\u540c\u65f6\u8be5\u8bed\u53e5\u4f9d\u8d56\u5916\u90e8\u7684\u67e5\u8be2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subquery"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u67e5\u8be2\u4e2d\u7b2c\u4e00\u4e2aSELECT\u8bed\u53e5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dependent subquery"),(0,l.kt)("td",{parentName:"tr",align:null},"\u548cDEPENDENT UNION\u76f8\u5bf9UNION\u4e00\u6837")))),(0,l.kt)("h3",{id:"table"},"table"),(0,l.kt)("p",null,"\u5bf9\u5e94\u884c\u6b63\u5728\u8bbf\u95ee\u54ea\u4e00\u4e2a\u8868\uff0c\u8868\u540d\u6216\u8005\u522b\u540d"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5173\u8054\u4f18\u5316\u5668\u4f1a\u4e3a\u67e5\u8be2\u9009\u62e9\u5173\u8054\u987a\u5e8f\uff0c\u5de6\u4fa7\u6df1\u5ea6\u4f18\u5148"),(0,l.kt)("li",{parentName:"ul"},"\u5f53from\u4e2d\u6709\u5b50\u67e5\u8be2\u7684\u65f6\u5019\uff0c\u8868\u540d\u662fderivedN\u7684\u5f62\u5f0f\uff0cN\u6307\u5411\u5b50\u67e5\u8be2\uff0c\u4e5f\u5c31\u662fexplain\u7ed3\u679c\u4e2d\u7684\u4e0b\u4e00\u5217"),(0,l.kt)("li",{parentName:"ul"},"\u5f53\u6709union result\u7684\u65f6\u5019\uff0c\u8868\u540d\u662funion 1,2\u7b49\u7684\u5f62\u5f0f\uff0c1,2\u8868\u793a\u53c2\u4e0eunion\u7684query id")),(0,l.kt)("p",null,"\u6ce8\u610f\uff1aMySQL\u5bf9\u5f85\u8fd9\u4e9b\u8868\u548c\u666e\u901a\u8868\u4e00\u6837\uff0c\u4f46\u662f\u8fd9\u4e9b\u201c\u4e34\u65f6\u8868\u201d\u662f\u6ca1\u6709\u4efb\u4f55\u7d22\u5f15\u7684\u3002"),(0,l.kt)("h3",{id:"type"},"type"),(0,l.kt)("p",null,"type\u663e\u793a\u7684\u662f\u8bbf\u95ee\u7c7b\u578b\uff0c\u662f\u8f83\u4e3a\u91cd\u8981\u7684\u4e00\u4e2a\u6307\u6807\uff0c\u7ed3\u679c\u503c\u4ece\u597d\u5230\u574f\u4f9d\u6b21\u662f\uff1a\nsystem > const > eq_ref > ref > fulltext > ref_or_null > index_merge > unique_subquery > index_subquery > range > index > ALL \uff0c\u4e00\u822c\u6765\u8bf4\uff0c\u5f97\u4fdd\u8bc1\u67e5\u8be2\u81f3\u5c11\u8fbe\u5230range\u7ea7\u522b\uff0c\u6700\u597d\u80fd\u8fbe\u5230ref\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"All"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u574f\u7684\u60c5\u51b5,\u5168\u8868\u626b\u63cf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"index"),(0,l.kt)("td",{parentName:"tr",align:null},"\u548c\u5168\u8868\u626b\u63cf\u4e00\u6837\u3002\u53ea\u662f\u626b\u63cf\u8868\u7684\u65f6\u5019\u6309\u7167\u7d22\u5f15\u6b21\u5e8f\u8fdb\u884c\u800c\u4e0d\u662f\u884c\u3002\u4e3b\u8981\u4f18\u70b9\u5c31\u662f\u907f\u514d\u4e86\u6392\u5e8f, \u4f46\u662f\u5f00\u9500\u4ecd\u7136\u975e\u5e38\u5927\u3002\u5982\u5728Extra\u5217\u770b\u5230Using index\uff0c\u8bf4\u660e\u6b63\u5728\u4f7f\u7528\u8986\u76d6\u7d22\u5f15\uff0c\u53ea\u626b\u63cf\u7d22\u5f15\u7684\u6570\u636e\uff0c\u5b83\u6bd4\u6309\u7d22\u5f15\u6b21\u5e8f\u5168\u8868\u626b\u63cf\u7684\u5f00\u9500\u8981\u5c0f\u5f88\u591a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"range"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8303\u56f4\u626b\u63cf\uff0c\u4e00\u4e2a\u6709\u9650\u5236\u7684\u7d22\u5f15\u626b\u63cf\u3002",(0,l.kt)("inlineCode",{parentName:"td"},"key \u5217\u663e\u793a\u4f7f\u7528\u4e86\u54ea\u4e2a\u7d22\u5f15\u3002\u5f53\u4f7f\u7528=\u3001 <>\u3001>\u3001>=\u3001<\u3001<=\u3001IS NULL\u3001<=>\u3001BETWEEN \u6216\u8005 IN \u64cd\u4f5c\u7b26,\u7528\u5e38\u91cf\u6bd4\u8f83\u5173\u952e\u5b57\u5217\u65f6,\u53ef\u4ee5\u4f7f\u7528 range"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e00\u79cd\u7d22\u5f15\u8bbf\u95ee\uff0c\u5b83\u8fd4\u56de\u6240\u6709\u5339\u914d\u67d0\u4e2a\u5355\u4e2a\u503c\u7684\u884c\u3002\u6b64\u7c7b\u7d22\u5f15\u8bbf\u95ee\u53ea\u6709\u5f53\u4f7f\u7528\u975e\u552f\u4e00\u6027\u7d22\u5f15\u6216\u552f\u4e00\u6027\u7d22\u5f15\u975e\u552f\u4e00\u6027\u524d\u7f00\u65f6\u624d\u4f1a\u53d1\u751f\u3002\u8fd9\u4e2a\u7c7b\u578b\u8ddfeq_ref\u4e0d\u540c\u7684\u662f\uff0c\u5b83\u7528\u5728\u5173\u8054\u64cd\u4f5c\u53ea\u4f7f\u7528\u4e86\u7d22\u5f15\u7684\u6700\u5de6\u524d\u7f00\uff0c\u6216\u8005\u7d22\u5f15\u4e0d\u662fUNIQUE\u548cPRIMARY KEY\u3002ref\u53ef\u4ee5\u7528\u4e8e\u4f7f\u7528=\u6216<=>\u64cd\u4f5c\u7b26\u7684\u5e26\u7d22\u5f15\u7684\u5217\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"eq_ref"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u591a\u53ea\u8fd4\u56de\u4e00\u6761\u7b26\u5408\u6761\u4ef6\u7684\u8bb0\u5f55\u3002\u4f7f\u7528\u552f\u4e00\u6027\u7d22\u5f15\u6216\u4e3b\u952e\u67e5\u627e\u65f6\u4f1a\u53d1\u751f \uff08\u9ad8\u6548\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"const"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u786e\u5b9a\u6700\u591a\u53ea\u4f1a\u6709\u4e00\u884c\u5339\u914d\u7684\u65f6\u5019\uff0cMySQL\u4f18\u5316\u5668\u4f1a\u5728\u67e5\u8be2\u524d\u8bfb\u53d6\u5b83\u800c\u4e14\u53ea\u8bfb\u53d6\u4e00\u6b21\uff0c\u56e0\u6b64\u975e\u5e38\u5feb\u3002\u5f53\u4e3b\u952e\u653e\u5165where\u5b50\u53e5\u65f6\uff0cmysql\u628a\u8fd9\u4e2a\u67e5\u8be2\u8f6c\u4e3a\u4e00\u4e2a\u5e38\u91cf\uff08\u9ad8\u6548\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"system"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd9\u662fconst\u8fde\u63a5\u7c7b\u578b\u7684\u4e00\u79cd\u7279\u4f8b\uff0c\u8868\u4ec5\u6709\u4e00\u884c\u6ee1\u8db3\u6761\u4ef6\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Null"),(0,l.kt)("td",{parentName:"tr",align:null},"\u610f\u5473\u8bf4mysql\u80fd\u5728\u4f18\u5316\u9636\u6bb5\u5206\u89e3\u67e5\u8be2\u8bed\u53e5\uff0c\u5728\u6267\u884c\u9636\u6bb5\u751a\u81f3\u7528\u4e0d\u5230\u8bbf\u95ee\u8868\u6216\u7d22\u5f15\uff08\u9ad8\u6548\uff09")))),(0,l.kt)("h3",{id:"possible_keys"},"possible_keys"),(0,l.kt)("p",null,"\u663e\u793a\u67e5\u8be2\u4f7f\u7528\u4e86\u54ea\u4e9b\u7d22\u5f15\uff0c\u8868\u793a\u8be5\u7d22\u5f15\u53ef\u4ee5\u8fdb\u884c\u9ad8\u6548\u5730\u67e5\u627e\uff0c\u4f46\u662f\u5217\u51fa\u6765\u7684\u7d22\u5f15\u5bf9\u4e8e\u540e\u7eed\u4f18\u5316\u8fc7\u7a0b\u53ef\u80fd\u662f\u6ca1\u6709\u7528\u7684"),(0,l.kt)("h3",{id:"key"},"key"),(0,l.kt)("p",null,"key\u5217\u663e\u793aMySQL\u5b9e\u9645\u51b3\u5b9a\u4f7f\u7528\u7684\u952e\uff08\u7d22\u5f15\uff09\u3002\u5982\u679c\u6ca1\u6709\u9009\u62e9\u7d22\u5f15\uff0c\u952e\u662fNULL\u3002\u8981\u60f3\u5f3a\u5236MySQL\u4f7f\u7528\u6216\u5ffd\u89c6possible_keys\u5217\u4e2d\u7684\u7d22\u5f15\uff0c\u5728\u67e5\u8be2\u4e2d\u4f7f\u7528FORCE INDEX\u3001USE INDEX\u6216\u8005IGNORE INDEX\u3002"),(0,l.kt)("h3",{id:"key_len"},"key_len"),(0,l.kt)("p",null,"key_len\u5217\u663e\u793aMySQL\u51b3\u5b9a\u4f7f\u7528\u7684\u952e\u957f\u5ea6\u3002\u5982\u679c\u952e\u662fNULL\uff0c\u5219\u957f\u5ea6\u4e3aNULL\u3002\u4f7f\u7528\u7684\u7d22\u5f15\u7684\u957f\u5ea6\u3002\u5728\u4e0d\u635f\u5931\u7cbe\u786e\u6027\u7684\u60c5\u51b5\u4e0b\uff0c\u957f\u5ea6\u8d8a\u77ed\u8d8a\u597d \u3002"),(0,l.kt)("h3",{id:"ref"},"ref"),(0,l.kt)("p",null,"ref\u5217\u663e\u793a\u4f7f\u7528\u54ea\u4e2a\u5217\u6216\u5e38\u6570\u4e0ekey\u4e00\u8d77\u4ece\u8868\u4e2d\u9009\u62e9\u884c\u3002"),(0,l.kt)("h3",{id:"rows"},"rows"),(0,l.kt)("p",null,"rows\u5217\u663e\u793aMySQL\u8ba4\u4e3a\u5b83\u6267\u884c\u67e5\u8be2\u65f6\u5fc5\u987b\u68c0\u67e5\u7684\u884c\u6570\u3002\u6ce8\u610f\u8fd9\u662f\u4e00\u4e2a\u9884\u4f30\u503c\u3002"),(0,l.kt)("h3",{id:"extra"},"Extra"),(0,l.kt)("p",null,"Extra\u662fEXPLAIN\u8f93\u51fa\u4e2d\u53e6\u5916\u4e00\u4e2a\u5f88\u91cd\u8981\u7684\u5217\uff0c\u8be5\u5217\u663e\u793aMySQL\u5728\u67e5\u8be2\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u8be6\u7ec6\u4fe1\u606f\uff0cMySQL\u67e5\u8be2\u4f18\u5316\u5668\u6267\u884c\u67e5\u8be2\u7684\u8fc7\u7a0b\u4e2d\u5bf9\u67e5\u8be2\u8ba1\u5212\u7684\u91cd\u8981\u8865\u5145\u4fe1\u606f\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Using filesort"),(0,l.kt)("td",{parentName:"tr",align:null},"MySQL\u6709\u4e24\u79cd\u65b9\u5f0f\u53ef\u4ee5\u751f\u6210\u6709\u5e8f\u7684\u7ed3\u679c\uff0c\u901a\u8fc7\u6392\u5e8f\u64cd\u4f5c\u6216\u8005\u4f7f\u7528\u7d22\u5f15\uff0c\u5f53Extra\u4e2d\u51fa\u73b0\u4e86Using filesort \u8bf4\u660eMySQL\u4f7f\u7528\u4e86\u540e\u8005\uff0c\u4f46\u6ce8\u610f\u867d\u7136\u53ebfilesort\u4f46\u5e76\u4e0d\u662f\u8bf4\u660e\u5c31\u662f\u7528\u4e86\u6587\u4ef6\u6765\u8fdb\u884c\u6392\u5e8f\uff0c\u53ea\u8981\u53ef\u80fd\u6392\u5e8f\u90fd\u662f\u5728\u5185\u5b58\u91cc\u5b8c\u6210\u7684\u3002\u5927\u90e8\u5206\u60c5\u51b5\u4e0b\u5229\u7528\u7d22\u5f15\u6392\u5e8f\u66f4\u5feb\uff0c\u6240\u4ee5\u4e00\u822c\u8fd9\u65f6\u4e5f\u8981\u8003\u8651\u4f18\u5316\u67e5\u8be2\u4e86\u3002\u4f7f\u7528\u6587\u4ef6\u5b8c\u6210\u6392\u5e8f\u64cd\u4f5c\uff0c\u8fd9\u662f\u53ef\u80fd\u662fordery by\uff0cgroup by\u8bed\u53e5\u7684\u7ed3\u679c\uff0c\u8fd9\u53ef\u80fd\u662f\u4e00\u4e2aCPU\u5bc6\u96c6\u578b\u7684\u8fc7\u7a0b\uff0c\u53ef\u4ee5\u901a\u8fc7\u9009\u62e9\u5408\u9002\u7684\u7d22\u5f15\u6765\u6539\u8fdb\u6027\u80fd\uff0c\u7528\u7d22\u5f15\u6765\u4e3a\u67e5\u8be2\u7ed3\u679c\u6392\u5e8f\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Using temporary"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u4e34\u65f6\u8868\u4fdd\u5b58\u4e2d\u95f4\u7ed3\u679c\uff0c\u5e38\u7528\u4e8eGROUP BY \u548c ORDER BY\u64cd\u4f5c\u4e2d\uff0c\u4e00\u822c\u770b\u5230\u5b83\u8bf4\u660e\u67e5\u8be2\u9700\u8981\u4f18\u5316\u4e86\uff0c\u5c31\u7b97\u907f\u514d\u4e0d\u4e86\u4e34\u65f6\u8868\u7684\u4f7f\u7528\u4e5f\u8981\u5c3d\u91cf\u907f\u514d\u786c\u76d8\u4e34\u65f6\u8868\u7684\u4f7f\u7528\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Not exists"),(0,l.kt)("td",{parentName:"tr",align:null},"MYSQL\u4f18\u5316\u4e86LEFT JOIN\uff0c\u4e00\u65e6\u5b83\u627e\u5230\u4e86\u5339\u914dLEFT JOIN\u6807\u51c6\u7684\u884c\uff0c \u5c31\u4e0d\u518d\u641c\u7d22\u4e86\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Using index"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8bf4\u660e\u67e5\u8be2\u662f\u8986\u76d6\u4e86\u7d22\u5f15\u7684\uff0c\u4e0d\u9700\u8981\u8bfb\u53d6\u6570\u636e\u6587\u4ef6\uff0c\u4ece\u7d22\u5f15\u6811\uff08\u7d22\u5f15\u6587\u4ef6\uff09\u4e2d\u5373\u53ef\u83b7\u5f97\u4fe1\u606f\u3002\u5982\u679c\u540c\u65f6\u51fa\u73b0using where\uff0c\u8868\u660e\u7d22\u5f15\u88ab\u7528\u6765\u6267\u884c\u7d22\u5f15\u952e\u503c\u7684\u67e5\u627e\uff0c\u6ca1\u6709using where\uff0c\u8868\u660e\u7d22\u5f15\u7528\u6765\u8bfb\u53d6\u6570\u636e\u800c\u975e\u6267\u884c\u67e5\u627e\u52a8\u4f5c\u3002\u8fd9\u662fMySQL\u670d\u52a1\u5c42\u5b8c\u6210\u7684\uff0c\u4f46\u65e0\u9700\u518d\u56de\u8868\u67e5\u8be2\u8bb0\u5f55\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Using index condition"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd9\u662fMySQL 5.6\u51fa\u6765\u7684\u65b0\u7279\u6027\uff0c\u53eb\u505a\u201c\u7d22\u5f15\u6761\u4ef6\u63a8\u9001\u201d\u3002\u7b80\u5355\u8bf4\u4e00\u70b9\u5c31\u662fMySQL\u539f\u6765\u5728\u7d22\u5f15\u4e0a\u662f\u4e0d\u80fd\u6267\u884c\u5982like\u8fd9\u6837\u7684\u64cd\u4f5c\u7684\uff0c\u4f46\u662f\u73b0\u5728\u53ef\u4ee5\u4e86\uff0c\u8fd9\u6837\u51cf\u5c11\u4e86\u4e0d\u5fc5\u8981\u7684IO\u64cd\u4f5c\uff0c\u4f46\u662f\u53ea\u80fd\u7528\u5728\u4e8c\u7ea7\u7d22\u5f15\u4e0a\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Using where"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u4e86WHERE\u4ece\u53e5\u6765\u9650\u5236\u54ea\u4e9b\u884c\u5c06\u4e0e\u4e0b\u4e00\u5f20\u8868\u5339\u914d\u6216\u8005\u662f\u8fd4\u56de\u7ed9\u7528\u6237\u3002",(0,l.kt)("strong",{parentName:"td"},"\u6ce8\u610f"),"\uff1aExtra\u5217\u51fa\u73b0Using where\u8868\u793aMySQL\u670d\u52a1\u5668\u5c06\u5b58\u50a8\u5f15\u64ce\u8fd4\u56de\u670d\u52a1\u5c42\u4ee5\u540e\u518d\u5e94\u7528WHERE\u6761\u4ef6\u8fc7\u6ee4\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Using join buffer"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u4e86\u8fde\u63a5\u7f13\u5b58\uff1a",(0,l.kt)("strong",{parentName:"td"},"Block Nested Loop"),"\uff0c\u8fde\u63a5\u7b97\u6cd5\u662f\u5757\u5d4c\u5957\u5faa\u73af\u8fde\u63a5;",(0,l.kt)("strong",{parentName:"td"},"Batched Key Access"),"\uff0c\u8fde\u63a5\u7b97\u6cd5\u662f\u6279\u91cf\u7d22\u5f15\u8fde\u63a5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"impossible where"),(0,l.kt)("td",{parentName:"tr",align:null},"where\u5b50\u53e5\u7684\u503c\u603b\u662ffalse\uff0c\u4e0d\u80fd\u7528\u6765\u83b7\u53d6\u4efb\u4f55\u5143\u7ec4")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"select tables optimized away"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728\u6ca1\u6709GROUP BY\u5b50\u53e5\u7684\u60c5\u51b5\u4e0b\uff0c\u57fa\u4e8e\u7d22\u5f15\u4f18\u5316",(0,l.kt)("inlineCode",{parentName:"td"},"MIN/MAX"),"\u64cd\u4f5c\uff0c\u6216\u8005\u5bf9\u4e8eMyISAM\u5b58\u50a8\u5f15\u64ce\u4f18\u5316",(0,l.kt)("inlineCode",{parentName:"td"},"COUNT(*)"),"\u64cd\u4f5c\uff0c\u4e0d\u5fc5\u7b49\u5230\u6267\u884c\u9636\u6bb5\u518d\u8fdb\u884c\u8ba1\u7b97\uff0c\u67e5\u8be2\u6267\u884c\u8ba1\u5212\u751f\u6210\u7684\u9636\u6bb5\u5373\u5b8c\u6210\u4f18\u5316\u3002")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"distinct"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f18\u5316distinct\u64cd\u4f5c\uff0c\u5728\u627e\u5230\u7b2c\u4e00\u5339\u914d\u7684\u5143\u7ec4\u540e\u5373\u505c\u6b62\u627e\u540c\u6837\u503c\u7684\u52a8\u4f5c")))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"\u53c2\u8003\u6587\u6863"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"MySQL\u5b98\u65b9\u6587\u6863\u89e3\u91ca\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.7/en/explain-output.html"},"https://dev.mysql.com/doc/refman/5.7/en/explain-output.html")),(0,l.kt)("li",{parentName:"ol"},"MySQL EXPLAIN\u8be6\u89e3\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/ea3fc71fdc45"},"https://www.jianshu.com/p/ea3fc71fdc45"))))}o.isMDXComponent=!0},3880:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/20230416113732-64c41c9ef0e9556276a02df8503cc9da.png"}}]);
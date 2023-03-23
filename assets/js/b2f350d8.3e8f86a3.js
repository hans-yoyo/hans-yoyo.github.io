"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,E=m["".concat(p,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(E,o(o({ref:t},u),{},{components:n})):r.createElement(E,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const l={},o=void 0,i={unversionedId:"mysql/\u6570\u636e\u5e93\u7d22\u5f15\u5931\u6548\u7684\u51e0\u79cd\u573a\u666f",id:"mysql/\u6570\u636e\u5e93\u7d22\u5f15\u5931\u6548\u7684\u51e0\u79cd\u573a\u666f",title:"\u6570\u636e\u5e93\u7d22\u5f15\u5931\u6548\u7684\u51e0\u79cd\u573a\u666f",description:"Mysql \u6570\u636e\u5e93\u8868\u4e2d\u6709\u7d22\u5f15\u4e3a\u4ec0\u4e48\u8fd8\u662f\u67e5\u8be2\u6162\uff1f",source:"@site/wiki/database/mysql/\u6570\u636e\u5e93\u7d22\u5f15\u5931\u6548\u7684\u51e0\u79cd\u573a\u666f.md",sourceDirName:"mysql",slug:"/mysql/\u6570\u636e\u5e93\u7d22\u5f15\u5931\u6548\u7684\u51e0\u79cd\u573a\u666f",permalink:"/wiki/database/mysql/\u6570\u636e\u5e93\u7d22\u5f15\u5931\u6548\u7684\u51e0\u79cd\u573a\u666f",draft:!1,tags:[],version:"current",lastUpdatedBy:"hyman213",lastUpdatedAt:1677503089,formattedLastUpdatedAt:"2023\u5e742\u670827\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4e1a\u52a1\u5e93\u5386\u53f2\u6570\u636e\u81ea\u52a8\u5f52\u6863\u5b58\u50a8\u8fc7\u7a0b",permalink:"/wiki/database/mysql/\u4e1a\u52a1\u5e93\u5386\u53f2\u6570\u636e\u81ea\u52a8\u5f52\u6863\u5b58\u50a8\u8fc7\u7a0b"}},p={},s=[{value:"\u5b57\u6bb5\u7c7b\u578b\u4e0d\u5339\u914d",id:"\u5b57\u6bb5\u7c7b\u578b\u4e0d\u5339\u914d",level:3},{value:"\u88ab\u7d22\u5f15\u5b57\u6bb5\u4f7f\u7528\u4e86\u8ba1\u7b97\u8868\u8fbe\u5f0f",id:"\u88ab\u7d22\u5f15\u5b57\u6bb5\u4f7f\u7528\u4e86\u8ba1\u7b97\u8868\u8fbe\u5f0f",level:3},{value:"\u88ab\u7d22\u5f15\u5b57\u6bb5\u4f7f\u7528\u4e86\u5185\u7f6e\u51fd\u6570",id:"\u88ab\u7d22\u5f15\u5b57\u6bb5\u4f7f\u7528\u4e86\u5185\u7f6e\u51fd\u6570",level:3},{value:"\u4f7f\u7528\u4e86\u9760\u53f3(%xxx)\u6a21\u7cca\u67e5\u8be2",id:"\u4f7f\u7528\u4e86\u9760\u53f3xxx\u6a21\u7cca\u67e5\u8be2",level:3},{value:"\u7d22\u5f15\u5b57\u6bb5\u4e0d\u662f\u8054\u5408\u7d22\u5f15\u5b57\u6bb5\u7684\u6700\u5de6\u5b57\u6bb5",id:"\u7d22\u5f15\u5b57\u6bb5\u4e0d\u662f\u8054\u5408\u7d22\u5f15\u5b57\u6bb5\u7684\u6700\u5de6\u5b57\u6bb5",level:3},{value:"or \u5206\u5272\u7684\u6761\u4ef6\uff0c\u5de6\u8fb9\u7684\u6761\u4ef6\u5b58\u5728\u7d22\u5f15\uff0c\u53f3\u8fb9\u7684\u6761\u4ef6\u4e0d\u5b58\u5728\u7d22\u5f15",id:"or-\u5206\u5272\u7684\u6761\u4ef6\u5de6\u8fb9\u7684\u6761\u4ef6\u5b58\u5728\u7d22\u5f15\u53f3\u8fb9\u7684\u6761\u4ef6\u4e0d\u5b58\u5728\u7d22\u5f15",level:3},{value:"\u5b50\u67e5\u8be2 IN\u3001NOT IN \u4f1a\u5bfc\u81f4\u7d22\u5f15\u5931\u6548",id:"\u5b50\u67e5\u8be2-innot-in-\u4f1a\u5bfc\u81f4\u7d22\u5f15\u5931\u6548",level:3}],u={toc:s};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://xie.infoq.cn/article/1b29af929a20ceeb874304d93"},"Mysql \u6570\u636e\u5e93\u8868\u4e2d\u6709\u7d22\u5f15\u4e3a\u4ec0\u4e48\u8fd8\u662f\u67e5\u8be2\u6162\uff1f")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/7RF5_HdyCHOCplRjGCSq4A"},"https://mp.weixin.qq.com/s/7RF5_HdyCHOCplRjGCSq4A")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://file.huhan.tech/images/202208302017899.png",alt:null})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!NOTE]"," \u7d22\u5f15\u5931\u6548\u7684\u51e0\u79cd\u60c5\u51b5"),(0,a.kt)("ol",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ol"},"\u5b57\u6bb5\u7c7b\u578b\u4e0d\u5339\u914d"),(0,a.kt)("li",{parentName:"ol"},"\u88ab\u7d22\u5f15\u5b57\u6bb5\u4f7f\u7528\u4e86\u8ba1\u7b97\u8868\u8fbe\u5f0f"),(0,a.kt)("li",{parentName:"ol"},"\u88ab\u7d22\u5f15\u5b57\u6bb5\u4f7f\u7528\u4e86\u5185\u7f6e\u51fd\u6570"),(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u4e86\u9760\u53f3(%xxx)\u6a21\u7cca\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ol"},"or \u5206\u5272\u7684\u6761\u4ef6\uff0c\u5de6\u8fb9\u7684\u6761\u4ef6\u5b58\u5728\u7d22\u5f15\uff0c\u53f3\u8fb9\u7684\u6761\u4ef6\u4e0d\u5b58\u5728\u7d22\u5f15"),(0,a.kt)("li",{parentName:"ol"},"\u5b50\u67e5\u8be2 IN\u3001NOT IN \u4f1a\u5bfc\u81f4\u7d22\u5f15\u5931\u6548"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `user_info` (\n `id` bigint(20) NOT NULL AUTO_INCREMENT,\n `name` VARCHAR(20) NOT NULL,\n `gender` int(2) NOT NULL,\n `age` int(10) NOT NULL,\n `phone_number` VARCHAR(20) NOT NULL,\n `address` VARCHAR(40) NOT NULL,\n  PRIMARY KEY ( `id` ),\n  KEY `idx_name`(`name`),\n  KEY `idx_phone`(`phone_number`),\n  KEY `idx_age_address`(`age`,`address`)\n)ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),(0,a.kt)("h3",{id:"\u5b57\u6bb5\u7c7b\u578b\u4e0d\u5339\u914d"},"\u5b57\u6bb5\u7c7b\u578b\u4e0d\u5339\u914d"),(0,a.kt)("p",null,"where \u6761\u4ef6\u5b57\u6bb5\u7c7b\u578b\u4e0e\u5b9e\u9645\u8868\u4e2d\u5b57\u6bb5\u7c7b\u578b\u4e0d\u5339\u914d\u7684\u65f6\u5019, Mysql\u4f1a\u8fdb\u884c\u9690\u5f0f\u8f6c\u6362\uff0c\u9690\u5f0f\u8f6c\u6362\u4f1a\u7528\u5230\u5185\u7f6e\u51fd\u6570\uff0c\u5bfc\u81f4\u7d22\u5f15\u5931\u6548"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"EXPLAIN SELECT * FROM user_info WHERE phone_number = 13688886666;\n\nEXPLAIN SELECT * FROM user_info WHERE phone_number = '13688886666';\n")),(0,a.kt)("h3",{id:"\u88ab\u7d22\u5f15\u5b57\u6bb5\u4f7f\u7528\u4e86\u8ba1\u7b97\u8868\u8fbe\u5f0f"},"\u88ab\u7d22\u5f15\u5b57\u6bb5\u4f7f\u7528\u4e86\u8ba1\u7b97\u8868\u8fbe\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SELECT * FROM user_info WHERE age + 2 = 30;\n")),(0,a.kt)("h3",{id:"\u88ab\u7d22\u5f15\u5b57\u6bb5\u4f7f\u7528\u4e86\u5185\u7f6e\u51fd\u6570"},"\u88ab\u7d22\u5f15\u5b57\u6bb5\u4f7f\u7528\u4e86\u5185\u7f6e\u51fd\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SELECT * FROM user_info WHERE LEFT(phone_number, 3) = '136';\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u4e86\u9760\u53f3xxx\u6a21\u7cca\u67e5\u8be2"},"\u4f7f\u7528\u4e86\u9760\u53f3(%xxx)\u6a21\u7cca\u67e5\u8be2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SELECT * FROM user_info WHERE name LIKE 'xiao%';\n\nEXPLAIN SELECT * FROM user_info WHERE name LIKE '%xiao%';\n")),(0,a.kt)("h3",{id:"\u7d22\u5f15\u5b57\u6bb5\u4e0d\u662f\u8054\u5408\u7d22\u5f15\u5b57\u6bb5\u7684\u6700\u5de6\u5b57\u6bb5"},"\u7d22\u5f15\u5b57\u6bb5\u4e0d\u662f\u8054\u5408\u7d22\u5f15\u5b57\u6bb5\u7684\u6700\u5de6\u5b57\u6bb5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN SELECT * FROM user_info WHERE address = '\u6b66\u6c49\u5e02';\n\nEXPLAIN SELECT * FROM user_info WHERE age = 18;\n")),(0,a.kt)("h3",{id:"or-\u5206\u5272\u7684\u6761\u4ef6\u5de6\u8fb9\u7684\u6761\u4ef6\u5b58\u5728\u7d22\u5f15\u53f3\u8fb9\u7684\u6761\u4ef6\u4e0d\u5b58\u5728\u7d22\u5f15"},"or \u5206\u5272\u7684\u6761\u4ef6\uff0c\u5de6\u8fb9\u7684\u6761\u4ef6\u5b58\u5728\u7d22\u5f15\uff0c\u53f3\u8fb9\u7684\u6761\u4ef6\u4e0d\u5b58\u5728\u7d22\u5f15"),(0,a.kt)("h3",{id:"\u5b50\u67e5\u8be2-innot-in-\u4f1a\u5bfc\u81f4\u7d22\u5f15\u5931\u6548"},"\u5b50\u67e5\u8be2 IN\u3001NOT IN \u4f1a\u5bfc\u81f4\u7d22\u5f15\u5931\u6548"))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3815],{3905:(e,t,i)=>{i.d(t,{Zo:()=>o,kt:()=>k});var n=i(67294);function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){l(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function a(e,t){if(null==e)return{};var i,n,l=function(e,t){if(null==e)return{};var i,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(l[i]=e[i]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(l[i]=e[i])}return l}var p=n.createContext({}),d=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},o=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var i=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,o=a(e,["components","mdxType","originalType","parentName"]),c=d(i),k=l,m=c["".concat(p,".").concat(k)]||c[k]||u[k]||r;return i?n.createElement(m,s(s({ref:t},o),{},{components:i})):n.createElement(m,s({ref:t},o))}));function k(e,t){var i=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=i.length,s=new Array(r);s[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:l,s[1]=a;for(var d=2;d<r;d++)s[d]=i[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},48686:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=i(87462),l=(i(67294),i(3905));const r={title:"Redis \u5e95\u5c42\u6570\u636e\u7ed3\u6784",slug:"data-structure",sidebar_position:3,keywords:["Redis"],tags:["Redis"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2023-05-06 23:16",author:"Hans"}},s=void 0,a={unversionedId:"redis/Redis \u5e95\u5c42\u6570\u636e\u7ed3\u6784",id:"redis/Redis \u5e95\u5c42\u6570\u636e\u7ed3\u6784",title:"Redis \u5e95\u5c42\u6570\u636e\u7ed3\u6784",description:"Redis \u5e95\u5c42\u6570\u636e\u7ed3\u6784",source:"@site/docs/06.redis/03.Redis \u5e95\u5c42\u6570\u636e\u7ed3\u6784.md",sourceDirName:"06.redis",slug:"/redis/data-structure",permalink:"/docs/redis/data-structure",draft:!1,tags:[{label:"Redis",permalink:"/docs/tags/redis"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1683386160,formattedLastUpdatedAt:"2023\u5e745\u67086\u65e5",sidebarPosition:3,frontMatter:{title:"Redis \u5e95\u5c42\u6570\u636e\u7ed3\u6784",slug:"data-structure",sidebar_position:3,keywords:["Redis"],tags:["Redis"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2023-05-06 23:16",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"Redis \u57fa\u7840\u6570\u636e\u7ed3\u6784",permalink:"/docs/redis/data-types"},next:{title:"Redis \u6301\u4e45\u5316",permalink:"/docs/redis/persistence"}},p={},d=[{value:"Redis \u5e95\u5c42\u6570\u636e\u7ed3\u6784",id:"redis-\u5e95\u5c42\u6570\u636e\u7ed3\u6784",level:2},{value:"\u7b80\u5355\u52a8\u6001\u5b57\u7b26\u4e32 SDS",id:"\u7b80\u5355\u52a8\u6001\u5b57\u7b26\u4e32-sds",level:3},{value:"\u538b\u7f29\u5217\u8868 ZipList",id:"\u538b\u7f29\u5217\u8868-ziplist",level:3},{value:"\u5feb\u8868 QuickList",id:"\u5feb\u8868-quicklist",level:3},{value:"\u8df3\u8dc3\u5217\u8868 SkipList",id:"\u8df3\u8dc3\u5217\u8868-skiplist",level:3},{value:"Redis \u5bf9\u8c61\u4e0e\u5e95\u5c42\u7ed3\u6784\u5bf9\u5e94\u5173\u7cfb",id:"redis-\u5bf9\u8c61\u4e0e\u5e95\u5c42\u7ed3\u6784\u5bf9\u5e94\u5173\u7cfb",level:2}],o={toc:d};function u(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"redis-\u5e95\u5c42\u6570\u636e\u7ed3\u6784"},"Redis \u5e95\u5c42\u6570\u636e\u7ed3\u6784"),(0,l.kt)("p",null,(0,l.kt)("img",{src:i(89520).Z,width:"1938",height:"1128"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7b80\u5355\u52a8\u6001\u5b57\u7b26\u4e32 - sds"),(0,l.kt)("li",{parentName:"ul"},"\u538b\u7f29\u5217\u8868 - ZipList"),(0,l.kt)("li",{parentName:"ul"},"\u5feb\u8868 - QuickList"),(0,l.kt)("li",{parentName:"ul"},"\u5b57\u5178/\u54c8\u5e0c\u8868 - Dict"),(0,l.kt)("li",{parentName:"ul"},"\u6574\u6570\u96c6 - IntSet"),(0,l.kt)("li",{parentName:"ul"},"\u8df3\u8868 - ZSkipList")),(0,l.kt)("h3",{id:"\u7b80\u5355\u52a8\u6001\u5b57\u7b26\u4e32-sds"},"\u7b80\u5355\u52a8\u6001\u5b57\u7b26\u4e32 SDS"),(0,l.kt)("p",null,"Redis \u7684\u5b57\u7b26\u4e32\u53eb\u7740\u300cSDS\u300d\uff0c\u4e5f\u5c31\u662f Simple Dynamic String\u3002\u5b83\u7684\u7ed3\u6784\u662f\u4e00\u4e2a\u5e26\u957f\u5ea6\u4fe1\u606f\u7684\u5b57\u8282\u6570\u7ec4\uff0c\u800c\u4e0d\u662fC\u5b57\u7b26\u4e32\uff08\u4ee5",(0,l.kt)("inlineCode",{parentName:"p"},"\\0"),"\u7ed3\u5c3e\u7684char*\uff09\uff0c\u5b83\u88ab\u7528\u5728\u51e0\u4e4e\u6240\u6709\u7684Redis \u6a21\u5757\u4e2d\u3002"),(0,l.kt)("p",null,"Redis \u4e2d\u7684\u5b57\u7b26\u4e32\u662f\u53ef\u4ee5\u4fee\u6539\u7684\u5b57\u7b26\u4e32\uff0c\u5728\u5185\u5b58\u4e2d\u5b83\u662f\u4ee5\u5b57\u8282\u6570\u7ec4\u7684\u5f62\u5f0f\u5b58\u5728\u7684\u3002\u6211\u4eec\u77e5\u9053 C \u8bed\u8a00\u91cc\u9762\u7684\u5b57\u7b26\u4e32\u6807\u51c6\u5f62\u5f0f\u662f\u4ee5 NULL \u4f5c\u4e3a\u7ed3\u675f\u7b26\uff0c\u4f46\u662f\u5728 Redis \u91cc\u9762\u5b57\u7b26\u4e32\u4e0d\u662f\u8fd9\u4e48\u8868\u793a\u7684\u3002\u56e0\u4e3a\u8981\u83b7\u53d6 NULL \u7ed3\u5c3e\u7684\u5b57\u7b26\u4e32\u7684\u957f\u5ea6\u4f7f\u7528\u7684\u662f strlen \u6807\u51c6\u5e93\u51fd\u6570\uff0c\u8fd9\u4e2a\u51fd\u6570\u7684\u7b97\u6cd5\u590d\u6742\u5ea6\u662f O(n)\uff0c\u5b83\u9700\u8981\u5bf9\u5b57\u8282\u6570\u7ec4\u8fdb\u884c\u904d\u5386\u626b\u63cf\uff0c\u4f5c\u4e3a\u5355\u7ebf\u7a0b\u7684 Redis \u8868\u793a\u627f\u53d7\u4e0d\u8d77\u3002\u3002"),(0,l.kt)("h3",{id:"\u538b\u7f29\u5217\u8868-ziplist"},"\u538b\u7f29\u5217\u8868 ZipList"),(0,l.kt)("p",null,"Redis \u4e3a\u4e86\u8282\u7ea6\u5185\u5b58\u7a7a\u95f4\u4f7f\u7528\uff0czset \u548c hash \u5bb9\u5668\u5bf9\u8c61\u5728\u5143\u7d20\u4e2a\u6570\u8f83\u5c11\u7684\u65f6\u5019\uff0c\u91c7\u7528\u538b\u7f29\u5217\u8868 (ziplist) \u8fdb\u884c\u5b58\u50a8\u3002\u538b\u7f29\u5217\u8868\u662f\u4e00\u5757\u8fde\u7eed\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u5143\u7d20\u4e4b\u95f4\u7d27\u6328\u7740\u5b58\u50a8\uff0c\u6ca1\u6709\u4efb\u4f55\u5197\u4f59\u7a7a\u9699\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:i(25710).Z,width:"978",height:"452"})),(0,l.kt)("p",null,"\u538b\u7f29\u5217\u8868\u4e3a\u4e86\u652f\u6301\u53cc\u5411\u904d\u5386\uff0c\u6240\u4ee5\u624d\u4f1a\u6709 ztail_offset \u8fd9\u4e2a\u5b57\u6bb5\uff0c\u7528\u6765\u5feb\u901f\u5b9a\u4f4d\u5230\u6700\u540e\u4e00\u4e2a\u5143\u7d20\uff0c\u7136\u540e\u5012\u7740\u904d\u5386\u3002"),(0,l.kt)("p",null,"Entry \u7684\u6570\u636e\u7ed3\u6784"),(0,l.kt)("p",null,(0,l.kt)("img",{src:i(68600).Z,width:"785",height:"161"})),(0,l.kt)("p",null,"prevlen\uff1a\u524d\u4e00\u4e2aentry\u7684\u5927\u5c0f\uff1b\nencoding\uff1a\u4e0d\u540c\u7684\u60c5\u51b5\u4e0b\u503c\u4e0d\u540c\uff0c\u7528\u4e8e\u8868\u793a\u5f53\u524dentry\u7684\u7c7b\u578b\u548c\u957f\u5ea6\uff1b\ncontent\uff1a\u771f\u5b9e\u7528\u4e8e\u5b58\u50a8entry\u7684\u6570\u636e\uff1b"),(0,l.kt)("admonition",{title:"\u4e3a\u4ec0\u4e48ZipList\u7279\u522b\u7701\u5185\u5b58",type:"note"},(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},"ziplist\u8282\u7701\u5185\u5b58\u662f\u76f8\u5bf9\u4e8e\u666e\u901a\u7684list\u6765\u8bf4\u7684\uff0c\u5982\u679c\u662f\u666e\u901a\u7684\u6570\u7ec4\uff0c\u90a3\u4e48\u5b83\u6bcf\u4e2a\u5143\u7d20\u5360\u7528\u7684\u5185\u5b58\u662f\u4e00\u6837\u7684\u4e14\u53d6\u51b3\u4e8e\u6700\u5927\u7684\u90a3\u4e2a\u5143\u7d20\uff08\u5f88\u660e\u663e\u5b83\u662f\u9700\u8981\u9884\u7559\u7a7a\u95f4\u7684\uff09\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u6240\u4ee5ziplist\u5728\u8bbe\u8ba1\u65f6\u5c31\u5f88\u5bb9\u6613\u60f3\u5230\u8981\u5c3d\u91cf\u8ba9\u6bcf\u4e2a\u5143\u7d20\u6309\u7167\u5b9e\u9645\u7684\u5185\u5bb9\u5927\u5c0f\u5b58\u50a8\uff0c\u6240\u4ee5\u589e\u52a0encoding\u5b57\u6bb5\uff0c\u9488\u5bf9\u4e0d\u540c\u7684encoding\u6765\u7ec6\u5316\u5b58\u50a8\u5927\u5c0f\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u8fd9\u65f6\u5019\u8fd8\u9700\u8981\u89e3\u51b3\u7684\u4e00\u4e2a\u95ee\u9898\u662f\u904d\u5386\u5143\u7d20\u65f6\u5982\u4f55\u5b9a\u4f4d\u4e0b\u4e00\u4e2a\u5143\u7d20\u5462\uff1f\u5728\u666e\u901a\u6570\u7ec4\u4e2d\u6bcf\u4e2a\u5143\u7d20\u5b9a\u957f\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u8003\u8651\u8fd9\u4e2a\u95ee\u9898\uff1b"),(0,l.kt)("li",{parentName:"ul"},"\u4f46\u662fziplist\u4e2d\u6bcf\u4e2adata\u5360\u636e\u7684\u5185\u5b58\u4e0d\u4e00\u6837\uff0c\u6240\u4ee5\u4e3a\u4e86\u89e3\u51b3\u904d\u5386\uff0c\u9700\u8981\u589e\u52a0\u8bb0\u5f55\u4e0a\u4e00\u4e2a\u5143\u7d20\u7684length\uff0c\u6240\u4ee5\u589e\u52a0\u4e86prelen\u5b57\u6bb5\u3002"))),(0,l.kt)("h3",{id:"\u5feb\u8868-quicklist"},"\u5feb\u8868 QuickList"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"quicklist \u662f ziplist \u548c linkedlist \u7684\u6df7\u5408\u4f53\uff0c\u5b83\u5c06 linkedlist \u6309\u6bb5\u5207\u5206\uff0c\u6bcf\u4e00\u6bb5\u4f7f\u7528 ziplist \u6765\u7d27\u51d1\u5b58\u50a8\uff0c\u591a\u4e2a ziplist \u4e4b\u95f4\u4f7f\u7528\u53cc\u5411\u6307\u9488\u4e32\u63a5\u8d77\u6765\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{src:i(96874).Z,width:"937",height:"646"})),(0,l.kt)("p",null,(0,l.kt)("img",{src:i(11094).Z,width:"1190",height:"603"})),(0,l.kt)("h3",{id:"\u8df3\u8dc3\u5217\u8868-skiplist"},"\u8df3\u8dc3\u5217\u8868 SkipList"),(0,l.kt)("p",null,"Redis \u7684 zset \u662f\u4e00\u4e2a\u590d\u5408\u7ed3\u6784\uff0c\u4e00\u65b9\u9762\u5b83\u9700\u8981\u4e00\u4e2a hash \u7ed3\u6784\u6765\u5b58\u50a8 value \u548c score \u7684\u5bf9\u5e94\u5173\u7cfb\uff0c\u53e6\u4e00\u65b9\u9762\u9700\u8981\u63d0\u4f9b\u6309\u7167 score \u6765\u6392\u5e8f\u7684\u529f\u80fd\uff0c\u8fd8\u9700\u8981\u80fd\u591f\u6307\u5b9a score \u7684\u8303\u56f4\u6765\u83b7\u53d6 value \u5217\u8868\u7684\u529f\u80fd\uff0c\u8fd9\u5c31\u9700\u8981\u53e6\u5916\u4e00\u4e2a\u7ed3\u6784\u300c\u8df3\u8dc3\u5217\u8868\u300d"),(0,l.kt)("p",null,"\u8df3\u8dc3\u8868\u7684\u6027\u80fd\u53ef\u4ee5\u4fdd\u8bc1\u5728\u67e5\u627e\uff0c\u5220\u9664\uff0c\u6dfb\u52a0\u7b49\u64cd\u4f5c\u7684\u65f6\u5019\u5728\u5bf9\u6570\u671f\u671b\u65f6\u95f4\u5185\u5b8c\u6210\uff0c\u8fd9\u4e2a\u6027\u80fd\u662f\u53ef\u4ee5\u548c\u5e73\u8861\u6811\u6765\u76f8\u6bd4\u8f83\u7684\uff0c\u800c\u4e14\u5728\u5b9e\u73b0\u65b9\u9762\u6bd4\u5e73\u8861\u6811\u8981\u4f18\u96c5\uff0c\u8fd9\u5c31\u662f\u8df3\u8dc3\u8868\u7684\u957f\u5904\u3002\u8df3\u8dc3\u8868\u7684\u7f3a\u70b9\u5c31\u662f\u9700\u8981\u7684\u5b58\u50a8\u7a7a\u95f4\u6bd4\u8f83\u5927\uff0c\u5c5e\u4e8e\u5229\u7528\u7a7a\u95f4\u6765\u6362\u53d6\u65f6\u95f4\u7684\u6570\u636e\u7ed3\u6784"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-c"},"/* ZSETs use a specialized version of Skiplists */\ntypedef struct zskiplistNode {\n    sds ele;\n    double score;\n    struct zskiplistNode *backward;\n    struct zskiplistLevel {\n        struct zskiplistNode *forward;\n        unsigned int span;\n    } level[];\n} zskiplistNode;\n\ntypedef struct zskiplist {\n    struct zskiplistNode *header, *tail;\n    unsigned long length;\n    int level;\n} zskiplist;\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:i(65430).Z,width:"950",height:"780"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"zskiplist\u7684\u6838\u5fc3\u8bbe\u8ba1\u8981\u70b9")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u5934\u8282\u70b9"),"\u4e0d\u6301\u6709\u4efb\u4f55\u6570\u636e, \u4e14\u5176level[]\u7684\u957f\u5ea6\u4e3a32"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"\u6bcf\u4e2a\u7ed3\u70b9"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ele"),"\u5b57\u6bb5\uff0c\u6301\u6709\u6570\u636e\uff0c\u662fsds\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"score"),"\u5b57\u6bb5, \u5176\u6807\u793a\u7740\u7ed3\u70b9\u7684\u5f97\u5206, \u7ed3\u70b9\u4e4b\u95f4\u51ed\u501f\u5f97\u5206\u6765\u5224\u65ad\u5148\u540e\u987a\u5e8f, \u8df3\u8dc3\u8868\u4e2d\u7684\u7ed3\u70b9\u6309\u7ed3\u70b9\u7684\u5f97\u5206\u5347\u5e8f\u6392\u5217."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"backward"),"\u6307\u9488, \u8fd9\u662f\u539f\u7248\u8df3\u8dc3\u8868\u4e2d\u6240\u6ca1\u6709\u7684. \u8be5\u6307\u9488\u6307\u5411\u7ed3\u70b9\u7684\u524d\u4e00\u4e2a\u7d27\u90bb\u7ed3\u70b9."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"level"),"\u5b57\u6bb5, \u7528\u4ee5\u8bb0\u5f55\u6240\u6709\u7ed3\u70b9(\u9664\u8fc7\u5934\u8282\u70b9\u5916)\uff1b\u6bcf\u4e2a\u7ed3\u70b9\u4e2d\u6700\u591a\u6301\u670932\u4e2azskiplistLevel\u7ed3\u6784. \u5b9e\u9645\u6570\u91cf\u5728\u7ed3\u70b9\u521b\u5efa\u65f6, \u6309\u5e42\u6b21\u5b9a\u5f8b\u968f\u673a\u751f\u6210(\u4e0d\u8d85\u8fc732). \u6bcf\u4e2azskiplistLevel\u4e2d\u6709\u4e24\u4e2a\u5b57\u6bb5",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"forward"),"\u5b57\u6bb5\u6307\u5411\u6bd4\u81ea\u5df1\u5f97\u5206\u9ad8\u7684\u67d0\u4e2a\u7ed3\u70b9(\u4e0d\u4e00\u5b9a\u662f\u7d27\u90bb\u7684), \u5e76\u4e14, \u82e5\u5f53\u524dzskiplistLevel\u5b9e\u4f8b\u5728level[]\u4e2d\u7684\u7d22\u5f15\u4e3aX, \u5219\u5176forward\u5b57\u6bb5\u6307\u5411\u7684\u7ed3\u70b9, \u5176level[]\u5b57\u6bb5\u7684\u5bb9\u91cf\u81f3\u5c11\u662fX+1. \u8fd9\u4e5f\u662f\u4e0a\u56fe\u4e2d, \u4e3a\u4ec0\u4e48forward\u6307\u9488\u603b\u662f\u753b\u7684\u6c34\u5e73\u7684\u539f\u56e0."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"span"),"\u5b57\u6bb5\u4ee3\u8868forward\u5b57\u6bb5\u6307\u5411\u7684\u7ed3\u70b9, \u8ddd\u79bb\u5f53\u524d\u7ed3\u70b9\u7684\u8ddd\u79bb. \u7d27\u90bb\u7684\u4e24\u4e2a\u7ed3\u70b9\u4e4b\u95f4\u7684\u8ddd\u79bb\u5b9a\u4e49\u4e3a1.")))))),(0,l.kt)("h2",{id:"redis-\u5bf9\u8c61\u4e0e\u5e95\u5c42\u7ed3\u6784\u5bf9\u5e94\u5173\u7cfb"},"Redis \u5bf9\u8c61\u4e0e\u5e95\u5c42\u7ed3\u6784\u5bf9\u5e94\u5173\u7cfb"),(0,l.kt)("p",null,(0,l.kt)("img",{src:i(89520).Z,width:"1938",height:"1128"})),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\uff1aSDS"),(0,l.kt)("li",{parentName:"ul"},"List\uff1aQuickList"),(0,l.kt)("li",{parentName:"ul"},"Hash\uff1aZipList / HashTable"),(0,l.kt)("li",{parentName:"ul"},"Set\uff1aIntSet"),(0,l.kt)("li",{parentName:"ul"},"ZSet\uff1aZSkipList")),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.pdai.tech/md/db/nosql-redis/db-redis-x-redis-ds.html"},"https://www.pdai.tech/md/db/nosql-redis/db-redis-x-redis-ds.html")))}u.isMDXComponent=!0},89520:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/20230423224034-4631e269a9b5d1146521c5e0f8a4c475.png"},25710:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/20230507160407-b2398b60268808424859e08825e7e2c5.png"},68600:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/20230507164406-b3991aae94644e17e52ef4842e71bfd2.png"},11094:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/20230507170315-671127942966ce671d50769ec84a6e20.png"},96874:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/20230507170531-47818e43ddb3f7426ba1547e04afcc4e.png"},65430:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/20230507171345-4f045f6328322447191f6bca43bd113b.png"}}]);
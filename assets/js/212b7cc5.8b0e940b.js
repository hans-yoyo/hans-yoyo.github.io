"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1632],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=l(n),u=a,d=g["".concat(s,".").concat(u)]||g[u]||m[u]||p;return n?r.createElement(d,o(o({ref:t},c),{},{components:n})):r.createElement(d,o({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},74255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const p={title:"Spring\u6838\u5fc3-AOP\u7406\u89e3\u53ca\u4f7f\u7528",slug:"aop-basic",sidebar_position:5,keywords:["Spring"],tags:["Spring"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2023-05-24 23:15",author:"Hans"}},o=void 0,i={unversionedId:"spring/Spring\u6838\u5fc3-AOP\u7406\u89e3\u53ca\u4f7f\u7528",id:"spring/Spring\u6838\u5fc3-AOP\u7406\u89e3\u53ca\u4f7f\u7528",title:"Spring\u6838\u5fc3-AOP\u7406\u89e3\u53ca\u4f7f\u7528",description:"\u5982\u4f55\u7406\u89e3 AOP",source:"@site/docs/04.spring/05.Spring\u6838\u5fc3-AOP\u7406\u89e3\u53ca\u4f7f\u7528.md",sourceDirName:"04.spring",slug:"/spring/aop-basic",permalink:"/docs/spring/aop-basic",draft:!1,tags:[{label:"Spring",permalink:"/docs/tags/spring"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1684941300,formattedLastUpdatedAt:"2023\u5e745\u670824\u65e5",sidebarPosition:5,frontMatter:{title:"Spring\u6838\u5fc3-AOP\u7406\u89e3\u53ca\u4f7f\u7528",slug:"aop-basic",sidebar_position:5,keywords:["Spring"],tags:["Spring"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2023-05-24 23:15",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"Spring\u6838\u5fc3-IoC-Bean\u5b9e\u4f8b\u5316\u3001Bean\u751f\u547d\u5468\u671f\u3001\u5faa\u73af\u4f9d\u8d56",permalink:"/docs/spring/bean-lifecycle"},next:{title:"Spring\u6838\u5fc3-AOP\u5207\u9762\u5b9e\u73b0\u53ca\u4ee3\u7406\u521b\u5efa",permalink:"/docs/spring/aop-implement"}},s={},l=[{value:"\u5982\u4f55\u7406\u89e3 AOP",id:"\u5982\u4f55\u7406\u89e3-aop",level:2},{value:"\u4ec0\u4e48\u662f AOP",id:"\u4ec0\u4e48\u662f-aop",level:3},{value:"AOP \u672f\u8bed",id:"aop-\u672f\u8bed",level:3},{value:"\u901a\u77e5\u7c7b\u578b",id:"\u901a\u77e5\u7c7b\u578b",level:3},{value:"Spring AOP \u4e0e AspectJ \u662f\u4ec0\u4e48\u5173\u7cfb",id:"spring-aop-\u4e0e-aspectj-\u662f\u4ec0\u4e48\u5173\u7cfb",level:3},{value:"AOP \u7684\u5b9e\u73b0\u65b9\u5f0f",id:"aop-\u7684\u5b9e\u73b0\u65b9\u5f0f",level:2},{value:"XML \u914d\u7f6e\u65b9\u5f0f",id:"xml-\u914d\u7f6e\u65b9\u5f0f",level:3},{value:"\u6ce8\u89e3\u65b9\u5f0f",id:"\u6ce8\u89e3\u65b9\u5f0f",level:3},{value:"\u5207\u5165\u70b9\uff08pointcut\uff09\u7684\u7533\u660e\u89c4\u5219",id:"\u5207\u5165\u70b9pointcut\u7684\u7533\u660e\u89c4\u5219",level:3}],c={toc:l};function m(e){let{components:t,...p}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,p,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u5982\u4f55\u7406\u89e3-aop"},"\u5982\u4f55\u7406\u89e3 AOP"),(0,a.kt)("h3",{id:"\u4ec0\u4e48\u662f-aop"},"\u4ec0\u4e48\u662f AOP"),(0,a.kt)("p",null,"Spring \u6846\u67b6\u901a\u8fc7\u5b9a\u4e49\u5207\u9762, \u901a\u8fc7\u62e6\u622a\u5207\u70b9\u5b9e\u73b0\u4e86\u4e0d\u540c\u4e1a\u52a1\u6a21\u5757\u7684\u89e3\u8026\uff0c\u8fd9\u4e2a\u5c31\u53eb ",(0,a.kt)("strong",{parentName:"p"},"\u9762\u5411\u5207\u9762\u7f16\u7a0b - Aspect Oriented Programming (AOP)"),"\u3002"),(0,a.kt)("p",null,"\u5728 AOP \u7684\u601d\u60f3\u2fa5\u2faf\uff0c\u5468\u8fb9\u529f\u80fd\uff08\u2f50\u5982 ",(0,a.kt)("strong",{parentName:"p"},"\u6027\u80fd\u7edf\u8ba1\uff0c\u2f47\u5fd7\uff0c\u4e8b\u52a1\u7ba1\u7406")," \u7b49\uff09\u88ab\u5b9a\u4e49\u4e3a\u5207\u2faf\uff0c\u6838\u2f3c\u529f\u80fd\u548c\u5207\u2faf\u529f\u80fd\u5206\u522b\u72ec\u2f74\u8fdb\u2f8f\u5f00\u53d1\uff0c\u7136\u540e\u628a\u6838\u2f3c\u529f\u80fd\u548c\u5207\u2faf\u529f\u80fd\u201c\u7f16\u7ec7\u201d\u5728\u2f00\u8d77\uff0c\u8fd9\u5c31\u53eb AOP\u3002"),(0,a.kt)("p",null,"AOP\u7684\u672c\u8d28\u4e5f\u662f\u4e3a\u4e86\u89e3\u8026\uff0c\u5b83\u662f\u4e00\u79cd\u8bbe\u8ba1\u601d\u60f3\u3002AOP \u5c31\u662f\u5c06\u5206\u6563\u5728\u5404\u4e2a\u4e1a\u52a1\u903b\u8f91\u4ee3\u7801\u4e2d\u76f8\u540c\u7684\u4ee3\u7801\u901a\u8fc7",(0,a.kt)("strong",{parentName:"p"},"\u6a2a\u5411\u5207\u5272"),"\u7684\u65b9\u5f0f\u62bd\u53d6\u5230\u4e00\u4e2a\u72ec\u7acb\u7684\u6a21\u5757\u4e2d"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(95351).Z,width:"768",height:"356"})),(0,a.kt)("p",null,"OOP\u9762\u5411\u5bf9\u8c61\u7f16\u7a0b\uff0c\u9488\u5bf9\u4e1a\u52a1\u5904\u7406\u8fc7\u7a0b\u7684\u5b9e\u4f53\u53ca\u5176\u5c5e\u6027\u548c\u884c\u4e3a\u8fdb\u884c\u62bd\u8c61\u5c01\u88c5\uff0c\u4ee5\u83b7\u5f97\u66f4\u52a0\u6e05\u6670\u9ad8\u6548\u7684\u903b\u8f91\u5355\u5143\u5212\u5206\u3002"),(0,a.kt)("p",null,"\u800cAOP\u5219\u662f\u9488\u5bf9\u4e1a\u52a1\u5904\u7406\u8fc7\u7a0b\u4e2d\u7684\u5207\u9762\u8fdb\u884c\u63d0\u53d6\uff0c\u5b83\u6240\u9762\u5bf9\u7684\u662f\u5904\u7406\u8fc7\u7a0b\u7684\u67d0\u4e2a\u6b65\u9aa4\u6216\u9636\u6bb5\uff0c\u4ee5\u83b7\u5f97\u903b\u8f91\u8fc7\u7a0b\u7684\u4e2d\u5404\u90e8\u5206\u4e4b\u95f4\u4f4e\u8026\u5408\u7684\u9694\u79bb\u6548\u679c\u3002\u8fd9\u4e24\u79cd\u8bbe\u8ba1\u601d\u60f3\u5728\u76ee\u6807\u4e0a\u6709\u7740\u672c\u8d28\u7684\u5dee\u5f02\u3002"),(0,a.kt)("h3",{id:"aop-\u672f\u8bed"},"AOP \u672f\u8bed"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u8fde\u63a5\u70b9\uff08Jointpoint\uff09"),"\uff1a\u8868\u793a\u9700\u8981\u5728\u7a0b\u5e8f\u4e2d\u63d2\u5165\u6a2a\u5207\u5173\u6ce8\u70b9\u7684\u6269\u5c55\u70b9\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u8fde\u63a5\u70b9\u53ef\u80fd\u662f\u7c7b\u521d\u59cb\u5316\u3001\u65b9\u6cd5\u6267\u884c\u3001\u65b9\u6cd5\u8c03\u7528\u3001\u5b57\u6bb5\u8c03\u7528\u6216\u5904\u7406\u5f02\u5e38\u7b49\u7b49"),"\uff0cSpring\u53ea\u652f\u6301\u65b9\u6cd5\u6267\u884c\u8fde\u63a5\u70b9\uff0c\u5728AOP\u4e2d\u8868\u793a\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u5728\u54ea\u91cc\u5e72"),"\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5207\u5165\u70b9\uff08Pointcut\uff09"),"\uff1a \u9009\u62e9\u4e00\u7ec4\u76f8\u5173\u8fde\u63a5\u70b9\u7684\u6a21\u5f0f\uff0c\u5373\u53ef\u4ee5\u8ba4\u4e3a\u8fde\u63a5\u70b9\u7684\u96c6\u5408\uff0cSpring\u652f\u6301perl5\u6b63\u5219\u8868\u8fbe\u5f0f\u548cAspectJ\u5207\u5165\u70b9\u6a21\u5f0f\uff0cSpring\u9ed8\u8ba4\u4f7f\u7528AspectJ\u8bed\u6cd5\uff0c\u5728AOP\u4e2d\u8868\u793a\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u5728\u54ea\u91cc\u5e72\u7684\u96c6\u5408"),"\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u901a\u77e5\uff08Advice\uff09"),"\uff1a\u5728\u8fde\u63a5\u70b9\u4e0a\u6267\u884c\u7684\u884c\u4e3a\uff0c\u901a\u77e5\u63d0\u4f9b\u4e86\u5728AOP\u4e2d\u9700\u8981\u5728\u5207\u5165\u70b9\u6240\u9009\u62e9\u7684\u8fde\u63a5\u70b9\u5904\u8fdb\u884c\u6269\u5c55\u73b0\u6709\u884c\u4e3a\u7684\u624b\u6bb5\uff1b\u5305\u62ec\u524d\u7f6e\u901a\u77e5\uff08before advice\uff09\u3001\u540e\u7f6e\u901a\u77e5(after advice)\u3001\u73af\u7ed5\u901a\u77e5\uff08around advice\uff09\uff0c\u5728Spring\u4e2d\u901a\u8fc7\u4ee3\u7406\u6a21\u5f0f\u5b9e\u73b0AOP\uff0c\u5e76\u901a\u8fc7\u62e6\u622a\u5668\u6a21\u5f0f\u4ee5\u73af\u7ed5\u8fde\u63a5\u70b9\u7684\u62e6\u622a\u5668\u94fe\u7ec7\u5165\u901a\u77e5\uff1b\u5728AOP\u4e2d\u8868\u793a\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u5e72\u4ec0\u4e48"),"\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u65b9\u9762/\u5207\u9762\uff08Aspect\uff09"),"\uff1a\u6a2a\u5207\u5173\u6ce8\u70b9\u7684\u6a21\u5757\u5316\uff0c\u6bd4\u5982\u4e0a\u8fb9\u63d0\u5230\u7684\u65e5\u5fd7\u7ec4\u4ef6\u3002\u53ef\u4ee5\u8ba4\u4e3a\u662f\u901a\u77e5\u3001\u5f15\u5165\u548c\u5207\u5165\u70b9\u7684\u7ec4\u5408\uff1b\u5728Spring\u4e2d\u53ef\u4ee5\u4f7f\u7528Schema\u548c@AspectJ\u65b9\u5f0f\u8fdb\u884c\u7ec4\u7ec7\u5b9e\u73b0\uff1b\u5728AOP\u4e2d\u8868\u793a\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u5728\u54ea\u5e72\u548c\u5e72\u4ec0\u4e48\u96c6\u5408"),"\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5f15\u5165\uff08inter-type declaration\uff09"),"\uff1a\u4e5f\u79f0\u4e3a\u5185\u90e8\u7c7b\u578b\u58f0\u660e\uff0c\u4e3a\u5df2\u6709\u7684\u7c7b\u6dfb\u52a0\u989d\u5916\u65b0\u7684\u5b57\u6bb5\u6216\u65b9\u6cd5\uff0cSpring\u5141\u8bb8\u5f15\u5165\u65b0\u7684\u63a5\u53e3\uff08\u5fc5\u987b\u5bf9\u5e94\u4e00\u4e2a\u5b9e\u73b0\uff09\u5230\u6240\u6709\u88ab\u4ee3\u7406\u5bf9\u8c61\uff08\u76ee\u6807\u5bf9\u8c61\uff09, \u5728AOP\u4e2d\u8868\u793a\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u5e72\u4ec0\u4e48\uff08\u5f15\u5165\u4ec0\u4e48\uff09"),"\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u76ee\u6807\u5bf9\u8c61\uff08Target Object\uff09"),"\uff1a\u9700\u8981\u88ab\u7ec7\u5165\u6a2a\u5207\u5173\u6ce8\u70b9\u7684\u5bf9\u8c61\uff0c\u5373\u8be5\u5bf9\u8c61\u662f\u5207\u5165\u70b9\u9009\u62e9\u7684\u5bf9\u8c61\uff0c\u9700\u8981\u88ab\u901a\u77e5\u7684\u5bf9\u8c61\uff0c\u4ece\u800c\u4e5f\u53ef\u79f0\u4e3a\u88ab\u901a\u77e5\u5bf9\u8c61\uff1b\u7531\u4e8eSpring AOP \u901a\u8fc7\u4ee3\u7406\u6a21\u5f0f\u5b9e\u73b0\uff0c\u4ece\u800c\u8fd9\u4e2a\u5bf9\u8c61\u6c38\u8fdc\u662f\u88ab\u4ee3\u7406\u5bf9\u8c61\uff0c\u5728AOP\u4e2d\u8868\u793a\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u5bf9\u8c01\u5e72"),"\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u7ec7\u5165\uff08Weaving\uff09"),"\uff1a\u628a\u5207\u9762\u8fde\u63a5\u5230\u5176\u5b83\u7684\u5e94\u7528\u7a0b\u5e8f\u7c7b\u578b\u6216\u8005\u5bf9\u8c61\u4e0a\uff0c\u5e76\u521b\u5efa\u4e00\u4e2a\u88ab\u901a\u77e5\u7684\u5bf9\u8c61\u3002\u8fd9\u4e9b\u53ef\u4ee5\u5728\u7f16\u8bd1\u65f6\uff08\u4f8b\u5982\u4f7f\u7528AspectJ\u7f16\u8bd1\u5668\uff09\uff0c\u7c7b\u52a0\u8f7d\u65f6\u548c\u8fd0\u884c\u65f6\u5b8c\u6210\u3002Spring\u548c\u5176\u4ed6\u7eafJava AOP\u6846\u67b6\u4e00\u6837\uff0c\u5728\u8fd0\u884c\u65f6\u5b8c\u6210\u7ec7\u5165\u3002\u5728AOP\u4e2d\u8868\u793a\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u600e\u4e48\u5b9e\u73b0\u7684"),"\uff1b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"AOP\u4ee3\u7406\uff08AOP Proxy\uff09"),"\uff1aAOP\u6846\u67b6\u4f7f\u7528\u4ee3\u7406\u6a21\u5f0f\u521b\u5efa\u7684\u5bf9\u8c61\uff0c\u4ece\u800c\u5b9e\u73b0\u5728\u8fde\u63a5\u70b9\u5904\u63d2\u5165\u901a\u77e5\uff08\u5373\u5e94\u7528\u5207\u9762\uff09\uff0c\u5c31\u662f\u901a\u8fc7\u4ee3\u7406\u6765\u5bf9\u76ee\u6807\u5bf9\u8c61\u5e94\u7528\u5207\u9762\u3002\u5728Spring\u4e2d\uff0cAOP\u4ee3\u7406\u53ef\u4ee5\u7528JDK\u52a8\u6001\u4ee3\u7406\u6216CGLIB\u4ee3\u7406\u5b9e\u73b0\uff0c\u800c\u901a\u8fc7\u62e6\u622a\u5668\u6a21\u578b\u5e94\u7528\u5207\u9762\u3002\u5728AOP\u4e2d\u8868\u793a\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u600e\u4e48\u5b9e\u73b0\u7684\u4e00\u79cd\u5178\u578b\u65b9\u5f0f"),"\uff1b"))),(0,a.kt)("p",null,"\u7ed3\u5408\u5177\u4f53\u7684\u4e1a\u52a1"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(73e3).Z,width:"992",height:"442"})),(0,a.kt)("h3",{id:"\u901a\u77e5\u7c7b\u578b"},"\u901a\u77e5\u7c7b\u578b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u524d\u7f6e\u901a\u77e5\uff08Before advice\uff09"),"\uff1a\u5728\u67d0\u8fde\u63a5\u70b9\u4e4b\u524d\u6267\u884c\u7684\u901a\u77e5\uff0c\u4f46\u8fd9\u4e2a\u901a\u77e5\u4e0d\u80fd\u963b\u6b62\u8fde\u63a5\u70b9\u4e4b\u524d\u7684\u6267\u884c\u6d41\u7a0b\uff08\u9664\u975e\u5b83\u629b\u51fa\u4e00\u4e2a\u5f02\u5e38\uff09\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u540e\u7f6e\u901a\u77e5\uff08After returning advice\uff09"),"\uff1a\u5728\u67d0\u8fde\u63a5\u70b9\u6b63\u5e38\u5b8c\u6210\u540e\u6267\u884c\u7684\u901a\u77e5\uff1a\u4f8b\u5982\uff0c\u4e00\u4e2a\u65b9\u6cd5\u6ca1\u6709\u629b\u51fa\u4efb\u4f55\u5f02\u5e38\uff0c\u6b63\u5e38\u8fd4\u56de\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u5f02\u5e38\u901a\u77e5\uff08After throwing advice\uff09"),"\uff1a\u5728\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38\u9000\u51fa\u65f6\u6267\u884c\u7684\u901a\u77e5\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u6700\u7ec8\u901a\u77e5\uff08After (finally) advice\uff09"),"\uff1a\u5f53\u67d0\u8fde\u63a5\u70b9\u9000\u51fa\u7684\u65f6\u5019\u6267\u884c\u7684\u901a\u77e5\uff08\u4e0d\u8bba\u662f\u6b63\u5e38\u8fd4\u56de\u8fd8\u662f\u5f02\u5e38\u9000\u51fa\uff09\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"\u73af\u7ed5\u901a\u77e5\uff08Around Advice\uff09"),"\uff1a\u5305\u56f4\u4e00\u4e2a\u8fde\u63a5\u70b9\u7684\u901a\u77e5\uff0c\u5982\u65b9\u6cd5\u8c03\u7528\u3002\u8fd9\u662f\u6700\u5f3a\u5927\u7684\u4e00\u79cd\u901a\u77e5\u7c7b\u578b\u3002\u73af\u7ed5\u901a\u77e5\u53ef\u4ee5\u5728\u65b9\u6cd5\u8c03\u7528\u524d\u540e\u5b8c\u6210\u81ea\u5b9a\u4e49\u7684\u884c\u4e3a\u3002\u5b83\u4e5f\u4f1a\u9009\u62e9\u662f\u5426\u7ee7\u7eed\u6267\u884c\u8fde\u63a5\u70b9\u6216\u76f4\u63a5\u8fd4\u56de\u5b83\u81ea\u5df1\u7684\u8fd4\u56de\u503c\u6216\u629b\u51fa\u5f02\u5e38\u6765\u7ed3\u675f\u6267\u884c\u3002"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!TIP]"," \u591a\u4e2a\u901a\u77e5\u5728\u540c\u4e00\u76f8\u540c\u8fde\u63a5\u70b9\uff0c\u5982\u4f55\u786e\u5b9a\u987a\u5e8f"),(0,a.kt)("p",{parentName:"blockquote"},"\u5f53\u5b9a\u4e49\u5728\u4e0d\u540c\u7684\u5207\u9762\u91cc\u7684\u4e24\u4e2a\u901a\u77e5\u90fd\u9700\u8981\u5728\u4e00\u4e2a\u76f8\u540c\u7684\u8fde\u63a5\u70b9\u4e2d\u8fd0\u884c\uff0c \u90a3\u4e48\u9664\u975e\u4f60\u6307\u5b9a\uff0c\u5426\u5219\u6267\u884c\u7684\u987a\u5e8f\u662f\u672a\u77e5\u7684\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u4f18\u5148\u7ea7\u6765\u63a7\u5236\u6267\u884c\u987a\u5e8f\u3002 \u5728\u6807\u51c6\u7684 Spring \u65b9\u6cd5\u4e2d\u53ef\u4ee5\u5728\u5207\u9762\u7c7b\u4e2d\u5b9e\u73b0 ",(0,a.kt)("inlineCode",{parentName:"p"},"org.springframework.core.Ordered")," \u63a5\u53e3\u6216\u8005\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"@Order")," \u6ce8\u89e3 \u505a\u5230\u8fd9\u4e00\u70b9\u3002\u5728\u4e24\u4e2a\u5207\u9762\u4e2d\uff0c Ordered.getValue()\u65b9\u6cd5\u8fd4\u56de\u503c\uff08\u6216\u8005\u6ce8\u89e3\u503c\uff09\u8f83\u4f4e\u7684\u90a3\u4e2a\u6709\u66f4\u9ad8\u7684\u4f18\u5148\u7ea7\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\n// \u6267\u884c\u987a\u5e8f\n21:23:08.482 [main] WARN com.hans.tech.springframework.aspect.LogAspect - \u73af\u7ed5\u901a\u77e5: \u8fdb\u5165\u65b9\u6cd5\n21:23:08.482 [main] WARN com.hans.tech.springframework.aspect.LogAspect - \u524d\u7f6e\u901a\u77e5\n21:23:08.507 [main] WARN com.hans.tech.springframework.service.AopDemoServiceImpl - AopDemoServiceImpl.doMethod1()\n21:23:08.507 [main] WARN com.hans.tech.springframework.aspect.LogAspect - \u73af\u7ed5\u901a\u77e5: \u9000\u51fa\u65b9\u6cd5\n21:23:08.507 [main] WARN com.hans.tech.springframework.aspect.LogAspect - \u6700\u7ec8\u901a\u77e5\n\n")),(0,a.kt)("h3",{id:"spring-aop-\u4e0e-aspectj-\u662f\u4ec0\u4e48\u5173\u7cfb"},"Spring AOP \u4e0e AspectJ \u662f\u4ec0\u4e48\u5173\u7cfb"),(0,a.kt)("p",null,"AspectJ\u662f\u4e00\u4e2ajava\u5b9e\u73b0\u7684AOP\u6846\u67b6\uff0c\u5b83\u80fd\u591f\u5bf9java\u4ee3\u7801\u8fdb\u884cAOP\u7f16\u8bd1\uff0c\u8ba9java\u4ee3\u7801\u5177\u6709AspectJ\u7684AOP\u529f\u80fd\u3002\u53ef\u4ee5\u8fd9\u6837\u8bf4AspectJ\u662f\u76ee\u524d\u5b9e\u73b0AOP\u6846\u67b6\u4e2d\u6700\u6210\u719f"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u52a8\u6001\u7ec7\u5165"),"\u548c",(0,a.kt)("strong",{parentName:"p"},"\u9759\u6001\u7ec7\u5165"),"\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u52a8\u6001\u7ec7\u5165\u7684\u65b9\u5f0f\u662f\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u5c06\u8981\u589e\u5f3a\u7684\u4ee3\u7801\u7ec7\u5165\u5230\u76ee\u6807\u7c7b\u4e2d\uff0c\u8fd9\u6837\u5f80\u5f80\u662f\u901a\u8fc7\u52a8\u6001\u4ee3\u7406\u6280\u672f\u5b8c\u6210\u7684\uff0c\u5982Java JDK\u7684\u52a8\u6001\u4ee3\u7406(Proxy\uff0c\u5e95\u5c42\u901a\u8fc7\u53cd\u5c04\u5b9e\u73b0)\u6216\u8005CGLIB\u7684\u52a8\u6001\u4ee3\u7406(\u5e95\u5c42\u901a\u8fc7\u7ee7\u627f\u5b9e\u73b0)\uff0cSpring AOP\u91c7\u7528\u7684\u5c31\u662f\u57fa\u4e8e\u8fd0\u884c\u65f6\u589e\u5f3a\u7684\u4ee3\u7406\u6280\u672f"),(0,a.kt)("li",{parentName:"ol"},"ApectJ\u91c7\u7528\u7684\u5c31\u662f\u9759\u6001\u7ec7\u5165\u7684\u65b9\u5f0f\u3002ApectJ\u4e3b\u8981\u91c7\u7528\u7684\u662f\u7f16\u8bd1\u671f\u7ec7\u5165\uff0c\u5728\u8fd9\u4e2a\u671f\u95f4\u4f7f\u7528AspectJ\u7684acj\u7f16\u8bd1\u5668(\u7c7b\u4f3cjavac)\u628aaspect\u7c7b\u7f16\u8bd1\u6210class\u5b57\u8282\u7801\u540e\uff0c\u5728java\u76ee\u6807\u7c7b\u7f16\u8bd1\u65f6\u7ec7\u5165\uff0c\u5373\u5148\u7f16\u8bd1aspect\u7c7b\u518d\u7f16\u8bd1\u76ee\u6807\u7c7b\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(50170).Z,width:"523",height:"228"})),(0,a.kt)("h2",{id:"aop-\u7684\u5b9e\u73b0\u65b9\u5f0f"},"AOP \u7684\u5b9e\u73b0\u65b9\u5f0f"),(0,a.kt)("h3",{id:"xml-\u914d\u7f6e\u65b9\u5f0f"},"XML \u914d\u7f6e\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'\n<?xml version="1.0" encoding="UTF-8"?>\n<beans xmlns="http://www.springframework.org/schema/beans"\n       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n       xmlns:aop="http://www.springframework.org/schema/aop"\n       xmlns:context="http://www.springframework.org/schema/context"\n       xsi:schemaLocation="http://www.springframework.org/schema/beans\n http://www.springframework.org/schema/beans/spring-beans.xsd\n http://www.springframework.org/schema/aop\n http://www.springframework.org/schema/aop/spring-aop.xsd\n http://www.springframework.org/schema/context\n http://www.springframework.org/schema/context/spring-context.xsd\n">\n\n    <context:component-scan base-package="com.hans.tech.springframework" />\n\n    <aop:aspectj-autoproxy/>\n\n    \x3c!-- \u76ee\u6807\u7c7b --\x3e\n    <bean id="demoService" class="com.hans.tech.springframework.service.AopDemoServiceImpl">\n    </bean>\n\n    \x3c!-- \u5207\u9762 --\x3e\n    <bean id="logAspect" class="com.hans.tech.springframework.aspect.LogAspect">\n    </bean>\n\n    <aop:config>\n        \x3c!-- \u914d\u7f6e\u5207\u9762 --\x3e\n        <aop:aspect ref="logAspect">\n            \x3c!-- \u914d\u7f6e\u5207\u5165\u70b9 --\x3e\n            <aop:pointcut id="pointCutMethod" expression="execution(* com.hans.tech.springframework.service.*.*(..))"/>\n            \x3c!-- \u73af\u7ed5\u901a\u77e5 --\x3e\n            <aop:around method="doAround" pointcut-ref="pointCutMethod"/>\n            \x3c!-- \u524d\u7f6e\u901a\u77e5 --\x3e\n            <aop:before method="doBefore" pointcut-ref="pointCutMethod"/>\n            \x3c!-- \u540e\u7f6e\u901a\u77e5\uff1breturning\u5c5e\u6027\uff1a\u7528\u4e8e\u8bbe\u7f6e\u540e\u7f6e\u901a\u77e5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u540d\u79f0\uff0c\u7c7b\u578b\u662fObject --\x3e\n            <aop:after-returning method="doAfterReturning" pointcut-ref="pointCutMethod" returning="result"/>\n            \x3c!-- \u5f02\u5e38\u901a\u77e5\uff1a\u5982\u679c\u6ca1\u6709\u5f02\u5e38\uff0c\u5c06\u4e0d\u4f1a\u6267\u884c\u589e\u5f3a\uff1bthrowing\u5c5e\u6027\uff1a\u7528\u4e8e\u8bbe\u7f6e\u901a\u77e5\u7b2c\u4e8c\u4e2a\u53c2\u6570\u7684\u7684\u540d\u79f0\u3001\u7c7b\u578b--\x3e\n            <aop:after-throwing method="doAfterThrowing" pointcut-ref="pointCutMethod" throwing="e"/>\n            \x3c!-- \u6700\u7ec8\u901a\u77e5 --\x3e\n            <aop:after method="doAfter" pointcut-ref="pointCutMethod"/>\n        </aop:aspect>\n    </aop:config>\n\n</beans>\n\n')),(0,a.kt)("h3",{id:"\u6ce8\u89e3\u65b9\u5f0f"},"\u6ce8\u89e3\u65b9\u5f0f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Aspect\n@Component\n@EnableAspectJAutoProxy\npublic class LogAspect {\n\n    /**\n     * define point cut.\n     */\n    @Pointcut("execution(* com.hans.tech.springframework.service.*.*(..))")\n    private void pointCutMethod() {\n    }\n\n    /**\n     * \u73af\u7ed5\u901a\u77e5\n     */\n    @Around("pointCutMethod()")\n    public Object doAround(ProceedingJoinPoint pjp) throws Throwable {\n        Object o = pjp.proceed();\n        return o;\n    }\n\n    /**\n     * \u524d\u7f6e\u901a\u77e5.\n     */\n    @Before("pointCutMethod()")\n    public void doBefore() {\n    }\n\n    /**\n     * \u540e\u7f6e\u901a\u77e5.\n     */\n    @AfterReturning(pointcut = "pointCutMethod()", returning = "result")\n    public void doAfterReturning(String result) {\n    }\n\n    /**\n     * \u5f02\u5e38\u901a\u77e5.\n     */\n    @AfterThrowing(pointcut = "pointCutMethod()", throwing = "e")\n    public void doAfterThrowing(Exception e) {\n    }\n\n    /**\n     * \u6700\u7ec8\u901a\u77e5.\n     */\n    @After("pointCutMethod()")\n    public void doAfter() {\n    }\n\n}\n')),(0,a.kt)("h3",{id:"\u5207\u5165\u70b9pointcut\u7684\u7533\u660e\u89c4\u5219"},"\u5207\u5165\u70b9\uff08pointcut\uff09\u7684\u7533\u660e\u89c4\u5219"),(0,a.kt)("p",null,"\u6267\u884c\u8868\u8fbe\u5f0f\u7684\u683c\u5f0f\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"\nexecution\uff08modifiers-pattern? ret-type-pattern declaring-type-pattern? name-pattern\uff08param-pattern\uff09 throws-pattern?\uff09\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ret-type-pattern \u8fd4\u56de\u7c7b\u578b\u6a21\u5f0f, name-pattern\u540d\u5b57\u6a21\u5f0f\u548cparam-pattern\u53c2\u6570\u6a21\u5f0f\u662f\u5fc5\u9009\u7684\uff0c \u5176\u5b83\u90e8\u5206\u90fd\u662f\u53ef\u9009\u7684\u3002\u8fd4\u56de\u7c7b\u578b\u6a21\u5f0f\u51b3\u5b9a\u4e86\u65b9\u6cd5\u7684\u8fd4\u56de\u7c7b\u578b\u5fc5\u987b\u4f9d\u6b21\u5339\u914d\u4e00\u4e2a\u8fde\u63a5\u70b9\u3002 \u4f60\u4f1a\u4f7f\u7528\u7684\u6700\u9891\u7e41\u7684\u8fd4\u56de\u7c7b\u578b\u6a21\u5f0f\u662f",(0,a.kt)("inlineCode",{parentName:"li"},"*"),"\uff0c",(0,a.kt)("strong",{parentName:"li"},"\u5b83\u4ee3\u8868\u4e86\u5339\u914d\u4efb\u610f\u7684\u8fd4\u56de\u7c7b\u578b"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},"declaring-type-pattern, \u4e00\u4e2a\u5168\u9650\u5b9a\u7684\u7c7b\u578b\u540d\u5c06\u53ea\u4f1a\u5339\u914d\u8fd4\u56de\u7ed9\u5b9a\u7c7b\u578b\u7684\u65b9\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"name-pattern \u540d\u5b57\u6a21\u5f0f\u5339\u914d\u7684\u662f\u65b9\u6cd5\u540d\u3002 \u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"*"),"\u901a\u914d\u7b26\u4f5c\u4e3a\u6240\u6709\u6216\u8005\u90e8\u5206\u547d\u540d\u6a21\u5f0f\u3002"),(0,a.kt)("li",{parentName:"ul"},"param-pattern \u53c2\u6570\u6a21\u5f0f\u7a0d\u5fae\u6709\u70b9\u590d\u6742\uff1a()\u5339\u914d\u4e86\u4e00\u4e2a\u4e0d\u63a5\u53d7\u4efb\u4f55\u53c2\u6570\u7684\u65b9\u6cd5\uff0c \u800c(..)\u5339\u914d\u4e86\u4e00\u4e2a\u63a5\u53d7\u4efb\u610f\u6570\u91cf\u53c2\u6570\u7684\u65b9\u6cd5\uff08\u96f6\u6216\u8005\u66f4\u591a\uff09\u3002 \u6a21\u5f0f(",(0,a.kt)("em",{parentName:"li"},")\u5339\u914d\u4e86\u4e00\u4e2a\u63a5\u53d7\u4e00\u4e2a\u4efb\u4f55\u7c7b\u578b\u7684\u53c2\u6570\u7684\u65b9\u6cd5\u3002 \u6a21\u5f0f("),",String)\u5339\u914d\u4e86\u4e00\u4e2a\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\u7684\u65b9\u6cd5\uff0c\u7b2c\u4e00\u4e2a\u53ef\u4ee5\u662f\u4efb\u610f\u7c7b\u578b\uff0c \u7b2c\u4e8c\u4e2a\u5219\u5fc5\u987b\u662fString\u7c7b\u578b\u3002")),(0,a.kt)("p",null,"\u5bf9\u5e94\u5230\u6211\u4eec\u4e0a\u9762\u7684\u4f8b\u5b50\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(35545).Z,width:"1158",height:"435"})),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Spring\u6838\u5fc3\u4e4b\u9762\u5411\u5207\u9762\u7f16\u7a0b\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://www.pdai.tech/md/spring/spring-x-framework-aop.html"},"https://www.pdai.tech/md/spring/spring-x-framework-aop.html")),(0,a.kt)("li",{parentName:"ul"},"@Pointcut\u6ce8\u89e3\u8868\u8fbe\u5f0f\u4ecb\u7ecd\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/XWForever/article/details/103163021"},"https://blog.csdn.net/XWForever/article/details/103163021"))))}m.isMDXComponent=!0},95351:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/20230525231828-7d68cd09cd9076e298a94723f2207050.png"},35545:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/20230525232241-ee7ea5d604f53bbb2ac4eb127fd76589.png"},73e3:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/20230526212018-db3af5ae204e1de08f922daf1d4f75bb.png"},50170:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/20230526221738-77f831cee25234b1e40f4b6827495500.png"}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7652:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const l={slug:"java-annotation",id:"Java\u6ce8\u89e3",title:"Java\u6ce8\u89e3",tags:["Java"],last_update:{date:new Date("2022-11-12T00:00:00.000Z"),author:"Hans"}},i=void 0,o={unversionedId:"java/java-basis/Java\u6ce8\u89e3",id:"java/java-basis/Java\u6ce8\u89e3",title:"Java\u6ce8\u89e3",description:"\u53c2\u8003\uff1aJava\u6ce8\u89e3\u673a\u5236\u8be6\u89e3",source:"@site/docs/01.java/01.java-basis/04.Java\u6ce8\u89e3.md",sourceDirName:"01.java/01.java-basis",slug:"/java/java-basis/java-annotation",permalink:"/docs/java/java-basis/java-annotation",draft:!1,tags:[{label:"Java",permalink:"/docs/tags/java"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1668211200,formattedLastUpdatedAt:"2022\u5e7411\u670812\u65e5",sidebarPosition:4,frontMatter:{slug:"java-annotation",id:"Java\u6ce8\u89e3",title:"Java\u6ce8\u89e3",tags:["Java"],last_update:{date:"2022-11-12T00:00:00.000Z",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"Java\u6cdb\u578b",permalink:"/docs/java/java-basis/java-generic-types"},next:{title:"Java\u5f02\u5e38",permalink:"/docs/java/java-basis/java-exception"}},p={},s=[{value:"\u6ce8\u89e3\u57fa\u7840",id:"\u6ce8\u89e3\u57fa\u7840",level:2},{value:"\u6ce8\u89e3\u7684\u4f5c\u7528",id:"\u6ce8\u89e3\u7684\u4f5c\u7528",level:3},{value:"\u6ce8\u89e3\u5e38\u89c1\u5206\u7c7b",id:"\u6ce8\u89e3\u5e38\u89c1\u5206\u7c7b",level:3},{value:"Java \u5185\u7f6e\u6ce8\u89e3",id:"java-\u5185\u7f6e\u6ce8\u89e3",level:3},{value:"@Override",id:"override",level:4},{value:"@Deprecated",id:"deprecated",level:4},{value:"@SuppressWarnings",id:"suppresswarnings",level:4},{value:"\u5143\u6ce8\u89e3",id:"\u5143\u6ce8\u89e3",level:3},{value:"@Target",id:"target",level:4},{value:"@Retention",id:"retention",level:4},{value:"@Documented",id:"documented",level:4},{value:"@Inherited",id:"inherited",level:4},{value:"@Repeatable",id:"repeatable",level:4},{value:"@Native",id:"native",level:4},{value:"\u5982\u4f55\u83b7\u53d6\u6ce8\u89e3\u5143\u4fe1\u606f",id:"\u5982\u4f55\u83b7\u53d6\u6ce8\u89e3\u5143\u4fe1\u606f",level:3},{value:"\u6df1\u5165\u7406\u89e3\u6ce8\u89e3",id:"\u6df1\u5165\u7406\u89e3\u6ce8\u89e3",level:2},{value:"Java 8 \u65b0\u589e\u4e86\u54ea\u4e9b\u6ce8\u89e3",id:"java-8-\u65b0\u589e\u4e86\u54ea\u4e9b\u6ce8\u89e3",level:4},{value:"\u6ce8\u89e3\u4e0d\u652f\u6301\u7ee7\u627f",id:"\u6ce8\u89e3\u4e0d\u652f\u6301\u7ee7\u627f",level:4},{value:"\u6ce8\u89e3\u5b9e\u73b0\u7684\u539f\u7406",id:"\u6ce8\u89e3\u5b9e\u73b0\u7684\u539f\u7406",level:4},{value:"\u6ce8\u89e3\u7684\u4f7f\u7528\u793a\u4f8b",id:"\u6ce8\u89e3\u7684\u4f7f\u7528\u793a\u4f8b",level:2},{value:"\u901a\u8fc7\u81ea\u5b9a\u4e49\u6ce8\u89e3\u548cAOP\u5b9e\u73b0\u4e50\u89c2\u9501\u91cd\u8bd5\u673a\u5236",id:"\u901a\u8fc7\u81ea\u5b9a\u4e49\u6ce8\u89e3\u548caop\u5b9e\u73b0\u4e50\u89c2\u9501\u91cd\u8bd5\u673a\u5236",level:4}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u53c2\u8003\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://www.pdai.tech/md/java/basic/java-basic-x-annotation.html"},"Java\u6ce8\u89e3\u673a\u5236\u8be6\u89e3")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"[!TIP]","  \u6ce8\u89e3\u662fJDK1.5\u7248\u672c\u5f00\u59cb\u5f15\u5165\u7684\u4e00\u4e2a\u7279\u6027\uff0c\u7528\u4e8e\u5bf9\u4ee3\u7801\u8fdb\u884c\u8bf4\u660e\uff0c\u53ef\u4ee5\u5bf9\u5305\u3001\u7c7b\u3001\u63a5\u53e3\u3001\u5b57\u6bb5\u3001\u65b9\u6cd5\u53c2\u6570\u3001\u5c40\u90e8\u53d8\u91cf\u7b49\u8fdb\u884c\u6ce8\u89e3\u3002")),(0,r.kt)("h2",{id:"\u6ce8\u89e3\u57fa\u7840"},"\u6ce8\u89e3\u57fa\u7840"),(0,r.kt)("h3",{id:"\u6ce8\u89e3\u7684\u4f5c\u7528"},"\u6ce8\u89e3\u7684\u4f5c\u7528"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u6587\u6863\uff0c\u901a\u8fc7\u4ee3\u7801\u6807\u8bc6\u7684\u5143\u6570\u636e\u751f\u6210javadoc\u6587\u6863"),(0,r.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u68c0\u67e5\uff0c\u901a\u8fc7\u4ee3\u7801\u6807\u8bc6\u7684\u5143\u6570\u636e\u8ba9\u7f16\u8bd1\u5668\u5728\u7f16\u8bd1\u671f\u95f4\u8fdb\u884c\u68c0\u67e5\u9a8c\u8bc1"),(0,r.kt)("li",{parentName:"ul"},"\u7f16\u8bd1\u65f6\u52a8\u6001\u5904\u7406\uff0c\u7f16\u8bd1\u65f6\u901a\u8fc7\u4ee3\u7801\u6807\u8bc6\u7684\u5143\u6570\u636e\u52a8\u6001\u5904\u7406\uff0c\u5982\u52a8\u6001\u751f\u6210\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u65f6\u52a8\u6001\u5904\u7406\uff0c\u8fd0\u884c\u65f6\u901a\u8fc7\u4ee3\u7801\u6807\u8bc6\u7684\u5143\u6570\u636e\u52a8\u6001\u5904\u7406\uff0c\u5982\u4f7f\u7528\u53cd\u5c04\u6ce8\u5165\u5b9e\u4f8b")),(0,r.kt)("h3",{id:"\u6ce8\u89e3\u5e38\u89c1\u5206\u7c7b"},"\u6ce8\u89e3\u5e38\u89c1\u5206\u7c7b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java\u5185\u7f6e\u6ce8\u89e3\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"@Override"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"@Deprecated"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"@SupressWarnings")),(0,r.kt)("li",{parentName:"ul"},"\u5143\u6ce8\u89e3\uff0c\u7528\u6765\u5b9a\u4e49\u6ce8\u89e3\u7684\u6ce8\u89e3\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"@Retention"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"@Target"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"@Inherited"),"\u3001",(0,r.kt)("inlineCode",{parentName:"li"},"@Documented")),(0,r.kt)("li",{parentName:"ul"},"\u81ea\u5b9a\u4e49\u6ce8\u89e3")),(0,r.kt)("h3",{id:"java-\u5185\u7f6e\u6ce8\u89e3"},"Java \u5185\u7f6e\u6ce8\u89e3"),(0,r.kt)("h4",{id:"override"},"@Override"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Target(ElementType.METHOD)\n@Retention(RetentionPolicy.SOURCE)\npublic @interface Override {\n}\n")),(0,r.kt)("p",null,"\u8fd9\u4e2a\u6ce8\u89e3\u53ef\u4ee5\u88ab\u7528\u6765\u4fee\u9970\u65b9\u6cd5\uff0c\u5e76\u4e14\u5b83\u53ea\u5728\u7f16\u8bd1\u65f6\u6709\u6548\uff0c\u5728\u7f16\u8bd1\u540e\u7684class\u6587\u4ef6\u4e2d\u4fbf\u4e0d\u518d\u5b58\u5728\u3002\u8fd9\u4e2a\u6ce8\u89e3\u7684\u4f5c\u7528\u5c31\u662f\u544a\u8bc9\u7f16\u8bd1\u5668\uff0c\u88ab\u4fee\u9970\u7684\u65b9\u6cd5\u662f\u91cd\u5199\u7684\u7236\u7c7b\u7684\u4e2d\u7684\u76f8\u540c\u7b7e\u540d\u7684\u65b9\u6cd5\uff0c\u7f16\u8bd1\u5668\u4f1a\u5bf9\u6b64\u505a\u51fa\u68c0\u67e5\uff0c\u82e5\u53d1\u73b0\u7236\u7c7b\u4e2d\u4e0d\u5b58\u5728\u8fd9\u4e2a\u65b9\u6cd5\u6216\u662f\u5b58\u5728\u7684\u65b9\u6cd5\u7b7e\u540d\u4e0d\u540c\uff0c\u5219\u4f1a\u62a5\u9519\u3002"),(0,r.kt)("h4",{id:"deprecated"},"@Deprecated"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target(value={CONSTRUCTOR, FIELD, LOCAL_VARIABLE, METHOD, PACKAGE, PARAMETER, TYPE})\npublic @interface Deprecated {\n}\n")),(0,r.kt)("p",null,"\u5b83\u4f1a\u88ab\u6587\u6863\u5316\uff0c\u80fd\u591f\u4fdd\u7559\u5230\u8fd0\u884c\u65f6\uff0c\u80fd\u591f\u4fee\u9970\u6784\u9020\u65b9\u6cd5\u3001\u5c5e\u6027\u3001\u5c40\u90e8\u53d8\u91cf\u3001\u65b9\u6cd5\u3001\u5305\u3001\u53c2\u6570\u3001\u7c7b\u578b\u3002\u8fd9\u4e2a\u6ce8\u89e3\u7684\u4f5c\u7528\u662f\u544a\u8bc9\u7f16\u8bd1\u5668\u88ab\u4fee\u9970\u7684\u7a0b\u5e8f\u5143\u7d20\u5df2\u88ab\u201c\u5e9f\u5f03\u201d\uff0c\u4e0d\u518d\u5efa\u8bae\u7528\u6237\u4f7f\u7528\u3002"),(0,r.kt)("h4",{id:"suppresswarnings"},"@SuppressWarnings"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Target({TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR, LOCAL_VARIABLE})\n@Retention(RetentionPolicy.SOURCE)\npublic @interface SuppressWarnings {\n    String[] value();\n}\n")),(0,r.kt)("p",null,"\u5b83\u80fd\u591f\u4fee\u9970\u7684\u7a0b\u5e8f\u5143\u7d20\u5305\u62ec\u7c7b\u578b\u3001\u5c5e\u6027\u3001\u65b9\u6cd5\u3001\u53c2\u6570\u3001\u6784\u9020\u5668\u3001\u5c40\u90e8\u53d8\u91cf\uff0c\u53ea\u80fd\u5b58\u6d3b\u5728\u6e90\u7801\u65f6\uff0c\u53d6\u503c\u4e3aString","[","]","\u3002\u5b83\u7684\u4f5c\u7528\u662f\u544a\u8bc9\u7f16\u8bd1\u5668\u5ffd\u7565\u6307\u5b9a\u7684\u8b66\u544a\u4fe1\u606f\uff0c\u5b83\u53ef\u4ee5\u53d6\u7684\u503c\u5982\u4e0b\u6240\u793a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u4f5c\u7528"),(0,r.kt)("th",{parentName:"tr",align:null},"\u539f\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"all"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6291\u5236\u6240\u6709\u8b66\u544a"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress all warnings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"boxing"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6291\u5236\u88c5\u7bb1\u3001\u62c6\u7bb1\u64cd\u4f5c\u65f6\u5019\u7684\u8b66\u544a"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to boxing/unboxing operations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cast"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6291\u5236\u6620\u5c04\u76f8\u5173\u7684\u8b66\u544a"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to cast operations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dep-ann"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6291\u5236\u542f\u7528\u6ce8\u91ca\u7684\u8b66\u544a"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to deprecated annotation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"deprecation"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6291\u5236\u8fc7\u671f\u65b9\u6cd5\u8b66\u544a"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to deprecation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fallthrough"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6291\u5236\u786e\u5728switch\u4e2d\u7f3a\u5931breaks\u7684\u8b66\u544a"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to missing breaks in switch statements")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"finally"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6291\u5236finally\u6a21\u5757\u6ca1\u6709\u8fd4\u56de\u7684\u8b66\u544a"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to finally block that don\u2019t return")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hiding"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6291\u5236\u4e0e\u9690\u85cf\u53d8\u6570\u7684\u533a\u57df\u53d8\u6570\u76f8\u5173\u7684\u8b66\u544a"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to locals that hide variable\uff08\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"incomplete-switch"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ffd\u7565\u6ca1\u6709\u5b8c\u6574\u7684switch\u8bed\u53e5"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to missing entries in a switch statement (enum case)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nls"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ffd\u7565\u975enls\u683c\u5f0f\u7684\u5b57\u7b26"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to non-nls string literals")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ffd\u7565\u5bf9null\u7684\u64cd\u4f5c"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to null analysis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"rawtype")),(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528generics\u65f6\u5ffd\u7565\u6ca1\u6709\u6307\u5b9a\u76f8\u5e94\u7684\u7c7b\u578b"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to un-specific types when using")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"restriction"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6291\u5236\u4e0e\u4f7f\u7528\u4e0d\u5efa\u8bae\u6216\u7981\u6b62\u53c2\u7167\u76f8\u5173\u7684\u8b66\u544a"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to usage of discouraged or")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"serial"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ffd\u7565\u5728serializable\u7c7b\u4e2d\u6ca1\u6709\u58f0\u660eserialVersionUID\u53d8\u91cf"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to missing serialVersionUID field for a serializable class")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"static-access"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6291\u5236\u4e0d\u6b63\u786e\u7684\u9759\u6001\u8bbf\u95ee\u65b9\u5f0f\u8b66\u544a"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to incorrect static access")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"synthetic-access"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6291\u5236\u5b50\u7c7b\u6ca1\u6709\u6309\u6700\u4f18\u65b9\u6cd5\u8bbf\u95ee\u5185\u90e8\u7c7b\u7684\u8b66\u544a"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to unoptimized access from inner classes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"unchecked")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6291\u5236\u6ca1\u6709\u8fdb\u884c\u7c7b\u578b\u68c0\u67e5\u64cd\u4f5c\u7684\u8b66\u544a"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to unchecked operations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unqualified-field-access"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6291\u5236\u6ca1\u6709\u6743\u9650\u8bbf\u95ee\u7684\u57df\u7684\u8b66\u544a"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to field access unqualified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"unused")),(0,r.kt)("td",{parentName:"tr",align:null},"\u6291\u5236\u6ca1\u88ab\u4f7f\u7528\u8fc7\u7684\u4ee3\u7801\u7684\u8b66\u544a"),(0,r.kt)("td",{parentName:"tr",align:null},"to suppress warnings relative to unused code")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u5ffd\u7565\u67d0\u79cd\npublic class Machine {\n    private List versions;\n\n    @SuppressWarnings("unchecked")\n    // or\n    @SuppressWarnings({"unchecked"})\n    public void addVersion(String version) {\n        versions.add(version);\n    }\n}\n\n// \u5ffd\u7565\u591a\u79cd\n@SuppressWarnings({"unchecked", "deprecated"})\n')),(0,r.kt)("h3",{id:"\u5143\u6ce8\u89e3"},"\u5143\u6ce8\u89e3"),(0,r.kt)("p",null,"\u5728JDK 1.5\u4e2d\u63d0\u4f9b\u4e864\u4e2a\u6807\u51c6\u7684\u5143\u6ce8\u89e3\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"@Target"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@Retention"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@Documented"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"@Inherited"),", \u5728JDK 1.8\u4e2d\u63d0\u4f9b\u4e86\u4e24\u4e2a\u5143\u6ce8\u89e3 ",(0,r.kt)("inlineCode",{parentName:"p"},"@Repeatable")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"@Native")," \u3002\u9664\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"@Native(SOURCE)"),"\uff0c\u5176\u4ed6\u90fd\u662f\u4fdd\u7559\u5230 RUNTIME"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target(value={CONSTRUCTOR, FIELD, LOCAL_VARIABLE, METHOD, PACKAGE, PARAMETER, TYPE})\npublic @interface Deprecated {\n}\n")),(0,r.kt)("h4",{id:"target"},"@Target"),(0,r.kt)("p",null,"\u4f5c\u7528\uff1a\u63cf\u8ff0\u6ce8\u89e3\u7684\u4f7f\u7528\u8303\u56f4\uff0c\u53ef\u4ee5\u7528\u5728\u4ec0\u4e48\u5730\u65b9\u3002"),(0,r.kt)("p",null,"\u5b83\u7684\u53d6\u503c\u8303\u56f4\u5b9a\u4e49\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"ElementType "),"\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public enum ElementType {\n \n    TYPE, // \u7c7b\u3001\u63a5\u53e3\u3001\u679a\u4e3e\u7c7b\n \n    FIELD, // \u6210\u5458\u53d8\u91cf\uff08\u5305\u62ec\uff1a\u679a\u4e3e\u5e38\u91cf\uff09\n \n    METHOD, // \u6210\u5458\u65b9\u6cd5\n \n    PARAMETER, // \u65b9\u6cd5\u53c2\u6570\n \n    CONSTRUCTOR, // \u6784\u9020\u65b9\u6cd5\n \n    LOCAL_VARIABLE, // \u5c40\u90e8\u53d8\u91cf\n \n    ANNOTATION_TYPE, // \u6ce8\u89e3\u7c7b\n \n    PACKAGE, // \u53ef\u7528\u4e8e\u4fee\u9970\uff1a\u5305\n \n    TYPE_PARAMETER, // \u7c7b\u578b\u53c2\u6570\uff0cJDK 1.8 \u65b0\u589e\n \n    TYPE_USE // \u4f7f\u7528\u7c7b\u578b\u7684\u4efb\u4f55\u5730\u65b9\uff0cJDK 1.8 \u65b0\u589e\n \n}\n")),(0,r.kt)("h4",{id:"retention"},"@Retention"),(0,r.kt)("p",null,"\u4f5c\u7528\uff1a\u63cf\u8ff0\u6ce8\u89e3\u4fdd\u7559\u7684\u65f6\u95f4\u8303\u56f4\uff0c\u6ce8\u89e3\u5728\u6240\u4fee\u9970\u7684\u7c7b\u4e2d\u53ef\u4ee5\u4fdd\u7559\u5230\u4ec0\u4e48\u65f6\u5019\u3002"),(0,r.kt)("p",null,"\u53d6\u503c\u4e00\u5171\u6709\u4e09\u79cd\u7b56\u7565\uff0c\u5b9a\u4e49\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"RetentionPolicy"),"\u679a\u4e3e\u7c7b\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public enum RetentionPolicy {\n \n    SOURCE,    // \u6e90\u6587\u4ef6\u4fdd\u7559\n    CLASS,       // \u7f16\u8bd1\u671f\u4fdd\u7559\uff0c\u9ed8\u8ba4\u503c\n    RUNTIME   // \u8fd0\u884c\u671f\u4fdd\u7559\uff0c\u53ef\u901a\u8fc7\u53cd\u5c04\u53bb\u83b7\u53d6\u6ce8\u89e3\u4fe1\u606f\n        \n}\n")),(0,r.kt)("h4",{id:"documented"},"@Documented"),(0,r.kt)("p",null,"\u4f5c\u7528\uff1a\u63cf\u8ff0\u5728\u4f7f\u7528 javadoc \u5de5\u5177\u4e3a\u7c7b\u751f\u6210\u5e2e\u52a9\u6587\u6863\u65f6\u662f\u5426\u8981\u4fdd\u7559\u5176\u6ce8\u89e3\u4fe1\u606f\u3002"),(0,r.kt)("h4",{id:"inherited"},"@Inherited"),(0,r.kt)("p",null,"\u4f5c\u7528\uff1a\u88ab\u5b83\u4fee\u9970\u7684Annotation\u5c06\u5177\u6709\u7ee7\u627f\u6027\u3002\u5982\u679c\u67d0\u4e2a\u7c7b\u4f7f\u7528\u4e86\u88ab@Inherited\u4fee\u9970\u7684Annotation\uff0c\u5219\u5176\u5b50\u7c7b\u5c06\u81ea\u52a8\u5177\u6709\u8be5\u6ce8\u89e3\u3002"),(0,r.kt)("p",null,"\u5982\uff1aStudent\u7ee7\u627fPerson\u7c7b\uff0cPerson\u7c7b\u4f7f\u7528\u4e86\u88abInherited\u4fee\u9970\u7684\u6ce8\u89e3\uff0c\u5219\u901a\u8fc7Student\u7c7b\u4e5f\u53ef\u4ee5\u83b7\u53d6\u5230\u8fd9\u4e2a\u6ce8\u89e3\u7684\u4fe1\u606f\u3002"),(0,r.kt)("h4",{id:"repeatable"},"@Repeatable"),(0,r.kt)("p",null,"\u4f5c\u7528\uff1a\u5141\u8bb8\u5728\u540c\u4e00\u7533\u660e\u7c7b\u578b(\u7c7b\uff0c\u5c5e\u6027\uff0c\u6216\u65b9\u6cd5)\u7684\u591a\u6b21\u4f7f\u7528\u540c\u4e00\u4e2a\u6ce8\u89e3\u3002"),(0,r.kt)("h4",{id:"native"},"@Native"),(0,r.kt)("p",null,"\u4f5c\u7528\uff1a\u4f7f\u7528 @Native \u6ce8\u89e3\u4fee\u9970\u6210\u5458\u53d8\u91cf\uff0c\u5219\u8868\u793a\u8fd9\u4e2a\u53d8\u91cf\u53ef\u4ee5\u88ab\u672c\u5730\u4ee3\u7801\u5f15\u7528\uff0c\u5e38\u5e38\u88ab\u4ee3\u7801\u751f\u6210\u5de5\u5177\u4f7f\u7528\u3002\u4e0d\u5e38\u7528"),(0,r.kt)("h3",{id:"\u5982\u4f55\u83b7\u53d6\u6ce8\u89e3\u5143\u4fe1\u606f"},"\u5982\u4f55\u83b7\u53d6\u6ce8\u89e3\u5143\u4fe1\u606f"),(0,r.kt)("p",null,"\u6ce8\u610f\uff1a\u53ea\u6709\u6ce8\u89e3\u88ab\u5b9a\u4e49\u4e3aRUNTIME\u540e\uff0c\u8be5\u6ce8\u89e3\u624d\u80fd\u662f\u8fd0\u884c\u65f6\u53ef\u89c1\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"AnnotatedElement")," \u63a5\u53e3\u662f\u6240\u6709\u7a0b\u5e8f\u5143\u7d20\uff08Class\u3001Method\u548cConstructor\uff09\u7684\u7236\u63a5\u53e3\uff0c\u6240\u4ee5\u7a0b\u5e8f\u901a\u8fc7\u53cd\u5c04\u83b7\u53d6\u4e86\u67d0\u4e2a\u7c7b\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"AnnotatedElement")," \u5bf9\u8c61\u4e4b\u540e\uff0c\u7a0b\u5e8f\u5c31\u53ef\u4ee5\u8c03\u7528\u8be5\u5bf9\u8c61\u7684\u65b9\u6cd5\u6765\u8bbf\u95eeAnnotation\u4fe1\u606f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"boolean isAnnotationPresent(Class<?extends Annotation> annotationClass)")))),(0,r.kt)("p",null,"\u5224\u65ad\u8be5\u7a0b\u5e8f\u5143\u7d20\u4e0a\u662f\u5426\u5305\u542b\u6307\u5b9a\u7c7b\u578b\u7684\u6ce8\u89e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"<T extends Annotation> T getAnnotation(Class<T> annotationClass)")))),(0,r.kt)("p",null,"\u8fd4\u56de\u8be5\u7a0b\u5e8f\u5143\u7d20\u4e0a\u5b58\u5728\u7684\u3001\u6307\u5b9a\u7c7b\u578b\u7684\u6ce8\u89e3\uff0c\u5982\u679c\u8be5\u7c7b\u578b\u6ce8\u89e3\u4e0d\u5b58\u5728\uff0c\u5219\u8fd4\u56denull"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Annotation[] getAnnotations()")))),(0,r.kt)("p",null,"\u8fd4\u56de\u8be5\u7a0b\u5e8f\u5143\u7d20\u4e0a\u5b58\u5728\u7684\u6240\u6709\u6ce8\u89e3\uff0c\u82e5\u6ca1\u6709\u6ce8\u89e3\uff0c\u8fd4\u56de\u957f\u5ea6\u4e3a0\u7684\u6570\u7ec4\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"<T extends Annotation> T[] getAnnotationsByType(Class<T> annotationClass)")))),(0,r.kt)("p",null,"\u8fd4\u56de\u8be5\u7a0b\u5e8f\u5143\u7d20\u4e0a\u5b58\u5728\u7684\u3001\u6307\u5b9a\u7c7b\u578b\u7684\u6ce8\u89e3\u6570\u7ec4\u3002\u6ca1\u6709\u6ce8\u89e3\u5bf9\u5e94\u7c7b\u578b\u7684\u6ce8\u89e3\u65f6\uff0c\u8fd4\u56de\u957f\u5ea6\u4e3a0\u7684\u6570\u7ec4\u3002\u8be5\u65b9\u6cd5\u7684\u8c03\u7528\u8005\u53ef\u4ee5\u968f\u610f\u4fee\u6539\u8fd4\u56de\u7684\u6570\u7ec4\uff0c\u800c\u4e0d\u4f1a\u5bf9\u5176\u4ed6\u8c03\u7528\u8005\u8fd4\u56de\u7684\u6570\u7ec4\u4ea7\u751f\u4efb\u4f55\u5f71\u54cd\u3002\n",(0,r.kt)("inlineCode",{parentName:"p"},"getAnnotationsByType"),"\u65b9\u6cd5\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"getAnnotation"),"\u7684\u533a\u522b\u5728\u4e8e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"getAnnotationsByType"),"\u4f1a\u68c0\u6d4b\u6ce8\u89e3\u5bf9\u5e94\u7684\u91cd\u590d\u6ce8\u89e3\u5bb9\u5668\u3002\u82e5\u7a0b\u5e8f\u5143\u7d20\u4e3a\u7c7b\uff0c\u5f53\u524d\u7c7b\u4e0a\u627e\u4e0d\u5230\u6ce8\u89e3\uff0c\u4e14\u8be5\u6ce8\u89e3\u4e3a\u53ef\u7ee7\u627f\u7684\uff0c\u5219\u4f1a\u53bb\u7236\u7c7b\u4e0a\u68c0\u6d4b\u5bf9\u5e94\u7684\u6ce8\u89e3\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"<T extends Annotation> T getDeclaredAnnotation(Class<T> annotationClass)")))),(0,r.kt)("p",null,"\u8fd4\u56de\u76f4\u63a5\u5b58\u5728\u4e8e\u6b64\u5143\u7d20\u4e0a\u7684\u6240\u6709\u6ce8\u89e3\u3002\u4e0e\u6b64\u63a5\u53e3\u4e2d\u7684\u5176\u4ed6\u65b9\u6cd5\u4e0d\u540c\uff0c\u8be5\u65b9\u6cd5\u5c06\u5ffd\u7565\u7ee7\u627f\u7684\u6ce8\u91ca\u3002\u5982\u679c\u6ca1\u6709\u6ce8\u91ca\u76f4\u63a5\u5b58\u5728\u4e8e\u6b64\u5143\u7d20\u4e0a\uff0c\u5219\u8fd4\u56denull"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"<T extends Annotation> T[] getDeclaredAnnotationsByType(Class<T> annotationClass)")))),(0,r.kt)("p",null,"\u8fd4\u56de\u76f4\u63a5\u5b58\u5728\u4e8e\u6b64\u5143\u7d20\u4e0a\u7684\u6240\u6709\u6ce8\u89e3\u3002\u4e0e\u6b64\u63a5\u53e3\u4e2d\u7684\u5176\u4ed6\u65b9\u6cd5\u4e0d\u540c\uff0c\u8be5\u65b9\u6cd5\u5c06\u5ffd\u7565\u7ee7\u627f\u7684\u6ce8\u91ca"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"Annotation[] getDeclaredAnnotations()")))),(0,r.kt)("p",null,"\u8fd4\u56de\u76f4\u63a5\u5b58\u5728\u4e8e\u6b64\u5143\u7d20\u4e0a\u7684\u6240\u6709\u6ce8\u89e3\u53ca\u6ce8\u89e3\u5bf9\u5e94\u7684\u91cd\u590d\u6ce8\u89e3\u5bb9\u5668\u3002\u4e0e\u6b64\u63a5\u53e3\u4e2d\u7684\u5176\u4ed6\u65b9\u6cd5\u4e0d\u540c\uff0c\u8be5\u65b9\u6cd5\u5c06\u5ffd\u7565\u7ee7\u627f\u7684\u6ce8\u89e3\u3002\u5982\u679c\u6ca1\u6709\u6ce8\u91ca\u76f4\u63a5\u5b58\u5728\u4e8e\u6b64\u5143\u7d20\u4e0a\uff0c\u5219\u8fd4\u56de\u957f\u5ea6\u4e3a\u96f6\u7684\u4e00\u4e2a\u6570\u7ec4\u3002\u8be5\u65b9\u6cd5\u7684\u8c03\u7528\u8005\u53ef\u4ee5\u968f\u610f\u4fee\u6539\u8fd4\u56de\u7684\u6570\u7ec4\uff0c\u800c\u4e0d\u4f1a\u5bf9\u5176\u4ed6\u8c03\u7528\u8005\u8fd4\u56de\u7684\u6570\u7ec4\u4ea7\u751f\u4efb\u4f55\u5f71\u54cd"),(0,r.kt)("h2",{id:"\u6df1\u5165\u7406\u89e3\u6ce8\u89e3"},"\u6df1\u5165\u7406\u89e3\u6ce8\u89e3"),(0,r.kt)("h4",{id:"java-8-\u65b0\u589e\u4e86\u54ea\u4e9b\u6ce8\u89e3"},"Java 8 \u65b0\u589e\u4e86\u54ea\u4e9b\u6ce8\u89e3"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Repeatable")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ElementType.TYPE_USER")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ElementType.TYPE_PARAMETER"))),(0,r.kt)("h4",{id:"\u6ce8\u89e3\u4e0d\u652f\u6301\u7ee7\u627f"},"\u6ce8\u89e3\u4e0d\u652f\u6301\u7ee7\u627f"),(0,r.kt)("p",null,"\u4e0d\u80fd\u4f7f\u7528extends\u5173\u952e\u5b57\u6765\u7ee7\u627f\u67d0\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"@interface"),", \u4f46\u6ce8\u89e3\u5728\u7f16\u8bd1\u540e\uff0c\u7f16\u8bd1\u5668\u4f1a\u81ea\u52a8\u7ee7\u627f ",(0,r.kt)("inlineCode",{parentName:"p"},"java.lang.annotation.Annotation")," \u63a5\u53e3"),(0,r.kt)("p",null,"\u533a\u522b\u4e8e\u6ce8\u89e3\u7684\u7ee7\u627f\uff0c\u88ab\u6ce8\u89e3\u7684\u5b50\u7c7b\u7ee7\u627f\u7236\u7c7b\u6ce8\u89e3\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"@Inherited")),(0,r.kt)("h4",{id:"\u6ce8\u89e3\u5b9e\u73b0\u7684\u539f\u7406"},"\u6ce8\u89e3\u5b9e\u73b0\u7684\u539f\u7406"),(0,r.kt)("p",null,"\u5148\u8bf4\u7ed3\u8bba\uff1a"),(0,r.kt)("p",null,"\u6ce8\u89e3\u672c\u8d28\u662f\u4e00\u4e2a\u7ee7\u627f\u4e86Annotation \u7684\u7279\u6b8a\u63a5\u53e3\uff0c\u5176\u5177\u4f53\u5b9e\u73b0\u7c7b\u662fJava \u8fd0\u884c\u65f6\u751f\u6210\u7684\u52a8\u6001\u4ee3\u7406\u7c7b\u3002\u800c\u6211\u4eec\u901a\u8fc7\u53cd\u5c04\u83b7\u53d6\u6ce8\u89e3\u65f6\uff0c\u8fd4\u56de\u7684\u662fJava \u8fd0\u884c\u65f6\u751f\u6210\u7684\u52a8\u6001\u4ee3\u7406\u5bf9\u8c61$Proxy1\u3002\u901a\u8fc7\u4ee3\u7406\u5bf9\u8c61\u8c03\u7528\u81ea\u5b9a\u4e49\u6ce8\u89e3\uff08\u63a5\u53e3\uff09\u7684\u65b9\u6cd5\uff0c\u4f1a\u6700\u7ec8\u8c03\u7528AnnotationInvocationHandler \u7684invoke \u65b9\u6cd5\u3002\u8be5\u65b9\u6cd5\u4f1a\u4ecememberValues \u8fd9\u4e2aMap \u4e2d\u7d22\u5f15\u51fa\u5bf9\u5e94\u7684\u503c\u3002\u800cmemberValues \u7684\u6765\u6e90\u662fJava \u5e38\u91cf\u6c60\u3002"),(0,r.kt)("p",null,"\u63a8\u8350\u6587\u7ae0\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_20009015/article/details/106038023"},"https://blog.csdn.net/qq_20009015/article/details/106038023"),"\n",(0,r.kt)("a",{parentName:"p",href:"https://www.race604.com/annotation-processing/"},"https://www.race604.com/annotation-processing/")),(0,r.kt)("h2",{id:"\u6ce8\u89e3\u7684\u4f7f\u7528\u793a\u4f8b"},"\u6ce8\u89e3\u7684\u4f7f\u7528\u793a\u4f8b"),(0,r.kt)("h4",{id:"\u901a\u8fc7\u81ea\u5b9a\u4e49\u6ce8\u89e3\u548caop\u5b9e\u73b0\u4e50\u89c2\u9501\u91cd\u8bd5\u673a\u5236"},"\u901a\u8fc7\u81ea\u5b9a\u4e49\u6ce8\u89e3\u548cAOP\u5b9e\u73b0\u4e50\u89c2\u9501\u91cd\u8bd5\u673a\u5236"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**  \n * \u81ea\u5b9a\u4e49\u6ce8\u89e3\uff0c\u89e6\u53d1\u4e50\u89c2\u9501\u540e\uff0c\u9700\u8981\u91cd\u8bd5  \n *  \n * @author huhan  \n */\n@Target(ElementType.METHOD)  \n@Retention(RetentionPolicy.RUNTIME)  \n@Documented  \npublic @interface OptimisticLockRetry {  \n  \n    /**  \n     * \u6700\u5927\u91cd\u8bd5\u6b21\u6570  \n     * @return \u6700\u5927\u91cd\u8bd5\u6b21\u6570  \n     */  \n    int maxRetries() default 3;  \n  \n    /**  \n     * \u6700\u957f\u6267\u884c\u65f6\u95f4\uff0c\u6beb\u79d2  \n     * @return \u91cd\u8bd5\u6700\u957f\u6267\u884c\u65f6\u95f4  \n     */  \n    long maxExecuteTime() default 10000;  \n  \n}\n\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'/**  \n * order\uff0c\u503c\u8d8a\u5c0f\uff0c\u4f18\u5148\u7ea7\u8d8a\u9ad8  \n *  \n * @author huhan  \n */\n@Aspect  \n@Order(999)  \n@Slf4j  \n@Component  \npublic class OptimisticLockRetryAspect {  \n  \n    /**  \n     * \u5207\u70b9  \n     */  \n    @Pointcut("@annotation(com...annotation.OptimisticLockRetry)")  \n    public void retryOnOptFailureMethod() {  \n  \n    }  \n    /**  \n     * \u89e6\u53d1\u4e50\u89c2\u9501\u91cd\u8bd5  \n     * @param joinPoint \u8fde\u63a5\u70b9  \n     * @return \u65b9\u6cd5\u8fd4\u56de  \n     * @throws NoSuchMethodException \u65b9\u6cd5\u4e0d\u5b58\u5728\u5f02\u5e38  \n     */  \n    @Around("retryOnOptFailureMethod()")  \n    public Object doConcurrentOperation(ProceedingJoinPoint joinPoint) throws NoSuchMethodException {  \n        Signature signature = joinPoint.getSignature();  \n        MethodSignature methodSignature = (MethodSignature) signature;  \n        // \u4ee3\u7406\u76ee\u6807\u5bf9\u8c61Class  \n        Class targetClazz = joinPoint.getTarget().getClass();  \n        Method method = targetClazz.getMethod(methodSignature.getName(), methodSignature.getParameterTypes());  \n        OptimisticLockRetry annotation = method.getAnnotation(OptimisticLockRetry.class);  \n        if (annotation == null) {  \n            try {  \n                return joinPoint.proceed();  \n            } catch (Throwable e) {  \n                log.error("\u6267\u884c\u5f02\u5e38", e);  \n                throw new RuntimeException(e);  \n            }  \n        }        \n        long startTime = System.currentTimeMillis();  \n        int maxRetries = annotation.maxRetries();  \n        long maxExecuteTime = annotation.maxExecuteTime();  \n        int attemptCount = 0;  \n        ObjectOptimisticLockingFailureException ex = null;  \n        do {  \n            try {  \n                // \u91cd\u8bd5\u6210\u529f\uff0c\u7acb\u5373\u8fd4\u56de  \n                return joinPoint.proceed();  \n            } catch (ObjectOptimisticLockingFailureException e) {  \n                ex = e;  \n                long executeTime = System.currentTimeMillis() - startTime;  \n                if (executeTime >= maxExecuteTime) {  \n                    log.warn("\u89e6\u53d1\u4e50\u89c2\u9501\uff0c\u51fd\u6570\u6267\u884c\u8d85\u65f6\uff0cexecuteTime=[{}], maxExecuteTime=[{}]", executeTime, maxExecuteTime);  \n                    throw ex;  \n                }  \n                log.debug("\u89e6\u53d1\u4e50\u89c2\u9501, attemptCount=[{}], maxRetries=[{}]", attemptCount, maxRetries);  \n            } catch (Throwable e) {  \n                log.error("\u6267\u884c\u5f02\u5e38", e);  \n                throw new RuntimeException(e);  \n            }  \n            attemptCount++;  \n        } while (attemptCount <= maxRetries);  \n        log.warn("\u89e6\u53d1\u4e50\u89c2\u9501\uff0c\u8d85\u8fc7\u91cd\u8bd5\u6b21\u6570[{}]", maxRetries);  \n        throw ex;  \n    }  \n  \n}\n\n\n// \u6ce8\u89e3\u7684\u4f7f\u7528\n@OptimisticLockRetry\npublic void callMethod(String param) {  \n    // \u91cd\u8bd5\u65b9\u6cd5\n}\n\n')))}d.isMDXComponent=!0}}]);
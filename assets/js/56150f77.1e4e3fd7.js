"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,r(r({ref:t},u),{},{components:n})):a.createElement(k,r({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:l,r[1]=p;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5225:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(87462),l=(n(67294),n(3905));const i={slug:"jvm-dump-file-analysis-experience",title:"\u8bb0\u4e00\u6b21dump\u6587\u4ef6\u5206\u6790\u5386\u7a0b",authors:"hans",tags:["JVM"]},r=void 0,p={permalink:"/blog/jvm-dump-file-analysis-experience",source:"@site/blog/2022-03-12-\u8bb0\u4e00\u6b21dump\u6587\u4ef6\u5206\u6790\u5386\u7a0b/index.md",title:"\u8bb0\u4e00\u6b21dump\u6587\u4ef6\u5206\u6790\u5386\u7a0b",description:"\u672c\u6587\u8bb0\u5f55\u4e86\u4e00\u6b21\u6392\u67e5JVM\u5185\u5b58\u6cc4\u9732\u7684\u7ecf\u5386\u3002",date:"2022-03-12T00:00:00.000Z",formattedDate:"2022\u5e743\u670812\u65e5",tags:[{label:"JVM",permalink:"/blog/tags/jvm"}],readingTime:8.46,hasTruncateMarker:!0,authors:[{name:"Hans",title:"Developer",url:"https://huhan.tech",imageURL:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLTIsqSuF4mFcjogGDIIib9aA3W0OJFWBj8Tx2HtNpa3fhCFwI55EVvn04HMzlACwxPsVGlwvMFvEQ/132",key:"hans"}],frontMatter:{slug:"jvm-dump-file-analysis-experience",title:"\u8bb0\u4e00\u6b21dump\u6587\u4ef6\u5206\u6790\u5386\u7a0b",authors:"hans",tags:["JVM"]},prevItem:{title:"SpringBoot\u914d\u7f6e\u6587\u4ef6\u52a0\u8f7d\u4f18\u5148\u7ea7",permalink:"/blog/springboot-config-priority"},nextItem:{title:"Windows\u4e0bGit\u591a\u8d26\u6237\u7ba1\u7406",permalink:"/blog/multi-git-manage"}},o={authorsImageUrls:[void 0]},s=[{value:"\u4e00\u3001\u80cc\u666f",id:"\u4e00\u80cc\u666f",level:2},{value:"\u4e8c\u3001\u5206\u6790\u8fc7\u7a0b",id:"\u4e8c\u5206\u6790\u8fc7\u7a0b",level:2},{value:"\u4e09\u3001\u7ed3\u8bba",id:"\u4e09\u7ed3\u8bba",level:2},{value:"\u56db\u3001\u6536\u83b7",id:"\u56db\u6536\u83b7",level:2}],u={toc:s};function m(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u8bb0\u5f55\u4e86\u4e00\u6b21\u6392\u67e5JVM\u5185\u5b58\u6cc4\u9732\u7684\u7ecf\u5386\u3002"),(0,l.kt)("h2",{id:"\u4e00\u80cc\u666f"},"\u4e00\u3001\u80cc\u666f"),(0,l.kt)("p",null,"\u4eca\u5929\u4e0b\u5348\uff0c\u6b63\u9163\u7545\u6dcb\u6f13\u7684\u642c\u7816\uff0c\u7a81\u7136\u8fd0\u7ef4\u540c\u4e8b\u5728\u7fa4\u91cc\u901a\u77e5\uff0c\u6838\u5fc3\u670d\u52a1\u67d0\u4e2a\u8282\u70b9\u5185\u5b58\u5f02\u5e38\uff0c\u670d\u52a1\u5047\u6b7b\u3002\u795e\u7ecf\u4e00\u4e0b\u5b50\u7d27\u5f20\u8d77\u6765\uff0c\u8d76\u7d27\u8dd1\u5230\u8fd0\u7ef4\u90a3\u8fb9\u89c2\u5bdf\u73b0\u8c61\u3002"),(0,l.kt)("p",null,"\u89c2\u5bdf\u7684\u7ed3\u679c\u662f\u670d\u52a1\u5185\u5b58\u6ea2\u51fa\uff0c\u8be5\u670d\u52a1\u662f\u6838\u5fc3\u670d\u52a1\uff0c\u5206\u914d\u4e865G\u5185\u5b58\u3002\u8fd0\u7ef4\u5728\u8f6c\u5b58\u5feb\u7167\u540e\uff0c\u7acb\u523b\u91cd\u542f\u670d\u52a1\u540e\u6b63\u5e38\u3002\u5728\u63a5\u4e0b\u6765\u7684\u4e00\u6bb5\u65f6\u95f4\u91cc\uff0c\u53e6\u4e00\u53f0\u670d\u52a1\u8282\u70b9\u4e5f\u53d1\u751f\u4e86\u540c\u6837\u7684\u60c5\u51b5\u3002"),(0,l.kt)("h2",{id:"\u4e8c\u5206\u6790\u8fc7\u7a0b"},"\u4e8c\u3001\u5206\u6790\u8fc7\u7a0b"),(0,l.kt)("p",null,"\u8fd9\u4e2a\u670d\u52a1\u662f\u53e6\u5916\u4e00\u4e2a\u540c\u4e8b\u8d1f\u8d23\u5f00\u53d1\u7684\uff0c\u672c\u7740\u5b66\u4e60\u7684\u6001\u5ea6\uff0c\u5728\u62ff\u5230\u8fd0\u7ef4\u8f6c\u5b58\u7684dump\u6587\u4ef6\u540e\uff0c\u5c31\u51c6\u5907\u5c1d\u8bd5\u7740\u5206\u6790\u4e0b\u95ee\u9898\uff0c\u7531\u4e8e\u4e4b\u524d\u6ca1\u6709\u7c7b\u4f3c\u7684\u7ecf\u5386\uff0c\u4e8e\u662f\u5148\u5728\u7f51\u4e0a\u67e5\u4e86\u4e0b\u4e00\u822c\u600e\u4e48\u5206\u6790\u7c7b\u4f3c\u7684\u95ee\u9898\u3002"),(0,l.kt)("p",null,"\u9996\u5148\u5c1d\u8bd5\u4f7f\u7528MAT(Memory Analyzer)\u5de5\u5177\u8fdb\u884c\u5206\u6790\uff0c\u4e0b\u8f7d\u540e\u5c31\u51c6\u5907\u8f7d\u5165dump\u6587\u4ef6\uff0c\u5f88\u4e0d\u5e78\u7531\u4e8edump\u6587\u4ef6\u8fc7\u5927\uff0c\u8f7d\u5165\u5931\u8d25\u4e86\uff0c\u4e8e\u662f\u8c03\u5927\u4e86\u5185\u5b58\u5927\u5c0f\uff0c\u5c1d\u8bd5\u518d\u6b21\u8f7d\u5165\uff0c\u4f46\u6b64\u65f6\u8fd9\u4e2a\u6587\u4ef6\u4e0d\u518d\u5c1d\u8bd5\u91cd\u65b0\u8f7d\u5165\uff0c\u76f4\u63a5\u63d0\u793a\u8f7d\u5165\u5931\u8d25\u3002"),(0,l.kt)("p",null,"\u5148\u4e0d\u7ea0\u7ed3\u5de5\u5177\u7684\u95ee\u9898\uff0c\u7136\u540e\u7f51\u4e0a\u8bf4JDK\u81ea\u5e26\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"jvisualvm"),"\u4e5f\u53ef\u4ee5\u7528\u6765\u5206\u6790dump\u6587\u4ef6, \u4f46\u4e5f\u9047\u5230\u4e86\u540c\u6837\u5185\u5b58\u4e0d\u8db3\u7684\u95ee\u9898\uff0c\u518d\u5c1d\u8bd5\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"jvisualvm"),"\u7684\u5185\u5b58\u9650\u5236\u540e, \u6210\u529f\u8f7d\u5165\u4e86\u3002"),(0,l.kt)("p",null,"\u770b\u5230\u7684\u754c\u9762\u662f\u8fd9\u6837\u7684\uff0c\u5f88\u660e\u663e\u770b\u5230char[]\u5360\u7528\u4e86\u8fd170%\u7684\u5185\u5b58\uff0c\u63a5\u8fd14G\uff0c\u8fd9\u592a\u4e0d\u6b63\u5e38\u4e86\uff0c\u70b9\u8fdb\u53bb\u770b\u5bf9\u5e94\u7684\u5b9e\u4f8b(\u52a0\u8f7d\u7684\u975e\u5e38\u6162\uff0c\u9700\u8981\u8010\u5fc3)\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(68012).Z,width:"772",height:"399"})),(0,l.kt)("p",null,"\u5728\u5b9e\u4f8b\u6570\u754c\u9762\u4e2d\u770b\u5230\u5b9e\u4f8b\u6570\u8fbe\u5230\u4e86\u5343\u4e07\u7ea7\uff0c\u5927\u90e8\u5206\u90fd\u662f\u4e00\u4e9b\u6587\u4ef6\u7684\u8def\u5f84\u5b57\u7b26\u4e32\u4fe1\u606f\u3002\u5728\u4e1a\u52a1\u4e2d\uff0c\u6211\u4eec\u4f1a\u751f\u6210\u5f88\u591a\u4e34\u65f6\u6587\u4ef6\uff0c\u7136\u540e\u8fd9\u4e9b\u4e34\u65f6\u6587\u4ef6\u4f1a\u5220\u9664\uff0c\u8fd9\u91cc\u9762\u5927\u90e8\u5206\u4fdd\u5b58\u7684\u662f\u8fd9\u4e9b\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(63812).Z,width:"776",height:"591"})),(0,l.kt)("p",null,"\u5230\u8fd9\u91cc\u5bfc\u81f4\u5185\u5b58\u6cc4\u9732\u7684\u539f\u56e0\u4f3c\u4e4e\u627e\u5230\u4e86\uff0c\u4f46\u597d\u50cf\u53c8\u8fd8\u4e0d\u591f\uff0c\u662f\u4ec0\u4e48\u539f\u56e0\u5bfc\u81f4\u8fd9\u4e9b\u4e34\u65f6\u53d8\u91cf\u6ca1\u6709\u88ab\u56de\u6536\u5462\u3002"),(0,l.kt)("p",null,"\u56de\u5230\u5bb6\u540e\uff0c\u8fd8\u662f\u60f3\u7740\u8fd9\u4e2a\u4e8b\u60c5\uff0c\u4e8e\u662f\u53c8\u5f00\u59cb\u7814\u7a76\u8d77\u6765\uff0c\u8fd9\u4e2a\u65f6\u5019\u60f3\u8d77\u6765\u53ef\u4ee5\u518d\u7528MAT\u8bd5\u7740\u5206\u6790\u4e0b\uff0c\u6bd5\u7adf\u636e\u8bf4\u5de5\u5177\u5f88\u5f3a\u5927\u3002\u91cd\u542f\u4e86\u7535\u8111\u4e4b\u540e\uff0c\u7ecf\u8fc7\u6f2b\u957f\u7684\u7b49\u5f85\uff0c\u8f7d\u5165\u6210\u529f\u4e86(\u679c\u7136\u91cd\u542f\u80fd\u89e3\u51b3\u4e00\u5207\u95ee\u9898)\u3002"),(0,l.kt)("p",null,"MAT\u7684\u754c\u9762\u662f\u8fd9\u6837\u7684\uff0c\u91cc\u9762\u5305\u542b\u7684\u4fe1\u606f\u6bd4\u8f83\u591a\uff0c\u5bf9\u4e8e\u6211\u8fd9\u4e2a\u83dc\u9e1f\u6765\u8bf4\uff0c\u786e\u5b9e\u4e00\u4e0b\u5b50\u4e0d\u77e5\u9053\u770b\u54ea\u91cc\u3002\n\u90a3\u5c31\u4e00\u4e2a\u4e2a\u6162\u6162\u770b\u5427\uff0cHistogram\u91cc\u9762\u7684\u4e0e\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"jvisualvm"),"\u4e2d\u770b\u5230\u7684\u4fe1\u606f\u662f\u76f8\u540c\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(30159).Z,width:"873",height:"464"})),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\u8fdb\u5165\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"Dominator Tree"),"\u89c6\u56fe, \u5217\u51fa\u5f53\u524d\u5b58\u6d3b\u7684\u5bf9\u8c61\u7684\u5185\u5b58\u5927\u5c0f\uff0c\u8fd9\u770b\u8d77\u6765\u50cf\u662f\u6211\u9700\u8981\u5173\u6ce8\u7684\u91cd\u70b9\u3002\u7136\u540e\u67e5\u4e86\u4e0b\u8fd9\u4e2a\u7c7b ",(0,l.kt)("inlineCode",{parentName:"p"},"java.io.DeleteOnExitHook"),"  \u4e0e \u5185\u5b58\u6cc4\u9732\u7684\u76f8\u5173\u95ee\u9898\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(79955).Z,width:"885",height:"474"})),(0,l.kt)("p",null,"\u8fd9\u4e2a\u95ee\u9898\u5728\u4e0b\u9762\u4e24\u4e2a\u94fe\u63a5\u4e2d\u7ed9\u51fa\u4e86\u8bf4\u660e\uff0c\u5927\u6982\u610f\u601d\u662f\u5728\u5220\u9664\u6587\u4ef6\u4f7f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"File.deleteOnExit()")," \u65b9\u6cd5\u65f6\uff0c\u5e76\u4e0d\u662f\u7acb\u523b\u5220\u9664\u6587\u4ef6\uff0c\u800c\u662f\u5c06\u8be5\u6587\u4ef6\u8def\u5f84\u7ef4\u62a4\u5728\u7c7bDeleteOnExit\u7684\u4e00\u4e2aLinkedHashSet\u4e2d\uff0c\u6700\u540e\u5728JVM\u5173\u95ed\u7684\u65f6\u5019\uff0c\u624d\u4f1a\u53bb\u5220\u9664\u8fd9\u91cc\u9762\u7684\u6587\u4ef6\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u4e0d\u80fd\u7528\u4e8e\u957f\u65f6\u95f4\u8fd0\u884c\u7684\u670d\u52a1\u3002\n",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/40119188/memory-leak-on-deleteonexithook"},"https://stackoverflow.com/questions/40119188/memory-leak-on-deleteonexithook"),"\n",(0,l.kt)("a",{parentName:"p",href:"https://bugs.openjdk.java.net/browse/JDK-6664633"},"https://bugs.openjdk.java.net/browse/JDK-6664633")),(0,l.kt)("p",null,"\u4e0a\u9762\u7684\u63cf\u8ff0\uff0c\u901a\u8fc7\u6e90\u7801\u548cJDK\u6587\u6863\u4e5f\u90fd\u5f97\u5230\u4e86\u8bc1\u660e\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// java.io.File\n// Requests that the file or directory denoted by this abstract pathname be deleted when the virtual machine terminates.\npublic void deleteOnExit() {\n    SecurityManager security = System.getSecurityManager();\n    if (security != null) {\n        security.checkDelete(path);\n    }\n    if (isInvalid()) {\n        return;\n    }\n    DeleteOnExitHook.add(path);\n}\n\n// java.io.DeleteOnExitHook\nprivate static LinkedHashSet<String> files = new LinkedHashSet<>();\n\nstatic synchronized void add(String file) {\n    if(files == null) {\n        // DeleteOnExitHook is running. Too late to add a file\n        throw new IllegalStateException("Shutdown in progress");\n    }\n\n    files.add(file);\n}\n')),(0,l.kt)("h2",{id:"\u4e09\u7ed3\u8bba"},"\u4e09\u3001\u7ed3\u8bba"),(0,l.kt)("p",null,"\u95ee\u9898\u5b9a\u4f4d\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"File.deleteOnExit()"),"\u65b9\u6cd5\u7684\u8c03\u7528\uff0c\u5bfc\u81f4\u5185\u5b58\u6cc4\u6f0f\u3002\u8c03\u7528\u8be5\u65b9\u6cd5\u53ea\u4f1a\u5c06\u9700\u8981\u5220\u9664\u6587\u4ef6\u7684\u8def\u5f84\uff0c\u7ef4\u62a4\u5728\u7c7b",(0,l.kt)("inlineCode",{parentName:"p"},"DeleteOnExit"),"\u7684\u4e00\u4e2aLinkedHashSet\u4e2d\uff0c\u5728JVM\u5173\u95ed\u65f6\uff0c\u624d\u4f1a\u53bb\u771f\u6b63\u6267\u884c\u5220\u9664\u6587\u4ef6\u64cd\u4f5c\u3002\u8fd9\u6837\u5bfc\u81f4",(0,l.kt)("inlineCode",{parentName:"p"},"DeleteOnExitHook"),"\u8fd9\u4e2a\u5bf9\u8c61\u8d8a\u6765\u8d8a\u5927\uff0c\u6700\u7ec8\u5185\u5b58\u6ea2\u51fa\u3002"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"File.delete()"),"\u4e0e ",(0,l.kt)("inlineCode",{parentName:"p"},"File.deleteOnExit()")," \u7684\u533a\u522b\uff1a\n\u5f53\u8c03\u7528delete()\u65b9\u6cd5\u65f6\uff0c\u76f4\u63a5\u5220\u9664\u6587\u4ef6\uff0c\u4e0d\u7ba1\u8be5\u6587\u4ef6\u662f\u5426\u5b58\u5728\uff0c\u4e00\u7ecf\u8c03\u7528\u7acb\u5373\u6267\u884c\n\u5f53\u8c03\u7528deleteOnExit()\u65b9\u6cd5\u65f6\uff0c\u53ea\u662f\u76f8\u5f53\u4e8e\u5bf9deleteOnExit()\u4f5c\u4e00\u4e2a\u58f0\u660e\uff0c\u5f53\u7a0b\u5e8f\u8fd0\u884c\u7ed3\u675f\uff0cJVM\u7ec8\u6b62\u65f6\u624d\u771f\u6b63\u8c03\u7528deleteOnExit()\u65b9\u6cd5\u5b9e\u73b0\u5220\u9664\u64cd\u4f5c\u3002"),(0,l.kt)("p",null,"\u6211\u5199\u4e86\u4e0b\u9762\u8fd9\u4e2a\u6d4b\u8bd5\u65b9\u6cd5\uff0c\u5bf9\u6bd4 ",(0,l.kt)("inlineCode",{parentName:"p"},"delete()"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"deleteOnExit()"),"\u7684\u533a\u522b\uff0c\u73b0\u8c61\u4f1a\u6bd4\u8f83\u660e\u663e\u3002\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"deleteOnExit"),"\u65f6\u662f\u5728\u6587\u4ef6\u5168\u90e8\u521b\u5efa\uff0cJVM\u5173\u95ed\u7684\u65f6\u5019\uff0c\u624d\u4e00\u4e2a\u4e2a\u5220\u9664\u6587\u4ef6\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"delete"),"\u4f1a\u7acb\u523b\u5220\u9664\u6587\u4ef6\u3002(\u6240\u4ee5\u8fd9\u4e2a\u65b9\u6cd5\u7684\u4f7f\u7528\u573a\u666f\u662f\u600e\u6837\u7684\uff0c\u6211\u5c31\u4e0d\u592a\u6e05\u695a\u4e86)"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'public static void loopTest() throws IOException {\n    String root = "D:\\\\C_Temp\\\\files\\\\";\n\n    File path = new File(root);\n    if (!path.exists()) {\n        path.mkdirs();\n    }\n    int i = 0;\n    while (i < 40000) {\n        File file = new File(path, "Hello-" + i + ".txt");\n        file.createNewFile();\n        file.delete();\n//            file.deleteOnExit();\n        i++;\n    }\n}\n')),(0,l.kt)("h2",{id:"\u56db\u6536\u83b7"},"\u56db\u3001\u6536\u83b7"),(0,l.kt)("p",null,"\u672c\u6b21\u6392\u67e5\u7ecf\u5386\u6700\u5927\u7684\u6536\u83b7\u5c31\u662f\u5c1d\u8bd5\u5229\u7528\u5de5\u5177\u5206\u6790dump\u6587\u4ef6\uff0c\u4ee5\u524d\u5bf9\u8fd9\u79cd\u90fd\u662f\u671b\u800c\u5374\u6b65\uff0c\u611f\u89c9\u5f88\u96be\u3002\u4f46\u8fd9\u6b21\u5e26\u7740\u95ee\u9898\u53bb\u5206\u6790\u3001\u601d\u8003\uff0c\u8fd9\u6837\u4e0b\u6765\u4e5f\u4e0d\u7b97\u8fc7\u4e8e\u590d\u6742\u3002\u6709\u4e9b\u95ee\u9898\u4e0d\u662f\u95ee\u9898\u672c\u8eab\u96be\uff0c\u662f\u81ea\u5df1\u628a\u5b83\u60f3\u5f97\u5f88\u96be\u3002"),(0,l.kt)("p",null,"\u4e0b\u9762\u662f\u672c\u6b21\u7684\u4e00\u4e9b\u601d\u8003\u548c\u8e29\u8fc7\u7684\u5751\uff0c\u4ee5\u4f5c\u5907\u5fd8\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. \u83b7\u53d6dump\u6587\u4ef6\u6709\u4e24\u79cd\u65b9\u6cd5")),(0,l.kt)("p",null,"1)\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"jmap")," \u5de5\u5177\u751f\u6210\u53ef\u4ee5\u751f\u6210\u4efb\u610fJava\u8fdb\u7a0b\u7684dump\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# \u5148\u627e\u5230PID\nps -ef | grep java\n\n# jmap \u8f6c\u5b58\u5feb\u7167\njmap -dump:format=b,file=/opt/dump/test.dump {PID}\n")),(0,l.kt)("p",null,"2)\u901a\u8fc7\u914d\u7f6eJVM\u542f\u52a8\u53c2\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"#  \u5f53\u7a0b\u5e8f\u51fa\u73b0OutofMemory\u65f6\uff0c\u5c06\u4f1a\u5728\u76f8\u5e94\u7684\u76ee\u5f55\u4e0b\u751f\u6210\u4e00\u4efddump\u6587\u4ef6\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\u9009\u9879HeapDumpPath\u5219\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\u751f\u6210dump\u6587\u4ef6\n-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/opt/dumps\n")),(0,l.kt)("p",null,(0,l.kt)("img",{src:n(85010).Z,width:"1757",height:"592"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. MAT\u9700\u8981JDK11\u624d\u80fd\u8fd0\u884c")),(0,l.kt)("p",null,"\u89e3\u51b3\u529e\u6cd5\u662f\uff0c\u6253\u5f00MAT\u7684\u5b89\u88c5\u76ee\u5f55\uff0c\u6709\u4e00\u4e2a\u914d\u7f6e\u6587\u4ef6MemoryAnalyzer.ini\u3002\u6253\u5f00\u8fd9\u4e2a\u6587\u4ef6\uff0c\u5728\u6587\u4ef6\u4e2d\u6307\u5b9aJDK\u7248\u672c\u5373\u53ef\u3002\u65b0\u589e\u4e24\u884c\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"-vm D:/jdkPath/bin/javaw.exe\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. \u5728\u4f7f\u7528jvisualvm\u5206\u6790\u5927\u7684dump\u6587\u4ef6\u65f6\uff0c\u5806\u67e5\u5668\u4f7f\u7528\u7684\u5185\u5b58\u4e0d\u8db3")),(0,l.kt)("p",null,'\u4fee\u6539JAVA_HOME/lib/visualvm/etc/visualvm.conf\u6587\u4ef6\u4e2d visualvm_default_options="-J-client -J-Xms24 -J-Xmx256m"\uff0c\u7136\u540e\u91cd\u542fjvisualVM\u5373\u53ef'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"4. MAT\u4fee\u6539\u5185\u5b58\u7a7a\u95f4")),(0,l.kt)("p",null,"\u5206\u6790\u5806\u8f6c\u50a8\u6587\u4ef6\u9700\u8981\u6d88\u8017\u5f88\u591a\u7684\u5806\u7a7a\u95f4\uff0c\u4e3a\u4e86\u4fdd\u8bc1\u5206\u6790\u7684\u6548\u7387\u548c\u6027\u80fd\uff0c\u5728\u6709\u6761\u4ef6\u7684\u60c5\u51b5\u4e0b\uff0c\u5efa\u8bae\u5206\u914d\u7ed9 MAT \u5c3d\u53ef\u80fd\u591a\u7684\u5185\u5b58\u8d44\u6e90\u3002\u4e24\u79cd\u65b9\u5f0f\u5206\u914d\u5185\u5b58\u8d44\u6e90\u7ed9 MAT\uff1a\n1\uff09\u4fee\u6539\u542f\u52a8\u53c2\u6570 MemoryAnalyzer.exe -vmargs -Xmx4g\n2\uff09\u7f16\u8f91\u6587\u4ef6 MemoryAnalyzer.ini \u6dfb\u52a0 -vmargs \u2013 Xmx4g"),(0,l.kt)("p",null,"\u8fd9\u91cc\u4e5f\u5217\u4e00\u4e2a\u4ee3\u529e\u9879"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u5b66\u4e60",(0,l.kt)("inlineCode",{parentName:"li"},"MAT"),"\u5de5\u5177\u7684\u4f7f\u7528")),(0,l.kt)("p",null,"\u53c2\u8003\u7684\u4e00\u4e9b\u6587\u7ae0\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"jvisualvm\u5206\u6790\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/163774290"},"https://zhuanlan.zhihu.com/p/163774290")),(0,l.kt)("li",{parentName:"ul"},"MAT\u5b9a\u4f4d\u5927\u5bf9\u8c61\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/rb2010/p/14741674.html"},"https://www.cnblogs.com/rb2010/p/14741674.html")),(0,l.kt)("li",{parentName:"ul"},"MAT\u8be6\u7ec6\uff1a",(0,l.kt)("a",{parentName:"li",href:"https://blog.csdn.net/Jin_Kwok/article/details/80326088"},"https://blog.csdn.net/Jin_Kwok/article/details/80326088")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/82b25cf8cfde"},"https://www.jianshu.com/p/82b25cf8cfde"))))}m.isMDXComponent=!0},68012:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/202205291114190-2ea801e8561634f4e8e86bc06e21909c.png"},30159:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/202205291115133-4cfa0abbeb60340fd2ccf3089e5c70dc.png"},63812:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/202205291115665-f27afec276a58a90db42b8ec9d26fdc2.png"},85010:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/202205291116514-cdf9c6a3d80a6efa0eef1cccfce6626b.png"},79955:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/202205291116984-b2ab914ab0ff17e65a955eb6680b4161.png"}}]);
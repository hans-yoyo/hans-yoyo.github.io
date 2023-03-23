"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(o,".").concat(g)]||m[g]||c[g]||i;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={slug:"multi-git-manage",title:"Windows\u4e0bGit\u591a\u8d26\u6237\u7ba1\u7406",draft:!1,authors:"hans",tags:["Git"]},l=void 0,s={permalink:"/blog/multi-git-manage",source:"@site/blog/2019-12-05-Windows\u4e0bGit\u591a\u8d26\u6237\u7ba1\u7406.md",title:"Windows\u4e0bGit\u591a\u8d26\u6237\u7ba1\u7406",description:"\u672c\u6587\u4ee5\u914d\u7f6egithub\u8d26\u53f7\u548cgitlab\u8d26\u53f7\u6765\u9010\u6b65\u6f14\u793a\u5728Windows\u73af\u5883\u4e0b\u914d\u7f6eGit\u591a\u8d26\u53f7\u652f\u6301\u5373\u5728\u540c\u4e00\u4e2a\u7535\u8111\u4e0a\u7ba1\u7406\u591a\u4e2assh-key\uff0c\u5bf9git\u591a\u4e00\u5206\u4e86\u89e3",date:"2019-12-05T00:00:00.000Z",formattedDate:"2019\u5e7412\u67085\u65e5",tags:[{label:"Git",permalink:"/blog/tags/git"}],readingTime:2.49,hasTruncateMarker:!0,authors:[{name:"Hans",title:"Developer",url:"https://huhan.tech",imageURL:"https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLTIsqSuF4mFcjogGDIIib9aA3W0OJFWBj8Tx2HtNpa3fhCFwI55EVvn04HMzlACwxPsVGlwvMFvEQ/132",key:"hans"}],frontMatter:{slug:"multi-git-manage",title:"Windows\u4e0bGit\u591a\u8d26\u6237\u7ba1\u7406",draft:!1,authors:"hans",tags:["Git"]},prevItem:{title:"\u8bb0\u4e00\u6b21dump\u6587\u4ef6\u5206\u6790\u5386\u7a0b",permalink:"/blog/jvm-dump-file-analysis-experience"}},o={authorsImageUrls:[void 0]},p=[{value:"\u751f\u6210\u516c\u94a5\u3001\u79c1\u94a5",id:"\u751f\u6210\u516c\u94a5\u79c1\u94a5",level:2},{value:"\u6dfb\u52a0\u516c\u94a5\u5230Git\u670d\u52a1\u5668",id:"\u6dfb\u52a0\u516c\u94a5\u5230git\u670d\u52a1\u5668",level:2},{value:"\u914d\u7f6e\u672c\u5730\u591a\u8d26\u53f7\u7ba1\u7406",id:"\u914d\u7f6e\u672c\u5730\u591a\u8d26\u53f7\u7ba1\u7406",level:2},{value:"\u6d4b\u8bd5",id:"\u6d4b\u8bd5",level:2},{value:"\u53c2\u8003\u6587\u7ae0",id:"\u53c2\u8003\u6587\u7ae0",level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u672c\u6587\u4ee5\u914d\u7f6e",(0,a.kt)("strong",{parentName:"p"},"github"),"\u8d26\u53f7\u548c",(0,a.kt)("strong",{parentName:"p"},"gitlab"),"\u8d26\u53f7\u6765\u9010\u6b65\u6f14\u793a\u5728Windows\u73af\u5883\u4e0b\u914d\u7f6e",(0,a.kt)("strong",{parentName:"p"},"Git\u591a\u8d26\u53f7\u652f\u6301"),"\u5373\u5728\u540c\u4e00\u4e2a\u7535\u8111\u4e0a",(0,a.kt)("strong",{parentName:"p"},"\u7ba1\u7406\u591a\u4e2assh-key"),"\uff0c\u5bf9git\u591a\u4e00\u5206\u4e86\u89e3"),(0,a.kt)("h2",{id:"\u751f\u6210\u516c\u94a5\u79c1\u94a5"},"\u751f\u6210\u516c\u94a5\u3001\u79c1\u94a5"),(0,a.kt)("p",null,"\u4ee5\u7ba1\u7406\u5458\u65b9\u5f0f\u8fd0\u884cGit Bash"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u751f\u6210github.com\u5bf9\u5e94\u7684\u79c1\u94a5\u516c\u94a5")),(0,a.kt)("p",null,"\u547d\u540d\u4e3aid_rsa_github,\u65b9\u4fbf\u533a\u5206\u3002\u6b64\u65f6\u5f53\u524d\u76ee\u5f55\u751f\u6210\u4e24\u4e2a\u6587\u4ef6",(0,a.kt)("inlineCode",{parentName:"p"},"id_rsa_github.pub"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"id_rsa_github")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"ssh-keygen -t rsa -C email\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/hans-yoyo/FigureBed/master/2019/12/20191204222919.png",alt:null})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u7528\u540c\u6837\u7684\u65b9\u6cd5\u751f\u6210gitlab\u6240\u7528\u79c1\u94a5\u516c\u94a5")),(0,a.kt)("p",null,"\u547d\u540d\u4e3aid_rsa_gitlab.\u90ae\u7bb1\u5730\u5740\u53ef\u4ee5\u76f8\u540c\u53ef\u4ee5\u4e0d\u540c, \u6211\u8fd9\u91cc\u4f7f\u7528\u4e86\u4e0d\u540c\u7684\u90ae\u7bb1\u5730\u5740"),(0,a.kt)("p",null,"\u5c06\u4ee5\u4e0a\u751f\u6210\u76844\u4e2a\u6587\u4ef6\u5206\u522b\u653e\u5165\u5230github\u548cgitlab\u4e24\u4e2a\u6587\u4ef6\u5939\u4e2d(\u4e5f\u53ef\u4ee5\u4e0d\u653e\u5728\u6587\u4ef6\u5939)\uff0c\u6211\u8fd9\u91cc\u662f\u4e3a\u4e86\u65b9\u4fbf\u7ba1\u7406\u3002\u5c06\u4e24\u4e2a\u6587\u4ef6\u5939\u62f7\u8d1d\u5230.ssh\u76ee\u5f55(C:\\Users\\idobe","\\",".ssh)\u4e0b"),(0,a.kt)("h2",{id:"\u6dfb\u52a0\u516c\u94a5\u5230git\u670d\u52a1\u5668"},"\u6dfb\u52a0\u516c\u94a5\u5230Git\u670d\u52a1\u5668"),(0,a.kt)("p",null,"\u5c06\u516c\u94a5(",(0,a.kt)("inlineCode",{parentName:"p"},".pub"),"\u7ed3\u5c3e\u7684\u6587\u4ef6)\u7684\u5185\u5bb9\u6dfb\u52a0\u5230Git\u670d\u52a1\u5668"),(0,a.kt)("h2",{id:"\u914d\u7f6e\u672c\u5730\u591a\u8d26\u53f7\u7ba1\u7406"},"\u914d\u7f6e\u672c\u5730\u591a\u8d26\u53f7\u7ba1\u7406"),(0,a.kt)("p",null,"\u5728.ssh\u76ee\u5f55\u521b\u5efaconfig\u6587\u672c\u6587\u4ef6\u5e76\u5b8c\u6210\u76f8\u5173\u914d\u7f6e(\u6700\u6838\u5fc3\u7684\u5730\u65b9)"),(0,a.kt)("p",null,"\u6bcf\u4e2a\u8d26\u53f7\u5355\u72ec\u914d\u7f6e\u4e00\u4e2aHost\uff0c\u6bcf\u4e2aHost\u8981\u53d6\u4e00\u4e2a\u522b\u540d\uff0c\u6bcf\u4e2aHost\u4e3b\u8981\u914d\u7f6eHostName\u548cIdentityFile\u4e24\u4e2a\u5c5e\u6027\u5373\u53ef"),(0,a.kt)("p",null,"Host\u7684\u540d\u5b57\u53ef\u4ee5\u53d6\u4e3a\u81ea\u5df1\u559c\u6b22\u7684\u540d\u5b57"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"config"),"\u6587\u4ef6\u5185\u5bb9"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"HostName \u3000\u3000\u3000\u3000\u3000\u3000\u3000   \u8fd9\u4e2a\u662f\u771f\u5b9e\u7684\u57df\u540d\u5730\u5740\nIdentityFile \u3000\u3000\u3000\u3000\u3000\u3000\u3000  \u8fd9\u91cc\u662fid_rsa\u7684\u5730\u5740\nPreferredAuthentications   \u914d\u7f6e\u767b\u5f55\u65f6\u7528\u4ec0\u4e48\u6743\u9650\u8ba4\u8bc1--\u53ef\u8bbe\u4e3apublickey,password publickey,keyboard-interactive\u7b49\nUser \u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u3000\u914d\u7f6e\u4f7f\u7528\u7528\u6237\u540d\n\n# \u914d\u7f6egithub.com\nHost github.com\nHostName github.com\nIdentityFile C:\\\\Users\\\\{yourname}\\\\.ssh\\\\github\\\\id_rsa_github\nPreferredAuthentications publickey\n# \u5fc5\u987b\u4e3agit\nUser git\n\n# \u914d\u7f6e\u5176\u4ed6\nHost 192.168.0.xxx\nHostName 192.168.0.xxx\nIdentityFile C:\\\\Users\\\\{yourname}\\\\.ssh\\\\xxx\\\\id_rsa_xxx\nPreferredAuthentications publickey\nUser git\n")),(0,a.kt)("h2",{id:"\u6d4b\u8bd5"},"\u6d4b\u8bd5"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"\nidobe@Hyman-PC MINGW64 ~/Desktop\n$ ssh -T git@github.com\nEnter passphrase for key 'C:\\\\Users\\\\idobe\\\\.ssh\\\\github\\\\id_rsa_github':\nHi hyman213! You've successfully authenticated, but GitHub does not provide shell access\n\nidobe@Hyman-PC MINGW64 ~/Desktop\n$ ssh -T git@gitlab.com\nEnter passphrase for key 'C:\\\\Users\\\\idobe\\\\.ssh\\\\gitlab\\\\id_rsa_gitlab':\nWelcome to GitLab, hyman213!\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u6587\u7ae0"},"\u53c2\u8003\u6587\u7ae0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/popfisher/p/5731232.html"},"Windows\u4e0bGit\u591a\u8d26\u53f7\u914d\u7f6e\uff0c\u540c\u4e00\u7535\u8111\u591a\u4e2assh-key\u7684\u7ba1\u7406")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/jawil/notes/issues/2"},"\u540c\u4e00\u53f0\u7535\u8111\u914d\u7f6e\u591a\u4e2agit\u8d26\u53f7"))))}c.isMDXComponent=!0}}]);
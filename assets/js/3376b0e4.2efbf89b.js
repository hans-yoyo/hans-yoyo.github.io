"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9593],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return t?i.createElement(g,a(a({ref:n},s),{},{components:t})):i.createElement(g,a({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29363:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(87462),r=(t(67294),t(3905));const o={},a=void 0,l={unversionedId:"springcloud/FeignClients\u3001Ribbon\u3001Hystrix\u7684\u5173\u7cfb",id:"springcloud/FeignClients\u3001Ribbon\u3001Hystrix\u7684\u5173\u7cfb",title:"FeignClients\u3001Ribbon\u3001Hystrix\u7684\u5173\u7cfb",description:"Feign Client \u7684\u8d85\u65f6\u65f6\u95f4",source:"@site/wiki/spring/springcloud/FeignClients\u3001Ribbon\u3001Hystrix\u7684\u5173\u7cfb.md",sourceDirName:"springcloud",slug:"/springcloud/FeignClients\u3001Ribbon\u3001Hystrix\u7684\u5173\u7cfb",permalink:"/wiki/spring/springcloud/FeignClients\u3001Ribbon\u3001Hystrix\u7684\u5173\u7cfb",draft:!1,tags:[],version:"current",lastUpdatedBy:"hyman213",lastUpdatedAt:1679575123,formattedLastUpdatedAt:"2023\u5e743\u670823\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SpringBoot\u81ea\u5b9a\u4e49banner",permalink:"/wiki/spring/springboot/springboot-banner"}},p={},c=[],s={toc:c};function u(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Feign Client \u7684\u8d85\u65f6\u65f6\u95f4"),(0,r.kt)("p",null,"\u4e00\u3001FeignClient\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# \u9ed8\u8ba4\u5f00\u542f\nfeign.httpclient.enabled=false\n# \u9ed8\u8ba4\u5173\u95ed\nfeign.okhttp.enabled=true\n# \u9ed8\u8ba4\u5173\u95ed\nfeign.hystrix.enabled=false\n# \u9ed8\u8ba4\u5173\u95ed\nfeign.sentinel.enabled=true\n\n# default context \u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\nfeign.client.config.default.connectTimeout = 5000\n# default context \u8bfb\u8d85\u65f6\u65f6\u95f4\nfeign.client.config.default.readTimeout = 10000\n\n# \u8bbe\u7f6e\u91cd\u8bd5\u5904\u7406\u5668\uff0c\u9ed8\u8ba4\u76f4\u63a5\u629b\u51fa\u5f02\u5e38\n# feign.client.config.default.retryer = Class<Retryer>\n# \u8bbe\u7f6e\u65e5\u5fd7\u7ea7\u522b\uff0c\u9ed8\u8ba4NONE\n# feign.client.config.default.loggerLevel = FULL\n")),(0,r.kt)("p",null,"\u4e8c\u3001Hystrix \u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"# \u5168\u5c40\u8bbe\u7f6e\u8d85\u65f6\uff1a\nhystrix.command.default.execution.isolation.thread.timeoutInMilliseconds: 30000\n")),(0,r.kt)("p",null,"\u4e09\u3001Ribbon \u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# \u8fde\u63a5\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a1\u79d2\uff0c\u8be5\u503c\u4f1a\u88abFeignClient\u914d\u7f6econnectTimeout\u8986\u76d6\nribbon.ConnectTimeout=5000\n# \u8bfb\u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e3a1\u79d2\uff0c\u8be5\u503c\u4f1a\u88abFeignClient\u914d\u7f6ereadTimeout\u8986\u76d6\nribbon.ReadTimeout=5000\n# \u6700\u5927\u91cd\u8bd5\u6b21\u6570\nribbon.MaxAutoRetries=1\n")),(0,r.kt)("p",null,"\u56db\u3001OkHttp Client \u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Bean("okHttpClient")\npublic OkHttpClient okHttpClient(ConnectionPool connectionPool) {\n    return new OkHttpClient().newBuilder().connectionPool(connectionPool)\n             // \u6539\u503c\u5728FeignClient\u4f53\u7cfb\u4e2d\u4f1a\u88ab\u52a8\u6001\u8986\u76d6\n            .connectTimeout(6, TimeUnit.SECONDS)\n             // \u6539\u503c\u5728FeignClient\u4f53\u7cfb\u4e2d\u4f1a\u88ab\u52a8\u6001\u8986\u76d6\n            .readTimeout(VmcConstants.TEN_SECONDS, TimeUnit.SECONDS)\n             // \u6dfb\u52a0\u62e6\u622a\u5668\uff0c\u652f\u6301\u52a8\u6001\u8bbe\u7f6e\u8d85\u65f6\u65f6\u95f4\n            .addInterceptor(new OkHttpClientDynamicTimeoutInterceptor())\n            .eventListener(eventListener())\n            .build();\n}\n')),(0,r.kt)("admonition",{title:"\u603b\u7ed3",type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"Feign"),"\u7684\u8bf7\u6c42\uff1a\u5176\u5b9e\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Hystrix"),"+",(0,r.kt)("inlineCode",{parentName:"p"},"Ribbon"),"\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Hystrix"),"\u5728\u6700\u5916\u5c42\uff0c\u7136\u540e\u518d\u5230",(0,r.kt)("inlineCode",{parentName:"p"},"Ribbon"),"\uff0c\u6700\u540e\u91cc\u9762\u7684\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"http"),"\u8bf7\u6c42\u3002\u6240\u4ee5\u8bf4\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Hystrix"),"\u7684\u7194\u65ad\u65f6\u95f4\u5fc5\u987b\u5927\u4e8e",(0,r.kt)("inlineCode",{parentName:"p"},"Ribbon"),"\u7684 (\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ConnectTimeout"),"\xa0+\xa0",(0,r.kt)("inlineCode",{parentName:"p"},"ReadTimeout"),"\xa0)\u3002\u800c\u5982\u679c",(0,r.kt)("inlineCode",{parentName:"p"},"Ribbon"),"\u5f00\u542f\u4e86\u91cd\u8bd5\u673a\u5236\uff0c\u8fd8\u9700\u8981\u4e58\u4ee5\u5bf9\u5e94\u7684\u91cd\u8bd5\u6b21\u6570\uff0c\u4fdd\u8bc1\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Ribbon"),"\u91cc\u7684\u8bf7\u6c42\u8fd8\u6ca1\u7ed3\u675f\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"Hystrix"),"\u7684\u7194\u65ad\u65f6\u95f4\u4e0d\u4f1a\u8d85\u65f6\u3002")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(35038).Z,width:"1027",height:"765"})))}u.isMDXComponent=!0},35038:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/feignclient-327e24fcf68de1de1a5b439d773300c6.png"}}]);
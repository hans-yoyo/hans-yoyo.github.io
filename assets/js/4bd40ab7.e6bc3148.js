"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6478],{3905:(e,n,r)=>{r.d(n,{Zo:()=>g,kt:()=>u});var t=r(67294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=t.createContext({}),d=function(e){var n=t.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},g=function(e){var n=d(e.components);return t.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),l=d(r),u=i,m=l["".concat(o,".").concat(u)]||l[u]||c[u]||a;return r?t.createElement(m,p(p({ref:n},g),{},{components:r})):t.createElement(m,p({ref:n},g))}));function u(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=l;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,p[1]=s;for(var d=2;d<a;d++)p[d]=r[d];return t.createElement.apply(null,p)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},21671:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var t=r(87462),i=(r(67294),r(3905));const a={title:"Spring\u6846\u67b6\u6982\u8ff0",slug:"basic",sidebar_position:1,keywords:["Spring"],tags:["Spring"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2023-05-10 22:08",author:"Hans"}},p=void 0,s={unversionedId:"spring/Spring\u6846\u67b6\u6982\u8ff0",id:"spring/Spring\u6846\u67b6\u6982\u8ff0",title:"Spring\u6846\u67b6\u6982\u8ff0",description:"[!!NFO] Spring \u53c2\u8003\u6587\u6863",source:"@site/docs/04.spring/01.Spring\u6846\u67b6\u6982\u8ff0.md",sourceDirName:"04.spring",slug:"/spring/basic",permalink:"/docs/spring/basic",draft:!1,tags:[{label:"Spring",permalink:"/docs/tags/spring"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1683727680,formattedLastUpdatedAt:"2023\u5e745\u670810\u65e5",sidebarPosition:1,frontMatter:{title:"Spring\u6846\u67b6\u6982\u8ff0",slug:"basic",sidebar_position:1,keywords:["Spring"],tags:["Spring"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2023-05-10 22:08",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"Spring",permalink:"/docs/category/spring"},next:{title:"Spring\u6838\u5fc3-IoC-\u7406\u89e3\u3001\u4f53\u7cfb\u7ed3\u6784",permalink:"/docs/spring/ioc-arch"}},o={},d=[{value:"Spring \u7ec4\u4ef6",id:"spring-\u7ec4\u4ef6",level:2},{value:"Core Container\uff08Spring\u7684\u6838\u5fc3\u5bb9\u5668\uff09",id:"core-containerspring\u7684\u6838\u5fc3\u5bb9\u5668",level:3},{value:"Data Access/Integration\uff08\u6570\u636e\u8bbf\u95ee\uff0f\u96c6\u6210\uff09",id:"data-accessintegration\u6570\u636e\u8bbf\u95ee\u96c6\u6210",level:3},{value:"Web\u6a21\u5757",id:"web\u6a21\u5757",level:3},{value:"AOP\u3001Aspects\u3001Instrumentation\u548cMessaging",id:"aopaspectsinstrumentation\u548cmessaging",level:3},{value:"Test\u6a21\u5757",id:"test\u6a21\u5757",level:3},{value:"IDEA \u5bfc\u5165\u6e90\u7801",id:"idea-\u5bfc\u5165\u6e90\u7801",level:2}],g={toc:d};function c(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},g,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"[!!NFO]"," Spring \u53c2\u8003\u6587\u6863"),(0,i.kt)("ul",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ul"},"Spring\u5b98\u65b9\u6587\u6863: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/5.3.9/reference/html/"},"https://docs.spring.io/spring-framework/docs/5.3.9/reference/html/")),(0,i.kt)("li",{parentName:"ul"},"Spring \u6587\u6863\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://docs.spring.io/spring-framework/docs/"},"https://docs.spring.io/spring-framework/docs/")),(0,i.kt)("li",{parentName:"ul"},"Spring \u4e2d\u6587\u6587\u6863\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://springdoc.cn/"},"https://springdoc.cn/")),(0,i.kt)("li",{parentName:"ul"},"Spring Github\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spring-projects/spring-framework"},"https://github.com/spring-projects/spring-framework")))),(0,i.kt)("h2",{id:"spring-\u7ec4\u4ef6"},"Spring \u7ec4\u4ef6"),(0,i.kt)("h3",{id:"core-containerspring\u7684\u6838\u5fc3\u5bb9\u5668"},"Core Container\uff08Spring\u7684\u6838\u5fc3\u5bb9\u5668\uff09"),(0,i.kt)("p",null,"Spring \u7684\u6838\u5fc3\u5bb9\u5668\u662f\u5176\u4ed6\u6a21\u5757\u5efa\u7acb\u7684\u57fa\u7840\uff0c\u7531 Beans \u6a21\u5757\u3001Core \u6838\u5fc3\u6a21\u5757\u3001Context \u4e0a\u4e0b\u6587\u6a21\u5757\u548c SpEL \u8868\u8fbe\u5f0f\u8bed\u8a00\u6a21\u5757\u7ec4\u6210\uff0c\u6ca1\u6709\u8fd9\u4e9b\u6838\u5fc3\u5bb9\u5668\uff0c\u4e5f\u4e0d\u53ef\u80fd\u6709 AOP\u3001Web \u7b49\u4e0a\u5c42\u7684\u529f\u80fd\u3002\u5177\u4f53\u4ecb\u7ecd\u5982\u4e0b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Beans \u6a21\u5757"),"\uff1a\u63d0\u4f9b\u4e86\u6846\u67b6\u7684\u57fa\u7840\u90e8\u5206\uff0c\u5305\u62ec\u63a7\u5236\u53cd\u8f6c\u548c\u4f9d\u8d56\u6ce8\u5165\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Core \u6838\u5fc3\u6a21\u5757"),"\uff1a\u5c01\u88c5\u4e86 Spring \u6846\u67b6\u7684\u5e95\u5c42\u90e8\u5206\uff0c\u5305\u62ec\u8d44\u6e90\u8bbf\u95ee\u3001\u7c7b\u578b\u8f6c\u6362\u53ca\u4e00\u4e9b\u5e38\u7528\u5de5\u5177\u7c7b\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Context \u4e0a\u4e0b\u6587\u6a21\u5757"),"\uff1a\u5efa\u7acb\u5728 Core \u548c Beans \u6a21\u5757\u7684\u57fa\u7840\u4e4b\u4e0a\uff0c\u96c6\u6210 Beans \u6a21\u5757\u529f\u80fd\u5e76\u6dfb\u52a0\u8d44\u6e90\u7ed1\u5b9a\u3001\u6570\u636e\u9a8c\u8bc1\u3001\u56fd\u9645\u5316\u3001Java EE \u652f\u6301\u3001\u5bb9\u5668\u751f\u547d\u5468\u671f\u3001\u4e8b\u4ef6\u4f20\u64ad\u7b49\u3002ApplicationContext \u63a5\u53e3\u662f\u4e0a\u4e0b\u6587\u6a21\u5757\u7684\u7126\u70b9\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SpEL \u6a21\u5757"),"\uff1a\u63d0\u4f9b\u4e86\u5f3a\u5927\u7684\u8868\u8fbe\u5f0f\u8bed\u8a00\u652f\u6301\uff0c\u652f\u6301\u8bbf\u95ee\u548c\u4fee\u6539\u5c5e\u6027\u503c\uff0c\u65b9\u6cd5\u8c03\u7528\uff0c\u652f\u6301\u8bbf\u95ee\u53ca\u4fee\u6539\u6570\u7ec4\u3001\u5bb9\u5668\u548c\u7d22\u5f15\u5668\uff0c\u547d\u540d\u53d8\u91cf\uff0c\u652f\u6301\u7b97\u6570\u548c\u903b\u8f91\u8fd0\u7b97\uff0c\u652f\u6301\u4ece Spring \u5bb9\u5668\u83b7\u53d6 Bean\uff0c\u5b83\u4e5f\u652f\u6301\u5217\u8868\u6295\u5f71\u3001\u9009\u62e9\u548c\u4e00\u822c\u7684\u5217\u8868\u805a\u5408\u7b49\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-context</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-core</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-beans</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.aspectj</groupId>\n        <artifactId>aspectjweaver</artifactId>\n        <version>${aspectjweaver.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-expression</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n</dependencies>\n")),(0,i.kt)("h3",{id:"data-accessintegration\u6570\u636e\u8bbf\u95ee\u96c6\u6210"},"Data Access/Integration\uff08\u6570\u636e\u8bbf\u95ee\uff0f\u96c6\u6210\uff09"),(0,i.kt)("p",null,"\u6570\u636e\u8bbf\u95ee\uff0f\u96c6\u6210\u5c42\u5305\u62ec JDBC\u3001ORM\u3001OXM\u3001JMS \u548c Transactions \u6a21\u5757\uff0c\u5177\u4f53\u4ecb\u7ecd\u5982\u4e0b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"JDBC \u6a21\u5757"),"\uff1a\u63d0\u4f9b\u4e86\u4e00\u4e2a JDBC \u7684\u6837\u4f8b\u6a21\u677f\uff0c\u4f7f\u7528\u8fd9\u4e9b\u6a21\u677f\u80fd\u6d88\u9664\u4f20\u7edf\u5197\u957f\u7684 JDBC \u7f16\u7801\u8fd8\u6709\u5fc5\u987b\u7684\u4e8b\u52a1\u63a7\u5236\uff0c\u800c\u4e14\u80fd\u4eab\u53d7\u5230 Spring \u7ba1\u7406\u4e8b\u52a1\u7684\u597d\u5904\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"ORM \u6a21\u5757"),"\uff1a\u63d0\u4f9b\u4e0e\u6d41\u884c\u7684\u201c\u5bf9\u8c61-\u5173\u7cfb\u201d\u6620\u5c04\u6846\u67b6\u65e0\u7f1d\u96c6\u6210\u7684 API\uff0c\u5305\u62ec JPA\u3001JDO\u3001Hibernate \u548c MyBatis \u7b49\u3002\u800c\u4e14\u8fd8\u53ef\u4ee5\u4f7f\u7528 Spring \u4e8b\u52a1\u7ba1\u7406\uff0c\u65e0\u9700\u989d\u5916\u63a7\u5236\u4e8b\u52a1\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"OXM \u6a21\u5757"),"\uff1a\u63d0\u4f9b\u4e86\u4e00\u4e2a\u652f\u6301 Object /XML \u6620\u5c04\u7684\u62bd\u8c61\u5c42\u5b9e\u73b0\uff0c\u5982 JAXB\u3001Castor\u3001XMLBeans\u3001JiBX \u548c XStream\u3002\u5c06 Java \u5bf9\u8c61\u6620\u5c04\u6210 XML \u6570\u636e\uff0c\u6216\u8005\u5c06XML \u6570\u636e\u6620\u5c04\u6210 Java \u5bf9\u8c61\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"JMS \u6a21\u5757"),"\uff1a\u6307 Java \u6d88\u606f\u670d\u52a1\uff0c\u63d0\u4f9b\u4e00\u5957 \u201c\u6d88\u606f\u751f\u4ea7\u8005\u3001\u6d88\u606f\u6d88\u8d39\u8005\u201d\u6a21\u677f\u7528\u4e8e\u66f4\u52a0\u7b80\u5355\u7684\u4f7f\u7528 JMS\uff0cJMS \u7528\u4e8e\u7528\u4e8e\u5728\u4e24\u4e2a\u5e94\u7528\u7a0b\u5e8f\u4e4b\u95f4\uff0c\u6216\u5206\u5e03\u5f0f\u7cfb\u7edf\u4e2d\u53d1\u9001\u6d88\u606f\uff0c\u8fdb\u884c\u5f02\u6b65\u901a\u4fe1\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Transactions \u4e8b\u52a1\u6a21\u5757"),"\uff1a\u652f\u6301\u7f16\u7a0b\u548c\u58f0\u660e\u5f0f\u4e8b\u52a1\u7ba1\u7406\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-jdbc</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-orm</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-oxm</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-jms</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-tx</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n</dependencies>\n")),(0,i.kt)("h3",{id:"web\u6a21\u5757"},"Web\u6a21\u5757"),(0,i.kt)("p",null,"Spring \u7684 Web \u5c42\u5305\u62ec Web\u3001Servlet\u3001WebSocket \u548c Webflux \u7ec4\u4ef6\uff0c\u5177\u4f53\u4ecb\u7ecd\u5982\u4e0b\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Web \u6a21\u5757"),"\uff1a\u63d0\u4f9b\u4e86\u57fa\u672c\u7684 Web \u5f00\u53d1\u96c6\u6210\u7279\u6027\uff0c\u4f8b\u5982\u591a\u6587\u4ef6\u4e0a\u4f20\u529f\u80fd\u3001\u4f7f\u7528\u7684 Servlet \u76d1\u542c\u5668\u7684 IOC \u5bb9\u5668\u521d\u59cb\u5316\u4ee5\u53ca Web \u5e94\u7528\u4e0a\u4e0b\u6587\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Servlet \u6a21\u5757"),"\uff1a\u63d0\u4f9b\u4e86\u4e00\u4e2a Spring MVC Web \u6846\u67b6\u5b9e\u73b0\u3002Spring MVC \u6846\u67b6\u63d0\u4f9b\u4e86\u57fa\u4e8e\u6ce8\u89e3\u7684\u8bf7\u6c42\u8d44\u6e90\u6ce8\u5165\u3001\u66f4\u7b80\u5355\u7684\u6570\u636e\u7ed1\u5b9a\u3001\u6570\u636e\u9a8c\u8bc1\u7b49\u53ca\u4e00\u5957\u975e\u5e38\u6613\u7528\u7684 JSP \u6807\u7b7e\uff0c\u5b8c\u5168\u65e0\u7f1d\u4e0e Spring \u5176\u4ed6\u6280\u672f\u534f\u4f5c\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"WebSocket \u6a21\u5757"),"\uff1a\u63d0\u4f9b\u4e86\u7b80\u5355\u7684\u63a5\u53e3\uff0c\u7528\u6237\u53ea\u8981\u5b9e\u73b0\u54cd\u5e94\u7684\u63a5\u53e3\u5c31\u53ef\u4ee5\u5feb\u901f\u7684\u642d\u5efa WebSocket Server\uff0c\u4ece\u800c\u5b9e\u73b0\u53cc\u5411\u901a\u8baf\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Webflux \u6a21\u5757"),"\uff1a Spring WebFlux \u662f Spring Framework 5.x\u4e2d\u5f15\u5165\u7684\u65b0\u7684\u54cd\u5e94\u5f0fweb\u6846\u67b6\u3002\u4e0eSpring MVC\u4e0d\u540c\uff0c\u5b83\u4e0d\u9700\u8981Servlet API\uff0c\u662f\u5b8c\u5168\u5f02\u6b65\u4e14\u975e\u963b\u585e\u7684\uff0c\u5e76\u4e14\u901a\u8fc7Reactor\u9879\u76ee\u5b9e\u73b0\u4e86Reactive Streams\u89c4\u8303\u3002Spring WebFlux \u7528\u4e8e\u521b\u5efa\u57fa\u4e8e\u4e8b\u4ef6\u5faa\u73af\u6267\u884c\u6a21\u578b\u7684\u5b8c\u5168\u5f02\u6b65\u4e14\u975e\u963b\u585e\u7684\u5e94\u7528\u7a0b\u5e8f\u3002")),(0,i.kt)("p",null,"\u6b64\u5916Spring4.x\u4e2d\u8fd8\u6709Portlet \u6a21\u5757\uff0c\u5728Spring 5.x\u4e2d\u5df2\u7ecf\u79fb\u9664"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Portlet \u6a21\u5757"),"\uff1a\u63d0\u4f9b\u4e86\u5728 Portlet \u73af\u5883\u4e2d\u4f7f\u7528 MVC \u5b9e\u73b0\uff0c\u7c7b\u4f3c Web-Servlet \u6a21\u5757\u7684\u529f\u80fd\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-web</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-webmvc</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-webflux</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-websocket</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n</dependencies>\n")),(0,i.kt)("h3",{id:"aopaspectsinstrumentation\u548cmessaging"},"AOP\u3001Aspects\u3001Instrumentation\u548cMessaging"),(0,i.kt)("p",null,"\u5728 Core Container \u4e4b\u4e0a\u662f AOP\u3001Aspects \u7b49\u6a21\u5757\uff0c\u5177\u4f53\u4ecb\u7ecd\u5982\u4e0b\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"AOP \u6a21\u5757"),"\uff1a\u63d0\u4f9b\u4e86\u9762\u5411\u5207\u9762\u7f16\u7a0b\u5b9e\u73b0\uff0c\u63d0\u4f9b\u6bd4\u5982\u65e5\u5fd7\u8bb0\u5f55\u3001\u6743\u9650\u63a7\u5236\u3001\u6027\u80fd\u7edf\u8ba1\u7b49\u901a\u7528\u529f\u80fd\u548c\u4e1a\u52a1\u903b\u8f91\u5206\u79bb\u7684\u6280\u672f\uff0c\u5e76\u4e14\u80fd\u52a8\u6001\u7684\u628a\u8fd9\u4e9b\u529f\u80fd\u6dfb\u52a0\u5230\u9700\u8981\u7684\u4ee3\u7801\u4e2d\uff0c\u8fd9\u6837\u5404\u53f8\u5176\u804c\uff0c\u964d\u4f4e\u4e1a\u52a1\u903b\u8f91\u548c\u901a\u7528\u529f\u80fd\u7684\u8026\u5408\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Aspects \u6a21\u5757"),"\uff1a\u63d0\u4f9b\u4e0e AspectJ \u7684\u96c6\u6210\uff0c\u662f\u4e00\u4e2a\u529f\u80fd\u5f3a\u5927\u4e14\u6210\u719f\u7684\u9762\u5411\u5207\u9762\u7f16\u7a0b\uff08AOP\uff09\u6846\u67b6\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Instrumentation \u6a21\u5757"),"\uff1a\u63d0\u4f9b\u4e86\u7c7b\u5de5\u5177\u7684\u652f\u6301\u548c\u7c7b\u52a0\u8f7d\u5668\u7684\u5b9e\u73b0\uff0c\u53ef\u4ee5\u5728\u7279\u5b9a\u7684\u5e94\u7528\u670d\u52a1\u5668\u4e2d\u4f7f\u7528\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"messaging \u6a21\u5757"),"\uff1aSpring 4.0 \u4ee5\u540e\u65b0\u589e\u4e86\u6d88\u606f\uff08Spring-messaging\uff09\u6a21\u5757\uff0c\u8be5\u6a21\u5757\u63d0\u4f9b\u4e86\u5bf9\u6d88\u606f\u4f20\u9012\u4f53\u7cfb\u7ed3\u6784\u548c\u534f\u8bae\u7684\u652f\u6301\u3002"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"jcl \u6a21\u5757"),"\uff1a Spring 5.x\u4e2d\u65b0\u589e\u4e86\u65e5\u5fd7\u6846\u67b6\u96c6\u6210\u7684\u6a21\u5757")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-aop</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-aspects</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-instrument</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-jcl</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-messaging</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n</dependencies>\n")),(0,i.kt)("h3",{id:"test\u6a21\u5757"},"Test\u6a21\u5757"),(0,i.kt)("p",null,"Test \u6a21\u5757\uff1aSpring \u652f\u6301 Junit \u548c TestNG \u6d4b\u8bd5\u6846\u67b6\uff0c\u800c\u4e14\u8fd8\u989d\u5916\u63d0\u4f9b\u4e86\u4e00\u4e9b\u57fa\u4e8e Spring \u7684\u6d4b\u8bd5\u529f\u80fd\uff0c\u6bd4\u5982\u5728\u6d4b\u8bd5 Web \u6846\u67b6\u65f6\uff0c\u6a21\u62df Http \u8bf7\u6c42\u7684\u529f\u80fd\u3002"),(0,i.kt)("p",null,"\u5305\u542bMock Objects, TestContext Framework, Spring MVC Test, WebTestClient\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-test</artifactId>\n        <version>${spring.version}</version>\n    </dependency>\n</dependencies>\n")),(0,i.kt)("h2",{id:"idea-\u5bfc\u5165\u6e90\u7801"},"IDEA \u5bfc\u5165\u6e90\u7801"),(0,i.kt)("p",null,"\u53c2\u8003\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7062140276139098142"},"https://juejin.cn/post/7062140276139098142")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[798],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),i=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=i(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=i(t),u=r,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||o;return t?a.createElement(g,p(p({ref:n},s),{},{components:t})):a.createElement(g,p({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,p=new Array(o);p[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,p[1]=d;for(var i=2;i<o;i++)p[i]=t[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var a=t(7462),r=(t(7294),t(3905));const o={title:"maven\u4f9d\u8d56\u8c03\u89e3\u3001\u4f9d\u8d56\u8303\u56f4",description:"maven\u4f9d\u8d56\u8c03\u89e3\u3001\u4f9d\u8d56\u8303\u56f4",slug:"maven-dependency-mediation",sidebar_position:1,keywords:["maven"],tags:["maven"],draft:!1,hide_table_of_contents:!0,last_update:{date:"2022-11-15 20:39",author:"Hans"}},p=void 0,d={unversionedId:"maven/maven\u4f9d\u8d56\u8c03\u89e3\u3001\u4f9d\u8d56\u8303\u56f4",id:"maven/maven\u4f9d\u8d56\u8c03\u89e3\u3001\u4f9d\u8d56\u8303\u56f4",title:"maven\u4f9d\u8d56\u8c03\u89e3\u3001\u4f9d\u8d56\u8303\u56f4",description:"maven\u4f9d\u8d56\u8c03\u89e3\u3001\u4f9d\u8d56\u8303\u56f4",source:"@site/docs/maven/01-maven\u4f9d\u8d56\u8c03\u89e3\u3001\u4f9d\u8d56\u8303\u56f4.md",sourceDirName:"maven",slug:"/maven/maven-dependency-mediation",permalink:"/docs/maven/maven-dependency-mediation",draft:!1,tags:[{label:"maven",permalink:"/docs/tags/maven"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1668515940,formattedLastUpdatedAt:"2022\u5e7411\u670815\u65e5",sidebarPosition:1,frontMatter:{title:"maven\u4f9d\u8d56\u8c03\u89e3\u3001\u4f9d\u8d56\u8303\u56f4",description:"maven\u4f9d\u8d56\u8c03\u89e3\u3001\u4f9d\u8d56\u8303\u56f4",slug:"maven-dependency-mediation",sidebar_position:1,keywords:["maven"],tags:["maven"],draft:!1,hide_table_of_contents:!0,last_update:{date:"2022-11-15 20:39",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/docs/API\u8bbe\u8ba1/"},next:{title:"\u4f7f\u7528maven-assembly-plugin\u5236\u4f5c\u53ef\u6267\u884cjar\u5305(\u5e26\u4f9d\u8d56\u5305)",permalink:"/docs/maven/maven-assembly-plugin"}},l={},i=[{value:"\u4f9d\u8d56\u4f20\u9012",id:"\u4f9d\u8d56\u4f20\u9012",level:2},{value:"\u4f9d\u8d56\u8303\u56f4",id:"\u4f9d\u8d56\u8303\u56f4",level:2},{value:"optional \u6807\u7b7e",id:"optional-\u6807\u7b7e",level:2},{value:"\u4f9d\u8d56\u8c03\u89e3\u539f\u5219",id:"\u4f9d\u8d56\u8c03\u89e3\u539f\u5219",level:2},{value:"\u5982\u4f55\u6392\u67e5",id:"\u5982\u4f55\u6392\u67e5",level:2},{value:"\u4f9d\u8d56\u51b2\u7a81\u7684\u89e3\u51b3\u529e\u6cd5",id:"\u4f9d\u8d56\u51b2\u7a81\u7684\u89e3\u51b3\u529e\u6cd5",level:2}],s={toc:i};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"maven\u4f9d\u8d56\u67092\u79cd\u7c7b\u578b\uff0c\u4e00\u7c7b\u662f\u76f4\u63a5(Direct)\u4f9d\u8d56\uff0c\u5c31\u662f\u6307\u5728\u9879\u76ee ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u7533\u660e\u7684\u4f9d\u8d56\uff1b\u53e6\u4e00\u7c7b\u662f\u95f4\u63a5(Transitive)\u4f9d\u8d56\uff0c\u662f\u76f4\u63a5\u4f9d\u8d56\u7684\u4f9d\u8d56\u3002"),(0,r.kt)("h2",{id:"\u4f9d\u8d56\u4f20\u9012"},"\u4f9d\u8d56\u4f20\u9012"),(0,r.kt)("p",null,"\u5f53\u524d\u9879\u76ee\u5f15\u5165\u4e86\u4e00\u4e2a\u4f9d\u8d56\uff0c\u8be5\u4f9d\u8d56\u7684\u4f9d\u8d56\u4e5f\u4f1a\u88ab\u5f15\u5165\u9879\u76ee\u3002\u4f46\u4e0d\u662f\u6240\u6709\u7684\u4f9d\u8d56\u95f4\u63a5\u4f9d\u8d56\u90fd\u4f1a\u88ab\u5f15\u5165\uff0c\u8fd8\u4e0e\u4f9d\u8d56\u7533\u660e\u7684 ",(0,r.kt)("strong",{parentName:"p"},"\u4f9d\u8d56\u8303\u56f4")," \u6709\u5173\u3002"),(0,r.kt)("h2",{id:"\u4f9d\u8d56\u8303\u56f4"},"\u4f9d\u8d56\u8303\u56f4"),(0,r.kt)("p",null,"scope\u5143\u7d20\u4e3b\u8981\u7528\u6765\u63a7\u5236\u4f9d\u8d56\u7684\u4f7f\u7528\u8303\u56f4\uff0c\u6307\u5b9a\u5f53\u524d\u5305\u7684\u4f9d\u8d56\u8303\u56f4\u548c\u4f9d\u8d56\u7684\u4f20\u9012\u6027\uff0c\u4e5f\u5c31\u662f\u54ea\u4e9b\u4f9d\u8d56\u5728\u54ea\u4e9bclasspath\u4e2d\u53ef\u7528\u3002"),(0,r.kt)("p",null,"maven\u5f15\u5165\u4f9d\u8d56\uff0c\u5e76\u4e0d\u662f\u628ajar\u5305\u62f7\u8d1d\u5230\u9879\u76ee\u4e2d\u6765\uff0c\u800c\u662f\u628ajar\u5305\u4e0b\u8f7d\u5230\u672c\u5730\u4ed3\u5e93\uff0c\u7136\u540e\u901a\u8fc7\u5236\u5b9aclasspath\u5728\u9879\u76ee\u4e2d\u5f15\u5165\u5177\u4f53\u7684jar\u5305\u3002maven\u7ba1\u7406\u77403\u5957classpath\uff0c\u5206\u522b\u662f \u7f16\u8bd1classpath\uff0c\u6d4b\u8bd5classpath\uff0c\u8fd0\u884cclasspath\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"compile: \u9ed8\u8ba4\uff0c\u8868\u793a\u5bf9\u5e94\u4f9d\u8d56\u4f1a\u53c2\u4e0e\u5f53\u524d\u9879\u76ee\u7684\u7f16\u8bd1\u3001\u6d4b\u8bd5\u3001\u8fd0\u884c\u7b49\uff0c\u662f\u4e00\u4e2a\u6bd4\u8f83\u5f3a\u7684\u4f9d\u8d56\u3002\u6253\u5305\u65f6\u901a\u5e38\u4f1a\u5305\u542b\u8be5\u4f9d\u8d56\uff0c\u90e8\u7f72\u65f6\u4f1a\u6253\u5305\u5230lib\u76ee\u5f55\u4e0b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"test: \u8868\u793a\u4f9d\u8d56\u9879\u76ee\u4ec5\u53c2\u4e0e\u6d4b\u8bd5\u73af\u8282\uff0c\u5728\u7f16\u8bd1\u3001\u8fd0\u884c\u3001\u6253\u5305\u65f6\u4e0d\u4f1a\u4f7f\u7528\u3002\u6700\u5e38\u89c1\u7684\u4f7f\u7528\u5c31\u662f\u5355\u5143\u6d4b\u8bd5\u3002\u4f8b\u5b50\uff1ajunit, h2")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>junit</groupId>\n    <artifactId>junit</artifactId>\n    <version>4.12</version>\n    <scope>test</scope>\n</dependency>\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"provided: \u7f16\u8bd1\u548c\u6d4b\u8bd5\u6709\u6548\uff0c\u8fd0\u884c\u65e0\u6548\uff0c\u548ccompile\u529f\u80fd\u76f8\u4f3c\uff0c\u4f46provide\u4ec5\u5728\u7f16\u8bd1\u548c\u6d4b\u8bd5\u9636\u6bb5\u751f\u6548\uff0cprovide\u4e0d\u4f1a\u88ab\u6253\u5305\uff0c\u4e5f\u4e0d\u5177\u6709\u4f20\u9012\u6027\u3002\u5982\uff1aspring-boot-devtools\u3001servlet-api(\u7f16\u8bd1\u548c\u6d4b\u8bd5\u9879\u76ee\u7684\u65f6\u5019\u9700\u8981\u8be5\u4f9d\u8d56\uff0c\u4f46\u5728\u8fd0\u884c\u9879\u76ee\u7684\u65f6\u5019\uff0c\u7531\u4e8e\u5bb9\u5668\u5df2\u7ecf\u63d0\u4f9b\uff0c\u5c31\u4e0d\u9700\u8981Maven\u91cd\u590d\u5730\u5f15\u4eba\u4e00\u904d)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>javax.servlet</groupId>\n    <artifactId>javax.servlet-api</artifactId>\n    <scope>provided</scope>\n</dependency>\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"runtime: runntime\u4ec5\u4ec5\u9002\u7528\u4e8e\u8fd0\u884c\u548c\u6d4b\u8bd5\u73af\u8282\uff0c\u5728\u7f16\u8bd1\u73af\u5883\u4e0b\u4e0d\u4f1a\u88ab\u4f7f\u7528\u3002\u6bd4\u5982\u7f16\u8bd1\u65f6\u53ea\u9700\u8981JDBC API\u7684jar\uff0c\u800c\u53ea\u6709\u8fd0\u884c\u65f6\u624d\u9700\u8981JDBC\u9a71\u52a8\u5b9e\u73b0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>mysql</groupId>\n    <artifactId>mysql-connector-java</artifactId>\n    <version>8.0.20</version>\n    <scope>runtime</scope>\n</dependency>\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"system: system\u8303\u56f4\u4f9d\u8d56\u4e0eprovided\u7c7b\u4f3c\uff0c\u4e0d\u8fc7\u4f9d\u8d56\u9879\u4e0d\u4f1a\u4ecemaven\u4ed3\u5e93\u83b7\u53d6\uff0c\u800c\u9700\u8981\u4ece\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u63d0\u4f9b\u3002\u4f7f\u7528\u65f6\uff0c\u4e00\u5b9a\u8981\u914d\u5408systemPath\u5c5e\u6027\u3002\u4e0e\u672c\u673a\u7cfb\u7edf\u7ed1\u5b9a\uff0c\u53ef\u80fd\u9020\u6210\u6784\u5efa\u7684\u4e0d\u53ef\u79fb\u690d\uff0c\u4e0d\u63a8\u8350\u4f7f\u7528\uff0c\u5c3d\u91cf\u4eceMaven\u5e93\u4e2d\u5f15\u7528\u4f9d\u8d56")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>sun.jdk</groupId>\n  <artifactId>tools</artifactId>\n  <version>1.5.0</version>\n  <scope>system</scope>\n  <systemPath>${java.home}/../lib/tools.jar</systemPath>\n</dependency>\n")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"import: \u7279\u6b8a\uff0c\u5bfc\u5165\u4f9d\u8d56\u8303\u56f4\uff0c\u53ea\u80fd\u5728pom\u6587\u4ef6\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"<dependencyManagement>"),"\u4e2d\u4f7f\u7528")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"}," <dependencyManagement>\n        <dependencies>\n            <dependency>\n                <groupId>org.springframework.cloud</groupId>\n                <artifactId>spring-cloud-dependencies</artifactId>\n                <version>Greenwich.RELEASE</version>\n                <type>pom</type>\n                <scope>import</scope>\n            </dependency>\n        </dependencies>\n    </dependencyManagement>\n\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"test, provided, system \u7684\u4f9d\u8d56\u4e0d\u4f1a\u4f20\u9012"))),(0,r.kt)("h2",{id:"optional-\u6807\u7b7e"},"optional \u6807\u7b7e"),(0,r.kt)("p",null,"optional \u662fmaven\u4f9d\u8d56jar\u65f6\u7684\u4e00\u4e2a\u9009\u9879\uff0c\u8bbe\u7f6e\u4e3atrue\u65f6\u8868\u793a\u8be5\u4f9d\u8d56\u662f\u53ef\u9009\u7684\uff0c\u9879\u76ee\u4e4b\u95f4\u4f9d\u8d56\u4e0d\u4f20\u9012\u3002\u4e0d\u8bbe\u7f6eoptional\u6216\u8005\u8bbe\u7f6e\u4e3afalse\uff0c\u8868\u793a\u4f9d\u8d56\u4f20\u9012"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--devtools \u70ed\u90e8\u7f72--\x3e\n<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-devtools</artifactId>\n    <optional>true</optional>\n</dependency>\n")),(0,r.kt)("h2",{id:"\u4f9d\u8d56\u8c03\u89e3\u539f\u5219"},"\u4f9d\u8d56\u8c03\u89e3\u539f\u5219"),(0,r.kt)("p",null,"maven\u4f9d\u8d56\u8c03\u89e3\u7684\u539f\u5219\uff1a\u5728\u5de5\u7a0b\u7684\u4f9d\u8d56\u6811\u4e0a\uff0c\u6df1\u5ea6\u8d8a\u6d45\uff0c\u8d8a\u4f18\u5148\u88ab\u9009\u62e9\uff0c\u5373 ",(0,r.kt)("strong",{parentName:"p"},"\u8def\u5f84\u8fd1\u8005\u4f18\u5148\u539f\u5219"),"\uff1b\u5982\u679c\u4e24\u4e2a\u4f9d\u8d56\u5305\u5904\u4e8e\u4f9d\u8d56\u6811\u4e0a\u7684\u540c\u4e00\u5c42\uff0c\u5219\u8c01\u7533\u660e\u5728\u524d\uff0c\u5c31\u9009\u62e9\u8c01\uff0c\u5373 ",(0,r.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u58f0\u660e\u4f18\u5148\u539f\u5219"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"  A\n  \u251c\u2500\u2500 B\n  \u2502   \u2514\u2500\u2500 C\n  \u2502       \u2514\u2500\u2500 D 2.0\n  \u2514\u2500\u2500 E\n      \u2514\u2500\u2500 D 1.0\n")),(0,r.kt)("p",null,"\u4e0a\u56fe\u4e2d\u6700\u7ec8\u5f15\u5165\u9879\u76eeD\u7684\u7248\u672c\u662f1.0\u3002\u5982\u679c\u9700\u8981\u4f7f\u75282.0\u7248\u672c\uff0c\u53ef\u5728A\u9879\u76ee\u4e2d\u76f4\u63a5\u7533\u660eD\u7684\u4f9d\u8d56\u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"  A\n  \u251c\u2500\u2500 B\n  \u2502   \u2514\u2500\u2500 C\n  \u2502       \u2514\u2500\u2500 D 2.0\n  \u251c\u2500\u2500 E\n  \u2502   \u2514\u2500\u2500 D 1.0\n  \u2502\n  \u2514\u2500\u2500 D 2.0\n")),(0,r.kt)("h2",{id:"\u5982\u4f55\u6392\u67e5"},"\u5982\u4f55\u6392\u67e5"),(0,r.kt)("p",null,"\u5f53\u4f7f\u7528\u7684\u4f9d\u8d56\u7248\u672c\u4e0d\u662f\u9884\u671f\u7684\u7248\u672c\u65f6\uff0c\u53ef\u4ece\u4ee5\u4e0b\u51e0\u4e2a\u65b9\u9762\u6392\u67e5\uff1a1\uff09\u4f9d\u8d56\u7684scope\u548coptional\u6807\u7b7e; 2\uff09\u662f\u5426\u6709\u5176\u4ed6\u66f4\u8fd1\u8def\u5f84\u7684\u4f9d\u8d56\u7248\u672c\uff1b3\uff09\u5728\u9879\u76eeparent\u7684pom\u4e2d\u662f\u5426\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencyManagement")," \u7edf\u4e00\u7ba1\u7406\u4e86\u4f9d\u8d56\u7248\u672c(\u5305\u62ecimport\u7684\u4f9d\u8d56)"),(0,r.kt)("h2",{id:"\u4f9d\u8d56\u51b2\u7a81\u7684\u89e3\u51b3\u529e\u6cd5"},"\u4f9d\u8d56\u51b2\u7a81\u7684\u89e3\u51b3\u529e\u6cd5"),(0,r.kt)("p",null,"\u5f53\u4f7f\u7528\u4e86\u9519\u8bef\u7684\u4f9d\u8d56\u7248\u672c\u65f6\uff0c\u89e3\u51b3\u529e\u6cd5\u6709\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5728\u9879\u76ee\u4e2d\u76f4\u63a5\u7533\u660e\u9700\u8981\u4f7f\u7528\u7684\u4f9d\u8d56\u7248\u672c")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-beans</artifactId>\n        <version>5.3.3.RELEASE</version>\n    </dependency>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"li"},"exclusions")," \u6392\u9664\u4e0d\u60f3\u4f7f\u7528\u7684\u4f9d\u8d56")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework</groupId>\n    <artifactId>spring-aop</artifactId>\n    <version>5.2.3</version>\n    <exclusions>\n        <exclusion>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-beans</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"dependencyManagement")," \u914d\u7f6e\u7edf\u4e00\u7684\u4f9d\u8d56\u7248\u672c\u63a7\u5236")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"\x3c!--\u4f9d\u8d56jar\u5305\u7248\u672c\u9501\u5b9a--\x3e\n<dependencyManagement>\n    <dependencies>\n        <dependency>\n            <groupId>org.springframework</groupId>\n            <artifactId>spring-beans</artifactId>\n            <version>5.3.3.RELEASE</version>\n        </dependency>\n        <dependency>\n           <groupId>org.springframework</groupId>\n            <artifactId>spring-context</artifactId>\n            <version>5.3.3.RELEASE</version>\n        </dependency>\n    </dependencies>\n</dependencyManagement>\n\n<dependencies>\n   \x3c!-- \u7531\u4e8e\u524d\u9762\u5df2\u7ecf\u5728dependencyManagement\u6807\u7b7e\u4e2d\u9501\u5b9a\u4e86\u7684\u7248\u672c\uff0c\n    \u6b64\u5904\u53ea\u9700\u8981\u5bfc\u5165groupdId\u548cartifactId\u5373\u53ef\uff0c\u65e0\u9700\u518d\u6307\u5b9aversion--\x3e\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-beans</artifactId>\n    </dependency>\n    <dependency>\n        <groupId>org.springframework</groupId>\n        <artifactId>spring-context</artifactId>\n    </dependency>\n</dependencies>\n\n")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u53c2\u8003"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Introduction to the Dependency Mechanism\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html"},"https://maven.apache.org/guides/introduction/introduction-to-dependency-mechanism.html"))))}c.isMDXComponent=!0}}]);
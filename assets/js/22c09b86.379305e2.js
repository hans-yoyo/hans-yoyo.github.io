"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1214],{3905:(t,n,e)=>{e.d(n,{Zo:()=>l,kt:()=>d});var o=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,o)}return e}function p(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function i(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s=o.createContext({}),c=function(t){var n=o.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):p(p({},n),t)),e},l=function(t){var n=c(t.components);return o.createElement(s.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(t,n){var e=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),m=c(e),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return e?o.createElement(g,p(p({ref:n},l),{},{components:e})):o.createElement(g,p({ref:n},l))}));function d(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var a=e.length,p=new Array(a);p[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,p[1]=i;for(var c=2;c<a;c++)p[c]=e[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,e)}m.displayName="MDXCreateElement"},7382:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=e(7462),r=(e(7294),e(3905));const a={title:"SpringBoot \u6574\u5408 lombok\u548cmapstruct",description:"SpringBoot \u6574\u5408 lombok\u548cmapstruct",slug:"springboot-lombok-mapstruct",sidebar_position:12,keywords:["SpringBoot"],tags:["SpringBoot"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2022-11-29 20:39",author:"Hans"}},p=void 0,i={unversionedId:"springboot/SpringBoot \u6574\u5408 lombok\u548cmapstruct",id:"springboot/SpringBoot \u6574\u5408 lombok\u548cmapstruct",title:"SpringBoot \u6574\u5408 lombok\u548cmapstruct",description:"SpringBoot \u6574\u5408 lombok\u548cmapstruct",source:"@site/wiki/spring/springboot/12-SpringBoot \u6574\u5408 lombok\u548cmapstruct.md",sourceDirName:"springboot",slug:"/springboot/springboot-lombok-mapstruct",permalink:"/wiki/spring/springboot/springboot-lombok-mapstruct",draft:!1,tags:[{label:"SpringBoot",permalink:"/wiki/spring/tags/spring-boot"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1669725540,formattedLastUpdatedAt:"2022\u5e7411\u670829\u65e5",sidebarPosition:12,frontMatter:{title:"SpringBoot \u6574\u5408 lombok\u548cmapstruct",description:"SpringBoot \u6574\u5408 lombok\u548cmapstruct",slug:"springboot-lombok-mapstruct",sidebar_position:12,keywords:["SpringBoot"],tags:["SpringBoot"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2022-11-29 20:39",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"SpringBoot \u6574\u5408 flyway\u5b9e\u73b0\u6570\u636e\u5e93\u7248\u672c\u63a7\u5236",permalink:"/wiki/spring/springboot/springboot-flyway"},next:{title:"SpringBoot \u8de8\u57df\u652f\u6301",permalink:"/wiki/spring/springboot/springboot-cors"}},s={},c=[{value:"1. \u5f15\u5165\u4f9d\u8d56",id:"1-\u5f15\u5165\u4f9d\u8d56",level:2},{value:"1.1. lombok\u4f9d\u8d56",id:"11-lombok\u4f9d\u8d56",level:3},{value:"1.2. mapstruct\u4f9d\u8d56",id:"12-mapstruct\u4f9d\u8d56",level:3},{value:"1.3. SpringBoot\u96c6\u6210Lombok\u53camapstruct",id:"13-springboot\u96c6\u6210lombok\u53camapstruct",level:3},{value:"2. Lombok\u4f7f\u7528\u8bf4\u660e",id:"2-lombok\u4f7f\u7528\u8bf4\u660e",level:2},{value:"3. mapstrcut\u4f7f\u7528\u8bf4\u660e",id:"3-mapstrcut\u4f7f\u7528\u8bf4\u660e",level:2},{value:"3.1. \u57fa\u672c\u4f7f\u7528",id:"31-\u57fa\u672c\u4f7f\u7528",level:3},{value:"3.2. \u6ce8\u610f\u70b9",id:"32-\u6ce8\u610f\u70b9",level:3}],l={toc:c};function u(t){let{components:n,...e}=t;return(0,r.kt)("wrapper",(0,o.Z)({},l,e,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1-\u5f15\u5165\u4f9d\u8d56"},"1. \u5f15\u5165\u4f9d\u8d56"),(0,r.kt)("h3",{id:"11-lombok\u4f9d\u8d56"},"1.1. lombok\u4f9d\u8d56"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://projectlombok.org/setup/maven"},"https://projectlombok.org/setup/maven")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.projectlombok</groupId>\n        <artifactId>lombok</artifactId>\n        <version>1.18.24</version>\n        <scope>provided</scope>\n    </dependency>\n</dependencies>\n")),(0,r.kt)("p",null,"provide\u4ec5\u5728\u7f16\u8bd1\u548c\u6d4b\u8bd5\u9636\u6bb5\u751f\u6548\uff0cprovide\u4e0d\u4f1a\u88ab\u6253\u5305\uff0c\u4e5f\u4e0d\u5177\u6709\u4f20\u9012\u6027\u3002"),(0,r.kt)("h3",{id:"12-mapstruct\u4f9d\u8d56"},"1.2. mapstruct\u4f9d\u8d56"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://mapstruct.org/documentation/installation/#apache-maven"},"https://mapstruct.org/documentation/installation/#apache-maven")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"...\n<properties>\n    <org.mapstruct.version>1.5.2.Final</org.mapstruct.version>\n</properties>\n...\n<dependencies>\n    <dependency>\n        <groupId>org.mapstruct</groupId>\n        <artifactId>mapstruct</artifactId>\n        <version>${org.mapstruct.version}</version>\n    </dependency>\n</dependencies>\n...\n<build>\n    <plugins>\n        <plugin>\n            <groupId>org.apache.maven.plugins</groupId>\n            <artifactId>maven-compiler-plugin</artifactId>\n            <version>3.8.1</version>\n            <configuration>\n                <source>1.8</source> \x3c!-- depending on your project --\x3e\n                <target>1.8</target> \x3c!-- depending on your project --\x3e\n                <annotationProcessorPaths>\n                    <path>\n                        <groupId>org.mapstruct</groupId>\n                        <artifactId>mapstruct-processor</artifactId>\n                        <version>${org.mapstruct.version}</version>\n                    </path>\n                    \x3c!-- other annotation processors --\x3e\n                </annotationProcessorPaths>\n            </configuration>\n        </plugin>\n    </plugins>\n</build>\n")),(0,r.kt)("h3",{id:"13-springboot\u96c6\u6210lombok\u53camapstruct"},"1.3. SpringBoot\u96c6\u6210Lombok\u53camapstruct"),(0,r.kt)("p",null,"mapstruct-lombok \u4e00\u8d77\u4f7f\u7528\u65f6 ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u793a\u4f8b\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mapstruct/mapstruct-examples/blob/main/mapstruct-lombok/pom.xml"},"https://github.com/mapstruct/mapstruct-examples/blob/main/mapstruct-lombok/pom.xml")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <parent>\n        <groupId>org.springframework.boot</groupId>\n        <artifactId>spring-boot-starter-parent</artifactId>\n        <version>2.5.4</version>\n    </parent>\n\n    <groupId>com.hans.tech.project</groupId>\n    <artifactId>hans-vhr</artifactId>\n    <version>1.0-SNAPSHOT</version>\n    <packaging>pom</packaging>\n\n    <name>${project.artifactId} v${project.version}</name>\n    <description>demo</description>\n\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n        <java.version>1.8</java.version>\n        <org.mapstruct.version>1.4.2.Final</org.mapstruct.version>\n        <org.projectlombok.version>1.18.16</org.projectlombok.version>\n        <lombok-mapstruct-binding.version>0.2.0</lombok-mapstruct-binding.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>org.mapstruct</groupId>\n            <artifactId>mapstruct</artifactId>\n            <version>${org.mapstruct.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <version>${org.projectlombok.version}</version>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n\n    <dependencyManagement>\n\n    </dependencyManagement>\n\n    <build>\n        <plugins>\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-compiler-plugin</artifactId>\n                <configuration>\n                    <source>${java.version}</source>\n                    <target>${java.version}</target>\n                    <annotationProcessorPaths>\n                        <path>\n                            <groupId>org.mapstruct</groupId>\n                            <artifactId>mapstruct-processor</artifactId>\n                            <version>${org.mapstruct.version}</version>\n                        </path>\n                        <path>\n                            <groupId>org.projectlombok</groupId>\n                            <artifactId>lombok</artifactId>\n                            <version>${org.projectlombok.version}</version>\n                        </path>\n                        <path>\n                            <groupId>org.projectlombok</groupId>\n                            <artifactId>lombok-mapstruct-binding</artifactId>\n                            <version>${lombok-mapstruct-binding.version}</version>\n                        </path>\n                    </annotationProcessorPaths>\n                </configuration>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n\n')),(0,r.kt)("h2",{id:"2-lombok\u4f7f\u7528\u8bf4\u660e"},"2. Lombok\u4f7f\u7528\u8bf4\u660e"),(0,r.kt)("p",null,"\u53c2\u8003\uff1a[","[Lombok\u4f7f\u7528\u7b14\u8bb0]","]"),(0,r.kt)("h2",{id:"3-mapstrcut\u4f7f\u7528\u8bf4\u660e"},"3. mapstrcut\u4f7f\u7528\u8bf4\u660e"),(0,r.kt)("h3",{id:"31-\u57fa\u672c\u4f7f\u7528"},"3.1. \u57fa\u672c\u4f7f\u7528"),(0,r.kt)("h3",{id:"32-\u6ce8\u610f\u70b9"},"3.2. \u6ce8\u610f\u70b9"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u53c2\u8003\uff1a\n",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/7099874296373182478"},"https://juejin.cn/post/7099874296373182478"),"\nLombok\u5b98\u7f51\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://projectlombok.org/features/"},"https://projectlombok.org/features/")))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8254],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>d});var t=a(7294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),l=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=l(e.components);return t.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return a?t.createElement(g,i(i({ref:n},c),{},{components:a})):t.createElement(g,i({ref:n},c))}));function d(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7195:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=a(7462),r=(a(7294),a(3905));const o={title:"\u4f7f\u7528maven-assembly-plugin\u5236\u4f5c\u53ef\u6267\u884cjar\u5305(\u5e26\u4f9d\u8d56\u5305)",description:"\u4f7f\u7528maven-assembly-plugin\u5236\u4f5c\u53ef\u6267\u884cjar\u5305(\u5e26\u4f9d\u8d56\u5305)",slug:"maven-assembly-plugin",sidebar_position:2,keywords:["maven"],tags:["maven"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2022-12-25 20:03",author:"Hans"}},i=void 0,s={unversionedId:"maven/\u4f7f\u7528maven-assembly-plugin\u5236\u4f5c\u53ef\u6267\u884cjar\u5305(\u5e26\u4f9d\u8d56\u5305)",id:"maven/\u4f7f\u7528maven-assembly-plugin\u5236\u4f5c\u53ef\u6267\u884cjar\u5305(\u5e26\u4f9d\u8d56\u5305)",title:"\u4f7f\u7528maven-assembly-plugin\u5236\u4f5c\u53ef\u6267\u884cjar\u5305(\u5e26\u4f9d\u8d56\u5305)",description:"\u4f7f\u7528maven-assembly-plugin\u5236\u4f5c\u53ef\u6267\u884cjar\u5305(\u5e26\u4f9d\u8d56\u5305)",source:"@site/docs/maven/02-\u4f7f\u7528maven-assembly-plugin\u5236\u4f5c\u53ef\u6267\u884cjar\u5305(\u5e26\u4f9d\u8d56\u5305).md",sourceDirName:"maven",slug:"/maven/maven-assembly-plugin",permalink:"/docs/maven/maven-assembly-plugin",draft:!1,tags:[{label:"maven",permalink:"/docs/tags/maven"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1671969780,formattedLastUpdatedAt:"2022\u5e7412\u670825\u65e5",sidebarPosition:2,frontMatter:{title:"\u4f7f\u7528maven-assembly-plugin\u5236\u4f5c\u53ef\u6267\u884cjar\u5305(\u5e26\u4f9d\u8d56\u5305)",description:"\u4f7f\u7528maven-assembly-plugin\u5236\u4f5c\u53ef\u6267\u884cjar\u5305(\u5e26\u4f9d\u8d56\u5305)",slug:"maven-assembly-plugin",sidebar_position:2,keywords:["maven"],tags:["maven"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2022-12-25 20:03",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"maven\u4f9d\u8d56\u8c03\u89e3\u3001\u4f9d\u8d56\u8303\u56f4",permalink:"/docs/maven/maven-dependency-mediation"}},p={},l=[{value:"\u4f7f\u7528maven-assembly-plugin\u5236\u4f5c\u53ef\u6267\u884cjar\u5305(\u5e26\u4f9d\u8d56\u5305)",id:"\u4f7f\u7528maven-assembly-plugin\u5236\u4f5c\u53ef\u6267\u884cjar\u5305\u5e26\u4f9d\u8d56\u5305",level:2},{value:"<code>pom.xml</code> \u914d\u7f6e\u6587\u4ef6",id:"pomxml-\u914d\u7f6e\u6587\u4ef6",level:3}],c={toc:l};function m(e){let{components:n,...a}=e;return(0,r.kt)("wrapper",(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://maven.apache.org/plugins/maven-assembly-plugin/usage.html"},"https://maven.apache.org/plugins/maven-assembly-plugin/usage.html")),(0,r.kt)("h2",{id:"\u4f7f\u7528maven-assembly-plugin\u5236\u4f5c\u53ef\u6267\u884cjar\u5305\u5e26\u4f9d\u8d56\u5305"},"\u4f7f\u7528maven-assembly-plugin\u5236\u4f5c\u53ef\u6267\u884cjar\u5305(\u5e26\u4f9d\u8d56\u5305)"),(0,r.kt)("h3",{id:"pomxml-\u914d\u7f6e\u6587\u4ef6"},(0,r.kt)("inlineCode",{parentName:"h3"},"pom.xml")," \u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n    <modelVersion>4.0.0</modelVersion>\n\n    <groupId>com.hans.tech</groupId>\n    <artifactId>001-arthas-math-game</artifactId>\n    <version>1.0-SNAPSHOT</version>\n\n    <name>${project.artifactId}-v${project.version}</name>\n    <packaging>jar</packaging>\n    <description>Arthas Math Game</description>\n\n    <properties>\n        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>\n        <project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>\n        <java.version>1.8</java.version>\n        <org.projectlombok.version>1.18.16</org.projectlombok.version>\n        <common-io.version>2.8.0</common-io.version>\n    </properties>\n\n    <dependencies>\n        <dependency>\n            <groupId>commons-io</groupId>\n            <artifactId>commons-io</artifactId>\n            <version>${common-io.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>org.projectlombok</groupId>\n            <artifactId>lombok</artifactId>\n            <version>${org.projectlombok.version}</version>\n            <scope>provided</scope>\n        </dependency>\n    </dependencies>\n\n    <build>\n        \x3c!-- \u751f\u6210jar\u5305\u540d --\x3e\n        <finalName>math-game</finalName>\n        <plugins>\n            \x3c!-- https://maven.apache.org/plugins/maven-assembly-plugin/usage.html --\x3e\n            <plugin>\n                <groupId>org.apache.maven.plugins</groupId>\n                <artifactId>maven-assembly-plugin</artifactId>\n                <version>3.3.0</version>\n                <configuration>\n                    <descriptorRefs>\n                        <descriptorRef>jar-with-dependencies</descriptorRef>\n                    </descriptorRefs>\n                    <archive>\n                        <manifest>\n                            <mainClass>com.hans.tech.project.MathGameMain</mainClass>\n                        </manifest>\n                    </archive>\n                </configuration>\n                <executions>\n                    <execution>\n                        \x3c!-- this is used for inheritance merges --\x3e\n                        <id>make-assembly</id>\n                        \x3c!-- bind to the packaging phase --\x3e\n                        <phase>package</phase>\n                        <goals>\n                            <goal>single</goal>\n                        </goals>\n                    </execution>\n                </executions>\n            </plugin>\n        </plugins>\n    </build>\n\n</project>\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u4ee5\u4e0b\u547d\u4ee4\u6765\u521b\u5efa\u53ef\u6267\u884c JAR\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"mvn clean package\n")),(0,r.kt)("p",null,"\u8fd0\u884c JAR\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"java -jar target/math-game-jar-with-dependencies.jar\n# main\u65b9\u6cd5\u4f20\u5165\u53c2\u6570\njava -jar target/math-game-jar-with-dependencies.jar param1 param2\n")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[634],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,y=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const i={},o=void 0,l={unversionedId:"mysql/MySQL\u5e38\u7528\u6a21\u7248",id:"mysql/MySQL\u5e38\u7528\u6a21\u7248",title:"MySQL\u5e38\u7528\u6a21\u7248",description:"\u6279\u91cf\u63d2\u5165\u8868\u6570\u636e",source:"@site/wiki/database/mysql/MySQL\u5e38\u7528\u6a21\u7248.md",sourceDirName:"mysql",slug:"/mysql/MySQL\u5e38\u7528\u6a21\u7248",permalink:"/wiki/database/mysql/MySQL\u5e38\u7528\u6a21\u7248",draft:!1,tags:[],version:"current",lastUpdatedBy:"hyman213",lastUpdatedAt:1677503089,formattedLastUpdatedAt:"2023\u5e742\u670827\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MySQL\u5b9a\u65f6\u4efb\u52a1(Event Scheduler)",permalink:"/wiki/database/mysql/MySQL\u5b9a\u65f6\u4efb\u52a1(Event Scheduler)"},next:{title:"SQL\u4f18\u5316\u7684\u6280\u5de7",permalink:"/wiki/database/mysql/SQL\u4f18\u5316\u7684\u6280\u5de7"}},c={},s=[{value:"\u6279\u91cf\u63d2\u5165\u8868\u6570\u636e",id:"\u6279\u91cf\u63d2\u5165\u8868\u6570\u636e",level:3},{value:"\u4e1a\u52a1\u8868\u5386\u53f2\u6570\u636e\u81ea\u52a8\u5f52\u6863",id:"\u4e1a\u52a1\u8868\u5386\u53f2\u6570\u636e\u81ea\u52a8\u5f52\u6863",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\u6279\u91cf\u63d2\u5165\u8868\u6570\u636e"},"\u6279\u91cf\u63d2\u5165\u8868\u6570\u636e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},'DELIMITER ;;\nCREATE PROCEDURE batch_insert_log()\nBEGIN\n  DECLARE i INT DEFAULT 1;\n  DECLARE userId INT DEFAULT 10000000;\n set @execSql = \'INSERT INTO `test`.`user_operation_log`(`user_id`, `ip`, `op_data`, `attr1`, `attr2`, `attr3`, `attr4`, `attr5`, `attr6`, `attr7`, `attr8`, `attr9`, `attr10`, `attr11`, `attr12`) VALUES\';\n set @execData = \'\';\n  WHILE i<=10000000 DO\n   set @attr = "\'\u6d4b\u8bd5\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u5f88\u957f\u7684\u5c5e\u6027\'";\n  set @execData = concat(@execData, "(", userId + i, ", \'10.0.69.175\', \'\u7528\u6237\u767b\u5f55\u64cd\u4f5c\'", ",", @attr, ",", @attr, ",", @attr, ",", @attr, ",", @attr, ",", @attr, ",", @attr, ",", @attr, ",", @attr, ",", @attr, ",", @attr, ",", @attr, ")");\n  if i % 1000 = 0\n  then\n     set @stmtSql = concat(@execSql, @execData,";");\n    prepare stmt from @stmtSql;\n    execute stmt;\n    DEALLOCATE prepare stmt;\n    commit;\n    set @execData = "";\n   else\n     set @execData = concat(@execData, ",");\n   end if;\n  SET i=i+1;\n  END WHILE;\n\nEND;;\nDELIMITER ;\n')),(0,a.kt)("p",null,"PS\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://mp.weixin.qq.com/s/yzprdxtG0_J_qgWu90ce-A"},"https://mp.weixin.qq.com/s/yzprdxtG0_J_qgWu90ce-A")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7b80\u6613\u7248")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"delimiter ;;\ncreate procedure idata()\nbegin\n  declare i int;\n  set i=1;\n  while(i<=100000)do\n    insert into t values(i, i, i);\n    set i=i+1;\n  end while;\nend;;\ndelimiter ;\ncall idata();\n")),(0,a.kt)("h2",{id:"\u4e1a\u52a1\u8868\u5386\u53f2\u6570\u636e\u81ea\u52a8\u5f52\u6863"},"\u4e1a\u52a1\u8868\u5386\u53f2\u6570\u636e\u81ea\u52a8\u5f52\u6863"),(0,a.kt)("p",null,"![","[\u4e1a\u52a1\u5e93\u5386\u53f2\u6570\u636e\u81ea\u52a8\u5f52\u6863\u5b58\u50a8\u8fc7\u7a0b]","]"))}u.isMDXComponent=!0}}]);
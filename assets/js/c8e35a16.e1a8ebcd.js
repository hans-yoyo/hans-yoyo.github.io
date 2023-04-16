"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),c=a,m=d["".concat(s,".").concat(c)]||d[c]||y[c]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1033:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const l={title:"MySQL\u5b58\u50a8\u5f15\u64ce",description:"MySQL\u5b58\u50a8\u5f15\u64ce",slug:"storage-engines",sidebar_position:5,keywords:["MySQL"],tags:["MySQL"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2023-04-05 22:20",author:"Hans"}},o=void 0,i={unversionedId:"mysql/MySQL\u5b58\u50a8\u5f15\u64ce",id:"mysql/MySQL\u5b58\u50a8\u5f15\u64ce",title:"MySQL\u5b58\u50a8\u5f15\u64ce",description:"MySQL\u5b58\u50a8\u5f15\u64ce",source:"@site/docs/02.mysql/05.MySQL\u5b58\u50a8\u5f15\u64ce.md",sourceDirName:"02.mysql",slug:"/mysql/storage-engines",permalink:"/docs/mysql/storage-engines",draft:!1,tags:[{label:"MySQL",permalink:"/docs/tags/my-sql"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1680704400,formattedLastUpdatedAt:"2023\u5e744\u67085\u65e5",sidebarPosition:5,frontMatter:{title:"MySQL\u5b58\u50a8\u5f15\u64ce",description:"MySQL\u5b58\u50a8\u5f15\u64ce",slug:"storage-engines",sidebar_position:5,keywords:["MySQL"],tags:["MySQL"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2023-04-05 22:20",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"\u8fd0\u7b97\u7b26\u548c\u5e38\u7528\u51fd\u6570",permalink:"/docs/mysql/functions-and-operators"},next:{title:"\u4e00\u6761SQL\u7684\u6267\u884c\u8fc7\u7a0b",permalink:"/docs/mysql/sql-execute-procedure"}},s={},u=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"InnoDB",id:"innodb",level:2},{value:"MyISAM",id:"myisam",level:2},{value:"InnoDB \u4e0e MyISAM \u5bf9\u6bd4",id:"innodb-\u4e0e-myisam-\u5bf9\u6bd4",level:2}],p={toc:u};function y(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,a.kt)("p",null,"\u63d2\u4ef6\u5f0f\u5b58\u50a8\u5f15\u64ce\u662fMySQL\u6570\u636e\u5e93\u6700\u91cd\u8981\u7684\u7279\u6027\u4e4b\u4e00\uff0c\u7528\u6237\u53ef\u4ee5\u6839\u636e\u5e94\u7528\u7684\u9700\u8981\u9009\u62e9\u5982\u4f55\u5b58\u50a8\u548c\u7d22\u5f15\u6570\u636e\u3001\u662f\u5426\u4f7f\u7528\u4e8b\u52a1\u7b49\u3002\u5b58\u50a8\u5f15\u64ce\u7684\u5bf9\u8c61\u662f\u8868\u3002"),(0,a.kt)("p",null,"\u5e38\u7528\u5b58\u50a8\u5f15\u64ce\u5bf9\u6bd4"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6115).Z,width:"861",height:"471"})),(0,a.kt)("p",null,"\u6700\u5e38\u7528\u7684\u4e24\u79cd\u5b58\u50a8\u5f15\u64ce\u662f MyISAM \u548c InnoDB\u3002MySQL 5.5\u4e4b\u524d\u7684\u9ed8\u8ba4\u5b58\u50a8\u5f15\u64ce\u662fMyISAM\uff0c5.5\u4e4b\u540e\u6539\u4e3a\u4e86InnoDB\u3002"),(0,a.kt)("h2",{id:"innodb"},"InnoDB"),(0,a.kt)("p",null,"InnoDB\u5b58\u50a8\u5f15\u64ce\u63d0\u4f9b\u4e86\u5177\u6709\u63d0\u4ea4\u3001\u56de\u6eda\u548c\u5d29\u6e83\u6062\u590d\u80fd\u529b\u7684\u4e8b\u52a1\u5b89\u5168\u3002\u4f46\u662f\u5bf9\u6bd4MyISAM\u7684\u5b58\u50a8\u5f15\u64ce\uff0cInnoDB\u5199\u7684\u5904\u7406\u6548\u7387\u5dee\u4e00\u4e9b\uff0c\u5e76\u4e14\u4f1a\u5360\u7528\u66f4\u591a\u7684\u78c1\u76d8\u7a7a\u95f4\u4ee5\u4fdd\u7559\u6570\u636e\u548c\u7d22\u5f15\u3002"),(0,a.kt)("p",null,"InnoDB\u5b58\u50a8\u8868\u548c\u7d22\u5f15\u6709\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5171\u4eab\u8868\u7a7a\u95f4\u5b58\u50a8\uff0c\u8fd9\u79cd\u65b9\u5f0f\u521b\u5efa\u7684\u8868\u7684\u8868\u7ed3\u6784\u4fdd\u5b58\u5728.frm\u6587\u4ef6\u4e2d\uff0c\u6570\u636e\u548c\u7d22\u5f15\u4fdd\u5b58\u5728innodb_data_home_dir\u548cinnodb_data_file_path\u5b9a\u4e49\u7684\u8868\u7a7a\u95f4\u4e2d\uff0c\u53ef\u4ee5\u662f\u591a\u4e2a\u6587\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u591a\u8868\u7a7a\u95f4\u5b58\u50a8\uff0c\u8fd9\u79cd\u65b9\u5f0f\u521b\u5efa\u7684\u8868\u7684\u8868\u7ed3\u6784\u4ecd\u7136\u4fdd\u5b58\u5728.frm\u6587\u4ef6\u4e2d\uff0c\u4f46\u662f\u6bcf\u4e2a\u8868\u7684\u6570\u636e\u548c\u7d22\u5f15\u5355\u72ec\u4fdd\u5b58\u5728.ibd\u4e2d\u3002\u5982\u679c\u662f\u4e2a\u5206\u533a\u8868\uff0c\u5219\u6bcf\u4e2a\u5206\u533a\u5bf9\u5e94\u5355\u72ec\u7684.ibd\u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u662f\u201c\u8868\u540d+\u5206\u533a\u540d\u201d\uff0c\u53ef\u4ee5\u5728\u521b\u5efa\u5206\u533a\u7684\u65f6\u5019\u6307\u5b9a\u6bcf\u4e2a\u5206\u533a\u7684\u6570\u636e\u6587\u4ef6\u7684\u4f4d\u7f6e\uff0c\u4ee5\u6b64\u6765\u5c06\u8868\u7684IO\u5747\u5300\u5206\u5e03\u5728\u591a\u4e2a\u78c1\u76d8\u4e0a\u3002")),(0,a.kt)("h2",{id:"myisam"},"MyISAM"),(0,a.kt)("p",null,"MyISAM \u4e0d\u652f\u6301\u4e8b\u52a1\uff0c\u4e5f\u4e0d\u652f\u6301\u5916\u952e\uff0c\u4f18\u70b9\u662f\u8bbf\u95ee\u901f\u5ea6\u5feb\uff0c\u5bf9\u4e8b\u52a1\u5b8c\u6574\u6027\u6ca1\u6709\u8981\u6c42\u6216\u8005\u4ee5SELECT\u3001INSERT\u4e3a\u4e3b\u7684\u5e94\u7528\u57fa\u672c\u4e0a\u90fd\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u5f15\u64ce\u6765\u521b\u5efa\u8868\u3002"),(0,a.kt)("p",null,"\u6bcf\u4e2aMyISAM\u8868\u5728\u78c1\u76d8\u4e0a\u5b58\u50a8\u6210 3 \u4e2a\u6587\u4ef6\uff0c\u6587\u4ef6\u540d\u90fd\u4e0e\u8868\u540d\u76f8\u540c\uff0c\u6269\u5c55\u540d\u5206\u522b\u4e3a\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},".frm\uff0c\u5b58\u50a8\u8868\u5b9a\u4e49"),(0,a.kt)("li",{parentName:"ul"},".MYD\uff0cMYData\uff0c\u5b58\u50a8\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},".MYI\uff0cMYIndex\uff0c\u5b58\u50a8\u7d22\u5f15")),(0,a.kt)("p",null,"MyISAM \u7684\u8868\u5728\u78c1\u76d8\u4e0a\u5b58\u50a8\u6210\u591a\u4e2a\u6587\u4ef6(MYD-\u6570\u636e\u6587\u4ef6, MYI-\u7d22\u5f15\u6587\u4ef6)\uff0cInnoDB \u8868\u7684\u6240\u6709\u6570\u636e\u90fd\u5b58\u50a8\u6210\u4e00\u4e2a\u6587\u4ef6(.idb)\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9663).Z,width:"243",height:"86"})),(0,a.kt)("h2",{id:"innodb-\u4e0e-myisam-\u5bf9\u6bd4"},"InnoDB \u4e0e MyISAM \u5bf9\u6bd4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"MyISAM \u7684\u8868\u5728\u78c1\u76d8\u4e0a\u5b58\u50a8\u6210\u591a\u4e2a\u6587\u4ef6(MYD-\u6570\u636e\u6587\u4ef6, MYI-\u7d22\u5f15\u6587\u4ef6)\uff0cInnoDB \u8868\u7684\u6240\u6709\u6570\u636e\u90fd\u5b58\u50a8\u6210\u4e00\u4e2a\u6587\u4ef6(.idb)\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u52a1\uff1aInnoDB \u662f\u4e8b\u52a1\u578b\u7684\uff0cMyISAM \u4e0d\u652f\u6301\u4e8b\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u5e76\u53d1\uff1aMyISAM \u53ea\u652f\u6301\u8868\u7ea7\u9501\uff0cInnoDB \u8fd8\u652f\u6301\u884c\u7ea7\u9501"),(0,a.kt)("li",{parentName:"ul"},"\u5916\u952e\uff1aInnoDB \u652f\u6301\u5916\u952e"),(0,a.kt)("li",{parentName:"ul"},"\u5907\u4efd: InnoDB \u652f\u6301\u5728\u7ebf\u70ed\u5907\u4efd"),(0,a.kt)("li",{parentName:"ul"},"\u5d29\u6e83\u6062\u590d: MyISAM \u5d29\u6e83\u540e\u53d1\u751f\u635f\u574f\u7684\u6982\u7387\u6bd4 InnoDB \u9ad8\u5f88\u591a\uff0c\u800c\u4e14\u6062\u590d\u7684\u901f\u5ea6\u4e5f\u66f4\u6162"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u5b83\u7279\u6027: MyISAM \u652f\u6301\u538b\u7f29\u8868\u548c\u7a7a\u95f4\u6570\u636e\u7d22\u5f15")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u53c2\u8003"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://dev.mysql.com/doc/refman/5.7/en/storage-engines.html"},"https://dev.mysql.com/doc/refman/5.7/en/storage-engines.html")),(0,a.kt)("li",{parentName:"ul"},"\u6df1\u5165\u6d45\u51faMySQL\uff1a\u6570\u636e\u5e93\u5f00\u53d1\u3001\u4f18\u5316\u4e0e\u7ba1\u7406\u7ef4\u62a4\uff08\u7b2c2\u7248\uff09")))}y.isMDXComponent=!0},6115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/20230405222341-0571c99a93b22800ce67c493c0766ed6.png"},9663:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPMAAABWCAIAAACVRTc1AAAHsElEQVR4nO2dPW/bRhjHH9bykM7+CLIHQ0OGdKG+QCQvQgoISBdvVIO2kBZPcZdCQxwtZO0AETdnCFBNBlKRn8D6AIWRoeSn6IstVxKvw/HlKB1pSY5l6/z/RUmkR8fjkX50PJ3uJ2uMMQJAOb667wYAcCcgs4GaFPh/Hz9+DBhjwfQ/AWNfP3ny/Pnzra2t+20oAAsRZnbA2HcvX/L7LPxLRNTr/fb06dO+4+xVq0husEaEoxEWBEQ0CYLJJJhMJpPJZDyZjCcTItra2vrm2bNPn36/z2YCsCBRZvMZEkaMxKkSRkQfPnxwXfevf/5efeMkuA2tbPn5ZXyrHBbyrbLWcL9EnWDdiEYjAR+DxPkd8uLFt4yosLFx8u7dvbQPgOWI++wgzGax0xbuByyQbT5fp7hiis1zdt4s3nczwL0SZnbAGLF0WlP8EQ4jojjzAVgLUu8gxbSOHkQjcNlHlQ1tuzUgu6pljFPdhsYpW5Y4lo3jmpbq8eeIV+046ltlWeHZC0myuRCV1wmUQeiziSjstxlLEjssFwSS0UiXeaZOhsNkF3+3oVXJYYwxxk6pZ4vxC9PjTzCHqmG+5cWjephjRNX41n6rFIW7lewjtKtntWhju5pbJ1CIuM8OxyJJTvMUj+4vvLzEPbN18yDMuGLz0BDjp/ELoXJg6vaZe0M8qocqtaie4k6J7OockxqGE+X9jXUChYj7bJ7aMWK3zVjmO8gvgr67vVCcU+nyq8G+ljUYAo+ZqflsPhSR9NULv4Os1IxBqxOOa32rbYvx/WTI3WlRfa94Q1xSj29ZLhEVm+eeqQ8+e+I0dgr7LN54vzUwapXsOoFCRH12EH5Ik+62k0eBfDRS3KvrGe8gK13PvKjy92j7VDeSOHNKre3o3Rs54Rg9O+4Y9mw9xebOGQ9ut0pOzkDbIKFcOCLPqBMohMbT9/jk5NX3r0bjMZFkHmRzs/Dm6Ojn16+X34/b0Nq7HmaZwapI5kYYsUJho1DYKGwWNtM3ij6kXATfKseTbG6jauv1PaQ1WBnhp+ssYMcnJyxg0dpVFoR/4kB+ZruN9LSw4bDu6W5Z06pERKSb6K/BStFgiwElgVMD1ASZDdQEmQ3UBJkN1ASGL1ATGL5ATWD4AjVR0fBdmow1VWAdEVZEZRi+P/z4U7PZgi12O7gANPuycRtR2G2knJ/oVSaYQ7P2EMhGRcN3ae5YDdZ16vVTqS2uoK0cmLrdjlLf7bQoFjGMSP9hDlWR3fMBw3d1lOp1ipeFExH5/R6ZZrwud6+uD8LUd8/kK8gqXeaZF1Xk9s2oaPgmW5UtNyzUcJNqypY/Pabmw3fhCiSpXBLK38UMO81DI+mWQ7tiJ3662Dw0Br2+T77Vto3DjItHca+uxzYFyERtw3fQatNp6PZqGjd9PZNaHTdJIyIi9yydSZLKfatDp9OmcP4uJAg2jyx9KwcmtTpWv0eJpgmWhP+w3r/vjsfj4fD6KrkNr66Gl1fDy6vhaDR6c/SWSYgyexbHID3OU+HhVDyuYc548pAneWqb7BZI74t3DCd1NPLKPVOPTltcLH8XsyfKM3XSTS/zhDgGiQNryRn2TD3nqEHIYzZ8Kwcm9fq+b7Vto5buImcq962ypu3zXltI8MUJrxVWxkCaKjWDpluTIjZEQS4KGb6LU9yrU6/Tmb32z1bufR5EXxrh93uDOXcgnSCv1IxBq5U9kM6DD9lOIXHcjPqGbx7F5mHJtme7wNnKKwcmhY3b/1y6RZ9NfH4vv1+eIjp8TWvvevjKwjnhXfSvx8ej0ZiPqi8vr/5N3/4bjX5pt2816pkdeT4MHmq7wG1JVkRxwzfrBbCU4dvZOeedqduo2rrpPbi+hs9PsAfXLnB7lDF8ZQ3Ivd7zDQyHYXpNSWD4AjWBUwPUBJkN1ASZDdQEmQ3UBIYvUBMYvkBNYPgCNYHhKwDDVyFg+K6GpQ1f/O7sJYHhK/BQDV+wBDB8V8cXMHzB3MDwTcquh+EL5gOGLxEMXyXhPywYvg/V8IUbsSQwfNfN8AXzAcN3rQxfMDcwfNfA8AXLwLtoGL5AMWD4wvBVExi+MHzVBIYvUBM4NUBNkNlATZDZQE2Q2UBNYPgCNYHhC9QEhi9QExi+AsoYvvFZUuaIFgeG78pJDKFYX4hDUpNIHdF0lcDwFbhjw5eIyG1o7d1oBVZk65S5iiPKOtLg4qzgiB4qMHxXiW+1Z39/UrEZrhujSs2giz/9zCBYABi+Sdk7N3z9fo/q1NGyykiNdWlQduyys6TWNXUxwuuibY/Hk+H19fD6OmVDhh7k+OhtR7YINtuDZI6R+HyeqZPoLyZLopNSeXFDNHx5oZw9C2UT15CiWuINhaXZoQiZkhWnKvdMQ7AcRV0yZxeyFoVPRD5kfHoorT/Kg8lTU+Glz5KywPBlKzF8JeHZQukXd05wpnlZZ+kRZzYM3xUavtu7+RtWuk7yTRF5wdsfu/rA8L1Lw1eyv+gYfavNx8++VW4Ih8fH1FnB6GU23byss/SIgeG7SsO32DyPjnG7VeJHWGye7raTnfGjlgZzmpd1lh4zvIuG4QsUA4YvDF81geF7d4bvwk0CXxAYvkBN4NQANUFmAzUp2H/cdxMAuAP+B6wmr1DqurdzAAAAAElFTkSuQmCC"}}]);
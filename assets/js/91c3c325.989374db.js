"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2956],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=_(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,u=d["".concat(s,".").concat(p)]||d[p]||m[p]||i;return n?r.createElement(u,o(o({ref:t},l),{},{components:n})):r.createElement(u,o({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var _={};for(var s in t)hasOwnProperty.call(t,s)&&(_[s]=t[s]);_.originalType=e,_.mdxType="string"==typeof e?e:a,o[1]=_;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9585:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>_,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,_={unversionedId:"mysql/\u4e1a\u52a1\u5e93\u5386\u53f2\u6570\u636e\u81ea\u52a8\u5f52\u6863\u5b58\u50a8\u8fc7\u7a0b",id:"mysql/\u4e1a\u52a1\u5e93\u5386\u53f2\u6570\u636e\u81ea\u52a8\u5f52\u6863\u5b58\u50a8\u8fc7\u7a0b",title:"\u4e1a\u52a1\u5e93\u5386\u53f2\u6570\u636e\u81ea\u52a8\u5f52\u6863\u5b58\u50a8\u8fc7\u7a0b",description:"\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b",source:"@site/wiki/database/mysql/\u4e1a\u52a1\u5e93\u5386\u53f2\u6570\u636e\u81ea\u52a8\u5f52\u6863\u5b58\u50a8\u8fc7\u7a0b.md",sourceDirName:"mysql",slug:"/mysql/\u4e1a\u52a1\u5e93\u5386\u53f2\u6570\u636e\u81ea\u52a8\u5f52\u6863\u5b58\u50a8\u8fc7\u7a0b",permalink:"/wiki/database/mysql/\u4e1a\u52a1\u5e93\u5386\u53f2\u6570\u636e\u81ea\u52a8\u5f52\u6863\u5b58\u50a8\u8fc7\u7a0b",draft:!1,tags:[],version:"current",lastUpdatedBy:"hyman213",lastUpdatedAt:1677503089,formattedLastUpdatedAt:"2023\u5e742\u670827\u65e5",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SQL\u4f18\u5316\u7684\u6280\u5de7",permalink:"/wiki/database/mysql/SQL\u4f18\u5316\u7684\u6280\u5de7"}},s={},c=[],l={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8c03\u7528\u5b58\u50a8\u8fc7\u7a0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},"CREATE PROCEDURE `proc_archive_pkg`()\nbegin\ncall proc_archive(\n                  'dborder.myorder_tab', -- tabel source\n                  'myorder_tab_his',     -- table target\n                  'create_time',         -- time field name\n                  120,                   -- i_keepdays\n                  1,                     -- i_archdays\n                  '1=1'                  -- i_other_cond\n                  );\n \nend;\n")),(0,a.kt)("p",null,"\u5b58\u50a8\u8fc7\u7a0b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-SQL"},'CREATE PROCEDURE proc_archive(in i_table_source varchar(40), \n                              in i_table_target varchar(40), \n                              in i_fieldname varchar(40), \n                              in i_keepdays int,\n                              in i_archdays int,\n                              in i_other_cond varchar(500))\nbegin\n  /*\n  \u5165\u53c2\uff1a\n  i_table_source:\u539f\u8868,\u542bdbname\n  i_table_target:federated\u8868\n  i_fieldname:\u65f6\u95f4\u5b57\u6bb5\n  i_keepdays:\u4fdd\u7559\u5929\u6570\n  i_archdays:\u6bcf\u6b21\u5f52\u6863\u591a\u5c11\u5929\u6570\u636e\n  i_other_cond:\u6570\u636e\u989d\u5916\u6761\u4ef6(\u5982status in (2,3)\u4e0d\u80fd\u5f52\u6863\uff0c\u9700\u8981\u4fdd\u7559),\u65e0\u989d\u5916\u6761\u4ef6\u5219\u8f93\u5165\'1=1\'\n  \u5f52\u6863\u65e5\u5fd7\u8868archive_log.status\u5b57\u6bb5\u542b\u4e49\uff1a\n  0:\u6210\u529f, 1:\u73b0\u6709\u6570\u636e\u5728\u4fdd\u7559\u5929\u6570\u5185, 2:\u76ee\u6807\u8868\u542b\u6709\u5f85\u5f52\u6863\u65f6\u95f4\u8303\u56f4\u7684\u6570\u636e, \n  3:\u63d2\u5165\u6570\u636e\u548c\u5220\u9664\u6570\u636e\u8bb0\u5f55\u6570\u4e0d\u540c, 4:SQL\u6267\u884c\u5f02\u5e38\uff0c\u5177\u4f53\u9519\u8bef\u89c1remark\n  \u6ce8\u610f\uff1a\n  \u6709\u989d\u5916\u6761\u4ef6\u65f6\uff0c\u5982\u679c\u5386\u53f2\u6570\u636e\u88ab\u4fee\u6539\uff0c\u4ece\u4e0d\u7b26\u5408\u5f52\u6863\u6761\u4ef6\u53d8\u6210\u7b26\u5408\u5f52\u6863\u6761\u4ef6\uff0c\n  \u56e0\u5386\u53f2\u8868\u4e2d\u5f52\u6863\u65f6\u95f4\u6bb5\u5185\u5df2\u7ecf\u6709\u4e4b\u524d\u5f52\u6863\u7684\u6570\u636e(@v_his_num_before>0)\uff0c\u7a0b\u5e8f\u4f1a\u9000\u51fa\uff0c\u9700\u624b\u52a8\u5904\u7406\n  */\n  declare EXIT HANDLER for SQLWARNING,NOT FOUND,SQLEXCEPTION \n  begin \n      GET DIAGNOSTICS CONDITION 1 @p1=RETURNED_SQLSTATE,@p2= MESSAGE_TEXT;\n      ROLLBACK;\n      insert into archive_log(tab_name,archive_date_begin,archive_date_end,status,insert_rows,delete_rows,remark)\n      values(i_table_source,@v_arch_begin,@v_arch_end,4,@v_his_num_after,@v_del_num,concat(\'error \',@p1,\' - \',@p2));\n  end;\n  /* \u83b7\u53d6\u5728\u7ebf\u8868\u7684\u6700\u5c0f\u65e5\u671f */\n  set @mystmt = concat("select str_to_date(date_format(min(",i_fieldname,"),\'%Y%m%d\'),\'%Y%m%d\') into @v_arch_begin from ",i_table_source,\' where \',i_other_cond);\n  prepare stmt from @mystmt;\n  execute stmt;\n  deallocate prepare stmt;\n \n  set @v_arch_end = date_add(@v_arch_begin,interval i_archdays day);\n \n  set @mystmt = concat("select count(*) into @v_his_num_before from ",i_table_target," where ",i_fieldname," >= ? and ",i_fieldname," < ?");\n  prepare stmt from @mystmt;\n  execute stmt using @v_arch_begin,@v_arch_end;\n  deallocate prepare stmt;\n  /* \u5982\u679c\u5728\u7ebf\u8868\u7684\u6570\u636e\u4f4e\u4e8ekeepday\u8303\u56f4\uff0c\u9000\u51fa */\n  if timestampdiff(day,@v_arch_begin,now()) <= i_keepdays then\n      insert into archive_log(tab_name,archive_date_begin,archive_date_end,status,insert_rows,delete_rows,remark)\n      values(i_table_source,@v_arch_begin,@v_arch_end,1,0,0,concat(\'error, all data in keey days, min \',i_fieldname,\': \',@v_arch_begin));\n  end if;\n  /* \u5982\u679c\u5386\u53f2\u8868\u6240\u5728\u7684\u65e5\u671f\u533a\u95f4\u6709\u6570\u636e\uff0c\u9000\u51fa\uff08\u9700\u8981\u624b\u52a8\u6392\u67e5\u539f\u56e0\uff09 */\n  if @v_his_num_before <> 0 then\n      insert into archive_log(tab_name,archive_date_begin,archive_date_end,status,insert_rows,delete_rows,remark)\n      values(i_table_source,@v_arch_begin,@v_arch_end,2,0,0,concat(\'error, data exists,row num:\',@v_his_num_before));\n  end if;\n  \n  if (timestampdiff(day,@v_arch_begin,now()) > i_keepdays and @v_his_num_before = 0) then \n      set @mystmt = concat("insert into ",i_table_target," select * from ",i_table_source," where ",i_fieldname," >= ? and ",i_fieldname," < ? and ",i_other_cond);\n      prepare stmt from @mystmt;\n      execute stmt using @v_arch_begin,@v_arch_end;\n      deallocate prepare stmt;\n      /* \u56e0\u4e3afederated\u5f15\u64ce\u4e0d\u652f\u6301\u4e8b\u52a1\uff0c\u6570\u636einsert\u540e\u518dselect\u4e0b\u8bb0\u5f55\u6570\uff0c\u4e0e\u4e0b\u9762\u7684delete\u8bb0\u5f55\u6570\u5bf9\u6bd4\uff0c\u76f8\u540c\u5219\u63d0\u4ea4delete\u64cd\u4f5c */\n      set @mystmt = concat("select count(*) into @v_his_num_after from ",i_table_target," where ",i_fieldname," >= ? and ",i_fieldname," < ?");\n      prepare stmt from @mystmt;\n      execute stmt using @v_arch_begin,@v_arch_end;\n      deallocate prepare stmt;\n \n      start transaction;\n \n      set @mystmt = concat("delete from ",i_table_source," where ",i_fieldname," >= ? and ",i_fieldname," < ? and ",i_other_cond);\n      prepare stmt from @mystmt;\n      execute stmt using @v_arch_begin,@v_arch_end;\n      set @v_del_num = row_count();\n      deallocate prepare stmt;\n \n      if @v_del_num = @v_his_num_after then\n          commit;\n          insert into archive_log(tab_name,archive_date_begin,archive_date_end,status,insert_rows,delete_rows,remark)\n          values(i_table_source,@v_arch_begin,@v_arch_end,0,@v_his_num_after,@v_del_num,\'success\');\n      else\n          rollback;\n          insert into archive_log(tab_name,archive_date_begin,archive_date_end,status,insert_rows,delete_rows,remark)\n          values(i_table_source,@v_arch_begin,@v_arch_end,3,@v_his_num_after,@v_del_num,\'rollback, inserted rows num not equal to deleted rows num\');\n      end if;\n    end if;\n        \nend;\n')),(0,a.kt)("p",null,"\u6570\u636e\u5e93\u5f52\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6983238388585332750"},"https://juejin.cn/post/6983238388585332750"),"\nMysql\u5f52\u6863\u811a\u672cPython\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dbarun/mysql_archiver"},"https://github.com/dbarun/mysql_archiver"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://cloud.tencent.com/developer/article/1620245"},"https://cloud.tencent.com/developer/article/1620245"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://boomballa.com/2017/04/26/mysql_data_archive/"},"https://boomballa.com/2017/04/26/mysql_data_archive/")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),i=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=i(e.components);return l.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=i(n),d=a,b=c["".concat(o,".").concat(d)]||c[d]||m[d]||r;return n?l.createElement(b,u(u({ref:t},s),{},{components:n})):l.createElement(b,u({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,u=new Array(r);u[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,u[1]=p;for(var i=2;i<r;i++)u[i]=n[i];return l.createElement.apply(null,u)}return l.createElement.apply(null,n)}c.displayName="MDXCreateElement"},836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>u,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>i});var l=n(7462),a=(n(7294),n(3905));const r={title:"CompletableFuture\u7528\u6cd5",description:"CompletableFuture\u7528\u6cd5",slug:"completable-future",sidebar_position:7,keywords:["CompletableFuture\u7528\u6cd5"],tags:["Java"],draft:!1,hide_table_of_contents:!0,last_update:{date:"2023-02-25 20:28",author:"Hans"}},u=void 0,p={unversionedId:"java/java-basis/CompletableFuture\u7528\u6cd5",id:"java/java-basis/CompletableFuture\u7528\u6cd5",title:"CompletableFuture\u7528\u6cd5",description:"CompletableFuture\u7528\u6cd5",source:"@site/docs/01.java/01.java-basis/08.CompletableFuture\u7528\u6cd5.md",sourceDirName:"01.java/01.java-basis",slug:"/java/java-basis/completable-future",permalink:"/docs/java/java-basis/completable-future",draft:!1,tags:[{label:"Java",permalink:"/docs/tags/java"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1677328080,formattedLastUpdatedAt:"2023\u5e742\u670825\u65e5",sidebarPosition:7,frontMatter:{title:"CompletableFuture\u7528\u6cd5",description:"CompletableFuture\u7528\u6cd5",slug:"completable-future",sidebar_position:7,keywords:["CompletableFuture\u7528\u6cd5"],tags:["Java"],draft:!1,hide_table_of_contents:!0,last_update:{date:"2023-02-25 20:28",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"Java\u53cd\u5c04\u673a\u5236",permalink:"/docs/java/java-basis/java-reflection"},next:{title:"JVM",permalink:"/docs/category/jvm"}},o={},i=[{value:"\u4e00\u3001\u7b80\u5355\u4ecb\u7ecd",id:"\u4e00\u7b80\u5355\u4ecb\u7ecd",level:2},{value:"\u4e8c\u3001\u5e38\u89c1\u64cd\u4f5c",id:"\u4e8c\u5e38\u89c1\u64cd\u4f5c",level:2},{value:"2.1 \u521b\u5efa\u5f02\u6b65\u4efb\u52a1",id:"21-\u521b\u5efa\u5f02\u6b65\u4efb\u52a1",level:3},{value:"2.2 \u5904\u7406 <code>CompletableFuture</code> \u7684\u7ed3\u679c",id:"22-\u5904\u7406-completablefuture-\u7684\u7ed3\u679c",level:3},{value:"2.3 \u5f02\u5e38\u5904\u7406",id:"23-\u5f02\u5e38\u5904\u7406",level:3},{value:"2.4 \u7ec4\u5408 <code>CompletableFuture</code>",id:"24-\u7ec4\u5408-completablefuture",level:3},{value:"2.5 \u5e76\u884c\u8fd0\u884c\u591a\u4e2a <code>CompletableFuture</code>",id:"25-\u5e76\u884c\u8fd0\u884c\u591a\u4e2a-completablefuture",level:3}],s={toc:i};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,l.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u4e00\u7b80\u5355\u4ecb\u7ecd"},"\u4e00\u3001\u7b80\u5355\u4ecb\u7ecd"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," \u540c\u65f6\u5b9e\u73b0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"Future")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"CompletionStage")," \u63a5\u53e3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class CompletableFuture<T> implements Future<T>, CompletionStage<T> {\n}\n")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7303).Z,width:"274",height:"123"})),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CompletionStage")," \u63a5\u53e3\u63cf\u8ff0\u4e86\u4e00\u4e2a\u5f02\u6b65\u8ba1\u7b97\u7684\u9636\u6bb5\u3002\u5f88\u591a\u8ba1\u7b97\u53ef\u4ee5\u5206\u6210\u591a\u4e2a\u9636\u6bb5\u6216\u6b65\u9aa4\uff0c\u6b64\u65f6\u53ef\u4ee5\u901a\u8fc7\u5b83\u5c06\u6240\u6709\u6b65\u9aa4\u7ec4\u5408\u8d77\u6765\uff0c\u5f62\u6210\u5f02\u6b65\u8ba1\u7b97\u7684\u6d41\u6c34\u7ebf\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"CompletionStage")," \u63a5\u53e3\u4e2d\u7684\u65b9\u6cd5\u6bd4\u8f83\u591a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9812).Z,width:"692",height:"882"})),(0,a.kt)("h2",{id:"\u4e8c\u5e38\u89c1\u64cd\u4f5c"},"\u4e8c\u3001\u5e38\u89c1\u64cd\u4f5c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u5f02\u6b65\u4efb\u52a1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Future.submit"),(0,a.kt)("li",{parentName:"ul"},"supplyAsync / runAsync"))),(0,a.kt)("li",{parentName:"ul"},"\u5f02\u6b65\u56de\u8c03",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"thenApply / thenApplyAsync"),(0,a.kt)("li",{parentName:"ul"},"thenAccept / thenRun"),(0,a.kt)("li",{parentName:"ul"},"exceptionally"),(0,a.kt)("li",{parentName:"ul"},"whenComplete"),(0,a.kt)("li",{parentName:"ul"},"handle"))),(0,a.kt)("li",{parentName:"ul"},"\u7ec4\u5408\u5904\u7406",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"thenCombine / thenAcceptBoth / runAfterBoth"),(0,a.kt)("li",{parentName:"ul"},"applyToEither / acceptEither / runAfterEither"),(0,a.kt)("li",{parentName:"ul"},"thenCompose"),(0,a.kt)("li",{parentName:"ul"},"allOf / anyOf")))),(0,a.kt)("h3",{id:"21-\u521b\u5efa\u5f02\u6b65\u4efb\u52a1"},"2.1 \u521b\u5efa\u5f02\u6b65\u4efb\u52a1"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1\u3001\u901a\u8fc7 new \u5173\u952e\u5b57")),(0,a.kt)("p",null,"\u901a\u5e38\u63d0\u4ea4\u5f02\u6b65\u4efb\u52a1\u4f7f\u7528 ExecutorService, execute \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u662f Void, 3\u4e2a\u91cd\u8f7d\u7684 submit \u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"Future"),", \u53ef\u4ee5\u83b7\u53d6\u4efb\u52a1\u7684\u6267\u884c\u72b6\u6001\u548c\u7ed3\u679c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void test() throws Exception {\n    // \u521b\u5efa\u5f02\u6b65\u6267\u884c\u4efb\u52a1:\n    ExecutorService executorService= Executors.newSingleThreadExecutor();\n    Future<Double> cf = executorService.submit(()->{\n        System.out.println(Thread.currentThread()+" start,time->"+System.currentTimeMillis());\n        try {\n            Thread.sleep(2000);\n        } catch (InterruptedException e) {\n        }\n        if(false){\n            throw new RuntimeException("test");\n        }else{\n            System.out.println(Thread.currentThread()+" exit,time->"+System.currentTimeMillis());\n            return 1.2D;\n        }\n    });\n    System.out.println("main thread start,time->"+System.currentTimeMillis());\n    //\u7b49\u5f85\u5b50\u4efb\u52a1\u6267\u884c\u5b8c\u6210,\u5982\u679c\u5df2\u5b8c\u6210\u5219\u76f4\u63a5\u8fd4\u56de\u7ed3\u679c\n    //\u5982\u679c\u6267\u884c\u4efb\u52a1\u5f02\u5e38\uff0c\u5219get\u65b9\u6cd5\u4f1a\u628a\u4e4b\u524d\u6355\u83b7\u7684\u5f02\u5e38\u91cd\u65b0\u629b\u51fa\n    System.out.println("run result->"+cf.get());\n    System.out.println("main thread exit,time->"+System.currentTimeMillis());\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2\u3001\u57fa\u4e8e\xa0",(0,a.kt)("inlineCode",{parentName:"strong"},"CompletableFuture"),"\xa0\u81ea\u5e26\u7684\u9759\u6001\u5de5\u5382\u65b9\u6cd5\uff1a",(0,a.kt)("inlineCode",{parentName:"strong"},"runAsync()"),"\xa0\u3001",(0,a.kt)("inlineCode",{parentName:"strong"},"supplyAsync()"))),(0,a.kt)("p",null,"supplyAsync \u8868\u793a\u521b\u5efa\u5e26\u8fd4\u56de\u503c\u7684\u5f02\u6b65\u4efb\u52a1\u7684\uff0c\u76f8\u5f53\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"ExecutorService submit(Callable<T> task)")," \u65b9\u6cd5\uff0crunAsync \u8868\u793a\u521b\u5efa\u65e0\u8fd4\u56de\u503c\u7684\u5f02\u6b65\u4efb\u52a1\uff0c\u76f8\u5f53\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"ExecutorService submit(Runnable task)")," \u65b9\u6cd5\uff0c\u8fd9\u4e2a\u65b9\u6cd5\u7684\u6548\u679c\u8ddfsubmit\u662f\u4e00\u6837\u7684\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// \u8fd9\u4e24\u65b9\u6cd5\u90fd\u53ef\u4ee5\u6307\u5b9a\u6267\u884c\u5f02\u6b65\u4efb\u52a1\u7684Executor\u5b9e\u73b0\uff0c\u5982\u679c\u4e0d\u6307\u5b9a\uff0c\u9ed8\u8ba4\u4f7f\u7528ForkJoinPool.commonPool()\n\n// ForkJoinPool.commonPool() \u7ebf\u7a0b\u6c60\u4e2d\u6267\u884c, \u6838\u5fc3\u7ebf\u7a0b\u6570=cpu\u6838\u6570-1\npublic static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier);\n// \u4f7f\u7528\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60(\u63a8\u8350)\npublic static <U> CompletableFuture<U> supplyAsync(Supplier<U> supplier, Executor executor);\npublic static CompletableFuture<Void> runAsync(Runnable runnable);\n// \u4f7f\u7528\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60(\u63a8\u8350)\npublic static CompletableFuture<Void> runAsync(Runnable runnable, Executor executor);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Runnable")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"Supplier")," \u90fd\u662f\u51fd\u6570\u5f0f\u63a5\u53e3\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"Runnable")," \u4e0d\u5141\u8bb8\u8fd4\u56de\u503c\uff0c\u5f53\u9700\u8981\u5f02\u6b65\u64cd\u4f5c\u4e14\u4e0d\u5173\u5fc3\u8fd4\u56de\u7ed3\u679c\u7684\u65f6\u5019\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"runAsync")," \u65b9\u6cd5\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"Supplier")," \u5141\u8bb8\u8fd4\u56de\u503c\uff0c ",(0,a.kt)("inlineCode",{parentName:"p"},"U")," \u662f\u8fd4\u56de\u503c\u7c7b\u578b\uff0c\u5f53\u9700\u8981\u5f02\u6b65\u64cd\u4f5c\u4e14\u5173\u5fc3\u8fd4\u56de\u7ed3\u679c\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"supplyAsync")," \u65b9\u6cd5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'List<CompletableFuture<Void>> asyncTasks = new ArrayList<>();\nfor (int i = 0; i < 1000; i++) {\n    // \u9ed8\u8ba4\u662f(CPU\u6838\u6570-1)\u4e2a\u7ebf\u7a0b\n    CompletableFuture<Void> asyncTask = CompletableFuture.runAsync(new MyRandomCallableTask(1 + i));\n    asyncTasks.add(asyncTask);\n}\nCompletableFuture.allOf(asyncTasks.toArray(new CompletableFuture[0]))\n        .exceptionally(e -> {\n            log.error("\u6267\u884c\u5f02\u5e38", e);\n            return null;\n        })\n        .join();\n')),(0,a.kt)("h3",{id:"22-\u5904\u7406-completablefuture-\u7684\u7ed3\u679c"},"2.2 \u5904\u7406 ",(0,a.kt)("inlineCode",{parentName:"h3"},"CompletableFuture")," \u7684\u7ed3\u679c"),(0,a.kt)("p",null,"\u6211\u4eec\u5728\u83b7\u53d6\u5230\u5f02\u6b65\u8ba1\u7b97\u7ed3\u679c\u540e\uff0c\u8fd8\u53ef\u4ee5\u5bf9\u5176\u8fdb\u884c\u8fdb\u4e00\u6b65\u7684\u5904\u7406\uff0c\u6bd4\u8f83\u5e38\u7528\u7684\u65b9\u6cd5\u6709\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thenApply()"),"\uff0c \u8868\u793a\u67d0\u4e2a\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u540e\u6267\u884c\u7684\u52a8\u4f5c\uff0c\u4f1a\u5c06\u8be5\u4efb\u52a1\u7684\u6267\u884c\u7ed3\u679c\u5373\u65b9\u6cd5\u8fd4\u56de\u503c\u4f5c\u4e3a\u5165\u53c2\u4f20\u9012\u5230\u56de\u8c03\u65b9\u6cd5\u4e2d"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thenAccept()"),"\uff0cthenAccept \u540c thenApply \u63a5\u6536\u4e0a\u4e00\u4e2a\u4efb\u52a1\u7684\u8fd4\u56de\u503c\u4f5c\u4e3a\u53c2\u6570\uff0c\u4f46\u662f\u65e0\u8fd4\u56de\u503c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"thenRun()"),"\uff0c\u6ca1\u6709\u5165\u53c2\uff0c\u4e5f\u6ca1\u6709\u8fd4\u56de\u503c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"whenComplete()"),"\uff0c\u4e0d\u8fd4\u56de\u7ed3\u679c\uff0c\u53ef\u4ee5\u63a5\u6536\u591a\u4e2a\u53c2\u6570\u8fdb\u884c\u6d88\u8d39")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1\u3001",(0,a.kt)("inlineCode",{parentName:"strong"},"thenApply()"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"// thenApplyAsync\u4e0ethenApply\u7684\u533a\u522b\u5728\u4e8e\uff0c\u524d\u8005\u662f\u5c06job2\u63d0\u4ea4\u5230\u7ebf\u7a0b\u6c60\u4e2d\u5f02\u6b65\u6267\u884c\uff0c\u5b9e\u9645\u6267\u884cjob2\u7684\u7ebf\u7a0b\u53ef\u80fd\u662f\u53e6\u5916\u4e00\u4e2a\u7ebf\u7a0b\uff0c\u540e\u8005\u662f\u7531\u6267\u884cjob1\u7684\u7ebf\u7a0b\u7acb\u5373\u6267\u884cjob2\uff0c\u5373\u4e24\u4e2ajob\u90fd\u662f\u540c\u4e00\u4e2a\u7ebf\u7a0b\u6267\u884c\u7684\n\n// \u6cbf\u7528\u4e0a\u4e00\u4e2a\u4efb\u52a1\u7684\u7ebf\u7a0b\u6c60\npublic <U> CompletableFuture<U> thenApply(Function<? super T,? extends U> fn);\n\n// \u4f7f\u7528\u9ed8\u8ba4\u7684 ForkJoinPool \u7ebf\u7a0b\u6c60\uff08\u4e0d\u63a8\u8350\uff09\npublic <U> CompletableFuture<U> thenApplyAsync(Function<? super T,? extends U> fn);\n\n// \u4f7f\u7528\u81ea\u5b9a\u4e49\u7ebf\u7a0b\u6c60(\u63a8\u8350)\npublic <U> CompletableFuture<U> thenApplyAsync(Function<? super T,? extends U> fn, Executor executor);\n\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'List<CompletableFuture<String>> asyncTasks = new ArrayList<>();\nfor (int i = 0; i < 1000; i++) {\n    int taskNo = i + 1;\n    CompletableFuture<String> asyncTask = CompletableFuture.supplyAsync(() -> {\n        try {\n            TimeUnit.SECONDS.sleep(new Random().nextInt(5));\n        } catch (InterruptedException e) {\n            log.error("\u5f02\u5e38", e);\n        }\n        return "Task-" + taskNo;\n    }).thenApply((r) -> {\n        // \u4efb\u52a1-[Task-8], \u6267\u884c\u7ed3\u675f\n        log.info("\u4efb\u52a1-[{}], \u6267\u884c\u7ed3\u675f", r);\n        return String.format("\u4efb\u52a1-%d, \u6267\u884c\u7ed3\u675f", r);\n    });\n    asyncTasks.add(asyncTask);\n}\nCompletableFuture.allOf(asyncTasks.toArray(new CompletableFuture[0]))\n        .exceptionally(e -> {\n            log.error("\u6267\u884c\u5f02\u5e38", e);\n            return null;\n        })\n        .join();\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2\u3001",(0,a.kt)("inlineCode",{parentName:"strong"},"thenAccept()"))),(0,a.kt)("p",null,"thenAccept \u63a5\u6536\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Consumer<? super T>"),", \u4e0d\u8fd4\u56de\u7ed3\u679c\u3002\u987e\u540d\u601d\u4e49\uff0cConsumer \u5c5e\u4e8e\u6d88\u8d39\u578b\u63a5\u53e3\uff0c\u5b83\u53ef\u4ee5\u63a5\u6536 1 \u4e2a\u8f93\u5165\u5bf9\u8c61\u7136\u540e\u8fdb\u884c\u201c\u6d88\u8d39\u201d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public CompletableFuture<Void> thenAccept(Consumer<? super T> action);\n\npublic CompletableFuture<Void> thenAcceptAsync(Consumer<? super T> action);\n\npublic CompletableFuture<Void> thenAcceptAsync(Consumer<? super T> action, Executor executor);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'List<CompletableFuture<Void>> asyncTasks = new ArrayList<>();\nfor (int i = 0; i < 1000; i++) {\n    int taskNo = i + 1;\n    CompletableFuture<Void> asyncTask = CompletableFuture.supplyAsync(() -> {\n        try {\n            TimeUnit.SECONDS.sleep(new Random().nextInt(5));\n        } catch (InterruptedException e) {\n            log.error("\u5f02\u5e38", e);\n        }\n        return "Task-" + taskNo;\n    }).thenAccept((r) -> {\n        // \u83b7\u53d6\u4e0a\u4e00\u6b65\u7684\u6267\u884c\u7ed3\u679c, \u4f46\u6ca1\u6709\u8fd4\u56de\u503c\n        log.info("\u4efb\u52a1-[{}], \u6267\u884c\u7ed3\u675f", r);\n    });\n    asyncTasks.add(asyncTask);\n}\nCompletableFuture.allOf(asyncTasks.toArray(new CompletableFuture[0]))\n        .exceptionally(e -> {\n            log.error("\u6267\u884c\u5f02\u5e38", e);\n            return null;\n        })\n        .join();\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3\u3001",(0,a.kt)("inlineCode",{parentName:"strong"},"thenRun()"))),(0,a.kt)("p",null,"thenRun \u63a5\u6536\u7684\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"Runnable")," \u5bf9\u8c61\uff0c\u4e0d\u63a5\u6536\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public CompletableFuture<Void> thenRun(Runnable action);\n\npublic CompletableFuture<Void> thenRunAsync(Runnable action);\n\npublic CompletableFuture<Void> thenRunAsync(Runnable action, Executor executor);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"thenAccept()")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"thenRun()"),"  \u7684\u533a\u522b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'CompletableFuture.completedFuture("hello!")\n        .thenApply(s -> s + "world!").thenApply(s -> s + "nice!").thenAccept(System.out::println);//hello!world!nice!\n\nCompletableFuture.completedFuture("hello!")\n        .thenApply(s -> s + "world!").thenApply(s -> s + "nice!").thenRun(() -> System.out.println("hello!"));//hello!\n\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4\u3001",(0,a.kt)("inlineCode",{parentName:"strong"},"whenComplete()"))),(0,a.kt)("p",null,"whenComplete\u662f\u5f53\u67d0\u4e2a\u4efb\u52a1\u6267\u884c\u5b8c\u6210\u540e\u6267\u884c\u7684\u56de\u8c03\u65b9\u6cd5\uff0c\u4f1a\u5c06\u6267\u884c\u7ed3\u679c\u6216\u8005\u6267\u884c\u671f\u95f4\u629b\u51fa\u7684\u5f02\u5e38\u4f20\u9012\u7ed9\u56de\u8c03\u65b9\u6cd5\uff0c\u5982\u679c\u662f\u6b63\u5e38\u6267\u884c\u5219\u5f02\u5e38\u4e3anull\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u56de\u8c03\u65b9\u6cd5\u5bf9\u5e94\u7684CompletableFuture\u7684result\u548c\u8be5\u4efb\u52a1\u4e00\u81f4"),"\uff0c\u5982\u679c\u8be5\u4efb\u52a1\u6b63\u5e38\u6267\u884c\uff0c\u5219get\u65b9\u6cd5\u8fd4\u56de\u6267\u884c\u7ed3\u679c\uff0c\u5982\u679c\u662f\u6267\u884c\u5f02\u5e38\uff0c\u5219get\u65b9\u6cd5\u629b\u51fa\u5f02\u5e38\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public CompletableFuture<T> whenComplete(BiConsumer<? super T, ? super Throwable> action);\n\npublic CompletableFuture<T> whenCompleteAsync(BiConsumer<? super T, ? super Throwable> action);\n\npublic CompletableFuture<T> whenCompleteAsync(BiConsumer<? super T, ? super Throwable> action, Executor executor);\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> "hello!")\n        .whenComplete((res, ex) -> {\n            // res \u4ee3\u8868\u8fd4\u56de\u7684\u7ed3\u679c\n            // ex \u7684\u7c7b\u578b\u4e3a Throwable \uff0c\u4ee3\u8868\u629b\u51fa\u7684\u5f02\u5e38\n            System.out.println(res);\n            // \u8fd9\u91cc\u6ca1\u6709\u629b\u51fa\u5f02\u5e38\u6240\u6709\u4e3a null\n            assertNull(ex);\n        });\nassertEquals("hello!", future.get());\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Test\npublic void test10() throws Exception {\n    // \u521b\u5efa\u5f02\u6b65\u6267\u884c\u4efb\u52a1:\n    CompletableFuture<Double> cf = CompletableFuture.supplyAsync(()->{\n        System.out.println(Thread.currentThread()+"job1 start,time->"+System.currentTimeMillis());\n        try {\n            Thread.sleep(2000);\n        } catch (InterruptedException e) {\n        }\n        if(false){\n            throw new RuntimeException("test");\n        }else{\n            System.out.println(Thread.currentThread()+"job1 exit,time->"+System.currentTimeMillis());\n            return 1.2;\n        }\n    });\n    //cf\u6267\u884c\u5b8c\u6210\u540e\u4f1a\u5c06\u6267\u884c\u7ed3\u679c\u548c\u6267\u884c\u8fc7\u7a0b\u4e2d\u629b\u51fa\u7684\u5f02\u5e38\u4f20\u5165\u56de\u8c03\u65b9\u6cd5\uff0c\u5982\u679c\u662f\u6b63\u5e38\u6267\u884c\u7684\u5219\u4f20\u5165\u7684\u5f02\u5e38\u4e3anull\n    CompletableFuture<Double> cf2=cf.whenComplete((a,b)->{\n        System.out.println(Thread.currentThread()+"job2 start,time->"+System.currentTimeMillis());\n        try {\n            Thread.sleep(2000);\n        } catch (InterruptedException e) {\n        }\n        if(b!=null){\n            System.out.println("error stack trace->");\n            b.printStackTrace();\n        }else{\n            System.out.println("run succ,result->"+a);\n        }\n        System.out.println(Thread.currentThread()+"job2 exit,time->"+System.currentTimeMillis());\n    });\n    //\u7b49\u5f85\u5b50\u4efb\u52a1\u6267\u884c\u5b8c\u6210\n    System.out.println("main thread start wait,time->"+System.currentTimeMillis());\n    //\u5982\u679ccf\u662f\u6b63\u5e38\u6267\u884c\u7684\uff0ccf2.get\u7684\u7ed3\u679c\u5c31\u662fcf\u6267\u884c\u7684\u7ed3\u679c\n    //\u5982\u679ccf\u662f\u6267\u884c\u5f02\u5e38\uff0c\u5219cf2.get\u4f1a\u629b\u51fa\u5f02\u5e38\n    System.out.println("run result->"+cf2.get());\n    System.out.println("main thread exit,time->"+System.currentTimeMillis());\n}\n')),(0,a.kt)("h3",{id:"23-\u5f02\u5e38\u5904\u7406"},"2.3 \u5f02\u5e38\u5904\u7406"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"handle()")," \u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"exceptionally()")," \u65b9\u6cd5")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@SneakyThrows\n@Test\n@DisplayName("CompletableFuture\u7684\u5f02\u5e38")\nvoid cfExHandleTest() {\n    CompletableFuture<String> completableFuture = CompletableFuture.runAsync(() -> {\n        while (1 == 1) {\n            throw new RuntimeException("error");\n        }\n    }).handle((res, ex) -> {\n        // res \u4ee3\u8868\u8fd4\u56de\u7684\u7ed3\u679c\n        // ex \u7684\u7c7b\u578b\u4e3a Throwable \uff0c\u4ee3\u8868\u629b\u51fa\u7684\u5f02\u5e38\n        return "world!";\n    });\n    assertEquals("world!", completableFuture.get());\n}\n\n@SneakyThrows\n@Test\n@DisplayName("CompletableFuture\u7684\u5f02\u5e38")\nvoid cfExHandleTest2() {\n    CompletableFuture<String> completableFuture = CompletableFuture.supplyAsync(() -> {\n        while (System.currentTimeMillis() % 2 == 0) {\n            throw new RuntimeException("error");\n        }\n        return "hello";\n    }).exceptionally(e -> {\n        log.error("\u5f02\u5e38", e);\n        return "world!";\n    });\n    assertEquals("world!", completableFuture.get());\n}\n')),(0,a.kt)("h3",{id:"24-\u7ec4\u5408-completablefuture"},"2.4 \u7ec4\u5408 ",(0,a.kt)("inlineCode",{parentName:"h3"},"CompletableFuture")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"thenCompose()")," \u53ef\u4ee5\u8fde\u63a5\u4e24\u4e2a\xa0",(0,a.kt)("inlineCode",{parentName:"li"},"CompletableFuture"),"\xa0\u5bf9\u8c61\uff0c\u5e76\u5c06\u524d\u4e00\u4e2a\u4efb\u52a1\u7684\u8fd4\u56de\u7ed3\u679c\u4f5c\u4e3a\u4e0b\u4e00\u4e2a\u4efb\u52a1\u7684\u53c2\u6570\uff0c\u5b83\u4eec\u4e4b\u95f4\u5b58\u5728\u7740\u5148\u540e\u987a\u5e8f\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"thenCombile()")," \u4f1a\u5728\u4e24\u4e2a\u4efb\u52a1\u90fd\u6267\u884c\u5b8c\u6210\u540e\uff0c\u628a\u4e24\u4e2a\u4efb\u52a1\u7684\u7ed3\u679c\u5408\u5e76\u3002\u4e24\u4e2a\u4efb\u52a1\u662f\u5e76\u884c\u6267\u884c\u7684\uff0c\u5b83\u4eec\u4e4b\u95f4\u5e76\u6ca1\u6709\u5148\u540e\u4f9d\u8d56\u987a\u5e8f")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@SneakyThrows\n@Test\n@DisplayName("CompletableFuture\u7684\u7ec4\u5408-thenCompose")\nvoid cfThenCompose() {\n    CompletableFuture<String> completableFuture = CompletableFuture.supplyAsync(() -> {\n        return "hello";\n    }).thenCompose(s -> CompletableFuture.supplyAsync(() -> s + " world!"));\n    assertEquals("hello world!", completableFuture.get());\n}\n\n@SneakyThrows\n@Test\n@DisplayName("CompletableFuture\u7684\u7ec4\u5408-thenCombine")\nvoid cfThenCombine() {\n    CompletableFuture<String> completableFuture = CompletableFuture.supplyAsync(() -> {\n        return "hello";\n    }).thenCombine(CompletableFuture.supplyAsync(() -> "world!"), (s1, s2) -> s1 + s2);\n    // helloworld!\n    log.debug(completableFuture.get());\n}\n')),(0,a.kt)("h3",{id:"25-\u5e76\u884c\u8fd0\u884c\u591a\u4e2a-completablefuture"},"2.5 \u5e76\u884c\u8fd0\u884c\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"h3"},"CompletableFuture")),(0,a.kt)("p",null,"\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u6211\u4eec\u7ecf\u5e38\u9700\u8981\u5e76\u884c\u8fd0\u884c\u591a\u4e2a\u4e92\u4e0d\u76f8\u5173\u7684\u4efb\u52a1\uff0c\u8fd9\u4e9b\u4efb\u52a1\u4e4b\u95f4\u6ca1\u6709\u4f9d\u8d56\u5173\u7cfb\uff0c\u53ef\u4ee5\u4e92\u76f8\u72ec\u7acb\u5730\u8fd0\u884c\u3002\n\u6bd4\u8bf4\u6211\u4eec\u8981\u8bfb\u53d6\u5904\u7406 6 \u4e2a\u6587\u4ef6\uff0c\u8fd9 6 \u4e2a\u4efb\u52a1\u90fd\u662f\u6ca1\u6709\u6267\u884c\u987a\u5e8f\u4f9d\u8d56\u7684\u4efb\u52a1\uff0c\u4f46\u662f\u6211\u4eec\u9700\u8981\u8fd4\u56de\u7ed9\u7528\u6237\u7684\u65f6\u5019\u5c06\u8fd9\u51e0\u4e2a\u6587\u4ef6\u7684\u5904\u7406\u7684\u7ed3\u679c\u8fdb\u884c\u7edf\u8ba1\u6574\u7406\u3002\u50cf\u8fd9\u79cd\u60c5\u51b5\u6211\u4eec\u5c31\u53ef\u4ee5\u4f7f\u7528\u5e76\u884c\u8fd0\u884c\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture")," \u6765\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),"\xa0\u7684\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"allOf()"),"\u8fd9\u4e2a\u9759\u6001\u65b9\u6cd5\u6765\u5e76\u884c\u8fd0\u884c\u591a\u4e2a\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),"\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"allOf()"),"\xa0\u65b9\u6cd5\u4f1a\u7b49\u5230\u6240\u6709\u7684\xa0",(0,a.kt)("inlineCode",{parentName:"p"},"CompletableFuture"),"\xa0\u90fd\u8fd0\u884c\u5b8c\u6210\u4e4b\u540e\u518d\u8fd4\u56de**"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'asyncTasks.add(\n    CompletableFuture.runAsync(\n        new RannableTask(...)\n    )\n);\n\n// \u7b49\u5f85\u6240\u6709\u7684\u4efb\u52a1\u5b8c\u6210\nCompletableFuture.allOf(asyncTasks.toArray(new CompletableFuture[0]))\n    .exceptionally(throwable -> {\n        log.warn("\u6267\u884c\u5931\u8d25: {}", throwable);\n        return null;\n    })\n    .join();\n')),(0,a.kt)("p",null,"\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"allOf()")," \u76f8\u5e94\u7684\u65b9\u6cd5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"anyOf()"),"\uff0c\u8868\u793a\u53ea\u8981\u6709\u4e00\u4e2a\u6267\u884c\u5b8c\u6210\u5c31\u884c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"CompletableFuture<Object> f = CompletableFuture.anyOf(future1, future2);\nSystem.out.println(f.get());\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u53c2\u8003:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CompletableFuture\u5165\u95e8: ",(0,a.kt)("a",{parentName:"li",href:"https://javaguide.cn/java/concurrent/completablefuture-intro.html"},"https://javaguide.cn/java/concurrent/completablefuture-intro.html")),(0,a.kt)("li",{parentName:"ul"},"Java8 CompletableFuture \u7528\u6cd5\u5168\u89e3: ",(0,a.kt)("a",{parentName:"li",href:"https://blog.csdn.net/qq_31865983/article/details/106137777"},"https://blog.csdn.net/qq_31865983/article/details/106137777"))))}m.isMDXComponent=!0},7303:(e,t,n)=>{n.d(t,{Z:()=>l});const l="data:image/png;base64,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"},9812:(e,t,n)=>{n.d(t,{Z:()=>l});const l=n.p+"assets/images/20230226143201-93825d3b9c47c621d48ddfcad44624a3.png"}}]);
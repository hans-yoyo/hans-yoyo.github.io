"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5368],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>g});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(t),g=i,m=d["".concat(p,".").concat(g)]||d[g]||u[g]||o;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),i=(t(7294),t(3905));const o={title:"SpringBoot\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1\u7684\u51e0\u79cd\u65b9\u5f0f",description:"SpringBoot\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1\u7684\u51e0\u79cd\u65b9\u5f0f",slug:"springboot-timer",sidebar_position:7,keywords:["\u5b9a\u65f6\u4efb\u52a1"],tags:["SpringBoot"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2022-11-19 17:11",author:"Hans"}},a=void 0,l={unversionedId:"springboot/SpringBoot\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1\u7684\u51e0\u79cd\u65b9\u5f0f",id:"springboot/SpringBoot\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1\u7684\u51e0\u79cd\u65b9\u5f0f",title:"SpringBoot\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1\u7684\u51e0\u79cd\u65b9\u5f0f",description:"SpringBoot\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1\u7684\u51e0\u79cd\u65b9\u5f0f",source:"@site/wiki/spring/springboot/07-SpringBoot\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1\u7684\u51e0\u79cd\u65b9\u5f0f.md",sourceDirName:"springboot",slug:"/springboot/springboot-timer",permalink:"/wiki/spring/springboot/springboot-timer",draft:!1,tags:[{label:"SpringBoot",permalink:"/wiki/spring/tags/spring-boot"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1668849060,formattedLastUpdatedAt:"2022\u5e7411\u670819\u65e5",sidebarPosition:7,frontMatter:{title:"SpringBoot\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1\u7684\u51e0\u79cd\u65b9\u5f0f",description:"SpringBoot\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1\u7684\u51e0\u79cd\u65b9\u5f0f",slug:"springboot-timer",sidebar_position:7,keywords:["\u5b9a\u65f6\u4efb\u52a1"],tags:["SpringBoot"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2022-11-19 17:11",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"SpringBoot \u6574\u5408 Knife4j",permalink:"/wiki/spring/springboot/springboot-knife4j"},next:{title:"SpringBoot \u6574\u5408 JPA",permalink:"/wiki/spring/springboot/springboot-jpa"}},p={},s=[{value:"Timer\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1",id:"timer\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1",level:2},{value:"\u4f7f\u7528 <code>ScheduledExecutorService</code>",id:"\u4f7f\u7528-scheduledexecutorservice",level:2},{value:"\u57fa\u4e8eSpringBoot\u81ea\u5e26\u7684\u6ce8\u89e3\u7684\u65b9\u5f0f",id:"\u57fa\u4e8espringboot\u81ea\u5e26\u7684\u6ce8\u89e3\u7684\u65b9\u5f0f",level:2},{value:"cron\u89e3\u91ca",id:"cron\u89e3\u91ca",level:3},{value:"\u57fa\u4e8e\u63a5\u53e3\u7684\u65b9\u5f0f",id:"\u57fa\u4e8e\u63a5\u53e3\u7684\u65b9\u5f0f",level:3},{value:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c<code>Quartz</code>",id:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u4f9d\u8d56quartz",level:2}],c={toc:s};function u(e){let{components:n,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u4ecb\u7ecdSpringBoot\u4e2d\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1\u7684\u51e0\u79cd\u65b9\u5f0f\uff0c\u6709\u4ee5\u4e0b\u51e0\u79cd"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528JDK\u81ea\u5e26\u7684Timer, \u4e0d\u63a8\u8350"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"ScheduledExecutorService"),"\uff0c\u57fa\u4e8e\u7ebf\u7a0b\u6c60\u8bbe\u8ba1\u7684\u5b9a\u65f6\u4efb\u52a1\u7c7b\uff0c\u4e0d\u63a8\u8350"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528SpringBoot\u81ea\u5e26\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"@Scheduled")," \u6ce8\u89e3\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1\uff0c\u63a8\u8350"),(0,i.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c\u5982 ",(0,i.kt)("inlineCode",{parentName:"li"},"Quartz")),(0,i.kt)("li",{parentName:"ol"},"\u5206\u5e03\u5f0f\u5b9a\u65f6\u4efb\u52a1 // TODO")),(0,i.kt)("h2",{id:"timer\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1"},"Timer\u5b9e\u73b0\u5b9a\u65f6\u4efb\u52a1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'TimerTask timerTask = new TimerTask() {\n    @Override\n    public void run() {\n        log.info("jdk timer task executed...");\n    }\n};\nTimer timer = new Timer();\n// \u5ef6\u8fdf1s\uff0c\u6bcf3s\u6267\u884c\u4e00\u6b21\ntimer.schedule(timerTask, 1000, 3000);\n')),(0,i.kt)("h2",{id:"\u4f7f\u7528-scheduledexecutorservice"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"h2"},"ScheduledExecutorService")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public static void main(String[] args) {\n    ScheduledExecutorService scheduledExecutorService = Executors.newScheduledThreadPool(1);\n    scheduledExecutorService.scheduleAtFixedRate(() -> log.info("scheduledExecutorService task executed..."), 1000, 3000, TimeUnit.MILLISECONDS);\n}\n')),(0,i.kt)("h2",{id:"\u57fa\u4e8espringboot\u81ea\u5e26\u7684\u6ce8\u89e3\u7684\u65b9\u5f0f"},"\u57fa\u4e8eSpringBoot\u81ea\u5e26\u7684\u6ce8\u89e3\u7684\u65b9\u5f0f"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"@EnableScheduling")," \u5f00\u542f\u5bf9\u5b9a\u65f6\u4efb\u52a1\u7684\u652f\u6301\u3002\u53ef\u4ee5\u653e\u5728\u542f\u52a8\u7c7b\u4e0a(\u63a8\u8350)\uff0c\u4e5f\u53ef\u4ee5\u653e\u5728\u6ce8\u5165\u5b9a\u65f6\u4efb\u52a1\u7684\u7c7b\u4e0a"),(0,i.kt)("p",null,"\u76f8\u5173api\u5305\u542b\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"spring-context"),"\u7684\u5305",(0,i.kt)("inlineCode",{parentName:"p"},"org.springframework.scheduling"),"\u4e0b\u3002\u53ea\u9700\u5f15\u5165\u4e0b\u9762\u7684\u4f9d\u8d56"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-web</artifactId>\n</dependency>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@EnableScheduling\n@SpringBootApplication\npublic class TimedTaskApp {\n\n    public static void main(String[] args) {\n        SpringApplication.run(TimedTaskApp.class, args);\n    }\n\n}\n\n@Slf4j\n@Component\npublic class AnnotationTaskConfig {\n\n    /**\n     * \u6bcf5s\u6267\u884c\u4e00\u6b21\n     * \u8fd8\u6709\u5176\u4ed6\u914d\u7f6e\uff1afixedDelay\u3001fixedRate\u3001initialDelay\n     */\n    @Scheduled(cron = "*/5 * * * * ?")\n    public void cronTask() {\n        log.info("cronTask executed......");\n    }\n\n}\n\n')),(0,i.kt)("h3",{id:"cron\u89e3\u91ca"},"cron\u89e3\u91ca"),(0,i.kt)("p",null,'\u7ed3\u6784\uff1acron\u8868\u8fbe\u5f0f\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u5206\u4e3a6\u62167\u4e2a\u57df\uff0c\u6bcf\u4e24\u4e2a\u57df\u4e4b\u95f4\u7528\u7a7a\u683c\u5206\u9694\u3002\u5176\u8bed\u6cd5\u683c\u5f0f\u4e3a\uff1a"\u79d2\u57df \u5206\u57df \u65f6\u57df \u65e5\u57df \u6708\u57df \u5468\u57df \u5e74\u57df"'),(0,i.kt)("p",null,"\u53d6\u503c\u8303\u56f4"),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(3879).Z,width:"985",height:"375"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# \u6bcf\u96945\u79d2\u949f\u6267\u884c\u4e00\u6b21\n*/5 * * * * ?\n# \u6bcf\u96941\u5206\u949f\u6267\u884c\u4e00\u6b21\n0 * /1 * * * ?\n# \u6bcf\u592923\u70b955\u5206\u6267\u884c\u4e00\u6b21 \u3000\n0 55 23 * * ?\n# \u4ece\u7b2c1s\u5f00\u59cb\uff0c\u6bcf6\u79d2\u6267\u884c\u4e00\u6b21\n1/6 * * * * ?\n# \u572824\u5206\uff0c30\u5206\u6267\u884c\u4e00\u6b21\n0 24,30 * * * ?\n")),(0,i.kt)("h3",{id:"\u57fa\u4e8e\u63a5\u53e3\u7684\u65b9\u5f0f"},"\u57fa\u4e8e\u63a5\u53e3\u7684\u65b9\u5f0f"),(0,i.kt)("p",null,"\u6709\u65f6\u5019\u6211\u4eec\u5e0c\u671b\u6267\u884c\u8ba1\u5212\u80fd\u591f\u5b58\u50a8\u5728\u6570\u636e\u5e93\u4e2d\uff0c\u5f53\u6211\u4eec\u9700\u8981\u4fee\u6539\u6267\u884c\u8ba1\u5212\u65f6\uff0c\u53ea\u9700\u8981\u4fee\u6539\u6570\u636e\u5e93\u5c31\u53ef\u4ee5\uff0c\u800c\u4e0d\u7528\u91cd\u542f\u670d\u52a1\u3002"),(0,i.kt)("p",null,"\u5b9e\u73b0\u6838\u5fc3\u4ee3\u7801"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Slf4j\n@Component\npublic class DynamicScheduleTask implements SchedulingConfigurer {\n\n    @Autowired\n    private ScheduleTaskRepository scheduleTaskRepository;\n\n    @Override\n    public void configureTasks(ScheduledTaskRegistrar scheduledTaskRegistrar) {\n        scheduledTaskRegistrar.addTriggerTask(() -> doProcess(),\n                triggerContext -> {\n                    Optional<ScheduleTask> opt = scheduleTaskRepository.findById(1L);\n                    if (!opt.isPresent()) {\n                        throw new RuntimeException("\u5b9a\u65f6\u4efb\u52a1\u4e0d\u5b58\u5728");\n                    }\n                    return new CronTrigger(opt.get().getCron()).nextExecutionTime(triggerContext);\n                });\n    }\n\n    private void doProcess() {\n        log.info("\u57fa\u4e8e\u63a5\u53e3\u5b9e\u73b0\u7684\u5b9a\u65f6\u4efb\u52a1");\n    }\n\n}\n')),(0,i.kt)("h2",{id:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u4f9d\u8d56quartz"},"\u4f7f\u7528\u7b2c\u4e09\u65b9\u4f9d\u8d56\uff0c",(0,i.kt)("inlineCode",{parentName:"h2"},"Quartz")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-quartz</artifactId>\n</dependency>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Slf4j\npublic class TestQuartz extends QuartzJobBean {\n    @Override\n    protected void executeInternal(JobExecutionContext jobExecutionContext) throws JobExecutionException {\n        log.info("quartz task executed\uff0c10s\u4e00\u6b21");\n    }\n}\n\n@Configuration\npublic class QuartzConfig {\n\n    @Bean\n    public JobDetail teatQuartzDetail() {\n        return JobBuilder.newJob(TestQuartz.class).withIdentity("testQuartz").storeDurably().build();\n    }\n\n    @Bean\n    public Trigger testQuartzTrigger() {\n        SimpleScheduleBuilder scheduleBuilder = SimpleScheduleBuilder.simpleSchedule()\n                // \u8bbe\u7f6e\u65f6\u95f4\u5468\u671f\n                .withIntervalInSeconds(10)\n                .repeatForever();\n        return TriggerBuilder.newTrigger().forJob(teatQuartzDetail())\n                .withIdentity("testQuartz")\n                .withSchedule(scheduleBuilder)\n                .build();\n    }\n\n}\n')))}u.isMDXComponent=!0},3879:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/202209142242170-bbd4a6a4fc2c61a5a30c7aa8279069fb.png"}}]);
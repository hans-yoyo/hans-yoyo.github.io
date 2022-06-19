---
slug: springboot-config-priority
title: SpringBoot配置文件加载优先级
# authors:
#   name: Hans
tags: [SpringBoot, config]
---

在开发过程中，不知道有没有这样的经历，项目实际读取的配置信息有时候总是与预期不符，今天就来研究下 `SpringBoot` 读取配置文件顺序。

## 一、SpringBoot 配置文件加载优先级

[SpringBoot官方文档](https://docs.spring.io/spring-boot/docs/2.2.9.RELEASE/reference/htmlsingle/#boot-features-external-config)说明了加载的顺序如下，越靠前优先级越高。

>Spring Boot uses a very particular `PropertySource` order that is designed to allow sensible overriding of values. Properties are considered in the following order

```text  

1. 开发者工具 Devtools 全局配置参数；  

2. 单元测试上的 [@TestPropertySource](mailto:@TestPropertySource)` 注解指定的参数;  

3. 单元测试上的 [@SpringBootTest](mailto:@SpringBootTest)` 注解指定的参数；  

4. 命令行指定的参数，如 java -jar springboot.jar --name="xxx"；  

5. 命令行中的 SPRING_APPLICATION_JSON 指定参数, 如 java -Dspring.application.json='{"name":"xxx"}' -jar springboot.jar  

6. ServletConfig初始化参数；  

7. ServletContext初始化参数；  

8. JNDI参数（如 java:comp/env/spring.application.json）；  

9. Java系统参数（来源：System.getProperties()）；  

10. 操作系统环境变量参数；  

11. RandomValuePropertySource 随机数，仅匹配：ramdom.*；  

12. JAR包外面的配置文件参数（application-{profile}.properties（YAML））  

13. JAR包里面的配置文件参数（application-{profile}.properties（YAML））  

14. JAR包外面的配置文件参数（application.properties（YAML））  

15. JAR包里面的配置文件参数（application.properties（YAML））  

16. @Configuration (mailto:@Configuration)配置文件上 @PropertySource(mailto:@PropertySource) 注解加载的参数；  

17. 默认参数（通过 SpringApplication.setDefaultProperties 指定）；  


```

这里我们只对比常用的几个地方的配置优先级：

命令行参数 > JAR包外面的 `application-{profile}.properties` > JAR包内的 `application-{profile}.properties` > JAR包外的 `application.properties` > JAR包内的 `application.properties`


这样可能不太直观，而且有的项目会将 application.properties 文件放在config文件夹内，于是进一步对比了这两个位置的优先级，结果如下

`SpringBoot` 应用程序在启动时会遵循以下顺序进行加载配置文件  
1. 类路径下的配置文件  
2. 类路径内`config`子目录的配置文件  
3. 项目根目录下的配置文件  
4. 项目根目录下`config`子目录的配置文件  
  
```text  
. project-sample  
├── config  
│   ├── application.yml （4）  
│   └── src/main/resources  
|   │   ├── application.yml （1）  
|   │   └── config  
|   |   │   ├── application.yml （2）  
├── application.yml （3）  
  
注：src/main/resources下的配置文件在项目编译时，会放在target/classes下  
```  

**启动时加载配置文件顺序：`1 -> 2 -> 3 -> 4`，优先级 `4 > 3 > 2 > 1`**

注意：  
- 如果在`IDEA`中是多 `module` 项目，3 和 4 的位置是指的是项目根目录下的位置  
- 当 .properties 和 .yml 文件同时存在时，.properties会失效，.yml会起作用。  
  
![](http://file.huhan.tech/images/202205291130509.png)


## 二、bootstrap.yml配置文件

在 `SpringCloud` 的项目中，我们常常会碰到另外一个配置文件 `bootstrap.yml`。这个配置文件主要是用于应用程序上下文的引导阶段，该配置文件的加载是在 `application.yml` 之前。

bootstrap.yml 和 application.yml 文件的区别可参考：[What is the difference between putting a property on application.yml or bootstrap.yml in spring boot](https://stackoverflow.com/questions/32997352/what-is-the-difference-between-putting-a-property-on-application-yml-or-bootstra)

在 SpringCloud 中有两种上下文，一种是 bootstrap, 另外一种是 application, bootstrap 是应用程序的父上下文。官方的原话是 [A Spring Cloud application operates by creating a “bootstrap” context, which is a parent context for the main application](https://cloud.spring.io/spring-cloud-commons/multi/multi__spring_cloud_context_application_context_services.html#_the_bootstrap_application_context)。

`bootstrap.yml`配置文件的使用场景：
- 使用配置中心时，这时需要在bootstrap配置文件中添加连接到配置中心的信息，来加载外部配置中心的配置信息
- 一些固定的不能被覆盖的属性
- 一些加密/解密的信息

项目中 `bootstrap.yml` 示例

```yml

spring:
  application:
    name: 
  profiles:
    active: local
  cloud:
    nacos:
      # 远程配置
      config:
        server-addr: 
        namespace: 
        group: ${spring.profiles.active}
        file-extension: yml
      # 服务发现
      discovery:
        server-addr: 
        namespace: 
        group: ${spring.profiles.active}

```


## 三、配置中心的配置

在 `SpringCloud` 项目中，我们的配置常由配置中心进行统一管理，这就涉及到本地与远程配置文件的优先级问题。这里只说明遇到过的两种: SpringCloud Config 和 Nacos。

1. SpringCloud Config

SpringCloud Config 中的远程配置，默认是无法被本地覆盖，如果需要本地配置覆盖远程配置，需要在远程做如下配置：

```yml
spring:  
  cloud:  
    config:  
      allowOverride: true  
      overrideNone: true  
      overrideSystemProperties: false
```

上面的说法可以在如下链接中得到验证：
https://cloud.spring.io/spring-cloud-commons/multi/multi__spring_cloud_context_application_context_services.html#overriding-bootstrap-properties

2. Nacos

Nacos中的远程配置，似乎不支持本地覆盖，在Nacos项目中Issue中得到证实，似乎官方也没有这种打算。值得一提的是，即使通过命令行指定的参数，也不能覆盖远程配置。

关于该问题的Issue:

- [Unable to override datasource](https://github.com/alibaba/nacos/issues/4190)
- [在使用命令行参数(-Dserver.port = 9000)启动被nacos管理的服务客户端时,发现命令行参数没有生效](https://github.com/alibaba/nacos/issues/3510)
- [nacos是否存在类似springcloudconfig的allow-override等本地控制权限参数？或者是否支持这个参数](https://github.com/alibaba/nacos/issues/3981)


## 四、踩过的坑

在一次开发过程中，我们希望服务(serviceA)的某些节点的配置与其他节点配置不同，刚开始的想法是在启动命令行加入参数 `spring.application.name=serviceB`，然后在配置中心 `nacos`  中复制一份serviceA的配置命名为 service B。但是实际测试中，不能修改 application.name 的值，因为参与到一些业务配置。

接着我们想直接在命令行中加入区别于其他节点的参数，希望能够覆盖远程的配置，但前面也说过，命令行的配置无法覆盖远程Nacos配置，且Nacos没有提供支持覆盖的开关，所以也没能达到我们预期的结果。

实际测试的结果，配置优先级：**nacos上的配置 > 命令行配置 > system env > classpath:application.yml > classpath:bootstrap.yml**

最后我们发现nacos支持指定服务配置，以及服务发现的名称，这些配置是在 `bootstap.yml` 文件中指定，默认值是 `spring.application.name`。实际测试结果，通过命令行可以覆盖该文件中的配置，这样正好能够满足我们的需求：不修改application.name，又可以使部分节点的配置区别于其他节点。

```shell
java -jar ./app.jar --spring.profiles.active=local --spring.cloud.nacos.config.name=serviceB --spring.cloud.nacos.discovery.service=serviceB
```


## 五、参考资料

- [SpringBoot Externalized Configuration](https://docs.spring.io/spring-boot/docs/2.2.9.RELEASE/reference/htmlsingle/#boot-features-external-config)
- [Nacos 配置中心，可配置项](https://github.com/alibaba/spring-cloud-alibaba/wiki/Nacos-config-en#more-information-about-nacos-config-starter-configurations)
- [Nacos注册中心，可配置项](https://github.com/alibaba/spring-cloud-alibaba/wiki/Nacos-discovery-en#more-information-about-nacos-discovery-starter-configurations)

"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4294],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?r.createElement(g,l(l({ref:n},c),{},{components:t})):r.createElement(g,l({ref:n},c))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const i={title:"SpringBoot \u6574\u5408 Redis",description:"SpringBoot \u6574\u5408 Redis",slug:"springboot-redis",sidebar_position:16,keywords:["SpringBoot"],tags:["SpringBoot"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2022-12-01 21:08",author:"Hans"}},l=void 0,o={unversionedId:"springboot/SpringBoot \u6574\u5408 Redis",id:"springboot/SpringBoot \u6574\u5408 Redis",title:"SpringBoot \u6574\u5408 Redis",description:"SpringBoot \u6574\u5408 Redis",source:"@site/wiki/spring/springboot/16-SpringBoot \u6574\u5408 Redis.md",sourceDirName:"springboot",slug:"/springboot/springboot-redis",permalink:"/wiki/spring/springboot/springboot-redis",draft:!1,tags:[{label:"SpringBoot",permalink:"/wiki/spring/tags/spring-boot"}],version:"current",lastUpdatedBy:"Hans",lastUpdatedAt:1669900080,formattedLastUpdatedAt:"2022\u5e7412\u67081\u65e5",sidebarPosition:16,frontMatter:{title:"SpringBoot \u6574\u5408 Redis",description:"SpringBoot \u6574\u5408 Redis",slug:"springboot-redis",sidebar_position:16,keywords:["SpringBoot"],tags:["SpringBoot"],draft:!1,hide_table_of_contents:!1,last_update:{date:"2022-12-01 21:08",author:"Hans"}},sidebar:"tutorialSidebar",previous:{title:"SpringBoot \u6574\u5408 Thymeleaf",permalink:"/wiki/spring/springboot/springboot-thymeleaf"},next:{title:"SpringBoot\u81ea\u5b9a\u4e49banner",permalink:"/wiki/spring/springboot/springboot-banner"}},s={},p=[{value:"Redis \u7b80\u4ecb",id:"redis-\u7b80\u4ecb",level:2},{value:"\u5feb\u901f\u6574\u5408",id:"\u5feb\u901f\u6574\u5408",level:2},{value:"\u6dfb\u52a0\u4f9d\u8d56",id:"\u6dfb\u52a0\u4f9d\u8d56",level:3},{value:"\u6dfb\u52a0\u914d\u7f6e",id:"\u6dfb\u52a0\u914d\u7f6e",level:3},{value:"Redis \u5e8f\u5217\u5316\uff0c\u914d\u7f6e\u7c7b",id:"redis-\u5e8f\u5217\u5316\u914d\u7f6e\u7c7b",level:3},{value:"Redis \u5de5\u5177\u7c7b",id:"redis-\u5de5\u5177\u7c7b",level:3},{value:"Spring Cache \u7684\u4f7f\u7528",id:"spring-cache-\u7684\u4f7f\u7528",level:2},{value:"@Cacheable",id:"cacheable",level:3},{value:"@CachePut",id:"cacheput",level:3},{value:"@CacheEvict",id:"cacheevict",level:3},{value:"\u51e0\u4e2a\u6ce8\u610f\u70b9",id:"\u51e0\u4e2a\u6ce8\u610f\u70b9",level:3},{value:"\u4e0eOptional\u7ed3\u5408\u4f7f\u7528",id:"\u4e0eoptional\u7ed3\u5408\u4f7f\u7528",level:4},{value:"Redis \u8fde\u63a5\u6c60",id:"redis-\u8fde\u63a5\u6c60",level:2},{value:"Redis \u5176\u4ed6\u4f7f\u7528\u573a\u666f",id:"redis-\u5176\u4ed6\u4f7f\u7528\u573a\u666f",level:2},{value:"\u5206\u5e03\u5f0f\u9501",id:"\u5206\u5e03\u5f0f\u9501",level:3},{value:"\u9650\u6d41\u5668",id:"\u9650\u6d41\u5668",level:3}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"redis-\u7b80\u4ecb"},"Redis \u7b80\u4ecb"),(0,a.kt)("p",null,"Redis \u662f\u6211\u4eec\u5f00\u53d1\u4e2d\u4f7f\u7528\u9891\u6b21\u975e\u5e38\u9ad8\u7684\u4e00\u4e2a nosql \u6570\u636e\u5e93\uff0c\u6570\u636e\u4ee5 key-value\u952e\u503c\u5bf9 \u7684\u5f62\u5f0f\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\u3002redis\u7684\u5e38\u7528\u4f7f\u7528\u573a\u666f\uff0c\u53ef\u4ee5\u505a\u7f13\u5b58\u3001\u5206\u5e03\u5f0f\u9501\u3002"),(0,a.kt)("p",null,"Redis \u7684Java\u5ba2\u6237\u7aef\u7c7b\u578b\u8fd8\u662f\u5f88\u591a\u7684\uff0c\u5e38\u89c1\u7684\u6709 jedis, redission,lettuce\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"spring-data-redis")," \u4e2d\u4e3b\u8981\u5c01\u88c5\u4e86 Jedis \u548c Lettuce\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Jedis\uff1aSpring Boot 1.5.x \u7248\u672c\u65f6\u9ed8\u8ba4\u7684 Redis \u5ba2\u6237\u7aef\uff0c\u5b9e\u73b0\u4e0a\u662f\u76f4\u63a5\u8fde\u63a5 Redis Server\uff0c\u5982\u679c\u5728\u591a\u7ebf\u7a0b\u73af\u5883\u4e0b\u662f\u975e\u7ebf\u7a0b\u5b89\u5168\u7684\uff0c\u8fd9\u65f6\u5019\u8981\u4f7f\u7528\u8fde\u63a5\u6c60\u4e3a\u6bcf\u4e2a jedis \u5b9e\u4f8b\u589e\u52a0\u7269\u7406\u8fde\u63a5\uff1b"),(0,a.kt)("li",{parentName:"ul"},"Lettuce\uff1aSpring Boot 2.x \u7248\u672c\u540e\u9ed8\u8ba4\u7684 Redis \u5ba2\u6237\u7aef\uff0c\u57fa\u4e8e Netty \u5b9e\u73b0\uff0c\u8fde\u63a5\u5b9e\u4f8b\u53ef\u4ee5\u5728\u591a\u4e2a\u7ebf\u7a0b\u95f4\u5e76\u53d1\u8bbf\u95ee\uff0c\u4e00\u4e2a\u8fde\u63a5\u5b9e\u4f8b\u4e0d\u591f\u7684\u60c5\u51b5\u4e0b\u4e5f\u53ef\u4ee5\u6309\u9700\u8981\u589e\u52a0\u8fde\u63a5\u5b9e\u4f8b\u3002")),(0,a.kt)("h2",{id:"\u5feb\u901f\u6574\u5408"},"\u5feb\u901f\u6574\u5408"),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u4f9d\u8d56"},"\u6dfb\u52a0\u4f9d\u8d56"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-redis</artifactId>\n</dependency>\n<dependency>\n    <groupId>org.apache.commons</groupId>\n    <artifactId>commons-pool2</artifactId>\n</dependency>\n")),(0,a.kt)("p",null,"\u6dfb\u52a0\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"commons-pool2")," \u4f9d\u8d56\uff0c\u8fde\u63a5\u6c60\u624d\u4f1a\u751f\u6548\u3002"),(0,a.kt)("h3",{id:"\u6dfb\u52a0\u914d\u7f6e"},"\u6dfb\u52a0\u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n  redis:\n    database: 0\n    host: 127.0.0.1\n    port: 6379\n    password: Password1\n    connect-timeout: 30000ms\n    # \u8fde\u63a5\u6c60\n    lettuce:\n      pool:\n        min-idle: 5\n        max-idle: 10\n        max-active: 8\n        max-wait: 100ms\n")),(0,a.kt)("p",null,"\u9ed8\u8ba4\u662f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"letture")," \u8fde\u63a5\u6c60"),(0,a.kt)("h3",{id:"redis-\u5e8f\u5217\u5316\u914d\u7f6e\u7c7b"},"Redis \u5e8f\u5217\u5316\uff0c\u914d\u7f6e\u7c7b"),(0,a.kt)("p",null,"RedisTemplate\u8fd9\u4e2a\u7c7b\u7684\u6cdb\u578b\u662f<String,Object>,\u4e5f\u5c31\u662f\u4ed6\u662f\u652f\u6301\u5199\u5165Object\u5bf9\u8c61\u7684\uff0c\u90a3\u4e48\u8fd9\u4e2a\u5bf9\u8c61\u91c7\u53d6\u4ec0\u4e48\u65b9\u5f0f\u5e8f\u5217\u5316\u5b58\u5165\u5185\u5b58\u4e2d\u5c31\u662f\u5b83\u7684\u5e8f\u5217\u5316\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"Redis \u7684\u5e8f\u5217\u5316\u65b9\u5f0f\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"GenericToStringSerializer: \u53ef\u4ee5\u5c06\u4efb\u4f55\u5bf9\u8c61\u6cdb\u5316\u4e3a\u5b57\u7b26\u4e32\u5e76\u5e8f\u5217\u5316"),(0,a.kt)("li",{parentName:"ul"},"Jackson2JsonRedisSerializer: \u8ddfJacksonJsonRedisSerializer\u5b9e\u9645\u4e0a\u662f\u4e00\u6837\u7684"),(0,a.kt)("li",{parentName:"ul"},"JacksonJsonRedisSerializer: \u5e8f\u5217\u5316object\u5bf9\u8c61\u4e3ajson\u5b57\u7b26\u4e32"),(0,a.kt)("li",{parentName:"ul"},"JdkSerializationRedisSerializer: \u5e8f\u5217\u5316java\u5bf9\u8c61"),(0,a.kt)("li",{parentName:"ul"},"StringRedisSerializer: \u7b80\u5355\u7684\u5b57\u7b26\u4e32\u5e8f\u5217\u5316")),(0,a.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5b58\u50a8\u7684\u662fString\u7c7b\u578b\uff0c\u9ed8\u8ba4\u4f7f\u7528\u7684\u662fStringRedisSerializer \u8fd9\u79cd\u5e8f\u5217\u5316\u65b9\u5f0f\u3002\u5982\u679c\u6211\u4eec\u5b58\u50a8\u7684\u662f\u5bf9\u8c61\uff0c\u9ed8\u8ba4\u4f7f\u7528\u7684\u662f JdkSerializationRedisSerializer\uff0c\u4e5f\u5c31\u662fJdk\u7684\u5e8f\u5217\u5316\u65b9\u5f0f\uff08\u901a\u8fc7ObjectOutputStream\u548cObjectInputStream\u5b9e\u73b0\uff0c\u7f3a\u70b9\u662f\u6211\u4eec\u65e0\u6cd5\u76f4\u89c2\u770b\u5230\u5b58\u50a8\u7684\u5bf9\u8c61\u5185\u5bb9\uff09\u3002"),(0,a.kt)("p",null,"\u800c\u4e00\u822c\u6211\u4eec\u6700\u7ecf\u5e38\u4f7f\u7528\u7684\u5bf9\u8c61\u5e8f\u5217\u5316\u65b9\u5f0f\u662f\uff1a Jackson2JsonRedisSerializer\u3002"),(0,a.kt)("p",null,"Spring Data Redis \u63d0\u4f9b\u4e86\u4e24\u79cd\u6a21\u7248\u7c7b, redisTemplate \u548c stringRedisTemplate\u3002\u540e\u8005\u9488\u5bf9\u952e\u503c\u5bf9\u90fd\u662f String \u7c7b\u578b\u7684\u6570\u636e\uff0c\u524d\u8005\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\u7684\u5bf9\u8c61"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Redis \u914d\u7f6e\u7c7b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"@EnableCaching\n@Configuration\npublic class RedisConfig extends CachingConfigurerSupport {\n\n    /**\n     * RedisTemplate\n     *\n     * @param redisConnectionFactory \u7f13\u5b58\u8fde\u63a5\u5de5\u5382\n     * @return redisTemplate bean\u5b9e\u4f8b\n     */\n    @Bean\n    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {\n        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();\n        redisTemplate.setConnectionFactory(redisConnectionFactory);\n\n        // \u901a\u8fc7 Jackson \u7ec4\u4ef6\u8fdb\u884c\u5e8f\u5217\u5316\n        redisTemplate.setKeySerializer(keySerializer());\n        redisTemplate.setValueSerializer(valueSerializer());\n        redisTemplate.setHashKeySerializer(keySerializer());\n        redisTemplate.setHashValueSerializer(valueSerializer());\n\n        redisTemplate.afterPropertiesSet();\n        return redisTemplate;\n    }\n\n    /**\n     * Redis \u914d\u7f6e\u7f13\u5b58\u7ba1\u7406\u5668\n     *\n     * @param redisConnectionFactory \u7f13\u5b58\u8fde\u63a5\u5de5\u5382\n     * @return \u7f13\u5b58\u7ba1\u7406\u5668\n     */\n    @Bean\n    public RedisCacheManager redisCacheManager(RedisConnectionFactory redisConnectionFactory) {\n        RedisCacheWriter redisCacheWriter = RedisCacheWriter.nonLockingRedisCacheWriter(redisConnectionFactory);\n        // \u8bbe\u7f6eRedis\u7f13\u5b58\u6709\u6548\u671f\u4e3a1\u5929\n        RedisCacheConfiguration redisCacheConfiguration = RedisCacheConfiguration.defaultCacheConfig()\n                .serializeKeysWith(RedisSerializationContext.SerializationPair.fromSerializer(keySerializer()))\n                .serializeValuesWith(RedisSerializationContext.SerializationPair.fromSerializer(valueSerializer()))\n                .disableCachingNullValues()\n                .entryTtl(Duration.ofDays(1));\n        return new RedisCacheManager(redisCacheWriter, redisCacheConfiguration);\n    }\n\n\n    private RedisSerializer<String> keySerializer() {\n        return new StringRedisSerializer();\n    }\n\n    private RedisSerializer<Object> valueSerializer() {\n        // JSON\u5e8f\u5217\u5316\u5668\n        Jackson2JsonRedisSerializer<Object> serializer = new Jackson2JsonRedisSerializer<>(Object.class);\n        ObjectMapper objectMapper = new ObjectMapper();\n        objectMapper.setVisibility(PropertyAccessor.ALL, JsonAutoDetect.Visibility.ANY);\n\n        objectMapper.activateDefaultTyping(\n                LaissezFaireSubTypeValidator.instance,\n                ObjectMapper.DefaultTyping.NON_FINAL,\n                JsonTypeInfo.As.WRAPPER_ARRAY);\n\n        SimpleModule simpleModule = new SimpleModule();\n        simpleModule.addSerializer(Long.class, ToStringSerializer.instance);\n        simpleModule.addSerializer(Long.TYPE, ToStringSerializer.instance);\n        simpleModule.addSerializer(long.class, ToStringSerializer.instance);\n        objectMapper.registerModule(simpleModule);\n\n        serializer.setObjectMapper(objectMapper);\n        return serializer;\n    }\n\n}\n")),(0,a.kt)("h3",{id:"redis-\u5de5\u5177\u7c7b"},"Redis \u5de5\u5177\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Slf4j\n@Component\n@RequiredArgsConstructor\npublic class RedisClientUtil {\n\n    private final RedisTemplate<String, Object> redisTemplate;\n\n    private String getFormatCacheKey(String key) {\n        String keyPrefix = "app";\n        return String.format("%s:%s", keyPrefix, key);\n    }\n\n    /**\n     * \u6307\u5b9a\u7f13\u5b58\u5931\u6548\u65f6\u95f4\n     *\n     * @param key  \u952e\n     * @param time \u65f6\u95f4(\u79d2)\n     * @return \u64cd\u4f5c\u6210\u529f\u8fd4\u56detrue\uff0c\u5426\u5219\u8fd4\u56defalse\n     */\n    public boolean expire(String key, int time) {\n        try {\n            String realKey = getFormatCacheKey(key);\n\n            if (time > 0) {\n                redisTemplate.expire(realKey, time, TimeUnit.SECONDS);\n            }\n            return true;\n        } catch (Exception e) {\n            log.error("\u7f13\u5b58\u64cd\u4f5c\u5931\u8d25", e);\n            return false;\n        }\n    }\n\n    /**\n     * \u6839\u636ekey \u83b7\u53d6\u8fc7\u671f\u65f6\u95f4\n     *\n     * @param key \u952e \u4e0d\u80fd\u4e3anull\n     * @return \u65f6\u95f4(\u79d2) \u8fd4\u56de0\u4ee3\u8868\u4e3a\u6c38\u4e45\u6709\u6548\n     */\n    public Long getExpire(String key) {\n        String realKey = getFormatCacheKey(key);\n\n        return redisTemplate.getExpire(realKey, TimeUnit.SECONDS);\n    }\n\n    /**\n     * \u5224\u65adkey\u662f\u5426\u5b58\u5728\n     *\n     * @param key \u952e\n     * @return true \u5b58\u5728 false\u4e0d\u5b58\u5728\n     */\n    public boolean hasKey(String key) {\n        try {\n            String realKey = getFormatCacheKey(key);\n\n            return Boolean.TRUE.equals(redisTemplate.hasKey(realKey));\n        } catch (Exception e) {\n            log.error("\u7f13\u5b58\u64cd\u4f5c\u5931\u8d25", e);\n            return false;\n        }\n    }\n\n    /**\n     * \u666e\u901a\u7f13\u5b58\u83b7\u53d6\n     *\n     * @param key \u952e\n     * @return \u503c\n     */\n    public Object get(String key) {\n        String realKey = getFormatCacheKey(key);\n\n        return redisTemplate.opsForValue().get(realKey);\n    }\n\n    /**\n     * \u666e\u901a\u7f13\u5b58\u653e\u5165\n     *\n     * @param key   \u952e\n     * @param value \u503c\n     * @return true\u6210\u529f false\u5931\u8d25\n     */\n    public boolean set(String key, Object value) {\n        try {\n            String realKey = getFormatCacheKey(key);\n\n            redisTemplate.opsForValue().set(realKey, value);\n            return true;\n        } catch (Exception e) {\n            log.error("\u7f13\u5b58\u64cd\u4f5c\u5931\u8d25", e);\n            return false;\n        }\n    }\n\n    /**\n     * \u666e\u901a\u7f13\u5b58\u653e\u5165\u5e76\u8bbe\u7f6e\u65f6\u95f4\n     *\n     * @param key   \u952e\n     * @param value \u503c\n     * @param time  \u65f6\u95f4(\u79d2) time\u8981\u5927\u4e8e0 \u5982\u679ctime\u5c0f\u4e8e\u7b49\u4e8e0 \u5c06\u8bbe\u7f6e\u65e0\u9650\u671f\n     * @return true\u6210\u529f false \u5931\u8d25\n     */\n    public boolean set(String key, Object value, int time) {\n        try {\n            if (time > 0) {\n                String realKey = getFormatCacheKey(key);\n                redisTemplate.opsForValue().set(realKey, value, time, TimeUnit.SECONDS);\n            } else {\n                set(key, value);\n            }\n            return true;\n        } catch (Exception e) {\n            log.error("\u7f13\u5b58\u64cd\u4f5c\u5931\u8d25", e);\n            return false;\n        }\n    }\n\n    /**\n     * \u5220\u9664\u7f13\u5b58\n     *\n     * @param key \u952e\n     */\n    public void del(String key) {\n        String realKey = getFormatCacheKey(key);\n        redisTemplate.delete(realKey);\n    }\n\n    // ...\n    \n}\n')),(0,a.kt)("h2",{id:"spring-cache-\u7684\u4f7f\u7528"},"Spring Cache \u7684\u4f7f\u7528"),(0,a.kt)("p",null,"\u4f7f\u7528 Spring Cache\uff0c\u4ec5\u4ec5\u901a\u8fc7 @Cacheable\u3001@CachePut\u3001@CacheEvict\u3001@EnableCaching \u7b49\u6ce8\u89e3\u5c31\u53ef\u4ee5\u8f7b\u677e\u4f7f\u7528 Redis \u505a\u7f13\u5b58\u4e86\u3002"),(0,a.kt)("p",null,"1\uff09@EnableCaching\uff0c\u5f00\u542f\u7f13\u5b58\u529f\u80fd\u3002"),(0,a.kt)("p",null,"2\uff09@Cacheable\uff0c\u8c03\u7528\u65b9\u6cd5\u524d\uff0c\u53bb\u7f13\u5b58\u4e2d\u627e\uff0c\u627e\u5230\u5c31\u8fd4\u56de\uff0c\u627e\u4e0d\u5230\u5c31\u6267\u884c\u65b9\u6cd5\uff0c\u5e76\u5c06\u8fd4\u56de\u503c\u653e\u5230\u7f13\u5b58\u4e2d\u3002"),(0,a.kt)("p",null,"3\uff09@CachePut\uff0c\u65b9\u6cd5\u8c03\u7528\u524d\u4e0d\u4f1a\u53bb\u7f13\u5b58\u4e2d\u627e\uff0c\u65e0\u8bba\u5982\u4f55\u90fd\u4f1a\u6267\u884c\u65b9\u6cd5\uff0c\u6267\u884c\u5b8c\u5c06\u8fd4\u56de\u503c\u653e\u5230\u7f13\u5b58\u4e2d\u3002"),(0,a.kt)("p",null,"4\uff09@CacheEvict\uff0c\u6e05\u7406\u7f13\u5b58\u4e2d\u7684\u4e00\u4e2a\u6216\u591a\u4e2a\u8bb0\u5f55\u3002"),(0,a.kt)("h3",{id:"cacheable"},"@Cacheable"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"@Cacheable\u53ef\u4ee5\u6807\u8bb0\u5728\u4e00\u4e2a\u65b9\u6cd5\u4e0a\uff0c\u4e5f\u53ef\u4ee5\u6807\u8bb0\u5728\u4e00\u4e2a\u7c7b\u4e0a\u3002\u5f53\u6807\u8bb0\u5728\u4e00\u4e2a\u65b9\u6cd5\u4e0a\u65f6\u8868\u793a\u8be5\u65b9\u6cd5\u662f\u652f\u6301\u7f13\u5b58\u7684\uff0c\u5f53\u6807\u8bb0\u5728\u4e00\u4e2a\u7c7b\u4e0a\u65f6\u5219\u8868\u793a\u8be5\u7c7b\u6240\u6709\u7684\u65b9\u6cd5\u90fd\u662f\u652f\u6301\u7f13\u5b58\u7684\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"@Cacheable")," \u53ef\u4ee5\u6307\u5b9a\u4e09\u4e2a\u5c5e\u6027\uff0cvalue\u3001key \u548c unless / condition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Override\n@Cacheable(value = CACHE_KEY_EMPLOYEE, key = "#employeeId", unless = "#result == null")\npublic Optional<Employee> findByEmployeeId(String employeeId) {\n    return employeeRepository.findById(Long.parseLong(employeeId));\n}\n\n@Override\n@Cacheable(value = CACHE_KEY_EMPLOYEE, key = "#name", unless = "#result == null")\npublic Employee findByName(String name) {\n    return employeeRepository.findFirstByLastName(name);\n}\n')),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"value \uff0c\u5fc5\u987b\u6307\u5b9a\u7684\uff0c\u7f13\u5b58\u7684\u547d\u540d\u7a7a\u95f4\u3002\u540c cacheNames"),(0,a.kt)("li",{parentName:"ol"},"key \u7528\u6765\u6307\u5b9aSpring\u7f13\u5b58\u65b9\u6cd5\u7684\u8fd4\u56de\u7ed3\u679c\u65f6\u5bf9\u5e94\u7684key\u3002\u8be5\u5c5e\u6027\u652f\u6301SpringEL\u8868\u8fbe\u5f0f\u3002\u63a8\u8350\u4f7f\u7528SpringEL\u8868\u8fbe\u5f0f")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u9ed8\u8ba4key\u7684\u751f\u6210\u6309\u7167\u4ee5\u4e0b\u89c4\u5219\uff1a \u5982\u679c\u6ca1\u6709\u53c2\u6570,\u5219\u4f7f\u75280\u4f5c\u4e3akey; \u5982\u679c\u53ea\u6709\u4e00\u4e2a\u53c2\u6570\uff0c\u4f7f\u7528\u8be5\u53c2\u6570\u4f5c\u4e3akey ; \u5982\u679c\u591a\u4e2a\u53c2\u6570\uff0c\u4f7f\u7528\u5305\u542b\u6240\u6709\u53c2\u6570\u7684hashCode\u4f5c\u4e3akey")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"condition"),"\n\u6ee1\u8db3\u4e00\u5b9a\u6761\u4ef6\u624d\u7f13\u5b58\uff08\u53ef\u80fd\u4f9d\u8d56\u4e8e\u7ed9\u5b9a\u7684\u53c2\u6570\uff09\uff0c\u901a\u8fc7SpEL \u8868\u8fbe\u5f0f\u4e3atrue\u624d\u4f1a\u7f13\u5b58\uff08\u5728\u65b9\u6cd5\u6267\u884c\u4e4b\u524d\u8fdb\u884c\u8bc4\u4f30\uff0c\u6bcf\u6b21\u8c03\u7528\u8be5\u65b9\u6cd5\u65f6\u8be5\u65b9\u6cd5\u90fd\u4f1a\u6267\u884c\u4e00\u6b21\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Cacheable(value="book", condition="#name.length < 32") \npublic Book findBook(String name)\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"unless"),"\n\u51b3\u5b9a\u662f\u5426\u6dfb\u52a0\u5230\u7f13\u5b58\uff0c\u4e0econdition\u4e0d\u540c\u7684\u662f\uff0cunless\u8868\u8fbe\u5f0f\u662f\u5728\u65b9\u6cd5\u8c03\u7528\u4e4b\u540e\u8fdb\u884c\u8bc4\u4f30\u7684\u3002\u5982\u679c\u8fd4\u56defalse\uff0c\u624d\u653e\u5165\u7f13\u5b58\uff08\u4e0econdition\u76f8\u53cd\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Cacheable(cacheNames="book", unless="#result.name.length >= 32"")\npublic Book findBook(String name)\n')),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"sync\uff1a")," \u5728\u591a\u7ebf\u7a0b\u73af\u5883\u4e0b\uff0c\u67d0\u4e9b\u64cd\u4f5c\u53ef\u80fd\u4f7f\u7528\u76f8\u540c\u53c2\u6570\u540c\u6b65\u8c03\u7528\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u7f13\u5b58\u4e0d\u9501\u5b9a\u4efb\u4f55\u8d44\u6e90\uff0c\u53ef\u80fd\u5bfc\u81f4\u591a\u6b21\u8ba1\u7b97\uff0c\u800c\u8fdd\u53cd\u4e86\u7f13\u5b58\u7684\u76ee\u7684\u3002\u5bf9\u4e8e\u8fd9\u4e9b\u7279\u5b9a\u7684\u60c5\u51b5\uff0c\u5c5e\u6027 sync \u53ef\u4ee5\u6307\u793a\u5e95\u5c42\u5c06\u7f13\u5b58\u9501\u4f4f\uff0c\u4f7f\u53ea\u6709\u4e00\u4e2a\u7ebf\u7a0b\u53ef\u4ee5\u8fdb\u5165\u8ba1\u7b97\uff0c\u800c\u5176\u4ed6\u7ebf\u7a0b\u5835\u585e\uff0c\u76f4\u5230\u8fd4\u56de\u7ed3\u679c\u66f4\u65b0\u5230\u7f13\u5b58\u4e2d\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Cacheable(cacheNames="foos", sync="true") \npublic Foo executeExpensiveOperation(String id) {...}\n')),(0,a.kt)("h3",{id:"cacheput"},"@CachePut"),(0,a.kt)("p",null,"\u66f4\u65b0\u7f13\u5b58\uff0c@CachePut\u6807\u6ce8\u7684\u65b9\u6cd5\u5728\u6267\u884c\u524d\u4e0d\u4f1a\u53bb\u68c0\u67e5\u7f13\u5b58\u4e2d\u662f\u5426\u5b58\u5728\u4e4b\u524d\u6267\u884c\u8fc7\u7684\u7ed3\u679c\uff0c\u800c\u662f\u6bcf\u6b21\u90fd\u4f1a\u6267\u884c\u8be5\u65b9\u6cd5\uff0c\u5e76\u5c06\u6267\u884c\u7ed3\u679c\u4ee5\u952e\u503c\u5bf9\u7684\u5f62\u5f0f\u5b58\u5165\u6307\u5b9a\u7684\u7f13\u5b58\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Cacheable(value = CACHE_KEY_EMPLOYEE, key = "#name", unless = "#result == null")\n@Override\npublic Employee queryEmployee(String name) {\n    // ...\n    return employee;\n}\n\n@CachePut(value = CACHE_KEY_EMPLOYEE, key = "#name", unless = "#result == null")\n@Override\npublic Employee updateEmployeeByName(String name) {\n    // ...\n    return employee;\n}\n')),(0,a.kt)("h3",{id:"cacheevict"},"@CacheEvict"),(0,a.kt)("p",null,"@CacheEvict\u662f\u7528\u6765\u6807\u6ce8\u5728\u9700\u8981\u6e05\u9664\u7f13\u5b58\u5143\u7d20\u7684\u65b9\u6cd5\u6216\u7c7b\u4e0a\u7684\u3002\u5f53\u6807\u8bb0\u5728\u4e00\u4e2a\u7c7b\u4e0a\u65f6\u8868\u793a\u5176\u4e2d\u6240\u6709\u7684\u65b9\u6cd5\u7684\u6267\u884c\u90fd\u4f1a\u89e6\u53d1\u7f13\u5b58\u7684\u6e05\u9664\u64cd\u4f5c\u3002@CacheEvict\u53ef\u4ee5\u6307\u5b9a\u7684\u5c5e\u6027\u6709value\u3001key\u3001condition\u3001allEntries\u548cbeforeInvocation\u3002\u5176\u4e2dvalue\u3001key\u548ccondition\u7684\u8bed\u4e49\u4e0e@Cacheable\u5bf9\u5e94\u7684\u5c5e\u6027\u7c7b\u4f3c\u3002"),(0,a.kt)("p",null,"allEntries\u662fboolean\u7c7b\u578b\uff0c\u8868\u793a\u662f\u5426\u9700\u8981\u6e05\u9664\u7f13\u5b58\u4e2d\u7684\u6240\u6709\u5143\u7d20\u3002\u9ed8\u8ba4\u4e3afalse\uff0c\u8868\u793a\u4e0d\u9700\u8981\u3002\u5f53\u6307\u5b9a\u4e86allEntries\u4e3atrue\u65f6\uff0cSpring Cache\u5c06\u5ffd\u7565\u6307\u5b9a\u7684key\u3002\u6709\u7684\u65f6\u5019\u6211\u4eec\u9700\u8981Cache\u4e00\u4e0b\u6e05\u9664\u6240\u6709\u7684\u5143\u7d20\uff0c\u8fd9\u6bd4\u4e00\u4e2a\u4e00\u4e2a\u6e05\u9664\u5143\u7d20\u66f4\u6709\u6548\u7387\u3002"),(0,a.kt)("p",null,"\u6e05\u9664\u64cd\u4f5c\u9ed8\u8ba4\u662f\u5728\u5bf9\u5e94\u65b9\u6cd5\u6210\u529f\u6267\u884c\u4e4b\u540e\u89e6\u53d1\u7684\uff0c\u5373\u65b9\u6cd5\u5982\u679c\u56e0\u4e3a\u629b\u51fa\u5f02\u5e38\u800c\u672a\u80fd\u6210\u529f\u8fd4\u56de\u65f6\u4e5f\u4e0d\u4f1a\u89e6\u53d1\u6e05\u9664\u64cd\u4f5c\u3002\u4f7f\u7528beforeInvocation\u53ef\u4ee5\u6539\u53d8\u89e6\u53d1\u6e05\u9664\u64cd\u4f5c\u7684\u65f6\u95f4\uff0c\u5f53\u6211\u4eec\u6307\u5b9a\u8be5\u5c5e\u6027\u503c\u4e3atrue\u65f6\uff0cSpring\u4f1a\u5728\u8c03\u7528\u8be5\u65b9\u6cd5\u4e4b\u524d\u6e05\u9664\u7f13\u5b58\u4e2d\u7684\u6307\u5b9a\u5143\u7d20\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u540c\u65f6\u5220\u9664\u591a\u4e2a\u7f13\u5b58\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'@Override\n@Caching(evict = {\n        @CacheEvict(value = CACHE_KEY_EMPLOYEE, key = "#lastName", condition = "#lastName != null"),\n        @CacheEvict(value = CACHE_KEY_EMPLOYEE, key = "#employeeId", condition = "#employeeId != null")\n})\npublic void updateEmployeeName(String employeeId, String lastName) {\n    Optional<Employee> optional = this.findByEmployeeId(employeeId);\n    if (optional.isPresent()) {\n        Employee employee = optional.get();\n        employee.setLastName(lastName);\n        employeeRepository.save(employee);\n    }\n}\n')),(0,a.kt)("h3",{id:"\u51e0\u4e2a\u6ce8\u610f\u70b9"},"\u51e0\u4e2a\u6ce8\u610f\u70b9"),(0,a.kt)("h4",{id:"\u4e0eoptional\u7ed3\u5408\u4f7f\u7528"},"\u4e0eOptional\u7ed3\u5408\u4f7f\u7528"),(0,a.kt)("p",null,"\u6761\u4ef6\u4f7f\u7528 unless \uff0c\u800c\u4e0d\u662f\u4f7f\u7528 condition"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// \u7ed3\u679c\u4e0d\u4e3a\u7a7a\u65f6\u4f1a\u5b58\u5165\u7f13\u5b58\uff0c\u662f\u9884\u671f\u7684\u6548\u679c\n@Override\n@Cacheable(value = CACHE_KEY_EMPLOYEE, key = "#employeeId", unless = "#result == null")\npublic Optional<Employee> queryEmployee(Long employeeId) {\n    return employeeRepository.findById(employeeId);\n}\n\n// \u7ed3\u679c\u4e0d\u4e3a\u7a7a\u65f6\uff0c\u4e0d\u4f1a\u5b58\u5165\u7f13\u5b58\uff01\uff01\u4e0d\u662f\u9884\u671f\u7684\u6548\u679c\n@Override\n@Cacheable(value = CACHE_KEY_EMPLOYEE, key = "#employeeId", condition = "#result != null")\npublic Optional<Employee> queryEmployee(Long employeeId) {\n    return employeeRepository.findById(employeeId);\n}\n')),(0,a.kt)("h2",{id:"redis-\u8fde\u63a5\u6c60"},"Redis \u8fde\u63a5\u6c60"),(0,a.kt)("p",null,"\u4f7f\u7528Jedis\u8fde\u63a5\u6c60"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4f9d\u8d56")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.springframework.boot</groupId>\n    <artifactId>spring-boot-starter-data-redis</artifactId>\n    <exclusions>\n        <exclusion>\n            <groupId>io.lettuce</groupId>\n            <artifactId>lettuce-core</artifactId>\n        </exclusion>\n    </exclusions>\n</dependency>\n\n<dependency>\n    <groupId>redis.clients</groupId>\n    <artifactId>jedis</artifactId>\n</dependency>\n\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u914d\u7f6e")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"spring:\n    redis:\n        jedis:\n          pool:\n            max-active: 8 # \u8fde\u63a5\u6c60\u6700\u5927\u8fde\u63a5\u6570\n            max-idle: 8 # \u8fde\u63a5\u6c60\u6700\u5927\u7a7a\u95f2\u8fde\u63a5\u6570\n            min-idle: 0 # \u8fde\u63a5\u6c60\u6700\u5c0f\u7a7a\u95f2\u8fde\u63a5\u6570\n            max-wait: -1ms # \u8fde\u63a5\u6c60\u6700\u5927\u963b\u585e\u7b49\u5f85\u65f6\u95f4\uff0c\u8d1f\u503c\u8868\u793a\u6ca1\u6709\u9650\u5236\n")),(0,a.kt)("h2",{id:"redis-\u5176\u4ed6\u4f7f\u7528\u573a\u666f"},"Redis \u5176\u4ed6\u4f7f\u7528\u573a\u666f"),(0,a.kt)("h3",{id:"\u5206\u5e03\u5f0f\u9501"},"\u5206\u5e03\u5f0f\u9501"),(0,a.kt)("p",null,"// TODO"),(0,a.kt)("h3",{id:"\u9650\u6d41\u5668"},"\u9650\u6d41\u5668"),(0,a.kt)("p",null,"// TODO"),(0,a.kt)("p",null,"\u53c2\u8003\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"SpringBoot\u96c6\u6210Redis - \u57fa\u4e8eRedisTemplate+Lettuce\u6570\u636e\u64cd\u4f5c\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://www.pdai.tech/md/spring/springboot/springboot-x-redis-lettuce.html"},"https://www.pdai.tech/md/spring/springboot/springboot-x-redis-lettuce.html")),(0,a.kt)("li",{parentName:"ul"},"SpringBoot\u96c6\u6210Redis\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7076244567569203208"},"https://juejin.cn/post/7076244567569203208")),(0,a.kt)("li",{parentName:"ul"},"Java\u7a0b\u5e8f\u5458\u8fdb\u9636\u4e4b\u8def\uff1a",(0,a.kt)("a",{parentName:"li",href:"https://tobebetterjavaer.com/redis/redis-springboot.html"},"https://tobebetterjavaer.com/redis/redis-springboot.html"))))}d.isMDXComponent=!0}}]);
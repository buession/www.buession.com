# buession-redis 参考手册


Redis 操作类，基于 jedis 实现，RedisTemplate 方法名、参数几乎同 redis 原生命令保持一致。同时，对对象读写 redis 进行了扩展，支持二进制、json方式序列化和反序列化，例如：通过 RedisTemplate.getObject(“key”, Class) 可以将 redis 中的数据读取出来后，直接反序列化成一个对象。


---


### **安装**

```xml
<dependency>
    <groupId>com.buession</groupId>
    <artifactId>buession-redis</artifactId>
    <version>x.x.x</version>
</dependency>
```


### **介绍**

`buession-redis` 是一款基于 jedis 的 redis 操作库，最大的优势就是封装了与 redis 同名、最大程度与 redis 原生参数顺序一致的 API。同时，我们在现代应用中，经常需要读写一个 pojo 对象，`buession-redis` 封装了 `xxxObject` 读取 redis 中的二进制或 JSON 数据，并反序列化为 POJO 类。


### **展望**

目前，`buession-redis` 仅支持 jedis，不支持 lettuce，我们预计会在下个版本或者下下个版本（即：2.1 或者 2.2）中计划加入。其实，之前尝试过，但由于两者 API 差异性和使用方式太大，没法很好的做到统一化，就暂时放弃了。


## [API 参考手册>>](/manual/2.0/docs/buession-redis/)
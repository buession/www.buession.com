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
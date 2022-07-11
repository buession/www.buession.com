# buession-redis 参考手册


## 数据源

`buession-redis` 基于数据源 `DataSource` 连接 redis，其机制类似 JDBC 的 DataSource。
通过，数据源可以配置，redis 的用户名、密码、连接超时、读取超时、连接池、SSL等等。

数据源 `DataSource` 包括三个子接口：

* StandaloneDataSource：单机模式数据源
* SentinelDataSource：哨兵模式数据源
* ClusterDataSource：集群模式数据源

jedis 和后续的 lettuce 分别实现这三个接口，用于创建不通模式的数据源，数据源中实现了连接池的创建。

在原始的 jedis 或者 spring-data-redis 中，密码为空字符串时，会以空字符串密码进行登录 redis；我们修改了这一逻辑，不管您在程序中密码是设置的 null 还是空字符串，我们都会跳过认证。这样的好处就是，假设您的开发环境 redis 没有设置密码，生产环境设置了密码，我们可以通过一个 bean 初始化即可，不用写成两个 bean。

```xml
<bean id="redisDataSource" class="com.buession.redis.client.connection.datasource.jedis.UserMapper"
	p:host="${redis.host}"
	p:port="${redis.port}"
	p:password="${redis.password}" />
```

测试环境 properties：

```properties
redis.host=127.0.0.1
redis.port=6379
redis.password=
```

生产环境 properties：

```properties
redis.host=192.168.100.131
redis.port=6379
redis.password=passwd
```


## [API 参考手册>>](/manual/2.0/docs/buession-redis/com/buession/redis/client/connection/datasource/package-summary.html)
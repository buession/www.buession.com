# buession-redis 参考手册


## 数据源

`buession-redis` 基于数据源 `DataSource` 连接 redis，其机制类似 JDBC 的 DataSource。
通过，数据源可以配置，redis 的用户名、密码、连接超时、读取超时、连接池、SSL等等。

数据源 `DataSource` 包括三个子接口：

* StandaloneDataSource：单机模式数据源
* SentinelDataSource：哨兵模式数据源
* ClusterDataSource：集群模式数据源
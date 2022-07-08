# buession-dao 参考手册


对 mybatis、spring-data-mongo 常用方法（如：根据条件获取单条记录、根据主键获取单条记录、分页、根据条件删除数据、根据主键删除数据）进行了二次封装。从代码层面实现了数据库的读写分离，insert、update、delete 操作主库，select 操作从库。


---

我们咋众多项目中，基本有常见的重复的对数据库的 CURD 操作，比如：根据主键查询数据、根据主键删除数据、获取一条记录。MyBatis 是一款优秀的持久层框架，应用广泛。MongoDB 是一款优秀的文档数据库。我自己根据从业多年的经验，从实际场合出发，将在业务层对数据库的常用操作进行了封装。对关系型数据库基于 MyBatis 二次封装，对 MongoDB 基于 spring-data-mongodb；在未来也许会考虑，增加 jpa 和 JdbcTemplate 对关系型数据库的二次封装。

同时，我们在代码层面实现了数据库的读写分离。

接口定义，可见：[https://www.buession.com/manual/2.0/docs/buession-dao/com/buession/dao/Dao.html](/manual/2.0/docs/buession-dao/com/buession/dao/Dao.html)


### **读写分离**

要从代码层面实现读写分离，必须继承 `AbstractMyBatisDao` 或者 `AbstractMongoDBDao`；且存在 bean 名为 `masterSqlSessionTemplate`、`slaveSqlSessionTemplates` 或者名为 `masterMongoTemplate`、`slaveMongoTemplates` 的 bean 实例。masterXXX 操作主库，实现插入、更新、删除操作；slaveXXX 操作从库，实现查询操作。默认查询操作，会通过方法 `getSlaveSqlSessionTemplate()`、`getSlaveMongoTemplate()` 在所有的 slave templates 中随机返回一个，Template bean 实例。当然，您也可以通过 `getSlaveSqlSessionTemplate(final int index)`、`getSlaveMongoTemplate(final int index)` 指定索引的 Template bean 实例（当然，我们不建议您这么做）。如果没有指定 slave Template bean 实例列表，将会返回 master Template bean 实例，buession framework 屏蔽了这些技术细节。


## [API 参考手册>>](/manual/2.0/docs/buession-dao/)
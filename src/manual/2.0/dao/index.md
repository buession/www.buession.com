# buession-dao 参考手册


对 mybatis、spring-data-mongo 常用方法（如：根据条件获取单条记录、根据主键获取单条记录、分页、根据条件删除数据、根据主键删除数据）进行了二次封装。从代码层面实现了数据库的读写分离，insert、update、delete 操作主库，select 操作从库。


---

我们咋众多项目中，基本有常见的重复的对数据库的 CURD 操作，比如：根据主键查询数据、根据主键删除数据、获取一条记录。MyBatis 是一款优秀的持久层框架，应用广泛。MongoDB 是一款优秀的文档数据库。我自己根据从业多年的经验，从实际场合出发，将在业务层对数据库的常用操作进行了封装。对关系型数据库基于 MyBatis 二次封装，对 MongoDB 基于 spring-data-mongodb；在未来也许会考虑，增加 jpa 和 JdbcTemplate 对关系型数据库的二次封装。

同时，我们在代码层面实现了数据库的读写分离。

接口定义，可见：[https://www.buession.com/manual/2.0/docs/buession-dao/com/buession/dao/Dao.html](/manual/2.0/docs/buession-dao/com/buession/dao/Dao.html)


## [API 参考手册>>](/manual/2.0/docs/buession-dao/)
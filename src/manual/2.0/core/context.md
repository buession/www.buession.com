# buession-core 参考手册


## 上下文

注解 `com.buession.core.context.stereotype.Manager` 用于在分层应用中，标记当前类是一个 manager 类。类似于 `org.springframework.stereotype.Service` 加上该注解会将当前类自动注入到 spring 容器中，用法和 `@Service` 一样。

在多层应用架构中 Manager 层通常为：通用业务处理层，处于 Dao 层之上，Service 层之下。主要特征如下：
* 逻辑少
* 与 Dao 层进行交互，多个 Dao 层的复用
* Service 通用底层逻辑的下沉，如：缓存方案、中间件通用处理、以及对第三方平台封装的层
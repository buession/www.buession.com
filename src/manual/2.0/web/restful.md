# buession-web 参考手册


## RESTFUL


`Restful` 是当今比较流行的一种架构的规范与约束、原则，基于这个风格设计的软件可以更简洁、更有层次。

我们遵循 REST 规范，在代码层面规范好了新增、修改、详情、删除等基本的路由，您的控制器层只需要继承 `com.buession.web.servlet.mvc.controller.AbstractBasicRestController` 或者 `com.buession.web.reactive.mvc.controller.AbstractBasicRestController` 即可在 servlet 或 webflux 模式下，实现标准的 REST 风格的代码。简化了您的代码（主要是不用再写 @RequestMapping）和标准化了。
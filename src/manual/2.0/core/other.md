# buession-core 参考手册


## 其它


通用的接口定义，框架自身类，以及其它杂项。


获取 Buession Framework 版本：

```java
import com.buession.core.Framework;
import com.buession.core.BuesssionFrameworkVersion;

BuesssionFrameworkVersion.getVersion(); // 2.0.0
Framework.VERSION; // 2.0.0
```

获取 Buession Framework 框架名称：

```java
import com.buession.core.Framework;

Framework.NAME; // "Buession"
```

命令执行器接口：

```java
/**
 * 命令执行器
 *
 * @param <C>
 * 		命令上下文
 * @param <R>
 * 		命令执行返回值
 */
@FunctionalInterface
public interface Executor<C, R> {

	/**
	 * 命令执行
	 *
	 * @param context
	 * 		命令执行器上下文
	 *
	 * @return R 对象实例
	 */
	R execute(C context);

}
```

销毁接口：

```java
public interface Destroyable {

	/**
	 * 销毁相关资源
	 *
	 * @throws IOException
	 * 		IO 错误时抛出
	 */
	void destroy() throws IOException;

}
```

Rawable

```java
public interface Rawable {

	/**
	 * 返回原始的字节数组
	 *
	 * @return 原始的字节数组
	 */
	byte[] getRaw();

}
```

名称节点

```java
public interface NamedNode {

	/**
	 * 返回节点名称
	 *
	 * @return 节点名称
	 */
	@Nullable
	String getName();

}
```

分页

```java
public interface NamedNode {

	/**
	 * 返回节点名称
	 *
	 * @return 节点名称
	 */
	@Nullable
	String getName();

}
```
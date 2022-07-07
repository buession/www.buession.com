# buession-core 参考手册


## 构建器


数据转化器，基于 mapstruct 的 POJO 类映射接口定义。定义了常用的数据转化器。

接口定义：

```java
@FunctionalInterface
public interface Converter<S, T> {

	T convert(final S source);

}
```

将类似为 S 的对象转换为类型为 T 的对象。


### **内置转换器**


|  转换器   | 说明  |
|  ----  | ----  |
| ArrayConverter<S, T>  | 将 S 类型的数组转换为 T 类型的数组 |
| EnumConverter<E extends Enum<E>>  | 枚举转换器，将字符串转换为枚举 E |
| BinaryEnumConverter<E extends Enum<E>>  | 枚举转换器，将 byte 数组转换为枚举 E |
| BooleanStatusConverter  | 将布尔值转换为 `com.buession.lang.Status` |
| StatusBooleanConverter  | 将 `com.buession.lang.Status` 转换为布尔值 |
| PredicateStatusConverter<T>  | 通过 `java.util.function.Predicate` 对某种数据类型的数据进行判断结果转换为 `com.buession.lang.Status` |
| ListConverter<S, T>  | 将 S 类型的 List 对象转换为 T 类型的 List 对象 |
| SetConverter<S, T>  | 将 S 类型的 Set 对象转换为 T 类型的 Set 对象 |
| MapConverter<SK, SV, TK, TV>  | 将 Key 为 SK 类型、值为 SV 类型的 Map 对象转换为 Key 为 TK 类型、值为 TV 类型的 Map |
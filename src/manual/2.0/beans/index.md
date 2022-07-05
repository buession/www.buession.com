# buession-beans 参考手册


该类库提供了基于 commons-beanutils 和 cglib 的 bean 工具的二次封装。包括了属性拷贝和属性映射，以及对象属性转换为 Map。


---


### **属性拷贝**

使用此方法，可以实现两个对象之间的属性拷贝，该方式基于 BeanCopier 实现属性的拷贝。如果 source 对象是 Map 接口的实现，则会将 Map 的 key 和 target 的属性做映射，实现同名拷贝。

```java
BeanUtils.copyProperties(target, source)
```

* 注：该方式只会对同类型的属性进行拷贝。即假设，source 中有数据类型为 int 名称为 id 的属性，target 中有数据类型为 long 名称为 id 的属性，是不会将 source 属性 id 的值拷贝到 target 的 id 属性上。
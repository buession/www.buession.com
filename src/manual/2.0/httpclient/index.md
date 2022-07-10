# buession-httpclient 参考手册


对 `apache httpcomponents`、`okhttp3` 进行封装，屏蔽了 apache httpcomponents 和 okhttp3 的不同技术细节，屏蔽了对 post form、post json 等等的技术细节。


---


### **安装**

```xml
<dependency>
    <groupId>com.buession</groupId>
    <artifactId>buession-httpclient</artifactId>
    <version>x.x.x</version>
</dependency>
```

我们在应用中使用 Http Client 功能时，经常因为从 `apache httpcomponents` 切换为 `okhttp3`，或者从 `okhttp3` 切换为 `apache httpcomponents`，需要改动大量的代码而烦恼。而当您使用了 `buession-httpclient` 时，该类库为您解决了这些烦恼，通过顶层设计，屏蔽了 `apache httpcomponents` 和 `okhttp3` 的细节，当您需要从一个 http 库更换为另外一个 http 库时，您只需要在 pom.xml 中引用不同的包，修改一下 httpclient 的初始化类即可。
# buession-httpclient 参考手册


对 apache httpcomponents、okhttp3 进行封装，屏蔽了 apache httpcomponents 和 okhttp3 的不同技术细节，屏蔽了对 post form、post json 等等的技术细节。


---


### **安装**

```xml
<dependency>
    <groupId>com.buession</groupId>
    <artifactId>buession-httpclient</artifactId>
    <version>x.x.x</version>
</dependency>
```

我们在应用中使用 Http Client 功能时，经常因为从 `apache httpcomponents` 切换为 `okhttp`，或者从 `okhttp` 切换为 `apache httpcomponents`，需要改动大量的代码而烦恼。
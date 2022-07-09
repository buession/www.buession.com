# buession-geoip 参考手册


对 com.maxmind.geoip2:geoip2 进行二次封装，实现支持根据 IP 地址获取所属 ISP、所属国家、所属城市等等信息。


---


### **安装**

```xml
<dependency>
    <groupId>com.buession</groupId>
    <artifactId>buession-geoip</artifactId>
    <version>x.x.x</version>
</dependency>
```

通常我们在应用中对用户注册、登录、以及其它操作记录 IP，我们更希望知道用户在什么城市进行的操作，如：微信公众号的内容发表于、微博的发布于等等，对于用户行为的安全审计等等有着极高的作用。

`geoip` 在基于 `maxmind geoip2` 的基础上进行了二次封装，可以根据 IP（字符串形式的 IP，如：114.114.114.114、2001:0DB8:0000:0023:0008:0800:200C:417A ，IPV4 的数字表示：3739974408，java `InetAddress`）获取其 IP 地址的国家信息、城市信息、位置信息。


### **获取国家信息**

```java
import com.buession.geoip.model.Country;
import com.buession.geoip.model.DatabaseResolver;

DatabaseResolver resolver = new DatabaseResolver(DatabaseResolver.class.getResourceAsStream("/maxmind/City.mmdb"));
Country country = resolver.country("114.114.114.114");
// Country{geoNameId=1814991, confidence=null, code='CN', originalName='China', name='中国', fullName='中华人民共和国', isInEuropeanUnion=false}
```
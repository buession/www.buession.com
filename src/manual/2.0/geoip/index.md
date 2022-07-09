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
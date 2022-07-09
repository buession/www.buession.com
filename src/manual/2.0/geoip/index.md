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

Country country = resolver.country(3739974408L); // 3739974408L => 222.235.123.8
// Country{geoNameId=1835841, confidence=null, code='KR', originalName='Republic of Korea', name='大韩民国', fullName='大韩民国', isInEuropeanUnion=false}
```


### **获取城市信息**

```java
import com.buession.geoip.model.Country;
import com.buession.geoip.model.DatabaseResolver;

DatabaseResolver resolver = new DatabaseResolver(DatabaseResolver.class.getResourceAsStream("/maxmind/City.mmdb"));
District district = resolver.district("114.114.114.114");
// District{geoNameId=1799962, code=null, originalName='Nanjing', name='南京', fullName='江苏省南京', postal=Postal{code='null', confidence=null}, parent=District{geoNameId=1806260, code=null, originalName='Jiangsu', name='江苏省', fullName='江苏省江苏省', postal=null, parent=District{geoNameId=1806260, code=null, originalName='Jiangsu', name='江苏省', fullName='江苏省', postal=null, parent=null}}}

District district = resolver.district(3739974408L); // 3739974408L => 222.235.123.8
// District{geoNameId=1835848, code=null, originalName='Seoul', name='首尔特别市', fullName='首尔特别市首尔特别市', postal=Postal{code='null', confidence=null}, parent=District{geoNameId=1835847, code=null, originalName='Seoul', name='首尔特别市', fullName='首尔特别市首尔特别市', postal=null, parent=District{geoNameId=1835847, code=null, originalName='Seoul', name='首尔特别市', fullName='首尔特别市', postal=null, parent=null}}}
```


### **获取位置信息**

```java
import com.buession.geoip.model.Country;
import com.buession.geoip.model.DatabaseResolver;

DatabaseResolver resolver = new DatabaseResolver(DatabaseResolver.class.getResourceAsStream("/maxmind/City.mmdb"));
Location location = resolver.location("114.114.114.114");
// Location{continent=Continent{geoNameId=6255147, code='AS', originalName='Asia', name='亚洲'}, country=Country{geoNameId=1814991, confidence=null, code='CN', originalName='China', name='中国', fullName='中华人民共和国', isInEuropeanUnion=false}, district=District{geoNameId=1799962, code=null, originalName='Nanjing', name='南京', fullName='江苏省南京', postal=Postal{code='null', confidence=null}, parent=District{geoNameId=1806260, code=null, originalName='Jiangsu', name='江苏省', fullName='江苏省江苏省', postal=null, parent=District{geoNameId=1806260, code=null, originalName='Jiangsu', name='江苏省', fullName='江苏省', postal=null, parent=null}}}, traits=Traits{ipAddress='114.114.114.114', domain='null', isp='null', network=114.114.0.0/16, connectionType=null, organization=null, autonomousSystemOrganization=null, autonomousSystemNumber=null, isAnonymous=false, isAnonymousProxy=false, isAnonymousVpn=false, isHostingProvider=false, isLegitimateProxy=false, isPublicProxy=false, isSatelliteProvider=false, isTorExitNode=false, userType='false', userCount=null, staticIpScore=null}, geo=Geo{latitude=32.0617, longitude=118.7778, accuracyRadius=50}, timeZone=sun.util.calendar.ZoneInfo[id="Asia/Shanghai",offset=28800000,dstSavings=0,useDaylight=false,transitions=31,lastRule=null]}

Location location = resolver.location(3739974408L); // 3739974408L => 222.235.123.8
// Location{continent=Continent{geoNameId=6255147, code='AS', originalName='Asia', name='亚洲'}, country=Country{geoNameId=1835841, confidence=null, code='KR', originalName='Republic of Korea', name='大韩民国', fullName='大韩民国', isInEuropeanUnion=false}, district=District{geoNameId=1835848, code=null, originalName='Seoul', name='首尔特别市', fullName='首尔特别市首尔特别市', postal=Postal{code='null', confidence=null}, parent=District{geoNameId=1835847, code=null, originalName='Seoul', name='首尔特别市', fullName='首尔特别市首尔特别市', postal=null, parent=District{geoNameId=1835847, code=null, originalName='Seoul', name='首尔特别市', fullName='首尔特别市', postal=null, parent=null}}}, traits=Traits{ipAddress='222.235.123.8', domain='null', isp='null', network=222.235.120.0/21, connectionType=null, organization=null, autonomousSystemOrganization=null, autonomousSystemNumber=null, isAnonymous=false, isAnonymousProxy=false, isAnonymousVpn=false, isHostingProvider=false, isLegitimateProxy=false, isPublicProxy=false, isSatelliteProvider=false, isTorExitNode=false, userType='false', userCount=null, staticIpScore=null}, geo=Geo{latitude=37.5111, longitude=126.9743, accuracyRadius=200}, timeZone=sun.util.calendar.ZoneInfo[id="Asia/Seoul",offset=32400000,dstSavings=0,useDaylight=false,transitions=30,lastRule=null]}
```


## [API 参考手册>>](/manual/2.0/docs/buession-geoip/)
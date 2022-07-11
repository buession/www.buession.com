# buession-httpclient 参考手册


## 方法


`buession-httpclient` 提供了和 HTTP 请求方式同名的方法 API，您可以很方便的通过提供的方法发起 HTTP 请求。


#### **示例：**

```java
import com.buession.httpclient.HttpClient;
import com.buession.httpclient.core.Response;

// GET 请求
Response response = httpClient.get("https://www.buession.com/");

// POST 请求
Response response = httpClient.post("https://www.buession.com/");

// HEAD 请求
Response response = httpClient.head("https://www.buession.com/");
```
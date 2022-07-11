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

您可以自定义请求头：

```java
import com.buession.httpclient.HttpClient;
import com.buession.httpclient.core.Response;
import com.buession.httpclient.core.Header;
import java.util.List;
import java.util.ArrayList;

List<Header> headers = new ArrayList<>();

headers.add(new Header("X-SDK-NAME", "Buession"));
headers.add(new Header("X-Timestamp", System.currentTimeMillis()));

// GET 请求
Response response = httpClient.get("https://www.buession.com/", headers);

// POST 请求
Response response = httpClient.post("https://www.buession.com/", headers);

// HEAD 请求
Response response = httpClient.head("https://www.buession.com/", headers);
```

您可以设置请求参数：

```java
import com.buession.httpclient.HttpClient;
import com.buession.httpclient.core.Response;
import com.buession.httpclient.core.Header;
import java.util.Map;
import java.util.HashMap;

Map<String, Object> parameters = new HashMap<>();

parameters.put("action", "edit");
parameters.put("id", 1);

// GET 请求
Response response = httpClient.get("https://www.buession.com/", parameters);

// POST 请求
Response response = httpClient.post("https://www.buession.com/", parameters);

// HEAD 请求
Response response = httpClient.head("https://www.buession.com/", parameters);
```

您可以设置请求体：

```java
import com.buession.httpclient.HttpClient;
import com.buession.httpclient.core.Response;
import com.buession.httpclient.core.Header;
import jcom.buession.httpclient.core.RequestBody;
import jcom.buession.httpclient.core.EncodedFormRequestBody;
import jcom.buession.httpclient.core.EncodedFormRequestBody;

EncodedFormRequestBody requestBody = new EncodedFormRequestBody();

requestBody.addRequestBodyElement("username", "buession");
requestBody.addRequestBodyElement("password", "buession");

// POST 请求
Response response = httpClient.post("https://www.buession.com/", requestBody);

JsonRawRequestBody requestBody = new JsonRawRequestBody(new User());
// PUT 请求
Response response = httpClient.put("https://www.buession.com/", requestBody);
```
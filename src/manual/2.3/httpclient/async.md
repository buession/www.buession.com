# buession-httpclient 参考手册


## 方法


`buession-httpclient` 实现了异步 HTTP 请求。


#### 示例：

```java
import com.buession.httpclient.HttpAsyncClient;
import com.buession.httpclient.core.Response;
import com.buession.httpclient.core.concurrent.Callback;
import com.buession.httpclient.exception.RequestException;

ApacheHttpAsyncClient httpClient = new ApacheHttpAsyncClient();

httpClient.get("https://www.baidu.com", new Callback() {

	@Override
	public void completed(Response response){
		for(Header header : response.getHeaders()){
			System.out.println(header.toString());
		}
	}

	@Override
	public void failed(Exception ex){
		System.out.println("failed");
	}

	@Override
	public void cancelled(){
		System.out.println("cancelled");
	}

});
```


### [API 参考手册>>](https://javadoc.io/static/com.buession/buession-httpclient/2.3.0/com/buession/httpclient/HttpAsyncClient.html)
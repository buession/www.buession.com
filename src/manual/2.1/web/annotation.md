# buession-web 参考手册


## 注解


我们通过注解的形式封装了一些我们在日常应用开发过程中能用到的实用性功能，简化了您在代码开发中的便捷度，让您能够更专注业务的开发。


### 注解

|  注解               | Request / Response   | 作用域             | 说明                                                    |
|  ----              | ----                  | ----              | ----                                                   |
| @RequestClientIp   | request               | 方法参数           | 获取当前请求的客户端 IP 地址，支持返回字符串、long 类型的 IP 地址，以及 `InetAddress`                       |
| @ContentType       | response              | 类、方法           | 设置响应 Content-Type                                   |
| @HttpCache         | response              | 类、方法           | 设置响应缓存头 Cache-Control、Expires、Pragma 值           |
| @DisableHttpCache  | response              | 类、方法           | 设置响应缓存头 Cache-Control、Expires、Pragma 值，禁止缓存  |
| @ResponseHeader    | response              | 类、方法           | 设置响应头                                                |
| @ResponseHeaders   | response              | 类、方法           | 批量设置响应头                                            |
| @DocumentMetaData  | response              | 类、方法           | 设置页面标题、页面编码、关键字、描述、版权等等元信息            |


#### 获取用户端真实 IP

```java
@Controller
@RequestMapping(path = "/test")
public class TestController {

	@RequestMapping(path = "/ip1")
	@ResponseBody
	public String ip1(@RequestClientIp String ip, ServerHttpResponse response){
		return ip;
	}

	@RequestMapping(path = "/ip2")
	@ResponseBody
	public Long ip2(@RequestClientIp long ip, ServerHttpResponse response){
		return ip;
	}

	@RequestMapping(path = "/ip3")
	@ResponseBody
	public InetAddress ip3(@RequestClientIp InetAddress ip, ServerHttpResponse response){
		return ip;
	}

}
```

您也可以指定获取用户真实 IP 的请求头列表

```java
@Controller
@RequestMapping(path = "/test")
public class TestController {

	@RequestMapping(path = "/ip1")
	@ResponseBody
	public String ip1(@RequestClientIp(headerName = {"X-Real-Ip", "X-User-Real-Ip"}) String ip, ServerHttpResponse response){
		return ip;
	}

	@RequestMapping(path = "/ip2")
	@ResponseBody
	public Long ip2(@RequestClientIp(headerName = {"X-Real-Ip", "X-User-Real-Ip"}) long ip, ServerHttpResponse response){
		return ip;
	}

	@RequestMapping(path = "/ip3")
	@ResponseBody
	public InetAddress ip3(@RequestClientIp(headerName = {"X-Real-Ip", "X-User-Real-Ip"}) InetAddress ip, ServerHttpResponse response){
		return ip;
	}

}
```
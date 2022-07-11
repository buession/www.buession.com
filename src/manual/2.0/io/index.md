# buession-io 参考手册


封装了对文件的操作


---


### **安装**

```xml
<dependency>
    <groupId>com.buession</groupId>
    <artifactId>buession-io</artifactId>
    <version>x.x.x</version>
</dependency>
```


该模块二次封装了 java `java.io.File` 和 `java.nio.file.Files` 类，在此基础上扩展了大量的实用方法，如：文件读写、获取文件 MD5 和 SHA1 值，获取文件 MIME，设置文件所属用户和用户组，简化了我们在应用开发过程中对文件的操作。


### **读取文件**

```java
import com.buession.io.file.File;

File file = new File("/tmp/debug.txt");

byte[] result = file.read();
```


### **写文件**

```java
import com.buession.io.file.File;

File file = new File("/tmp/debug.txt");

file.write("Buession");
file.write("Buession".getBytes());
file.write("Buession", true); // 追加写
```


### **获取文件 MD5、SHA-1值**

```java
import com.buession.io.file.File;

File file = new File("/tmp/debug.txt");

String md5 = file.getMd5(); // 获取文件 MD5
String sha1 = file.getSha1(); // 获取文件 SHA-1
```


### **获取文件 MD5、SHA-1值**

```java
import com.buession.io.file.File;
import com.buession.io.MimeType;

File file = new File("/tmp/debug.txt");

MimeType result = file.getMimeType();
```


## [API 参考手册>>](/manual/2.0/docs/buession-io/)
# buession-httpclient 参考手册


## 连接配置


您可以通过连接配置类 `Configuration` 配置 `apache httpcomponents` 和 `okhttp3` 的链接配置属性，`buession-httpclient` 内部会自动将 `Configuration` 的配置信息，转换为 `apache httpcomponents` 或 `okhttp3` 的配置信息。
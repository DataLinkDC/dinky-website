---
sidebar_position: 12
id: faq
title: FAQ
---

1.Flink on Yarn HA高可用,配置hdfs依赖,无法识别HDFS高可用访问地址别名，在Perjob和application模式，提交任务，出现异常信息

![HDFS集群别名](http://www.aiwenmo.com/dinky/dev/docs/HDFS%E9%9B%86%E7%BE%A4%E5%88%AB%E5%90%8D.png)

**解决办法：**

- 方案一

升级 Dinky 至 0.6.2 及后续版本。
详见：[https://github.com/DataLinkDC/dlink/issues/310](https://github.com/DataLinkDC/dlink/issues/310)
- 方案二

添加HADOOP_HOME环境变量，修改 /etc/profile
``` shell
export HADOOP_HOME=/opt/cloudera/parcels/CDH/lib/hadoop
```

- 方案三

auto.sh 里加一行
``` shell
export HADOOP_HOME=/opt/cloudera/parcels/CDH/lib/hadoop
```

2.出现 commons-cli 异常报错，需要在如下路径放入 commons-cli 依赖

**解决办法：**

下载common-cli包，需要在如下路径放置：
- Flink 的 lib
- dinky 的 plugins
- HDFS 的 /flink/lib/

3.依赖冲突

![dependency_conflict](http://www.aiwenmo.com/dinky/docs/zh-CN/faq/dependency_conflict.png)

**解决办法：**

如果添加 flink-shade-hadoop-uber-3 包后，请手动删除该包内部的javax.servlet 等冲突内容

4.连接hive异常

``` java
Caused by: java.lang.ClassNotFoundException: org.apache.http.client.HttpClient
```

![hive_http_error](http://www.aiwenmo.com/dinky/docs/zh-CN/faq/hive_http_error.png)

**解决办法:** 

在plugins下添加以下包
- httpclient-4.5.3.jar
- httpcore-4.4.6.jar

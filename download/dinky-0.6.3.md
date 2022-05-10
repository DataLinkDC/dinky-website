---
sidebar_position: 2
title: 0.6.3 release
---



| 版本    | 二进制程序                                                                                                                | Source                                                                               |
|-------|----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| 0.6.3 | [dlink-release-0.6.3.tar.gz](https://github.com/DataLinkDC/dlink/releases/download/0.6.3/dlink-release-0.6.3.tar.gz) | [Source code (zip)](https://github.com/DataLinkDC/dlink/archive/refs/tags/0.6.3.zip) |


## Dinky发行说明

Dinky 0.6.3 是一个新增功能和修复的版本。

### 新功能

- 新增 CDCSource 同步至 Kafka
- 新增 CDCSource 同步至 Doris
- 新增  CDCSource 同步至 Hudi
- 新增 CDCSource 同步添加 sink 表名规则
- 新增 CDCSource 同步至 SQL
- 新增 在 Flink1.13中，CDCSource 字段类型转换
- 新增 CDCSource 同步添加 sink 表名正则
- 新增 MysqlCDCSource 同步扩展配置
- 新增 CDCSOURCE 添加 pkList
- 新增 Flink 客户端1.15


 ### 修复

- 修复 任务停止时的任务状态错误
- 修复 Oracle 不支持的字符集
- 修复 Clickhouse 元数据不显示
- 修复 元数据切换错误
- 修复 将 sqlSeparator 的默认值修改为’; r n | ; n’
- 修复 useBatchModel 参数使用纱线-app 模式批量执行
- 修复 修改作业名的 bug
- 修复 mysqldc 整个数据库同步 Hudi 错误
- 修复 作业计划信息被执行了两次
- 修复 在同一台机器上部署更多实例时的启动和停止冲突
- 修复 auto.sh lf 并禁用环境变量


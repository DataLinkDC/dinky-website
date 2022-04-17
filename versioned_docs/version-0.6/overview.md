---
sidebar_position: 5
id: overview
title: Dinky 概览
---


## 概述

Dinky 作为 [Apache Flink](https://github.com/apache/flink) 的 FlinkSQL 的实时计算平台，具有以下核心特点。

- **支持 Flink 原生语法、连接器、UDF 等：** 几乎零成本将 Flink 作业迁移至 Dinky。
- **增强 FlinkSQL 语法：** 表值聚合函数、全局变量、CDC多源合并、执行环境、语句合并、共享会话等。
- **支持 Flink 多版本：** 支持作为多版本 FlinkSQL Server 的能力以及 OpenApi。
- **支持外部数据源的 DB SQL 操作：** 如 ClickHouse、Doris、Hive、Mysql、Oracle、Phoenix、PostgreSql、SqlServer 等。
- **支持实时任务运维：** 作业上线下线、作业信息、集群信息、作业快照、异常信息、作业日志、数据地图、即席查询、历史版本、报警记录等。

## 支持上下游系统

### FlinkSQL Connector

Flink SQL 支持丰富的 Connector，实时计算平台支持支持 Flink 1.11、Flink 1.12、Flink 1.13 和 Flink 1.14 四个版本，对应的版本支持所有开源的上下游存储详见具体Connector信息，请参见Flink开源社区：

- [Flink1.11](https://nightlies.apache.org/flink/flink-docs-release-1.11/dev/table/connectors/)
- [Flink1.12](https://nightlies.apache.org/flink/flink-docs-release-1.12/dev/table/connectors/)
- [Flink1.13](https://nightlies.apache.org/flink/flink-docs-release-1.13/docs/connectors/table/overview/)
- [Flink1.14](https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/connectors/table/overview/)

另外非 Flink 官网支持的 Connector 详见 github：

- [Flink-CDC](https://github.com/ververica/flink-cdc-connectors/releases/)
- [Hudi](https://github.com/apache/hudi/releases)
- [Iceberg](https://github.com/apache/iceberg/releases)
- [Doris](https://github.com/apache/incubator-doris-flink-connector/tags)
- [Starrocks](https://github.com/StarRocks/flink-connector-starrocks/releases)
- [ClickHouse](https://github.com/itinycheng/flink-connector-clickhouse)
- [Pulsar](https://github.com/streamnative/pulsar-flink/releases)

### 其他数据源

数据源支持请见[扩展数据源](../extend/function_expansion/datasource)

## 管理控制台介绍

Dinky 实时计算平台开发模块包括 **数据开发**、**运维中心**、**注册中心** 和 **系统设置** 四大模块。

### 数据开发

数据开发包括作业管理、作业配置和运维管理等

![data_ops](http://www.aiwenmo.com/dinky/docs/zh-CN/overview/data_ops.png)

### 运维中心

![devops_center](http://www.aiwenmo.com/dinky/docs/zh-CN/overview/devops_center.png)

### 注册中心

注册中心包括集群管理、Jar管理、数据源管理、报警管理和文档管理

![register_center](http://www.aiwenmo.com/dinky/docs/zh-CN/overview/register_center.png)

### 系统设置

系统设置包括用户管理和Flink设置

![system_settings](http://www.aiwenmo.com/dinky/docs/zh-CN/overview/system_settings.png)

---
sidebar_position: 3
id: job_submit
title: 作业提交
---

本文为您介绍如何提交 FlinkSQL 作业至集群，以及 DB SQL提交至数据库。Dinky 提供了三种提交作业的方式，分别是：

- 执行当前SQL
- 异步提交
- 上线下线发布

各提交作业的支持的执行模式及说明如下

| SQL类型  |   提交方式   |                           执行模式                           | 说明 |
| :------: | :----------: | :----------------------------------------------------------: | :--: |
| FlinkSQL | 执行当前SQL  | local<br/> Standalone<br/> Yarn Session<br/>  Kubernetes Session |      |
| FlinkSQL |   异步提交   | Standalone<br/> Yarn Session<br/> Yarn Per-job<br/> Yarn Application<br/> Kubernetes Session<br/> Kubernetes Application |      |
| FlinkSQL | 上线下线发布 | Standalone<br/> Yarn Session<br/> Yarn Per-job<br/> Yarn Application<br/> Kubernetes Session<br/> Kubernetes Application |      |
|  DB SQL  |   同步提交   |                              -                               |      |

:::warning:

​    - DB SQL 同步提交

:::

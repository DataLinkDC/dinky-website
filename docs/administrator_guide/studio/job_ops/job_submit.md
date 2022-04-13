---
sidebar_position: 3
id: job_submit
title: 作业提交
---

本文为您介绍如何提交 FlinkSQL 作业至集群，以及 DB SQL提交至数据库。Dinky 提供了三种提交作业的方式，如下：

- 调试
- 提交
- 上线下线发布

各提交作业的支持的执行模式及说明如下

| SQL类型  |   提交方式   |                           执行模式                           | 说明                                                        |
| :------: | :----------: | :----------------------------------------------------------: | :---------------------------------------------------------- |
| FlinkSQL |     调试     | local<br/> Standalone<br/> Yarn Session<br/>  Kubernetes Session | 适用场景:`调试作业`                                         |
| FlinkSQL |     提交     | Standalone<br/> Yarn Session<br/> Yarn Per-job<br/> Yarn Application<br/> Kubernetes Session<br/> Kubernetes Application | 适用场景:`远程提交作业至集群`                               |
| FlinkSQL | 上线下线发布 | Standalone<br/> Yarn Session<br/> Yarn Per-job<br/> Yarn Application<br/> Kubernetes Session<br/> Kubernetes Application | 适用场景:<br/>1.`远程发布作业至集群`<br/>2.`维护及监控作业` |
|  DB SQL  |     调试     |                              -                               | 适用场景:`调试作业`                                         |
|  DB SQL  |     提交     |                              -                               | 适用场景:`提交作业至数据库`                                 |







:::tip

- FlinkSQL 调试与提交区别在于执行当前SQL适合调试作业，而提交适合提交作业到集群；
- FlinkSQL 提交与上线下线发布，异步提交无法接收告警，而上线下线发布可以接收告警并可以维护作业和在运维中心监控作业；
- DB SQL 调试与提交区别在于调试适合调试作业并可以看到错误信息，而提交只显示作业提交失败；

:::

---
sidebar_position: 2
id: job_instance_status
title: 作业实例状态
---

如果您已经提交作业或者发布上线作业，可通过运维中心查看和修改作业实例状态。默认显示当前实例，切换后显示历史实例。

**当前实例**

![current_instance](http://www.aiwenmo.com/dinky/docs/administrator_guide/devops_center/job_manage/job_instance_status/current_instance.png)



**历史实例**

![history_instance](http://www.aiwenmo.com/dinky/docs/administrator_guide/devops_center/job_manage/job_instance_status/history_instance.png)

## 运行信息

运行信息为您展示作业的实时运行信息。您可以通过作业的状态来分析、判断作业的状态是否健康、是否达到您的预期。**Task状态**为您显示作业各状态的数量。Task存在以下11种状态

- 已创建
- 初始化
- 运行中
- 已完成
- 异常中
- 已异常
- 已暂停
- 停止中
- 停止
- 重启中
- 未知

作业提交或者发布后，可看到作业实例的详情信息。

## 作业实例信息

作业实例详细包含配置信息及运行状态和时间，各字段的含义

| 字段名称 |                             说明                             |
| :------: | :----------------------------------------------------------: |
|  作业名  |               创建的作业名称，即pipeline.name                |
| 生命周期 |                      开发中<br/> 已上线                      |
| 运行模式 | tandalone<br/>Yarn Session<br/>Yarn Per-job<br/>Yarn Application<br/>Kubernetes Session<br/>Kubernetes Application |
| 集群实例 |                          定义的集群                          |
|  作业ID  |                        作业名对应的id                        |
|   状态   |                           运行信息                           |
| 开始时间 |                       作业创建时的时间                       |
|   耗时   |                        作业运行的时长                        |

:::warning 警告

集群实例中，Session 集群显示集群实例，Application 及 Per-job 则不显示

:::

## 修改作业状态

1.在运维中心，单击**点击目标作业名**

2.单击**作业总览**，进入作业详情页面

3.根据需要单击以下按钮，修改作业状态

![Modify_instance](http://www.aiwenmo.com/dinky/docs/administrator_guide/devops_center/job_manage/job_instance_status/Modify_instance.png)



其中，每个按钮含义如下表所示

|    操作名称    | 说明 |
| :------------: | :--: |
|    重新上线    |      |
|      下线      |      |
| SavePoint 触发 |      |
| SavePoint 暂停 |      |
| SavePoint 停止 |      |
|    普通停止    |      |


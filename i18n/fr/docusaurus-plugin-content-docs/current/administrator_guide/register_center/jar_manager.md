---
position: 4
id: jar_manager
title: Jar 管理
---



当用户使用 jar 包提交 Flink 应用时，可以在 **jar管理** 中对所需 jar 进行管理。

## Jar包配置

**注册中心 > jar管理 > 新建 > 创建Jar配置**。

![create_jar](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/register_center/jar_manager/create_jar.png)

![create_jar_config](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/register_center/jar_manager/create_jar_config.png)

**参数配置说明：**

- **Jar 配置：**
  - **默认：** User App
  - **文件路径：** 指定 HDFS 上的文件路径，即 Flink 提交的 jar 包
  - **启动类：** 指定可执行 Jar 的启动类
  - **执行参数：** 指定可执行 Jar 的启动类入参
- **基本配置：**
  - **标识：** 英文唯一标识(必选)
  - **名称：** 自定义
  - **注释：** 自定义
- **是否启用：** 默认启用

Jar 包配置完成后，创建 **FlinkJar** 任务，详见。

## Jar包编辑

用户可以对所添加的可执行 Jar 包配置做编辑修改。

首先进入**注册中心** > **jar管理**，点击**编辑**，即可对可执行Jar配置进行修改。

![jar_editing](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/register_center/jar_manager/jar_editing.png)

![update_jar_config](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/register_center/jar_manager/update_jar_config.png)

## Jar删除

用户可以对所添加的可执行Jar包配置做删除。

首先进入**注册中心** > **jar管理**，点击**删除**，即可对可执行 Jar 配置进行删除。

![jar配置删除](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/register_center/jar_manager/jar_config_delete.png)

![删除jar](http://www.aiwenmo.com/dinky/dev/docs/%E5%88%A0%E9%99%A4jar.png)

**说明:** 目前 jar 包提交的方式只支持 Yarn Application 模式
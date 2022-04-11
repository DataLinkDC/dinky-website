---
sidebar_position: 1
id: job_manage
title: 作业管理
---







目前您可以在Dinky数据开发控制台对您的作业进行管理操作，包括目录创建和删除、作业创建和删除等。由于社区在作业管理还在完善中，后期会以命名空间的方式管理作业。

## 创建目录

首先右键单击**数据开发>目录>创建目录**

![create_dir](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/create_dir.png)

右键单击**创建目录> 创建新目录**

![create_new_dir](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/create_new_dir.png)



## 创建根目录

创建根目录前提是需要在创建目录后，再次创建子目录，然后再同级目录下方可创建根目录。

首先右键单击**创建根目录> 创建新目录**或者点击引导页下方的**+**号按钮

![create_root_dir](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/create_root_dir.png)

![root_dir_create_new_dir](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/root_dir_create_new_dir.png)

根目录创建完成

![create_root_dir_finish](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/create_root_dir_finish.png)



## 创建作业

Dinky数据开发控制台，目前支持的数据源作业开发详情请参考开发控制台中的[组件介绍]

首先右键单击**创建作业>创建新作业**

![create_new_job](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/create_new_job.png)

创建新作业默认是FlinkSQL，您也可以选择其他数据源创建新作业

![create_new_job_1](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/create_new_job_1.png)

新作业创建完成

![job_create_finish](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/job_create_finish.png)

## 重命名

重命名包括对目录重命名和作业重命名

首先右键单击**重命名>重命名目录**

![rename](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/rename.png)

![rename_dir](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/rename_dir.png)

重命名完成

![rename_finish](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/rename_finish.png)

当重命名作业时，会提示重命名作业。

## 移动

您如果想移动目录或者移动作业，可以将目录或者作业移动到其他目录下。

如果所在的目录下有作业，在您移动成功后，会将作业也会一并移动到相应目录下。

首先右键单击**剪切**

![cut](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/cut.png)

然后右键单击**粘贴**到指定目录下

![paste](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/paste.png)

剪切粘贴成功

![moveing_finish](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/moveing_finish.png)

## 搜索

当您作业比较多的时候，可以通过搜索功能，找到对应的作业或者目录。不管是搜索作业还是搜索目录都很方便。

![job_dir_search](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/job_dir_search.png)

## 删除

删除包括删除作业和删除目录。

在删除作业时，会提示删除作业。

首先右键单击**删除>删除作业>确定**

![delete](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/delete.png)

当删除目录时，会提示删除目录。

## 作业其他功能

右键单击可以打开作业(或者双击作业)、异步提交作业

![other_job_function](http://www.aiwenmo.com/dinky/docs/zh-CN/administrator_guide/studio/job_ops/job_manage/other_job_function.png)



**说明：**如果目录下有很多子目录或者作业，先要删除子目录或者作业，才能进一步删除父目录。

   

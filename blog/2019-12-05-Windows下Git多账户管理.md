---
slug: multi-git-manage
title: Windows下Git多账户管理
# authors:
#   name: Hans
tags: [Git]
---

本文以配置**github**账号和**gitlab**账号来逐步演示在Windows环境下配置**Git多账号支持**即在同一个电脑上**管理多个ssh-key**，对git多一分了解

<!-- truncate -->

## 生成公钥、私钥

以管理员方式运行Git Bash

1. 生成github.com对应的私钥公钥

命名为id_rsa_github,方便区分。此时当前目录生成两个文件`id_rsa_github.pub`和`id_rsa_github`

```shell
ssh-keygen -t rsa -C email
```

![](https://raw.githubusercontent.com/hans-yoyo/FigureBed/master/2019/12/20191204222919.png)

2. 用同样的方法生成gitlab所用私钥公钥

命名为id_rsa_gitlab.邮箱地址可以相同可以不同, 我这里使用了不同的邮箱地址

将以上生成的4个文件分别放入到github和gitlab两个文件夹中(也可以不放在文件夹)，我这里是为了方便管理。将两个文件夹拷贝到.ssh目录(C:\Users\idobe\\.ssh)下

## 添加公钥到Git服务器

将公钥(`.pub`结尾的文件)的内容添加到Git服务器



## 配置本地多账号管理

在.ssh目录创建config文本文件并完成相关配置(最核心的地方)

每个账号单独配置一个Host，每个Host要取一个别名，每个Host主要配置HostName和IdentityFile两个属性即可

Host的名字可以取为自己喜欢的名字

`config`文件内容

```xml
HostName 　　　　　　　   这个是真实的域名地址
IdentityFile 　　　　　　　  这里是id_rsa的地址
PreferredAuthentications   配置登录时用什么权限认证--可设为publickey,password publickey,keyboard-interactive等
User 　　　　　　　　　　　配置使用用户名

# 配置github.com
Host git@github.com                 
HostName github.com
IdentityFile C:\\Users\\idobe\\.ssh\\github\\id_rsa_github
PreferredAuthentications publickey
User username

# 配置git.oschina.net 
Host git@gitlab.com
HostName gitlab.com
IdentityFile C:\\Users\\idobe\\.ssh\\gitlab\\id_rsa_gitlab
PreferredAuthentications publickey
User username
```

## 测试

```shell

idobe@Hyman-PC MINGW64 ~/Desktop
$ ssh -T git@github.com
Enter passphrase for key 'C:\\Users\\idobe\\.ssh\\github\\id_rsa_github':
Hi hyman213! You've successfully authenticated, but GitHub does not provide shell access

idobe@Hyman-PC MINGW64 ~/Desktop
$ ssh -T git@gitlab.com
Enter passphrase for key 'C:\\Users\\idobe\\.ssh\\gitlab\\id_rsa_gitlab':
Welcome to GitLab, hyman213!
```





## 参考文章

- [Windows下Git多账号配置，同一电脑多个ssh-key的管理](<https://www.cnblogs.com/popfisher/p/5731232.html>)
- [同一台电脑配置多个git账号](<https://github.com/jawil/notes/issues/2>)


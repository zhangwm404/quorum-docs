---
title: 运行全节点
description: 介绍如何运行全节点
---

介绍如何运行全节点，全节点也称为 `fullnode`。

---

## 节点简介

全节点是拥有一对密钥并连接到 `p2p网络` 的用户。

## 获取 quorum 二进制程序

{% tabs %}

{% tab label="手动编译" %}
参考 [源码编译 quorum](/docs/build-quorum)
{% /tab %}

{% tab label="下载编译好的" %}
{% /tab %}

{% /tabs %}

## 运行 quorum fullnode

```shell
RUM_KSPASSWD=123 ./quorum fullnode \
    --peername mypeer
    --configdir demo/config \
    --datadir demo/data \
    --keystoredir demo/keystore \
    --listen /ip4/127.0.0.1/tcp/7002 \
    --apiport 8002 \
    --peer /ip4/94.23.17.189/tcp/10666/p2p/16Uiu2HAmGTcDnhj3KVQUwVx8SGLyKBXQwfAxNayJdEwfsnUYKK4u \
    --peer /ip4/132.145.109.63/tcp/10666/p2p/16Uiu2HAmTovb8kAJiYK8saskzz7cRQhb45NRK5AsbtdmYsLfD3RM \
    --autorelay=false \
    --loglevel info
```

### 参数说明

#### 常用参数

- `--peername` 节点名称；默认值：`peer`
- `--configdir` 存放配置文件的目录；默认值：`./config`
- `--datadir` 存放数据文件的目录；默认值：`./data`
- `--keystoredir` 存放 keystore 的目录；默认值：`./keystore`
- `--keystorename` keystore 的名称；默认值：`default`
- `--keystorepass` keystore 的密码；如果不指定会启动时会提示输入
- `--peer` 指定 `bootstrap` 的地址，可以指定多个，比如：`--peer /ip4/94.23.17.189/tcp/10666/p2p/16Uiu2HAmGTcDnhj3KVQUwVx8SGLyKBXQwfAxNayJdEwfsnUYKK4u --peer /ip4/132.145.109.63/tcp/10666/p2p/16Uiu2HAmTovb8kAJiYK8saskzz7cRQhb45NRK5AsbtdmYsLfD3RM`
- `--listen` 监听地址，可以指定多次，比如：` --listen /ip4/127.0.0.1/tcp/4215 --listen /ip/127.0.0.1/tcp/5215/ws`
- `rest api` 参数
  - `--apihost` 指定 `rest api` 服务的 `ip` 或 `域名`
  - `--apiport` 指定 `rest api` 服务监听端口
- `--bootstrap` 是否启动 `bootstrap` 节点

#### 日志相关的参数

- `--loglevel` 设置日志级别，可选值：`debug`、`info`、`error`；默认是 `error`
- `--logfile` 可以指定日志文件的路径；默认打印到标准输出
  - `--log-max-size` 单个日志文件最多能占用多少硬盘空间，单位：兆；默认是 `100m`
  - `--log-max-age` 日志文件最多保留多久，旧的日志文件最多保留多久；默认 7 天
  - `--log-max-backups` 做多能有几个日志文件；默认是 3 个
  - `--log-compress` 设置日志文件是否自动压缩；默认压缩

### 查看帮助

```shell
./quorum --help
```

```
An open source peer-to-peer application infrastructure to offer the internet alternatives in a decentralized and privacy oriented way.

Usage:
  quorum [command]

Available Commands:
  backup      Backup rum data
  completion  Generate the autocompletion script for the specified shell
  fullnode    Run fullnode
  help        Help about any command
  jwt         A jwt tool, create or parse jwt
  lightnode   Run lightnode
  ping        Ping peer
  relaynode   Run relaynode
  restore     Restore rum data from backup file
  rumfile     A tool to upload and download files from rum network
  update      Update rum
  version     Show version

Flags:
  -h, --help                  help for quorum
      --log-compress          is log file compress (default true)
      --log-max-age int       log file max ages, unit: day (default 7)
      --log-max-backups int   log file max backups count (default 3)
      --log-max-size int      log file max size, unit: megabytes (default 100)
      --logfile string        log file, default output to stdout
      --loglevel string       log level (default "error")

Use "quorum [command] --help" for more information about a command.
```

### 查看子命令的帮助

运行 `quorum [command] --help` 可以查看子命令的帮助信息。

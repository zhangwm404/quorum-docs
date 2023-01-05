---
title: 从源代码构建 quorum（en）
description: 如何从源代码编译 quorum
---

从源代码编译 quorum

---

## golang

`quorum` 是 `golang` 开发的，所以，编译 `quorum` 前需要先准备好 `golang` 环境。

### 安装

`quorum` 支持 `go 1.19.x`

{% tabs %}

{% tab label="macOS" %}

```shell
brew install go
```

{% /tab %}

{% tab label="Ubuntu" %}

```shell
sudo add-apt-repository ppa:longsleep/golang-backports
sudo apt update
sudo apt install golang-go
```

[更多安装方式](https://github.com/golang/go/wiki/Ubuntu)
{% /tab %}

{% tab label="Arch Linux" %}

```shell
sudo pacman -Sy go
```

{% /tab %}

{% tab label="其它系统" %}
参考：[Download and install](https://go.dev/doc/install)
{% /tab %}

{% /tabs %}

### 设置环境变量

{% tabs %}
{% tab label="*nix" %}

```shell
export GO_HOME=$HOME/go
export GOPATH=$GO_HOME
export PATH=$GO_HOME/bin:$PATH
export GO111MODULE=on
```

{% /tab %}
{% /tabs %}

### 设置镜像

由于众所周知的原因，需要设置 `GOPROXY` 环境变量。如果你的网络不受该因素影响，不用做该设置。

```shell
export GOPROXY=https://goproxy.cn,direct
```

## 下载代码

```shell
git clone https://github.com/rumsystem/quorum.git
```

## build

```shell
cd quorum
go build -o quorum main.go
```

也可以通过 `make` 命令完成编译。

{% tabs %}

{% tab label="macOS" %}

```shell
make darwin
```

{% /tab %}

{% tab label="Linux" %}

```shell
make linux
```

{% /tab %}

{% tab label="Windows" %}

```shell
make windows
```

{% /tab %}

{% tab label="FreeBSD" %}

```shell
make freebsd
```

{% /tab %}
{% /tabs %}

## Swagger 文档

`quorum` 的 `rest api` 都提供了 `swagger` 文档。

### 生成 `swagger` 文档

```shell
make gen-doc
```

### 查看 `swagger` 文档

```shell
make serve-doc
```

打开本地的 `swagger` 文档 <http://localhost:1323/swagger/index.html>

---
title: 快速开始
description: 描述一下这个页面的概要
---

学习如何快速基于 Rum 开发一个应用

---

## 准备工作

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur. `quorum` 不错

这是 `中文` 的 code


### 安装依赖

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

```shell
npm install
```

### 环境配置

Sit commodi iste iure molestias qui amet voluptatem sed quaerat. Nostrum aut pariatur. Sint ipsa praesentium dolor error cumque velit tenetur quaerat exercitationem. Consequatur et cum atque mollitia qui quia necessitatibus.

---

## 基本用法

用三种语言实现生成随机数

{% tabs %}

{% tab label="Javascript" %}
```javascript
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const rndInt = getRandomInteger(1, 6)
console.log(rndInt)
```
{% /tab %}

{% tab label="Python" %}
```python
#!/usr/bin/python3
import random
random_number = random.randint(1, 10)
print(random_number)
```
{% /tab %}

{% tab label="Go" %}
```go
package main
import (
    "fmt"
    "math/rand"
)
func main() {
    min := 10
    max := 30
    fmt.Println(rand.Intn(max - min) + min)
} 
```
{% /tab %}

{% /tabs %}

Praesentium laudantium magni. Consequatur reiciendis aliquid nihil iusto ut in et. Quisquam ut et aliquid occaecati. Culpa veniam aut et voluptates amet perspiciatis. Qui exercitationem in qui. Vel qui dignissimos sit quae distinctio.

{% callout type="note" title="补充说明" %}
This is what a disclaimer message looks like. You might want to include inline `code` in it. Or maybe you’ll want to include a [link](/) in it. I don’t think we should get too carried away with other scenarios like lists or tables — that would be silly.
{% /callout %}


## 基本用法2

用三种语言实现生成随机数

{% tabs %}

{% tab label="Javascript" %}
```javascript
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
const rndInt = getRandomInteger(1, 6)
console.log(rndInt)
```
{% /tab %}

{% tab label="Python" %}
```python
#!/usr/bin/python3
import random
random_number = random.randint(1, 10)
print(random_number)
```
{% /tab %}

{% tab label="Go" %}
```go
package main
import (
    "fmt"
    "math/rand"
)
func main() {
    min := 10
    max := 30
    fmt.Println(rand.Intn(max - min) + min)
} 
```
{% /tab %}

{% /tabs %}

Praesentium laudantium magni. Consequatur reiciendis aliquid nihil iusto ut in et. Quisquam ut et aliquid occaecati. Culpa veniam aut et voluptates amet perspiciatis. Qui exercitationem in qui. Vel qui dignissimos sit quae distinctio.

{% callout type="note" title="补充说明" %}
This is what a disclaimer message looks like. You might want to include inline `code` in it. Or maybe you’ll want to include a [link](/) in it. I don’t think we should get too carried away with other scenarios like lists or tables — that would be silly.
{% /callout %}

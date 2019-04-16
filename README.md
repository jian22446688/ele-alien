# ele-alien

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and minifies for production npm
```
npm run build:npm
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## Start component

``` bash
# install component
npm install -s ele-alien

```

## 组件是基于 element-ui 框架

``` 
# 使用前必须：

## Install
```shell
npm install element-ui -S
```

## Quick Start

``` javascript
import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element)

# main.js

# 只可以单个注册组件

import { CButtonTip } from 'ele-alien'
Vue.use(CButtonTip)

```


- - -
## CButtonTip



### 基础用法
> 点击按钮带删除功能，所有功能参数继承el-button
```
<c-button-tip>测试</c-button-tip>
```


### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 主题 | string | success/info/warning/danger | — |
| title | 提示信息 | string | — | 是否删除 |
| cancel | 取消按钮文字 | string | — | 取消 |
| confirm | 确定按钮文字 | string | — | 确定 |
| width | 提示框宽度 | number | — | 160 |


### 事件
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| click | 点击 c-button-tip 时触发的事件 | — |
| confirm | 点击 弹出框确定按钮时触发的事件 | visable |
| cancel | 点击 弹出框取消按钮时触发的事件 | visable |
- - -




### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# ele-alien

<p align="center">
  <a href="https://www.npmjs.org/package/ele-alien">
    <img src="https://img.shields.io/npm/v/ele-alien.svg">
  </a>
  <a href="https://npmcharts.com/compare/ele-alien?minimal=true">
    <img src="http://img.shields.io/npm/dm/ele-alien.svg">
  </a>
  <a href="http://img.badgesize.io/https://unpkg.com/ele-alien/dist/c-ele-alien.common.js?compression=gzip&label=gzip%20size:%20JS">
    <img src="http://img.badgesize.io/https://unpkg.com/ele-alien/dist/c-ele-alien.common.js?compression=gzip&label=gzip%20size:%20JS">
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-yellow.svg">
  </a>
</p>


## Element-ui Links
- Homepage and documentation
  - [International users](http://element.eleme.io/#/en-US)
  - [Chinese users](http://element-cn.eleme.io/#/zh-CN)
  - [Spanish users](http://element.eleme.io/#/es)
  - [French users](http://element.eleme.io/#/fr-FR)
- [awesome-element](https://github.com/ElementUI/awesome-element)
- [FAQ](./FAQ.md)
- [Customize theme](http://element.eleme.io/#/en-US/component/custom-theme)
- [Preview and generate theme online](https://elementui.github.io/theme-chalk-preview)
- [Element for React](https://github.com/elemefe/element-react)
- [Element for Angular](https://github.com/ElemeFE/element-angular)
- [Atom helper](https://github.com/ElemeFE/element-helper)
- [Visual Studio Code helper](https://github.com/ElemeFE/vscode-element-helper)
- Starter kit
  - [element-starter](https://github.com/ElementUI/element-starter)
  - [element-in-laravel-starter](https://github.com/ElementUI/element-in-laravel-starter)
- [Design resources](https://github.com/ElementUI/Resources)
- Gitter
  - [International users](https://gitter.im/element-en/Lobby)
  - [Chinese users](https://gitter.im/ElemeFE/element)

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

```shell
# 使用前必须：

## Install

npm install element-ui -S
```

## Quick Start

``` javascript
import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element)

# main.js

# 可以单个注册组件

import { CButtonTip } from 'ele-alien'
Vue.use(CButtonTip)

```


- - -
## CButtonTip


### 基础用法
> 点击按钮带删除功能，所有功能参数继承el-button
```html
<c-button-tip>测试</c-button-tip>
```

![image](https://github.com/jian22446688/ele-alien/raw/master/images/c-button-tip.png)

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

- - -
## CConfirmBox


### 基础用法
> 自定义组件弹出框，所有功能参数继承 Element-ui vm.$msgbox

1. 引入组件

``` javascript
import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element)

# main.js

# 可以单个注册组件

import { CConfirmBox } from './index'
Vue.use(CConfirmBox)

```

2.组件使用

```javascript
const myComponent = {
  name: 'myComponent',
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.title = new Date().getTime().toString()
    }
  },
  render() {
    return (
      <div onClick = { this.check}>
        <div class="title">{ this.title }</div>
      </div>
    )
  } 
}

```

![image](https://github.com/jian22446688/ele-alien/raw/master/images/CconfirmBox.png)

### Options

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| *component | 显示的组件 | component | — | null |
| *confirmValidate | ，替换beforeClose, 必须使用否则弹窗不会关闭| function(action, instance, done)，action 的值为'confirm', 'cancel'或'close'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例 | — | — |
| title | MessageBox 标题 | string | — | — |
| message | MessageBox 消息正文内容 | string / VNode | — | — |
| dangerouslyUseHTMLString | 是否将 message 属性作为 HTML 片段处理 | boolean | — | false |
| type | 消息类型，用于显示图标 | string | success / info / warning / error | — |
| iconClass | 自定义图标的类名，会覆盖 `type` | string | — | — |
| customClass | MessageBox 的自定义类名 | string | — | — |
| callback | 若不使用 Promise，可以使用此参数指定 MessageBox 关闭后的回调 | function(action, instance)，action 的值为'confirm', 'cancel'或'close', instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法 | — | — |
| showClose | MessageBox 是否显示右上角关闭按钮 | boolean | — | true |
| beforeClose | 不可使用 | function(action, instance, done)，action 的值为'confirm', 'cancel'或'close'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例 | — | — |
| distinguishCancelAndClose | 是否将取消（点击取消按钮）与关闭（点击关闭按钮或遮罩层、按下 ESC 键）进行区分 | boolean | — | false |
| lockScroll | 是否在 MessageBox 出现时将 body 滚动锁定 | boolean | — | true |
| showCancelButton | 是否显示取消按钮 | boolean | — | false（以 confirm 和 prompt 方式调用时为 true） |
| showConfirmButton | 是否显示确定按钮 | boolean | — | true |
| cancelButtonText | 取消按钮的文本内容 | string | — | 取消 |
| confirmButtonText | 确定按钮的文本内容 | string | — | 确定 |
| cancelButtonClass | 取消按钮的自定义类名 | string | — | — |
| confirmButtonClass | 确定按钮的自定义类名 | string | — | — |
| roundButton | 是否使用圆角按钮 | boolean | — | false |

- - -



### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

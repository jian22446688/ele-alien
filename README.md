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

### Lints and fixes files
```
npm run lint
```

## Start component

``` bash
# install component
npm install -s ele-alien

```

## upload npm package

```bash
# 修改 package.json 中的版本
npm publish

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

import { CConfirmBox } from 'ele-alien'
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
| *confirmValidate | 替换beforeClose, 必须使用否则弹窗不会关闭| function(action, instance, done)，action 的值为'confirm', 'cancel'或'close'；instance 为 MessageBox 实例，可以通过它访问实例上的属性和方法；done 用于关闭 MessageBox 实例 | — | — |
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


## CDrawer


### 基础用法
> 左右抽屉组件

``` javascript
import Vue from 'vue'
import Element from 'element-ui'
Vue.use(Element)

# main.js

# 可以单个注册组件

import { CDrawer } from 'ele-alien'
import 'ele-alien/dist/c-ele-alien.css'
Vue.use(CDrawer)

```

```html
  <c-drawer v-model="isdrawer" :showHeader="true" placement="left">
    <div style="padding-bottom: 16px">
      <el-button type="primary" @click="isdrawer = false">test</el-button>
    </div>
  </c-drawer>
```

![image](https://github.com/jian22446688/ele-alien/raw/master/images/c-drawer.png)

### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| title | 提示信息 | string | — | 提示 |
| value / v-model | 状态是否可见 | boolean | — | false |
| width | 抽屉的宽度 | number | — | 260 |
| placement | 出现位置 | String | right/left | right |
| showHeader | 是否显示标题 | boolean | — | true |
| show-close | 是否显示关闭按钮 | boolean | — | true |
| closeOnClickModal | 是否可以通过点击遮罩关闭 Drawer | boolean | — | false |

### Slot
| name | 说明 |
|---------- |-------- |
| —  | drawer内容 |
| title | drawer 标题区的内容 |

### 事件
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| open | 打开的回调 | — |
| close | 关闭的回调 | — |
- - -

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

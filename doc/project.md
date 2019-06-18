## 项目规范说明

### 开发工具
- VS code (推荐)
- Webstorm

## VS code 插件

- jetBrains Ide Keymap  使用jet快捷键
- Auto Close Tag        自动关闭标签
- Path Intellisense     路径提示比较友好
- Prettier              代码风格
- Vetur                 vue 提示
- vscode-icons          文件图标
- vscode-element-helper element 提示信息

## 目录结构

```html

+---build                       // webpack 发布配置
+---config                      // 发布版本配置
+---dist                        // 发布出来的文件
+---doc                         // 项目文档
+---mock                        // 本地假数据暂时没用, 用的是Easymock
|   \---modules                 // 本地假数据模块
+---note                        // 开发中遇到的问题记录方便找问题解决方案
+---screenshots                 // 一些截屏, 可以是问题,功能性的截屏
+---src                         // 代码
|   +---api                     // 项目中所有的接口存放地方
|   |   \---modules             // 接口划分模块存放
|   +---assets                  // 项目中使用到的文件资源
|   +---components              // 自定义公共全局组件
|   +---filters                 // 自定义全局Vue过滤器
|   +---icons                   // 自定义字体库
|   |   +---iconfont            // 使用的阿里图标库,使用方法就是直接下载出来复制到此目录
|   |   \---svg                 // 单个svg图标
|   +---router                  // 项目路由
|   |   \---modules             // 模块路由
|   +---store                   // 全局状态管理
|   |   \---modules             // 状态管理模块
|   +---styles                  // 全局样式定义
|   +---utils                   // 项目工具方法,鉴权,验证
|   +---vendor                  // 第三方库文件
|   \---views                   // Vue 页面目录
|   |   +---redirect            // 刷新页面用的
|   |   +---layout              // 项目顶级Layout建议不要轻易修改
|   |   +---patrol-system       // 巡查系统
|   |   +---se                  // SE 页面
|   |   App.vue                 // vue APP
|   |   errorLog.js             // 路由出错处理
|   |   init.vue                // 初始化全局接口数据,或者其他数据
|   |   main.js                 // 入口文件
|   |   permission.js           // 路由鉴权
\---static                      // 静态文件
|   .editorconfig               // 文件配置
|   .eslintignore               // 过滤文件检测
|   .eslintrc.js                // eslint 风格规则
|   .gitignore                  // git 配置
|   package.json                // npm 包管理

```

### 开启代码检测

> 代码检测说明, 提交代码前必须使用 npm run lint 通过了才能提交代码到仓库,必须严格遵守规则

```base

# 修复检测代码
npm run lint

# 可以使用这个进行自动代码修复

npm run lint-repair

```

## 组件名为多个单词

> 组件名应该始终是多个单词的，根组件 App 除外。
> 这样做可以避免跟现有的以及未来的 HTML 元素相冲突，因为所有的 HTML 元素名称都是单个单词的。

```javascript

// 错误
Vue.component('todo', {
  // ...
})

export default {
  name: 'Todo',
  // ...
}

// 正确
Vue.component('todo-item', {
  // ...
})

export default {
  name: 'TodoItem'
}

```

## Prop 定义

> 在你提交的代码中，prop 的定义应该尽量详细，至少需要指定其类型。

### 细致的prop 定义有两个好处：

- 它们写明了组件的 API，所以很容易看懂组件的用法；
- 在开发环境下，如果向一个组件提供格式不正确的 prop，Vue 将会告警，以帮助你捕获潜在的错误来源。


```javascript
// 错误
// 这样做只有开发原型系统时可以接受
props: ['status']

// 正确 
props: {
  status: String
}

// 正确 好的做法, 可以做一些数据验证
props: {
  status: {
    type: String,
    required: true,
    validator: function (value) {
      return [
        'syncing',
        'synced',
        'version-conflict',
        'error'
      ].indexOf(value) !== -1
    }
  }
}

```

## v-for 设置键值

> 在组件上总是必须用 key 配合 v-for，以便维护内部组件及其子树的状态。

* 在更新 DOM 的时候，Vue 将会优化渲染把可能的 DOM 变动降到最低。

```html
// 错误
<ul>
  <li v-for="todo in todos">
    {{ todo.text }}
  </li>
</ul>

// 正确
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id">
    {{ todo.text }}
  </li>
</ul>

```


## 避免 v-if 和 v-for 用在一起
> 永远不要把 v-if 和 v-for 同时用在同一个元素上。

* 因此哪怕我们只渲染出一小部分用户的元素，也得在每次重渲染的时候遍历整个列表，不论活跃用户是否发生了变化。

```html

// 错误
<ul>
  <li
    v-for="user in users"
    v-if="shouldShowUsers"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

// 正确
<ul v-if="shouldShowUsers">
  <li
    v-for="user in users"
    :key="user.id"
  >
    {{ user.name }}
  </li>
</ul>

```

## 组件样式设置作用域

> 对于应用来说，顶级 App 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。

反例

```html

<template>
  <button class="btn btn-close">X</button>
</template>

<style>
.btn-close {
  background-color: red;
}
</style>

好例子
<template>
  <button class="button button-close">X</button>
</template>

<!-- 使用 `scoped` 特性 -->
<style scoped>
.button {
  border: none;
  border-radius: 2px;
}

.button-close {
  background-color: red;
}
</style>

```

## 禁用 scoped 中的元素选择器
> 元素选择器应该避免在 scoped 中出现。
在 scoped 样式中，类选择器比元素选择器更好，因为大量使用元素选择器是很慢的。


```html

<--错误-->
<template>
  <button>X</button>
</template>

<style scoped>
button {
  background-color: red;
}
</style>

<--正确-->
<template>
  <button class="btn btn-close">X</button>
</template>

<style scoped>
.btn-close {
  background-color: red;
}
</style>

```


## 单文件组件文件的大小写
> 单文件组件的文件名应该要么始终是单词大写开头 (PascalCase)，要么始终是横线连接 (kebab-case)。


```
// 错误
components/
|- mycomponent.vue
components/
|- myComponent.vue

// 正确
components/
|- MyComponent.vue
components/
|- my-component.vue

```

## 模板中的组件名大小写

> 还请注意，如果你已经是 kebab-case 的重度用户，那么与 HTML 保持一致的命名约定且在多个项目中保持相同的大小写规则就可能比上述优势更为重要了。在这些情况下，在所有的地方都使用 kebab-case 同样是可以接受的。

```html
<!-- 错误 -->
<!-- 在单文件组件和字符串模板中 -->
<mycomponent/>

<!-- 在单文件组件和字符串模板中 -->
<myComponent/>

<!-- 在 DOM 模板中 -->
<MyComponent></MyComponent>

<!-- 正确 -->
<!-- 在单文件组件和字符串模板中 -->
<MyComponent/>

<!-- 在 DOM 模板中 -->
<my-component></my-component>

<!-- 或者 -->
<!-- 在所有地方 -->
<my-component></my-component>
<my-component/>


```


## JS 中的组件名大小写

> 在较为简单的应用中只使用 Vue.component 进行全局组件注册时，可以使用 kebab-case 字符串。


```javascript

Vue.component('MyComponent', {
  // ...
})

Vue.component('my-component', {
  // ...
})

import MyComponent from './MyComponent.vue'

export default {
  name: 'MyComponent',
  // ...
}

```

## 简单的计算属性
> 应该把复杂计算属性分割为尽可能多的更简单的属性。

### 更简单、命名得当的计算属性是这样的：




```javascript
// 正确
computed: {
  price: function () {
    var basePrice = this.manufactureCost / (1 - this.profitMargin)
    return (
      basePrice -
      basePrice * (this.discountPercent || 0)
    )
  }
}

// 错误
computed: {
  basePrice: function () {
    return this.manufactureCost / (1 - this.profitMargin)
  },
  discount: function () {
    return this.basePrice * (this.discountPercent || 0)
  },
  finalPrice: function () {
    return this.basePrice - this.discount
  }
}

```

## 指令缩写

> 指令缩写 (用 : 表示 v-bind: 和用 @ 表示 v-on:) 应该要么都用要么都不用。

```html
<-- 错误 -->
<input
  v-bind:value="newTodoText"
  :placeholder="newTodoInstructions"
>

<input
  v-on:input="onInput"
  @focus="onFocus"
>

<-- 正确 -->
<input
  :value="newTodoText"
  :placeholder="newTodoInstructions"
>

<input
  v-bind:value="newTodoText"
  v-bind:placeholder="newTodoInstructions"
>

<input
  @input="onInput"
  @focus="onFocus"
>

<input
  v-on:input="onInput"
  v-on:focus="onFocus"
>

```

## 组件/实例的选项的顺序
> 组件/实例的选项应该有统一的顺序, 推荐的组件选项默认顺序

### 顺序列表
1. el

2. name
3. components
4. directives
5. filters
6. filters
7. extends
8. mixins
9. data
10. computed
11. watch
12. methods
13. template/render
14. renderError

## 元素特性的顺序
> 元素 (包括组件) 的特性应该有统一的顺序。

### 顺序列表
1. is

2. v-for
3. v-if
4. v-else-if
5. v-else
6. v-show
7. v-cloak
8. v-pre
9. v-once
10. id
11. ref
12. key
13. slot
14. v-model
14. v-on
14. v-html
14. v-text




## 组件/实例选项中的空行
> 在多个属性之间增加一个空行，这让代码看起来爽点, 应该是强迫症吧。

```javascript
// 好例子
props: {
  value: {
    type: String,
    required: true
  },

  focused: {
    type: Boolean,
    default: false
  },

  label: String,
  icon: String
},

computed: {
  formattedValue: function () {
    // ...
  },

  inputClasses: function () {
    // ...
  }
}

// 没有空行在组件易于阅读和导航时也没问题。
props: {
  value: {
    type: String,
    required: true
  },
  focused: {
    type: Boolean,
    default: false
  },
  label: String,
  icon: String
},
computed: {
  formattedValue: function () {
    // ...
  },
  inputClasses: function () {
    // ...
  }
}

```

## 单文件组件的顶级元素的顺序
> 单文件组件应该总是让script、template  "和 style 标签的顺序保持一致。且 style 要放在最后，因为另外两个标签至少要有一个。


```html
<-- 错误 -->
<style>/* ... */</style>
<script>/* ... */</script>
<template>...</template>

<!-- ComponentA.vue -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>

<!-- ComponentB.vue -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>


<-- 正确 -->
<!-- ComponentA.vue -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>

<!-- ComponentB.vue -->
<script>/* ... */</script>
<template>...</template>
<style>/* ... */</style>

<!-- ComponentA.vue -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>

<!-- ComponentB.vue -->
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>

```
## 简单说明

> 因为 javascript 语言是弱类型语言,写法和定义比较随意.

> 以上只是规则, 务必遵守
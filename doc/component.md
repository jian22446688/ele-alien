## 组件说明


### 组件列表

- VueAudio
- CSuperTable
- c-tiele
- CPhotoPreview
- CSuperTool
- CSuperQuery


## VueAudio

```html

<VueAudio url="https://test.com/test.mp3"></VueAudio>

```

### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| src | 音频地址 | 'String' | — | — |
- - -



## CSuperTable 数据表格分页组件

```javascript

let option = {}

// 继承之 Table Attributes
option.tableOption: {
  stripe: false
}

option.tableHeader: [
  {
    type: 'index',
    label: '#',
    prop: 'date',
    width: '60',
    sortable: false,
    align: 'left',
    callback: Funtion
  }
]

// 表格最后一列数据操控

// 1.参控按钮优先显示 icon 属性 其次显示 text 属性，
//   简单的说就是需要需要显示 text 属性请不要设置 icon 属性
// 2.type属性是根据 el-button 的 type 属性 
//   特殊属性: 
//   type设置了 image 属性表格中会呈现出图片的图标,
//   点击事件回调组件的 clickImage 事件 
// 3.需要操作控制的时候,不要传入prop值切记
{
  label: '操作', 
  width: '120',
  control: {
    delete: {
      type: 'text',
      text: '删除',
      icon: 'lajitong'
    },
    check: {
      type: 'text',
      icon: 'chakan',
      text: '查看'
    },
    edit: {
      type: 'text',
      icon: 'ai-edit',
      text: '编辑'
    }
  },
},

// 分页属性
option.pagination: {
  small: false,
  background: false,
  pageCount: 0,
  pagerCount: 7,
  layout: 'total, sizes, prev, pager, next, jumper',
  pageSizes: [20, 30, 50, 100],
  prevText: '',
  nextText: '',
  disabled: false,
  hideSinglePage: false,
  isRefreshButton: false // 是否显示刷新按钮
}

// 导出数据头

option.exportHeader: [
  {
    label: '#',
    prop: 'date'
  },
  {
    label: '名字',
    prop: 'name'
  },
]

```


### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| tableInterface | 必须要传入的 | Promise | — | — |
| options | 表格中的所有的设置都在这里面 | object | — | object |
- - -

### 表头属性 type
| 参数      | 说明          | 类型    | 默认值  |
|--------- |-------------- |------- |-------- |
| index | 显示表格的序号 | string | — |
| selection | 显示多选框 | string | — |
| image | 在表格中显示图片的图标可打开图片查看器 | string | — |
| link | 在表格文字现在连接,可传入一个 Callback属性, 类型function | string | — |
| tooltip | 鼠标移动到单元格中提示信息 | string | — |
| filter | 自定义属性 | string | — |
| audio | 表格中播放音频 | string | — |
| html | 自定义html代码 | string | — |
- - -

### 表头特殊属性 type
| 参数      | 说明          | 类型    | 默认值  |
|--------- |-------------- |------- |-------- |
| 通用属性 | — | — | — |
| width | 列的宽度 | string | — |
| label | 表格头的文字 | string | — |
| prop | 对应的数字字段 | string | — |
| sortable | 可现实排序按钮 | string | — |
| index | — | — | — |
| — | — | — | — |
| selection | — | — | — |
| — | — | — | — |
| image | — | — | — |
| — | — | — | — |
| link | — | — | — |
| color | 显示的颜色 | primary / success / warning / danger / info | default |
| underline | 是否下划线 | boolean | true |
| disabled | 是否禁用状态 | boolean | false |
| icon | 图标类名,只支持element中的 | string | — |
| callback | 点击链接回调方法 | function回调参数[index, row] | — |
| — | — | — | — |
| tooltip | — | — | — |
| — | — | — | — |
| tipValue | 提示框中显示的的字段名 | — | — |
| — | — | — | — |
| filter | 自定义属性 | string | — |
| — | — | — | — |
| callback | 处理单个参数,接受参数[row] | Funtion | — |
| — | — | — | — |
| audio | 表格中播放音频 | string | — |
| — | — | — | — |
| callback | 处理音频参数,接受参数[row] | Funtion | — |
| — | — | — | — |
| html | 自定义html代码 | string | — |
| — | — | — | — |
| callback | 自定义html代码,接受参数[row] | Funtion | — |
| — | — | — | — |
- - -


### 事件
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| check | 点击 操作中的查看按钮时触发 | index, row |
| edit |  点击 操作中的编辑按钮 | index, row |
| delete |  点击 操作中的删除按钮 | index, row |
| selection |  表格中选择多条数据返回数组 | [row] |
| clickImage |  表格中点击图片图标 | index, row |
| current-change |  表格中选中项回调 | row, cloumn |
- - -

### CSuperTable slot
| name | 说明 |
|---------- |-------- |
| tableHeader | 插入表格最前面的头自定义元素 |
- - -

### 对象公共方法
| 事件名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| updateList | 更新数据使用 | 请求参数,用于条件查询 |
| getSelectionList |  选择表格数据的列表 | — |
| exportData |  导出数据直接导出Excel | — |
| exprotMultipe |  导出多数据pageSize:9999999 | — |
| showImage |  显示图片需要传入图片的url | url |
| addHeader |  添加数据表头 | object |
- - -

## c-tiele

获取页面标题

```html
  <c-tiele/>
```
- - -


## CPhotoPreview

图片查看器,全局组件

```html
  <CPhotoPreview v-model="imagePreviewVisible" :imgs="imagePreviewValue"/>
```
- - -


### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 必须要传入的用于显示和隐藏弹出框 | Boolean | — | false |
| imgs | 图片的url | String/Array | — | '' |


## CSuperTool

超强搜索按钮组集合组件


![img](../screenshots/super-tool.png)
* 使用实例

```html

<c-super-tool ref="supertool" :options="btnOptions">
  <super-test slot="superTest"/>
  <super-test slot="superTesta"/>
</c-super-tool>

```

```javascript

btnOptions: {
  btns: [
    {
      name: 'btn_1',                // 按钮的名字, 没有特别大的意义,用于区分key,
      type: '',                     // 继承element-ui中 el-button type
      tip: '平常按钮',               // 按钮鼠标移上出现的提示的文字
      icon: null,                   // 使用 iconfont-阿里巴巴图标可以传入图标名称
      eicon: 'el-icon-edit',        // 使用 element-ui 中的图标,icon和eicon都有的情况,优先使用这个.
      callback: () => {},           // 按钮点击事件 
      component: 'superTest',       // 点击按钮出现, 自定义弹出框
      delete: { title: '是否删除!' } // 点击按钮出现, 选择提示框 
    },
    
  ]
}

```



### 属性
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| options | 超强按钮组中的所有的设置都在这里面 | object | — | object |
- - -


### 属性 options.btns
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| name | 按钮的名字, 没有特别大的意义,用于区分key | string | — | super_btns_index |
| type | 继承element-ui中 el-button type | string | primary / success / warning / danger / info / text | super_btns_index |
| tip | 按钮鼠标移上出现的提示的文字 | string | — | — |
| icon | 使用 iconfont-阿里巴巴图标可以传入图标名称 | string | — | — |
| eicon | 使用 element-ui 中的图标,icon和eicon都有的情况,优先使用这个 | string | — | — |
| callback | 按钮点击事件 | function | — | — |
| component | 点击按钮出现, 自定义弹出框,必须要和slot中的name一样,并且不能重复 | string | — | — |
| delete | 点击按钮出现, 选择提示框 | object | — | — |
- - -

### 事件
| 事件名称 | 说明 | 回调参数 |
|---------- |-------- |---------- |
| input-search | 点击搜索触发 | value |
- - -

### 对象公共方法
| 方法名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| setBtnActive | 更新按钮状态, 只支持显示出来的按钮, 隐藏的按钮不可以 | [btn, boolean] |

- - -


## CSuperQuery

超强创建form元素


### CSuperQuery type
| 参数      | 说明          | 类型    | 默认值  |
|--------- |-------------- |------- |-------- |
| radio | 单选组件 | string | — |
| radio-button | 单选按钮组 | string | — |
| checkbox | 多选组件 | string | — |
| checkbox-button | 多选的按钮组 | string | — |
| input | 输入框 | string | — |
| input-number | 数字输入框 | string | — |
| datepicker | 时间选择器 | string | — |
| select-page | 带有分页的选择器 | string | — |
| cascader | 多级联动 | string | — |
| slot | 可以放入自定义的组件 | string | — |

- - -


### 对象公共方法
| 方法名称 | 说明 | 参数 |
|---------- |-------- |---------- |
| setFormValue | 设置某个表单value | [name, val] |
| setFormEdit | 设置某个表单字段属性 | [name, val] |

- - -


## CSelectPage

select组件添加了数据表格分页效果
表格组件完全基于 CSuperTable

### props
| 参数      | 说明          | 类型    | 默认值  |
|--------- |-------------- |------- |-------- |
| value | vue中的 v-model | string | — |
| option | 组件属性 | object | — |
| tableInterface | 数据接口 | function | — |
| tableHeader | 表格表头, | array | — |

- - -

### option 属性
| 参数      | 说明          | 类型    | 默认值  |
|--------- |-------------- |------- |-------- |
| placeholder | 输入框中未输入的文字 | string | — |
| idField | 需要返回的字段属性 | string | — |
| label | 选中数据表格中的字段名字 | string | — |
| filterName | 可搜索的字段 | string | — |
| filterable | 是否可以搜索 | string | — |
| callback | 选中行的回调 | string | [row, cloumn] |


- - -

// option: {
//       placeholder: '请选择',
//       idField: '',
//       label: ''
//       filterName
//     },

### End
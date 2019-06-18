<template>
  <div class="super-table">
    <slot name="tableHeader"/>
    <el-table
      v-loading="tableLoading"
      :data="getTableList"
      :stripe="getOptionTable.stripe"
      :border="getOptionTable.border"
      :size="getOptionTable.size"
      :fit="getOptionTable.fit"
      :height="getOptionTable.height"
      :max-height="getOptionTable.maxHeight"
      :show-header="getOptionTable.showHeader"
      :highlight-current-row="getOptionTable.highlightCurrentRow"
      :empty-text="getOptionTable.emptyText"
      row-key="id"
      @current-change="handleTableCurrentChange"
      @selection-change="handleSelectionChange">
      <template v-for="item in getOptionTableHeader">
        <el-table-column
          v-if="item.control"
          :key="item.hid"
          :sortable="item.sortable"
          :type="item.type"
          :label="item.label"
          :prop="item.prop"
          :width="item.width"
          :align="item.align">
          <template slot-scope="scope">
            <el-button
              v-if="item.control.check"
              type="text"
              class="c-control-btn cc-margin-l-0"
              @click="handleCheck(scope.$index, scope.row)">
              {{ item.control.check.icon ? '' : item.control.check.text }}
              <svg-icon v-if="item.control.check.icon" :icon-class="item.control.check.icon"/>
            </el-button>
            <el-button
              v-if="item.control.edit"
              type="text"
              class="c-control-btn cc-margin-l-0"
              @click="handleEdit(scope.$index, scope.row)">
              {{ item.control.edit.icon ? '' : item.control.edit.text }}
              <svg-icon v-if="item.control.edit.icon" :icon-class="item.control.edit.icon"/>
            </el-button>
            <c-btn-tip
              v-if="item.control.delete"
              :type="item.control.delete.type"
              :title="item.control.delete.title"
              :icon-class="{ 'c-control-btn': true }"
              class="c-control-btn"
              @confirm="handleDelete(scope.$index, scope.row)">
              {{ item.control.delete.icon ? '' : item.control.delete.text }}
              <svg-icon v-if="item.control.delete.icon" :icon-class="item.control.delete.icon"/>
            </c-btn-tip>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'image'"
          :key="item.hid"
          :sortable="item.sortable"
          :type="item.type"
          :label="item.label"
          :prop="item.prop"
          :width="item.width">
          <template slot-scope="scope">
            <el-button
              type="text"
              class="c-control-btn cc-margin-l-0"
              icon="el-icon-picture"
              @click="handleClickImage(scope.row, item.prop, item.callback)"/>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'audio'"
          :key="item.hid"
          :sortable="item.sortable"
          :type="item.type"
          :label="item.label"
          width="200">
          <template slot-scope="scope">
            <!-- https://wdd.js.org/element-audio/static/falling-star.mp3 -->
            <vue-audio :src="handleAudioCallback(scope.row, item.prop, item.callback)"/>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'index'"
          :key="item.hid"
          :sortable="item.sortable"
          :label="item.label"
          :width="item.width">
          <template slot-scope="scope">
            {{ (currentPage - 1) * pageSize + scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'link'"
          :key="item.hid"
          :sortable="item.sortable"
          :label="item.label"
          :width="item.width">
          <template slot-scope="scope">
            <el-link
              :type="item.color"
              :disabled="item.false"
              :icon="item.icon"
              :underline="item.underline"
              @click.native="{{ item.callback ? item.callback(scope.$index, scope.row)
                : handleLinkClick(scope.$index, scope.row)}}">{{ scope.row[item.prop] }}</el-link>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'tooltip'"
          :key="item.hid"
          :sortable="item.sortable"
          :label="item.label"
          :width="item.width">
          <template slot-scope="scope">
            <el-tooltip v-if="item.tipValue" :content="scope.row[item.tipValue]" effect="dark" placement="top">
              <span>{{ scope.row[item.prop] }}</span>
            </el-tooltip>
            <div v-else>
              {{ scope.row[item.prop] }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'filter'"
          :key="item.hid"
          :sortable="item.sortable"
          :label="item.label"
          :width="item.width">
          <template slot-scope="scope">
            <div>
              {{ handleFilter(scope.row, item.callback) }}
            </div>
          </template>
        </el-table-column>
        <el-table-column
          v-else-if="item.type === 'html'"
          :key="item.hid"
          :sortable="item.sortable"
          :label="item.label"
          :width="item.width">
          <template slot-scope="scope">
            <div v-html="handleHtmlCallback(scope.row, item.callback)"/>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="item.hid"
          :sortable="item.sortable"
          :type="item.type"
          :label="item.label"
          :prop="item.prop"
          :width="item.width"/>
      </template>
    </el-table>
    <div class="pagination clearfix">
      <el-pagination
        :small="getOptionPagination.small"
        :background="getOptionPagination.background"
        :page-count="getOptionPagination.pageCount"
        :pager-count="getOptionPagination.pagerCount"
        :layout="getOptionPagination.layout"
        :prev-text="getOptionPagination.prevText"
        :next-text="getOptionPagination.nextText"
        :disabled="getOptionPagination.disabled"
        :hide-on-single-page="getOptionPagination.hideSinglePage"
        :current-page="currentPage"
        :page-sizes="getOptionPagination.pageSizes"
        :page-size="pageSize"
        :total="pageTotal"
        @size-change="handlePageSize"
        @current-change="handleCurrentChange"/>
    </div>
    <div
      v-if="getOptionPagination.isRefreshButton"
      style="margin-right: 10px"
      class="pagination clearfix">
      <el-button
        type="text"
        icon="el-icon-refresh"
        class="refresh c-control-btn"
        @click="handleRefreshClick"/>
    </div>
    <!-- 图片查看器 -->
    <CPhotoPreview v-model="imagePreviewVisible" :imgs="imagePreviewValue"/>
  </div>
</template>

<script>
/* 表格加分页组件详情
  必须要的参数 *
  * tableInterface  返回定义的接口 Promise 对象
  * options         常用的设置 {} 对象
  * small: false,
    background: false,
    pageCount: 0,
    pagerCount: 7,
    layout: 'total, sizes, prev, pager, next, jumper',
    pageSizes: [20, 30, 50, 100],
    prevText: '',
    nextText: '',
    disabled: false,
    hideSinglePage: false
  Slot name="tableheader"
*/

/**
 * 如果target(也就是FirstOBJ[key])存在，
 * 且是对象的话再去调用deepObjectMerge，
 * 否则就是FirstOBJ[key]里面没这个对象，需要与SecondOBJ[key]合并
 */
function deepObjectMerge(FirstOBJ, SecondOBJ) { // 深度合并对象
  for (var key in SecondOBJ) {
    if (FirstOBJ) {
      FirstOBJ[key] = FirstOBJ[key] && FirstOBJ[key].toString() === '[object Object]'
        ? deepObjectMerge(FirstOBJ[key], SecondOBJ[key]) : FirstOBJ[key] = SecondOBJ[key]
    }
  }
  return FirstOBJ
}

// 用于生成uuid
function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}
function guid() {
  return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4())
}

import { parseTime } from '@/utils/index.js'
export default {
  components: {},
  props: {
    tableInterface: {
      type: Function,
      default: null,
      required: true
    },
    options: {
      type: Object,
      required: false,
      default: null
    }
  },
  data() {
    return {
      option: {},
      tableLoading: false,
      multipleSelection: [],
      result: null,
      tableData: [],
      queryData: {},
      // imgPreview
      imagePreviewVisible: false,
      imagePreviewValue: '',
      // pagination
      currentPage: 1,
      pageSize: 20,
      pageTotal: 0
    }
  },
  computed: {
    getOptionTableHeader() {
      this.option.tableHeader.map((t, i) => {
        if (!t.hid) t.hid = 't_h_' + i
      })
      return this.option.tableHeader
    },
    getOptionPagination() {
      return this.option.pagination
    },
    getOptionTable() {
      return this.option.tableOption
    },
    getTableList() {
      let result = this.result ? this.result.items : undefined
      if (result) {
        result.forEach(e => {
          if (e.id === undefined) e.id = guid()
        })
      }
      return result
    }
  },
  created() {
    let defaultOption = {
      queryHeader: {
        isReset: true,
        input: [
          {
            type: 'input'
          }
        ]
      },
      exportHeader: null,
      tableOption: {
        stripe: false,
        border: false,
        size: null,
        fit: true,
        showHeader: true,
        highlightCurrentRow: false,
        emptyText: '暂无数据'
      },
      tableHeader: [
        {
          type: 'index',
          label: '#',
          prop: 'index',
          width: '60',
          sortable: false,
          align: 'left'
        },
        {
          type: null,
          label: '日期',
          prop: 'date',
          width: '180',
          sortable: true,
          align: 'left'
        }
      ],
      pagination: {
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
        isRefreshButton: false
      }
    }
    this.option = deepObjectMerge(defaultOption, this.options)
    this.init(1)
  },
  methods: {
    init(obj) {
      let p = typeof obj === 'object' ? 1 : obj
      let params = { pageSize: this.pageSize, page: p || this.currentPage }
      if (typeof obj === 'object') params = deepObjectMerge(params, obj)
      this.queryData = Object.assign(this.queryData, params)
      this.tableLoading = true
      this.tableInterface(this.queryData).then(res => {
        this.result = res.data
        this.currentPage = this.result.page
        this.pageTotal = this.result.total
        // 使用了 elementui 中的 el-scrollbar 刷新滚动条
        this.$store.commit('SET_APP_SCROLLBAR')
        this.tableLoading = false
      }).catch(err => {
        console.log(err)
        this.tableLoading = false
      })
    },

    /** 所有的对外开放公共方法 **/
    /** **************************/
    /**
     * 更新数据以及条件查询 {}
     */
    updateList(obj = 1) {
      this.queryData = {}
      this.init(obj)
    },
    getDataList() {
      return this.result
    },
    getSelectionList() {
      return this.multipleSelection
    },
    getTableHeader() {
      if (this.option.exportHeader) return this.option.exportHeader
      return this.option.tableHeader
    },
    /**
     * 添加数据表头
     * this.$refs.myTable.addHeader({ label: '团队建设啊', prop: 'TDJS' })
     */
    addHeader(obj) {
      if (typeof obj !== 'object') {
        console.error('super_table add header error')
        return
      }
      let headerArr = this.option['tableHeader']
      let time = new Date()
      headerArr.splice(headerArr.length - 1, 0, Object.assign(obj, { hid: 't_h_' + time.getTime() }))
    },

    /** 过滤方法 ***/
    /** *******************/
    handleFilter(row, callback) {
      if (callback) return callback(row)
      return 'filter empty'
    },
    handleAudioCallback(row, prop, callback) {
      if (callback) return callback(row)
      return row[prop]
    },
    handleHtmlCallback(row, callback) {
      if (callback) return callback(row)
      return 'html empty'
    },

    /** 所有的事件方法 ***/
    /** *******************/
    handleSelectionChange(val) {
      this.multipleSelection = val
      this.$emit('selection', val)
    },
    handleDelete(index, row) {
      this.$emit('delete', index, row)
    },
    handleCheck(index, row) {
      this.$emit('check', index, row)
    },
    handleEdit(index, row) {
      this.$emit('edit', index, row)
    },
    handleClickImage(row, prop, callback) {
      if (callback) {
        this.imagePreviewVisible = true
        this.imagePreviewValue = callback(row)
        return
      }
      if (prop) {
        this.imagePreviewVisible = true
        this.imagePreviewValue = row[prop]
        return
      }
      console.error('images url empty')
    },
    handleTableCurrentChange(row, cloumn) {
      this.$emit('current-change', row, cloumn)
    },
    showImage(url = '') {
      this.imagePreviewVisible = true
      this.imagePreviewValue = url
    },
    handleLinkClick() {
      console.error('link callback empty')
    },
    handlePageSize(size) {
      this.currentPage = 1
      this.pageSize = size
      this.init(1)
    },
    handleCurrentChange(value) {
      this.currentPage = value
      this.init()
    },
    handleRefreshClick() {
      this.updateList()
    },
    exportData() {
      this.onExportExcel(this.multipleSelection)
    },
    exprotMultipe() {
      let params = { pageSize: 9999999, page: 1 }
      this.queryData = Object.assign(this.queryData, params)
      this.tableInterface(this.queryData).then(res => {
        let result = res.data.items
        this.onExportExcel(result)
      }).catch(err => {
        console.log(err)
      })
    },
    onExportExcel(list) {
      // TODO 导出数据
      if (list.length < 1) {
        this.$message({ type: 'warning', message: '请选择要导出的数据' })
        return
      }
      list = list.map((obj, i) => {
        obj.id = (i + 1) + ''
        return obj
      })
      import('@/vendor/Export2Excel').then(excel => {
        let exportData = {}
        exportData.id = '序号'
        let header = this.getTableHeader()
        header.forEach(it => {
          if (!(it.type && it.type === 'image') && it.prop) {
            exportData[it.prop] = it.label
          }
        })
        const data = this.formatJson(Object.keys(exportData), list)
        excel.export_json_to_excel({
          header: Object.values(exportData),
          data,
          filename: 'excel-' + parseTime(new Date()),
          autoWidth: this.autoWidth,
          bookType: this.bookType
        })
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'timestamp') {
          return parseTime(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}

</script>
<style lang='scss' scoped>
  .super-table {
    width: 100%;
    height: 100%;
  }
  .clearfix {
    &:after {
      visibility: hidden;
      display: block;
      font-size: 0;
      content: " ";
      clear: both;
      height: 0;
    }
  }
  .pagination {
    float: right;
    margin-bottom: 16px;
    margin-top: 20px;
  }
  .refresh {
    padding-top: 4px;
    padding-bottom: 2px;
  }
  .image-preview {
    position: relative;
    user-select: none;
    width: 960px;
    height: 560px;
    text-align: center;
    .img-defalut {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

</style>

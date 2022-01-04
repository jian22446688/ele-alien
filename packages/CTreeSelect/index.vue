<!--
 * @Description: 树形选择器
 * @Author: Cary
 * @Date: 2019-08-27 08:59:33
 -->
<template>
  <el-select
    ref="myElSelect"
    v-model="selectLable"
    :clearable="clearable"
    :collapse-tags="collapseTags"
    :filter-method="handleSelectFilterMethod"
    :filterable="filterable && !multiple"
    :multiple="multiple"
    :placeholder="placeholder"
    @clear="clearHandle"
    @remove-tag="handleMultipleRemoveTag"
  >
    <el-option
      v-show="false"
      label="label-c-tree-select"
      value="_value-c-tree-select"
    />
    <template v-if="multiple">
      <template v-for="item in tempOption">
        <el-option
          v-show="false"
          :key="item[props.value]"
          :label="item[props.label]"
          :value="item[props.value]"
        />
      </template>
    </template>
    <el-scrollbar ref="scrollbar" :noresize="false" tag="div">
      <el-tree
        ref="selectTree"
        :accordion="false"
        :data="options"
        :default-expanded-keys="defaultExpandedKey"
        :expand-on-click-node="false"
        :filter-node-method="filterNode"
        :node-key="props.value"
        :props="props"
      >
        <div slot-scope="{ node, data }" class="custom-tree-node">
          <div
            style="padding: 2px 4px"
            class="el-tree-node__label"
            :class="{
              'el-tag': node['isActive'],
              isDisabled: node['disabled'],
            }"
            @click="handleTreeItemClick(node, data)"
          >
            {{ node.label }}
          </div>
        </div>
      </el-tree>
    </el-scrollbar>
  </el-select>
</template>

<script>
  const isArray = (val) =>
    Object.prototype.toString.call(val) === '[object Array]'

  export default {
    name: 'CTreeSelect',
    props: {
      value: {
        type: [Array, String, Number],
        default: '',
      },

      props: {
        type: Object,
        default: () => {
          return {
            value: 'id',
            label: 'title',
            children: 'children',
          }
        },
      },

      placeholder: {
        type: String,
        default: '请选择',
      },

      options: {
        type: Array,
        default: () => [],
      },

      clearable: {
        type: Boolean,
        default: true,
      },

      filterable: {
        type: Boolean,
        default: false,
      },

      multiple: {
        type: Boolean,
        default: false,
      },

      collapseTags: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        selectval: undefined,
        selectLable: undefined,
        defaultExpandedKey: [],
        filterText: '',
        multipleOptionList: [],
        multipleOptionKeys: [],
        tempOption: [],
        myTree: null,
        ids: [],
      }
    },
    watch: {
      value(nval) {
        this.selectval = nval
        this.initHandle()
      },
      filterText(val) {
        this.$refs.selectTree.filter(val)
      },
    },
    created() {
      let tarr = []
      const trreToFlat = (arr) => {
        arr.map((e) => {
          let te = JSON.parse(JSON.stringify(e))
          e[this.props['children']] && trreToFlat(e[this.props['children']])
          delete te[this.props['children']]
          tarr.push(te)
        })
      }
      trreToFlat(this.options)
      this.tempOption = tarr
      this.selectval = this.value
    },
    mounted() {
      this.myTree = this.$refs.selectTree
      this.initHandle()
    },
    beforeDestroy() {
      this._isActiveNode(this._tempCurrentVal, false)
    },
    methods: {
      initHandle() {
        if (this.multiple) {
          if (!isArray(this.selectval)) {
            throw new Error('c-tree-select value In multiple must be a Array')
          }
          this.defaultExpandedKey = this.selectval
          isArray(this.selectval) &&
            this.selectval.map((e) => {
              this._isActiveNode(e, true)
            })
        } else {
          
          if (this._tempCurrentVal !== undefined) this._isActiveNode(this._tempCurrentVal, false)
          this._tempCurrentVal = this.selectval
          this._isActiveNode(this.selectval, true)
          this.defaultExpandedKey = [this.selectval]
        }
      },

      clearHandle() {
        this.defaultExpandedKey = []
        isArray(this.tempOption) &&
          this.tempOption.map((e) => {
            this._isActiveNode(e, false)
          })
        this.$emit('clear')
      },

      filterNode(value, data) {
        if (!value) return true
        return data[this.props.label].indexOf(value) !== -1
      },

      handleSelectFilterMethod(val) {
        this.myTree.filter(val)
      },

      handleMultipleRemoveTag(val) {
        this._isActiveNode(val, false)
        this.$emit('remove-tag', val)
      },

      handleTreeItemClick(node, data) {
        if (node['disabled']) return
        if (this.multiple) {
          // todo 多选状态
          let _isactive = !node['isActive']
          this.$set(node, 'isActive', _isactive)
          if (!isArray(this.selectval)) {
            throw new Error('c-tree-select value In multiple must be a Array')
          }
          this.selectval = this.selectval.filter((e) => node['key'] !== e)
          _isactive && this.selectval.push(node['key'])
        } else {
          // todo 单选状态
          this.selectval = node['key']
          this.selectLable = node['label']
          if (this.selectval !== this._tempCurrentVal) {
            this._isActiveNode(this._tempCurrentVal, false)
            this._tempCurrentVal = this.selectval
          }
        }
        this.$emit('change', data)
        this.$emit('input', this.selectval)
        !this.multiple && this.$refs['myElSelect'].handleClose()
      },

      _isActiveNode(val, isActive) {
        let _node = this.myTree.getNode(val)
        this.selectLable = _node['label']
        _node && this.$set(_node, 'isActive', isActive)
      },
    },
  }
</script>
<style lang="scss" scoped>
  .custom-tree-node {
    width: 100%;
    margin-right: 10px;
    .el-tree-node__label {
      padding: 0;
    }
    .el-tag {
      display: block;
      height: auto;
      line-height: 1.3;
      font-size: 14px;
      padding: 0;
    }
    .isDisabled {
      color: #d5d9db;
      cursor: not-allowed;
    }
  }
</style>

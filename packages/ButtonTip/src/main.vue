<template>
  <div>
    <el-popover placement="top" :width="width" v-model="visable">
      <p>{{title}}</p>
      <div style="text-align: right; margin: 0">
        <el-button size="mini" type="text" @click="tipHandleCancel">{{cancel}}</el-button>
        <el-button type="primary" size="mini" @click="tipHandleConfirm">{{confirm}}</el-button>
      </div>
      <button
        slot="reference"
        class="el-button"
        @click="handleClick"
        :disabled="buttonDisabled || loading"
        :autofocus="autofocus"
        :type="nativeType"
        :class="[
          type ? 'el-button--' + type : '',
          buttonSize ? 'el-button--' + buttonSize : '',
          {
            'is-disabled': buttonDisabled,
            'is-loading': loading,
            'is-plain': plain,
            'is-round': round,
            'is-circle': circle
          }
        ]">
        <i class="el-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <span v-if="$slots.default"><slot></slot></span>
      </button>
    </el-popover>
  </div>
</template>

<script>
export default {
  name: "CButtonTip",
  inject: {
    elForm: {
      default: ''
    },
    elFormItem: {
      default: ''
    }
  },
  data () {
    return {
      visable: false
    }
  },
  props: {
    title: {
      type: String,
      default: '是否删除？'
    },
    cancel: {
      type: String,
      default: '取消'
    },
    confirm: {
      type: String,
      default: '确定'
    },
    width: {
      type: Number,
      default: 160
    },
    type: {
        type: String,
        default: 'default'
      },
    size: String,
    icon: {
      type: String,
      default: ''
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    autofocus: Boolean,
    round: Boolean,
    circle: Boolean
  },

  computed: {
    _elFormItemSize() {
      return (this.elFormItem || {}).elFormItemSize;
    },
    buttonSize() {
      return this.size || this._elFormItemSize || (this.$ELEMENT || {}).size;
    },
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    }
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
    tipHandleConfirm(evt) {
      this.visable = false
      this.$emit('confirm', evt);
    },
    tipHandleCancel(evt) {
      this.visable = false
      this.$emit('cancel', evt);
    }
  }
};
</script>
<style lang='scss' scoped>
</style>
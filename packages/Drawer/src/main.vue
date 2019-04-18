<template>
  <div 
    ref="drawerPanel" 
    :class="{'c-drawer-show':value}" 
    class="drawer-panel-container">
    <div
      @click="closeSidebar"
      class="drawer-panel-background" />
    <div 
      :style="{width: width + 'px'}"
      :class="{'drawer-panel': true, 'drawer-panel-left': placement=='left'}">
      <div 
        v-if="showHeader"
        class="c-drawer-header">
        <slot 
          name="title">
          <span 
            class="c-drawer-title">{{ title }}</span>
        </slot>
        <button
          type="button"
          class="c-drawer-closebtn"
          aria-label="Close"
          v-if="showClose"
          @click="handleClose">
          <i class="el-icon el-icon-close"></i>
        </button>
      </div>
      <div :class="showHeader ? 'c-drawer-body-t':'c-drawer-body'">
        <el-scrollbar 
          :view-style="{height: showHeader ? 'calc(100vh - 65px)':'calc(100vh - 16px)'}">
          <slot />
        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>

const hasClass = function(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
}
const addClass = function(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += ' ' + cls
}
const removeClass = function(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp('(\\s|^)' + cls + '(\\s|$)')
    ele.className = ele.className.replace(reg, '')
  }
}

export default {
  name: 'CDrawer',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    value: Boolean,
    width: {
      default: 260,
      type: Number
    },
    placement: {
      type: String,
      default: 'right'
    },
    showHeader: {
      type: Boolean,
      default: true
    },
    showClose: {
      type: Boolean,
      default: true
    },
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    native: Boolean,
    wrapStyle: {},
    wrapClass: {},
    viewClass: {},
    viewStyle: {},
    noresize: Boolean, // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    tag: {
      type: String,
      default: 'div'
    }
  },
  data() {
    return { }
  },
  computed: {
    
  },
  watch: {
    value(value) {
      if (value) {
        this.$emit('open')
        this.addEventClick()
        addClass(document.body, 'drawer-right-panel')
      } else {
        removeClass(document.body, 'drawer-right-panel')
      }
    }
  },
  mounted() {
    this.insertToBody()
  },
  beforeDestroy() {
    const elx = this.$refs.drawerPanel
    elx.remove()
  },
  methods: {
    hanldeshow(value) {
    },
    handleClose() {
      this.$emit('input', false)
    },
    addEventClick() {
      this.$el.addEventListener('click', this.closeSidebar)
    },
    closeSidebar(evt) {
      if(!this.closeOnClickModal) return
      const parent = evt.target.closest('.drawer-panel')
      if (!parent) {
        this.$emit('input', false)
        this.$emit('close')
        this.$el.removeEventListener('click', this.closeSidebar)
      }
    },
    insertToBody() {
      const elx = this.$refs.drawerPanel
      const body = document.querySelector('body')
      body.insertBefore(elx, body.firstChild)
      this.addEventClick()
    }
  }
}
</script>

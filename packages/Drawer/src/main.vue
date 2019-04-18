<template>
  <div 
    ref="drawerPanel" 
    :class="{'show':value}" 
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

<style>
.drawer-right-panel {
  overflow: hidden;
  position: relative;
  width: calc(100% - 15px);
}
</style>

<style lang="scss" scoped>

.c-drawer-header {
    position: relative;
    padding: 15px 15px 10px;
  .c-drawer-title {
    line-height: 24px;
    font-size: 16px;
    color: #303133;
  }
  .c-drawer-closebtn {
    float: right;
    padding: 0;
    background: 0 0;
    border: none;
    outline: 0;
    cursor: pointer;
    font-size: 16px;
    line-height: 25px;
  }
  .c-drawer-closebtn:hover {
    color: #409EFF
  }
}

.c-drawer-body-t {
  height: calc(100vh - 49px);
}
.c-drawer-body {
  height: 100vh;
}

.drawer-panel-background {
  opacity: 0;
  transition: opacity .3s cubic-bezier(.7, .3, .1, 1);
  background: rgba(0, 0, 0, .3);
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  position: fixed;
  z-index: -1;
}
.drawer-panel {
  background: #fff;
  z-index: 3000;
  position: fixed;
  height: 100vh;
  width: 100%;
  max-width: 260px;
  top: 0px;
  left: 0px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, .05);
  transition: all .25s cubic-bezier(.7, .3, .1, 1);
  transform: translate(100%);
  z-index: 40000;
  left: auto;
  right: 0px;
}

.drawer-panel-left {
  left: 0px;
  right: auto;
  transform: translate(-100%);
}

.show {
  transition: all .3s cubic-bezier(.7, .3, .1, 1);
  .drawer-panel-background {
    z-index: 20000;
    opacity: 1;
    width: 100%;
    height: 100%;
  }
  .drawer-panel {
    transform: translate(0);
  }
}

</style>
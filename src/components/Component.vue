<template>
  <div>
    <div class="porject-item">
      <c-button-tip>测试</c-button-tip>
    </div>
    <div class="porject-item">
      <el-button type="primary" @click="handleConfirmBox">ConfirmBox</el-button>
    </div>

    <c-drawer v-model="isdrawer" :showHeader="true" placement="right" @visable="handleShow">
      <div style="padding-bottom: 16px">
        <el-button type="primary" @click="isdrawer = false">test</el-button>
      </div>
    </c-drawer>

    <div class="porject-item">
      <el-button type="primary" @click="isdrawer = !isdrawer">CDrawer</el-button>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      isdrawer: true,
    }
  },
  watch: {
  
  },
  computed: {},
  mounted() {},
  methods: {
    handleShow(vla) {
      
    },
    handleConfirmBox() {
      this.$cConfrimBox({
        title: 'ConfirmBox',
        component: myComponent,
        confirmValidate: (action, instace, done) => {
          // 返回的就是 myComponent 组件实例
          done()
        }
      }).then(() => {
      }).catch(() => {
      })
    }
  }
}

const myComponent = {
  name: 'myComponent',
  data() {
    return {
      checked: false,
      title: 'Check me',
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
</script>
<style>
  .customdia {
    margin: 0 auto !important;
    height: 100%;
    width: 260px;
    right: 0;
    position: absolute !important;
  }
</style>


<style lang='scss' scoped>
.porject-item {
  margin: 16px;
}

</style>

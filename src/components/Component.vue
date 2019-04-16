<template>
  <div>
    <c-button-tip>测试</c-button-tip>

    <el-button type="primary" @click="handleConfirmBox">ConfirmBox</el-button>

  </div>
</template>

<script>

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

export default {
  components: {},
  data() {
    return {
    }
  },
  computed: {},
  mounted() {},
  methods: {
    handleConfirmBox() {
      this.$cConfrimBox({
        title: 'ConfirmBox',
        component: myComponent,
        confirmValidate: (action, instace, done) => {
          // 返回的就是 myComponent 组件实例
          console.log(instace)
          done()
        }
      }).then(() => {
      }).catch(() => {
      })
    }
  }
}

</script>
<style lang='scss' scoped>

</style>

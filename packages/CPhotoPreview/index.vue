<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :close-on-click-modal="false"
    title="查看图片"
    width="1000px"
    class="cc-dialog-imgpreview"
    @close="handleClose">
    <div v-if="dialogVisible" class="image-preview">
      <template v-if="isImageArray">
        <el-carousel
          :autoplay="false"
          :loop="false"
          indicator-position="outside"
          trigger="click"
          height="530px">
          <el-carousel-item v-for="item in getImages" :key="item">
            <el-image
              :src="item"
              fit="scale-down"
              style="height: 100%; width: 100%"
              @load="handleImageLoad"
              @error="handleImageError">
              <div
                slot="placeholder"
                v-loading="true"
                class="img-defalut">
                加载中<span class="dot">...</span>
              </div>
              <div slot="error" class="img-defalut">
                加载失败
              </div>
            </el-image>
          </el-carousel-item>
        </el-carousel>
      </template>
      <template v-else>
        <el-image
          :src="getImg"
          fit="scale-down"
          style="height: 100%"
          @load="handleImageLoad"
          @error="handleImageError">
          <div
            slot="placeholder"
            v-loading="true"
            class="img-defalut">
            加载中<span class="dot">...</span>
          </div>
          <div slot="error" class="img-defalut">
            加载失败
          </div>
        </el-image>
      </template>
      <!-- <div class="test-img">
        <img src="https://dummyimage.com/716x1240" alt="">
        <img src="https://dummyimage.com/716x1240" alt="">
        <img src="https://dummyimage.com/716x1240" alt="">
        <img src="https://dummyimage.com/716x1240" alt="">
        <img src="https://dummyimage.com/716x1240" alt="">
        <img src="https://dummyimage.com/716x1240" alt="">
        <img src="https://dummyimage.com/716x1240" alt="">
        <img src="https://dummyimage.com/716x1240" alt="">
        <img src="https://dummyimage.com/716x1240" alt="">
        <img src="https://dummyimage.com/716x1240" alt="">
        <img src="https://dummyimage.com/716x1240" alt="">
        <img src="https://dummyimage.com/716x1240" alt="">
        <img src="https://dummyimage.com/716x1240" alt="">
      </div> -->
    </div>
  </el-dialog>
</template>

<script>
export default {
  components: {},
  props: {
    value: {
      type: Boolean,
      default: false
    },
    imgs: {
      type: [String, Array],
      default: ''
    }
  },
  data() {
    return {
      dialogVisible: false,
      dialogImageLoading: false
    }
  },
  computed: {
    isImageArray() {
      return Array.isArray(this.imgs) && this.imgs.length > 1
    },
    getImages() {
      if (Array.isArray(this.imgs) && this.imgs.length === 1) {
        return this.imgs[0]
      }
      return this.imgs
    },
    getImg() {
      return this.imgs
    }
  },
  watch: {
    value(val) {
      this.dialogVisible = val
    }
  },
  methods: {
    handleImageLoad() {},
    handleImageError() {},
    handleClose() {
      this.$emit('input', this.dialogVisible)
    }
  }
}
</script>
<style lang='scss' scoped>
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
  .test-img {
    padding-top: 10px;
    img {
      width: 80px;
      height: 50px;
    }
    img:hover{
      transform: scale(1.05);
    }
  }
</style>

var path = require('path')
var webpack = require('webpack')
const CompressionPlugin = require("compression-webpack-plugin")

const name = 'ele-alien' // page title

// 排除发布不打包的库文件
function getProdExternals() {
  return {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'axios':'axios',
    'element-ui': 'ElementUI',
  }
}

module.exports = {
  // entry: '',
  // output: {
  //   path: path.resolve(__dirname, './dist'),
  //   publicPath: '/dist/',
  //   filename: 'index.js',
  //   libraryTarget: 'umd',
  //   umdNamedDefine: true
  // }

  
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    externals: process.env.NODE_ENV === 'production' ?
      getProdExternals() : {}
  },
  // configureWebpack:config=>{
  //   if(process.env.NODE_ENV === 'production'){
  //       return{
  //           plugins: [
  //               new CompressionPlugin({
  //                   test:/\.js$|\.html$|.\css/, //匹配文件名
  //                   threshold: 10240,//对超过10k的数据压缩
  //                   deleteOriginalAssets: false //不删除源文件
  //               })
  //           ]
  //       }
  //   }
  // }

}

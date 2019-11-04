/*
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2019-04-15 14:56:33
 */
var path = require('path')
var webpack = require('webpack')
const CompressionPlugin = require("compression-webpack-plugin")
const uglify = require('uglifyjs-webpack-plugin');

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

function resolve(dir) {
  return path.join(__dirname, dir)
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
    plugins: [
        new uglify()
    ],

    externals: process.env.NODE_ENV === 'production' ?
      getProdExternals() : {}
  }
}

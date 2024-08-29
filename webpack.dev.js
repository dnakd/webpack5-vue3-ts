const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base');

// 合并公共配置，并添加开发环境配置
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    port: 9999, // 服务端口号
    compress: false, // grip压缩，开发环境不开启，提升热更新速度
    hot: true, // 开启热更新
    historyApiFallback: true, // 解决history路由404问题
    static: {
      directory: path.join(__dirname, '../public') // 托管静态资源public文件夹
    }
  }
});

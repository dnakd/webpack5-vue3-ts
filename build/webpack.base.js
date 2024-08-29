const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
function isDevelopment() {
  return process.env.NODE_ENV === 'development';
}

module.exports = {
  cache: {
    type: 'filesystem' // 使用文件缓存
  },
  entry: path.join(__dirname, '../src/main.js'), // 入口文件
  // 打包出口文件
  output: {
    filename: 'static/js/[name].[chunkhash:8].js', // 每个输出js的名称
    path: path.join(__dirname, '../dist'), // 打包结果输出路径
    clean: true, // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了
    publicPath: '/' // 打包后文件的公共前缀路径
  },
  module: {
    // rules是数组，因为可能会处理很多其他资源模块，需要其他loader
    // test 匹配哪些文件需要转换
    // use 需要使用什么loader，如果要处理匹配到的这个资源需要多个loader，就写成数组形式
    rules: [
      {
        include: [path.resolve(__dirname, '../src')],
        test: /\.ts$/,
        use: ['thread-loader', 'babel-loader']
      },
      {
        include: [path.resolve(__dirname, '../src')], //  只对项目src文件的vue进行loader解析
        test: /\.vue$/, // 匹配.vue文件
        use: ['thread-loader', 'vue-loader'] // 用vue-loader去解析vue文件
      },
      {
        test: /\.css$/, // 匹配css文件
        include: [path.resolve(__dirname, '../src')],
        use: [isDevelopment() ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, '../src')],
        use: [isDevelopment() ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      },
      {
        test: /.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
        type: 'asset', // type选择asset
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于10kb转base64位
          }
        },
        generator: {
          filename: 'static/images/[name].[contenthash:8][ext]' // 文件输出目录和命名
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
      inject: true //  自动注入静态资源
    }),
    new webpack.DefinePlugin({
      'process.env.BABEL_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new ESLintWebpackPlugin({
      extensions: ['.js', 'vue', 'ts'], // 指定检查的文件类型
      fix: true, // 启用自动修复功能
      cache: true, // 启用缓存，提高检查性能
      exclude: 'node_modules/**', // 排除的目录
      failOnError: true // 如果有错误则使构建失败
    }),
    new ProgressBarPlugin({
      complete: '|'
    })
  ], // vue-loader插件
  resolve: {
    extensions: ['.vue', '.ts', '.js', '.json'], //这里只配置js, vue和ts和json，其他文件引入都要求带后缀，可以提升构建速度。
    alias: {
      '@': path.join(__dirname, '../src')
    },
    modules: [path.resolve(__dirname, '../node_modules')]
  },
  devtool: 'eval-cheap-module-source-map'
};

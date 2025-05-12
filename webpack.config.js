const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackBaseConfig = {
  // 入口配置，指定入口文件为 src/index.tsx
  entry: {
    main: resolve(__dirname, './src/index.jsx')
  },
  // 输出配置，指定输出目录为项目根目录下的 dist 文件夹
  output: {
    path: resolve(process.cwd(), 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  // 模块配置
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'swc-loader',
          options: {
            jsc: {
              parser: {
                syntax: "ecmascript",
                jsx: true
              },
              transform: {
                react: {
                  runtime: 'automatic'
                }
              }
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        // 处理图片资源文件
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        // 使用 asset 资源模块处理
        type: 'asset',
      }
    ]
  },
  // cache: {
  //   type: 'filesystem'

  // }
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
      inject: true
    })
  ],
  devServer: {
    static: {
      directory: resolve(__dirname, 'dist'),
    },
    hot: true,
    open: true,
    compress: true,
    port: 3000,
    historyApiFallback: true
  }
}

// 合并基础配置和环境特定配置
module.exports = webpackBaseConfig
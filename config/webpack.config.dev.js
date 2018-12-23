const path = require('path');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: 3000,
    host: '0.0.0.0',
    disableHostCheck: true,
    contentBase: path.resolve('example/dist'),
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      title: 'poplar',
      template: path.resolve('example/index.html'),
    }),
  ],
});

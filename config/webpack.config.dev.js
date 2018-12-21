const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  // devtool: 'source-map',
  // devServer: {
  //   port: 3000,
  //   publicPath: path.resolve('../lib'),
  // },
  // plugins: [
  //   new HtmlWebpackPlugin({
  //     inject: true,
  //     title: 'poplar',
  //   }),
  // ],
});

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
    mode: 'development',
    devtool: 'source-map',
    entry: [
        path.resolve(__dirname, '../src/examples/index.tsx'),
        `webpack-dev-server/client?http://0.0.0.0:3000`,
        'webpack/hot/dev-server',
    ],
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            title: 'poplar',
            template: path.resolve(__dirname, '../index.html'),
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
});

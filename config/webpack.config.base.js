const path = require('path');

module.exports = {
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../examples'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        enforce: 'pre',
        loader: require.resolve('tslint-loader'),
      },
      {
        oneOf: [
          {
            test: /\.tsx?$/,
            use: [
              require.resolve('babel-loader'),
              require.resolve('awesome-typescript-loader'),
            ],
            include: [
              path.resolve(__dirname, '../src'),
            ],
          },
          {
            // babel-loader转义node_mdoules, 来修复html-webpack-plugin报错
            test: /\.jsx?$/,
            loader: require.resolve('babel-loader'),
          },
          {
            test: [/\.less$/, /\.css$/],
            use: [
              require.resolve('style-loader'),
              require.resolve('css-loader'),
              require.resolve('postcss-loader'),
              require.resolve('less-loader'),
            ],
            include: [
              path.resolve(__dirname, '../src'),
              path.resolve(__dirname, '../lib'),
            ],
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'example/dist/assets/[name].[hash:8].[ext]',
            },
          },
          {
            exclude: [/\.html$/, /\.json$/, /\.tsx?$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'example/dist/assets/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.less'],
    alias: {
      poplar: path.resolve(__dirname, '../lib'),
    }
  },
};

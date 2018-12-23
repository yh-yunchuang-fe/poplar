const path = require('path');

const scope = {
  include: [
    path.resolve('example/src'),
  ],
  exclude: [
    path.resolve('node_modules'),
  ],
};

module.exports = {
  entry: path.resolve('example/src/index.ts'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('example/dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        enforce: 'pre',
        loader: require.resolve('tslint-loader'),
      },
      {
        test: [/\.css/, /\.less/],
        enforce: 'pre',
        loader: require.resolve('typed-css-modules-loader'),
      },
      {
        oneOf: [
          {
            test: /\.tsx?$/,
            loader: require.resolve('awesome-typescript-loader'),
            ...scope,
          },
          {
            // babel-loader转义node_mdoules, 来修复html-webpack-plugin报错
            test: /\.jsx?$/,
            loader: require.resolve('babel-loader'),
            include: [
              path.resolve('node_modules'),
            ],
          },
          {
            test: [/\.less/, /\.css/],
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  modules: true,
                },
              },
              {
                loader: 'px2rem-loader',
                options: {
                  remUni: 75,
                  remPrecision: 8,
                },
              },
              {
                loader: 'postcss-loader',
                options: {
                  ident: 'postcss',
                  sourceMap: true,
                  plugins: [
                    require('postcss-flexbugs-fixes'),
                    require('autoprefixer'),
                  ],
                },
              },
              require.resolve('less-loader'),
            ],
            ...scope,
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'example/dist/assets/[name].[hash:8].[ext]',
            },
            ...scope,
          },
          {
            exclude: [/\.html$/, /\.json$/, /\.(ts|tsx)$/],
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
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.less']
  },
};

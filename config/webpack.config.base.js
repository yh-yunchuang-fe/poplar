const path = require('path');

const scope = {
  include: [
    path.resolve(__dirname, '../src'),
  ],
  exclude: [
    path.resolve(__dirname, 'node_modules'),
  ],
};

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'lib'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        enforce: 'pre',
        use: [
          {
            loader: require.resolve('tslint-loader'),
          },
        ],
      },
      {
        oneOf: [
          {
            test: /\.tsx?$/,
            loader: require.resolve('awesome-typescript-loader'),
            ...scope,
          },
          {
            test: [/\.less/, /\.css/],
            use: [
              {
                loader: require.resolve('style-loader'),
              },
              {
                loader: require.resolve('css-loader'),
                options: {
                  module: true,
                },
              },
              {
                loader: require.resolve('less-loader'),
              },
              {
                loader: require.resolve('postcss-loader'),
              },
            ],
            ...scope,
          },
          {
            test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000,
              name: 'lib/assets/[name].[hash:8].[ext]',
            },
            ...scope,
          },
          {
            // TODO: 待定exclude 'ts|tsx'
            exclude: [/\.html$/, /\.json$/, /\.(ts|tsx)$/],
            loader: require.resolve('file-loader'),
            options: {
              name: 'lib/assets/[name].[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['ts', 'tsx', 'json', 'css', 'less']
  },
  plugins: [

  ],
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};

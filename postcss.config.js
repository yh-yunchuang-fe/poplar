module.exports = {
  ident: 'postcss',
  sourceMap: true,
  plugins: [
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({ browsers: ["last 2 versions", "ie 8", "ie 9", "> 1%"] }),
    require('postcss-px2rem')({ remUnit: 37.5, remPrecision: 8 }),
  ],
};

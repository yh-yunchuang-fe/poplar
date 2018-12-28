const path = require('path');
const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const cached = require('gulp-cached');
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const opn = require('opn');
const merge = require('merge2');
const webpackDevConfig = require('../config/webpack.config.dev');
const babelrc = require('../package.json').babel;
const tsconfig = require('../tsconfig.json').compilerOptions;
const { HOST, PORT } = require('./constants');

const tsProject = ts.createProject(Object.assign(tsconfig, {
    declaration: true,
}));

babelrc.plugins.push(
    ["module-extension", {
        "less": "css"
    }]
);

gulp.task('lib:ts', () => {
    const tsResult = gulp.src(['../src/components/**/*.tsx', '../src/components/**/*.ts'])
        .pipe(cached('ts'))
        .pipe(tsProject());

    const stream = merge([
        tsResult.dts,
        tsResult.js.pipe(babel(babelrc)),
    ]);
    return stream.pipe(gulp.dest('../lib'));
});

gulp.task('lib:style', () => {
    return gulp.src(['../src/components/**/*.less', '../src/components/**/*.css'])
        .pipe(cached('style'))
        .pipe(less())
        .pipe(postcss())
        .pipe(gulp.dest('../lib'));
});

gulp.task('lib:build', gulp.series(['lib:ts', 'lib:style']));

gulp.task('webpack-dev-server', () => {
    const compiler = webpack(webpackDevConfig);
    new WebpackDevServer(compiler, {
        disableHostCheck: true,
        contentBase: path.resolve(__dirname, '../examples'),
        hot: true,
        inline: true,
        stats: { colors: true },
    }).listen(PORT, HOST, (err) => {
        if (err) {
            return console.error(err);
        }
        const url = `http://${HOST}:${PORT}`;
        console.log("\n-------------\n");
        console.log(`webpack-dev-server is listening on ${url}`);
        console.log("\n-------------\n");
        opn(url);
    });
});

gulp.task('watch', () => {
    const watcher = gulp.watch('../src/components', gulp.series(['lib:build']));
    watcher.on('change', (path) => {
        console.log(`File ${path} was changed, running tasks...`);
    });
});

gulp.task('dev', gulp.series('lib:build', gulp.parallel(['watch', 'webpack-dev-server'])));

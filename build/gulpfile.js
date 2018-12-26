const gulp = require('gulp');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const babelrc = require('../package.json').babel;

const tsProject = ts.createProject('../tsconfig.json');

gulp.task('lib:ts', () => {
  return gulp.src('../src/components/**/*.tsx')
    .pipe(tsProject())
    .js
    .pipe(babel(babelrc.concat([
      ["module-extension", {
        "less": "css"
      }],
    ])))
    .pipe(gulp.dest(('../lib')));
});

gulp.task('lib:style', () => {
  return gulp.src(['../src/components/**/*.less', '../src/components/**/*.css'])
    .pipe(less())
    .pipe(postcss())
    .pipe(gulp.dest('../lib'));
});

gulp.task('default', gulp.series(['lib:ts', 'lib:style'], (done) => {
  console.log('build lib success!!');
  done();
}));

gulp.task('watch', () => {
  gulp.watch('src', ['lib:ts', 'lib:style']);
});

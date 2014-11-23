//
// gulpfile.js
// Gulp for MDX
// Date: 23.11.2014
// (с) 2014, Andrey Gershun
//

var gulp = require('gulp');
module.exports = gulp;
var concat = require('gulp-concat-sourcemap');
var shell = require('gulp-shell')

gulp.task('js-merge', function () {
  return gulp.src([
  	'./src/mdx10start.js', 
    './src/alamdxparser.js', 
    './src/mdx15alamdx.js', 
   	'./src/mdx90finish.js'])
    .pipe(concat('alamdx.js'))
    .pipe(gulp.dest('./'))
});


gulp.task('jison-compile', function () {
  return gulp.src('./src/*.jison', {read: false})
    .pipe(shell([
      'jison ./src/alamdxparser.jison -o ./src/alamdxparser.js',
    ]));
});


gulp.task('uglify', function () {
  return gulp.src('./alamdx.js', {read: false})
    .pipe(shell([
      'uglifyjs alamdx.js -o alamdx.min.js',
    ]));
});

gulp.task('copy-dist', function(){
  gulp.src(['./alamdx.js','./alamdx.min.js','./alamdx.js.map'])
    .pipe(gulp.dest('dist'));
});


// Main task
gulp.task('default', ['js-merge'], function(){
  gulp.watch('./src/*.js',function(){ gulp.run('js-merge'); });
  gulp.watch('./src/*.jison',function(){ gulp.run('jison-compile'); });
  gulp.watch('./alamdx.js',function(){ gulp.run('uglify'); });
  gulp.watch('./alamdx.min.js',function(){ gulp.run('copy-dist'); });
});

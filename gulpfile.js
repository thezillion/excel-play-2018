const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCss = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function() {
  gulp.src(['src/styles.scss', 'src/**/*.component.scss'])
      .pipe(sass())
      .on('error', function(error) { console.log(error.toString()); this.emit('end'); })
      .pipe(autoprefixer())
      .pipe(minifyCss())
      .pipe(gulp.dest(function(file) { return file.base; }));
});

gulp.task('dev', ['css'], function() {
  gulp.watch(['src/styles.scss', 'src/**/*.component.scss'], ['css']);
});

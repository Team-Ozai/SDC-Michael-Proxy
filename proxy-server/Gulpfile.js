const gulp = require('gulp');
const htmlmin = require('gulp-html-minifier');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp
    .src('./public/*.css')
    .pipe(
      autoprefixer({
        cascade: false,
      })
    )
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(gulp.dest('dist'));
});

gulp.task('minify-html', function (done) {
  gulp
    .src('./public/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./dist'));
  done();
});

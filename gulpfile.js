var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-minify-css');
var rename = require("gulp-rename");
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var jquery = require('gulp-jquery');
var bundle = browserify('./dist/js/app.js').bundle();

// default task
gulp.task('scripts', function() {
  return gulp.src('./src/js/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./dist/js/'))
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./dist/js/'));
});

gulp.task('styles', function(){
    return gulp.src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/css/'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('watch', function(){
    gulp.watch('./src/js/*.js', ['scripts']);
    gulp.watch('./src/scss/*.scss', ['styles']);
});

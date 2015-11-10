var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify('js/src/main.js')
        .transform("babelify", {presets: ["es2015", "react"]})
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('js/dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('js/src/*.js', ['build']);
});

gulp.task('default', ['watch']);

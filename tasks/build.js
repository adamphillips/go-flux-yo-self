'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var babel = require('babel');
var map = require('vinyl-map');
var jetpack = require('fs-jetpack');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');

var projectDir = jetpack;
var srcDir = projectDir.cwd('./app');
var destDir = projectDir.cwd('./build');

var paths = {
    jsCodeToTranspile: [
        'scripts/**/*.js',
    ],
}

// -------------------------------------
// Tasks
// -------------------------------------

gulp.task('clean', function(callback) {
    return destDir.dirAsync('.', { empty: true });
});


var transpileTask = function () {
    return gulp.src(paths.jsCodeToTranspile)
    .pipe(map(function(code, filename) {
        try {
            var transpiled = babel.transform(code.toString(), { modules: "common", stage: 0 });
        } catch (err) {
            throw new Error(err.message + ' ' + filename);
        }
        return transpiled.code;
    }))
    .pipe(gulp.dest(destDir.path()));
};
gulp.task('transpile', ['clean'], transpileTask);
gulp.task('transpile-watch', transpileTask);

var browserifyTask = function() {
  // set up the browserify instance on a task basis
  var b = browserify({
   entries: './build/app.js',
   debug: true
  });

  return b.bundle()
    .pipe(source('./bundle.js'))
    .pipe(buffer())
    .on('error', gutil.log)
    .pipe(gulp.dest('./build'));
}

gulp.task('browserify', ['transpile'], browserifyTask);
gulp.task('browserify-watch', browserifyTask);

var lessTask = function () {
    return gulp.src('styles/main.less')
    .pipe(less())
    .pipe(gulp.dest(destDir.path()));
};
gulp.task('less', ['clean'], lessTask);
gulp.task('less-watch', lessTask);

gulp.task('watch', function () {
    gulp.watch(paths.jsCodeToTranspile, ['transpile-watch']);
    gulp.watch(destDir.path('app.js'), ['browserify-watch']);
    gulp.watch('styles/**/*.less', ['less-watch']);
});


gulp.task('build', ['transpile', 'browserify', 'less']);

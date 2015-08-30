'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var babel = require('babel');
var map = require('vinyl-map');
var jetpack = require('fs-jetpack');

//var utils = require('./utils');

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


var lessTask = function () {
    return gulp.src('styles/main.less')
    .pipe(less())
    .pipe(gulp.dest(destDir.path()));
};
gulp.task('less', ['clean'], lessTask);
gulp.task('less-watch', lessTask);

gulp.task('build', ['transpile', 'less']);

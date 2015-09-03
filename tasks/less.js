'use strict';

var gulp = require('gulp');
var less = require('gulp-less');
var jetpack = require('fs-jetpack');

require('./clean');

var projectDir = jetpack;
var destDir = projectDir.cwd('./build');

var lessTask = function () {
    return gulp.src('styles/main.less')
    .pipe(less())
    .pipe(gulp.dest(destDir.path()));
};

gulp.task('less', ['clean'], lessTask);
gulp.task('less-watch', lessTask);

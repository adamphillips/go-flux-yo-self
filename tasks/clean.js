'use strict';

var gulp = require('gulp');
var jetpack = require('fs-jetpack');

var projectDir = jetpack;
var destDir = projectDir.cwd('./build');

gulp.task('clean', function(callback) {
    return destDir.dirAsync('.', { empty: true });
});

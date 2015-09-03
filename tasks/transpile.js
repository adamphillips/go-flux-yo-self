'use strict';

var gulp = require('gulp');
var babel = require('babel');
var map = require('vinyl-map');
var jetpack = require('fs-jetpack');

var projectDir = jetpack;
var destDir = projectDir.cwd('./build');

var paths = {
    jsCodeToTranspile: [
        'scripts/**/*.js',
    ],
}

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

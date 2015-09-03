'use strict';

require('./browserify')
require('./less')
require('./transpile')

var gulp = require('gulp');
var jetpack = require('fs-jetpack');

var paths = {
    jsCodeToTranspile: [
        'scripts/**/*.js',
    ],
}

var projectDir = jetpack;
var destDir = projectDir.cwd('./build');

gulp.task('watch', function () {
    gulp.watch(paths.jsCodeToTranspile, ['transpile-watch']);
    gulp.watch(destDir.path('app.js'), ['browserify-watch']);
    gulp.watch('styles/**/*.less', ['less-watch']);
});

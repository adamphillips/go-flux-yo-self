'use strict';

require('./browserify')
require('./less')
require('./transpile')

var gulp = require('gulp');

gulp.task('build', ['transpile', 'browserify', 'less']);

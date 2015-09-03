'use strict';

var gulp = require('gulp');
var map = require('vinyl-map');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');

require('./transpile');

var browserifyTask = function() {
  // set up the browserify instance on a task basis
  var b = browserify({
   entries: './build/app.js',
   debug: true
  });

  return b.bundle()
    .pipe(source('./bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'));
}

gulp.task('browserify', ['transpile'], browserifyTask);
gulp.task('browserify-watch', browserifyTask);

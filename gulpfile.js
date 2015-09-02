/* jshint node: true */
'use strict';
var gulp = require('gulp');
var karma = require('karma');
var eslint = require('gulp-eslint');
var concat = require('gulp-concat');
var del = require('del');
var runSequence = require('run-sequence');

var JS_FILES = ['*.js'];
var TEST_FILES = ['test/*_test.js'];
var OUTPUT = 'simple_key_navigator.js';

gulp.task('clean', del.bind(null, [OUTPUT]));

gulp.task('lint', function() {
  return gulp.src(JS_FILES)
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('test', function (done) {
  karma.server.start({
    configFile: __dirname + '/test/karma.conf',
    singleRun: true
  }, done);
});

gulp.task('build', function(done) {
  runSequence('clean', 'lint', 'test', done);
});

gulp.task('default', ['build']);

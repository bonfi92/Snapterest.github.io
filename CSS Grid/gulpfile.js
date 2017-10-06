var requireDir = require('require-dir');
var runSequence = require('run-sequence');

var gulp = require('gulp');

/**
 * Import all tasks
 */
requireDir('./tasks');

gulp.task('default', function(done) {
  runSequence('sass', 'sass:watch', done);
});

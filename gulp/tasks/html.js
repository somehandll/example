'use strict';

var gulp = require('gulp'),
	tpls = require('gulp-file-include'),
	lint = require('gulp-html5-lint'),
	mnfy = require('gulp-minify-html'),
	errs = require('../util/handle-errors'),
	cfgs = require('../config').html;

gulp.task('html', function() {
	return gulp.src('build/build.html')
    	.pipe(tpls(cfgs.options))
		.pipe(lint().on('error', errs))
		.pipe(mnfy())
    	.pipe(gulp.dest('public'));
});

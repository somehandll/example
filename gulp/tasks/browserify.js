'use strict';

var watchify = require('watchify'),
 	browserify = require('browserify'),
	gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	gutil = require('gulp-util'),
	sourcemaps = require('gulp-sourcemaps'),
	assign = require('lodash').assign,

 	browserifyOptions = {
		entries: ['./build/js/carousel.js'],
		debug: true,
		external: ['jquery', 'backbone']
	},
 	opts = assign({}, watchify.args, browserifyOptions),
	b = watchify(browserify(opts));

gulp.task('browserify', bundle);
b.on('update', bundle);
b.on('log', gutil.log);

function bundle() {
	return b.bundle()
		.on('error', gutil.log.bind(gutil, 'Browserify Error'))
		.pipe(source('bundle.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({
			loadMaps: true
		}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('public/js'));
};

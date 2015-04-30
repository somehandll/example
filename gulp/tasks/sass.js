var gulp   = require('gulp'),
 	sass   = require('gulp-ruby-sass'),
	smaps  = require('gulp-sourcemaps'),
	minify = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer'),
	errors = require('../util/handle-errors'),
	config = require('../config').sass

gulp.task('sass', function() {
	return sass(config.paths, config.options)
		.on('error', errors)
		.pipe(minify())
		.pipe(smaps.write('./'))
		.pipe(gulp.dest('public/css'));
});

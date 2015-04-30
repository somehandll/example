var _        = require('underscore'),
    gulp     = require('gulp'),
 	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	config   = require('../config').images;

gulp.task('images', function() {
	return gulp.src(_.extend(config.src, {use: [pngquant()]}))
		.pipe(imagemin(config.options))
		.pipe(gulp.dest(config.dst));
});

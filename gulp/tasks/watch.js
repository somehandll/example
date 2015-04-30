var gulp   = require('gulp'),
	config = require('../config');

gulp.task('watch', function () {
	gulp.watch(['build/sass/**/**.scss'], ['sass']);
    gulp.watch([config.html.templates], ['html']);
});
gulp.task('default', ['watch']);

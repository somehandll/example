var gulp = require('gulp'),
fileinclude = require('gulp-file-include');
gulp.task('build:html', function() {
    gulp.src(['build/build.html'])
        .pipe(fileinclude({
            prefix: '__',
            basepath: 'build/tpl'
        }))
        .pipe(gulp.dest('public'));
});

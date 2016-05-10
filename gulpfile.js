var gulp = require('gulp');
var notify = require('gulp-notify');
var phpunit = require('gulp-phpunit');

gulp.task('unit', function () {
    var options = {
        debug: false,
        notify: false,
        configurationFile: './phpunit.xml'
    };

    gulp.src('./tests/**/*.php')
        .pipe(phpunit('', options))
        .on('error', notify.onError({
            title: "Fail!",
            message: "Error(s) occurred during testing.",
            icon: __dirname + '/fail.png'
        }))
        .pipe(notify({
            title: "Success!",
            message: "All tests have returned green.",
            icon: __dirname + '/pass.png'
        }));
});

gulp.task('watch', function () {
    gulp.watch(['./tests/**/*.php', './src/**/*.php'], ['unit']);
});

gulp.task('default', ['unit', 'watch']);
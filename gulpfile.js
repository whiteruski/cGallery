var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

var DEST = 'app/build/';

var paths = {
	scripts: ['bower_components/angular/angular.js',
		'bower_components/angular-route/angular-route.js', 
		'app/app.js',
		'app/components/**/*.js']
};

gulp.task('scripts', function() {
	return gulp.src(paths.scripts)
	    .pipe(concat('cgallery.js'))
	    .pipe(gulp.dest(DEST));
});

gulp.task('styles', function() {
    return gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(DEST));
});

gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['scripts']);
    gulp.watch('app/sass/**/*.scss', ['styles']);
});

gulp.task('default', function() {
    gulp.run('styles');
    gulp.run('scripts');
});
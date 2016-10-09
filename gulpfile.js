var gulp = require('gulp');
	connect	= require('gulp-connect');
	autoprefixer = require('gulp-autoprefixer');
	rename	= require('gulp-rename');
	minifycss	= require('gulp-minify-css');
	reload	= require('gulp-reload');
	scss	= require('gulp-scss');
  sass  = require('gulp-ruby-sass');

var path = {
	src	:"src/",
	css :"src/css/",
	js	:"src/js/",
	img	:"src/img/",
  fonts :"src/fonts/"
}

gulp.task('default',['html' , 'css' , 'js' , 'img' , 'fonts' ]);

gulp.task('server' , [] , function() {
	return connect.server({
		root: ['public'],
		livereload: true
	});
});

gulp.task('html', function () {
    gulp.src(['./src/*.html', './src/**/*.html'])
        .pipe(gulp.dest('public/'));
});

gulp.task('css', function () {
  gulp.src('src/css/*.css')
    .pipe(gulp.dest('public/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(gulp.dest('public/css'));
});

gulp.task('js', function () {
  gulp.src(['./src/js/*.js','./src/js/**/*.js'])
    .pipe(gulp.dest('public/js'))
    .pipe(rename({suffix: '.min'}))
    //.pipe(uglify())
    .pipe(gulp.dest('public/js'));
    //.pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('img' , function () {
	gulp.src(['./src/img/*.png','./src/img/*.jpg'])
		.pipe(gulp.dest('public/img'));
});

gulp.task('fonts' , function() {
  gulp.src(['./src/fonts/*.*'])
    .pipe(gulp.dest('public/fonts'));
});

gulp.task('servertest', function() {
    return connect.server({
        root: ['src'],
        livereload: true
  });
});

gulp.task('watch', function() {
  //监听生产环境目录变化
    gulp.watch(path.src + '**/*.*',['scss'/* , 'reload-dev'*/]);
});

gulp.task('reload-dev',function() {
  gulp.src(path.src + '**/*.*')
    .pipe(connect.reload());
});

gulp.task('scss', function () {
  return sass('src/scss/app.scss')
    .pipe(gulp.dest('src/css'));
});

gulp.task('test' , ['servertest' , 'watch']);
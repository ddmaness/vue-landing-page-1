var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var pngquant = require('imagemin-pngquant');
var imagemin = require('gulp-imagemin');

gulp.task('default', function(){
	gulp.watch('sass/styles.scss', gulp.series('styles'));
	gulp.watch('./index.js', gulp.series('scripts'));
	gulp.watch('./index.html', gulp.series('copy-html'));
	gulp.watch('./dist/index.html').on('change', browserSync.reload);
	gulp.watch('./dist/index.js').on('change', browserSync.reload);
	browserSync.init({
		server: './dist'
	});
});

gulp.task('copy-html', function(done){
	gulp.src('./index.html')
		.pipe(gulp.dest('./dist'));
	done();
});

gulp.task('copy-images', function(){
	return gulp.src('images/*')
		.pipe(imagemin({
			progressive: true,
			use: [pngquant()]
		}))
		.pipe(gulp.dest('dist/images'));
});

gulp.task('scripts', function(done){
	gulp.src('./index.js')
		.pipe(babel())
	//skipping concatenation because only one file is present
		.pipe(gulp.dest('dist/'));
	done();
});

gulp.task('scripts-dist', function(done){
	gulp.src('./index.js')
		.pipe(sourcemaps.init())
		.pipe(babel())
	//skipping concatenation because only one file is present
		.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/'));
	done();
});

gulp.task('styles', function(done){
	gulp.src('sass/styles.scss')
		.pipe(sass()).on('error', sass.logError)
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
		}))
		.pipe(gulp.dest('dist/css'))
		.pipe(browserSync.stream());
	done();
});

gulp.task('dist', gulp.parallel('copy-html', 'copy-images', 'styles', 'scripts-dist'));
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
    gulp.watch('sass/styles.scss', gulp.series('styles'));
    gulp.watch('./index.js').on('change', browserSync.reload)
    gulp.watch('./index.html').on('change', browserSync.reload)
    browserSync.init({
        server: './'
    });
})

gulp.task('styles', function(done){
    gulp.src('sass/styles.scss')
        .pipe(sass()).on('error', sass.logError)
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
        }))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
    done();
})
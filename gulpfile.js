//引入文件
var gulp=require('gulp');

//1.注册一个任务模块
gulp.task('copy',function(){
   gulp.src('src/index.html')
   .pipe(gulp.dest('dist/'));
});

//2.注册一个监视任务
gulp.task('dist',function(){
	gulp.watch('src/index.html',['copy']);
	gulp.watch('src/styles/*.less',['style']);
});

//3.编译less文件
var less=require('gulp-less');

gulp.task('style',function(){
	gulp.src('src/styles/*.less')
	.pipe(less())
	.pipe(gulp.dest('dist/'));
});

//4.创建本地服务器
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});
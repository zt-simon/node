/**
 * Created by dllo on 17/8/1.
 */


//http://www.cnblogs.com/2050/p/4198792.html

var gulp = require('gulp');



gulp.task('default',function () {
    console.log('hello world');
});

//  参数1: 字符串或数组或一个完整的文件路径;(数组中放的是类似正则表达式的东西)
//gulp.src(['02/*.js'])
//gulp.src(['02/in*.js'])
gulp.src(['02/[i]*.js'])
    .pipe(gulp.dest('01'))



/**
 * Created by dllo on 17/8/1.
 */


//http://www.cnblogs.com/2050/p/4198792.html

var gulp = require('gulp');


gulp.task('mytask',function () {
    console.log('你来啦');
})


gulp.task('default',function () {
    console.log('hello world');
    gulp.src(['02/in*.js'])
       .pipe(gulp.dest('01'))
});

    gulp.task('default',['mytask']);



//  参数1: 字符串或数组或一个完整的文件路径;(数组中放的是类似正则表达式的东西)
//gulp.src(['02/*.js'])
//gulp.src(['02/in*.js'])
//gulp.src(['02/[i]*.js'])
    //.pipe(gulp.dest('01'))

//当执行gulp default或gulp将会调用default任务里的所有任务[‘testLess’,’elseTask’]。




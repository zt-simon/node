/**
 * Created by dllo on 17/7/31.
 */
var fs = require('fs')

var fs = require("fs");

// 异步打开文件

fs.open('2.txt','r+',function(err,fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
});


//  文件监视
    //参数1:路径
    //参数2:[options], persistent true表示持续监视，不退出程序；interval 单位毫秒，表示每隔多少毫秒监视一次文件
    //listener 文件发生变化时回调，有两个参数：curr为一个fs.Stat对象，被修改后文件，prev,一个fs.Stat对象，表示修改前对象
fs.watchFile('2.txt',{interval:20},function (curr,prev) {
    if(Date.parse(curr.mtime) != Date.parse(prev.mtime)){
        console.log('文件有修改');
    }
})

// 复制;
fs.link('1.txt','4.txt',function (err) {
    
})


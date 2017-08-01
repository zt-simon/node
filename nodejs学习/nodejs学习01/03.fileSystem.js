/**
 * Created by dllo on 17/7/31.
 */
var fs = require('fs');
//  读取文件
    //参数1 路径: 文件路径;(可以为相对,也可以绝对)
    //参数2 选项: 读取文件的编码格式 默认为二进制(Buffer);
    //参数3 回调: 回调函数,包含两个参数error和data 其中data为读取内容的结果 
fs.readFile('./1.txt','utf-8',function (err,data) {
    console.log(data);
})

var options = {
    // flag 默认为'w'覆盖;
    //           'a'追加;
    flag: 'a'
}
// 写入文件
    //参数1 路径
    //参数2 写入内容;
    //参数3 选项  flag:默认为'w'覆盖
fs.writeFile('./1.txt','1234567',options,function (error) {
    if(error) return; // 省略写法;  
    console.log(error);
})
//  追加文件内容;
fs.appendFile('./1.txt','天不错',function () {

})
// 删除文件
// fs.unlink('./1.txt')

// 创建文件
fs.createReadStream('1.txt')
fs.createWriteStream('2.txt')

// 创建文件夹

// fs.mkdir('file',0000)

// 修改文件夹权限
fs.chmod('./file', 0777);

// 移除文件夹

fs.rmdir('./file')


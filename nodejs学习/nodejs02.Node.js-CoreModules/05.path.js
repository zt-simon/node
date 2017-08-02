/**
 * Created by dllo on 17/8/1.
 */
var path = require('path');
//1.join 路径拼接
var fullPath = path.join(__dirname,'b','A.jpg');
// console.log(fullPath);
//2.resolve 从右往左拼接,生成绝对路径; (常用);
// 当最终路径为绝对路径时,拼接终止;    (/为绝对路径, .为相对路径);
var fullPath = path.resolve('./a','./b','./c');
console.log(fullPath);

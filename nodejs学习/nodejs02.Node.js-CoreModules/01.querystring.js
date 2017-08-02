/**
 * Created by dllo on 17/8/1.
 */
var querystring = require('querystring')

//查询字符串;

// http://www.baidu.com/1/img?width=100&height=200

//1.parse  将字符串解析成 json对象;
//     参数1 要解析的字符串;
//     参数2 键值对间连接方式; 例  & key=value&key=value
//      参数3 键值间连接方式 例: = key=value;
//      参数4 选项; 解析函数  最大解析条数;
var string = 'width=100&height=200';
var obj = querystring.parse(string);
console.dir(obj);
//2.stringify  将json对象转换成字符串

//     参数1 要字符串化的对象;
//     参数2 键值对间连接方式; 例  & key=value&key=value
//      参数3 键值间连接方式 例: = key=value;
//      参数4 选项; 字符串化函数;
var json = {
    name:'如花',
    age:'18'
}
var query = querystring.stringify(json);

console.log(query);

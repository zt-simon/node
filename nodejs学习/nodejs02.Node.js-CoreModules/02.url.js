/**
 * Created by dllo on 17/8/1.
 */
var url = require('url');

//  定义url
var baiduUrl = 'http://www.baidu.com/1/img/1.jpg?width=200&height=200#host'
//  解析url
var urlJson=url.parse(baiduUrl)

console.log(urlJson);

var urlObj = {
    protocol:'http:',
    host:'www.baidu.com',
    port:'8080',
    pathname: '/2/text/1.txt',
    search: '?name=张三&age=20'
}
// 格式化url对象;
varurlStr=url.format(urlObj);
console.log(varurlStr);

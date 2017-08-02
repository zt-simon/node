/**
 * Created by dllo on 17/8/2.
 */

var http = require('http');
var url = require('url');

var server=http.createServer(function (request,response) {
    // 1.请求(由客户端设置)

        console.log('请求方法:'+request.method); // 请求方法
        console.log('请求头:',request.headers) //请求头
        console.log('请求体:'+request.body);// 请求体


        console.log('请求地址:'+request.url);
        var urlObj = url.parse(request.url);

       // console.log(urlObj);





    //2.响应(由服务器设置);


        //  1.设置状态行  一个状态码对应一个状态描述
    // response.statusCode = 304;
        //  2.设置响应头 (调用只能设置一个头信息)
    //response.setHeader('Date',new Date())
        //  3.设置状态码以及响应头
            // 响应头为一个json对象,键值对为多个;
            //  要符合响应头列表
    var headers = {
        'Content-Language': 'zh',
    }
    // 简写;
    response.writeHead(404,headers)

        //  4设置响应体
    response.end('Hello,Node.js')

});



server.listen(8080);



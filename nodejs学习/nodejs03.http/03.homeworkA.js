/**
 * Created by dllo on 17/8/2.
 */

var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function (request, response) {
    var urlObj = url.parse(request.url);
    var pathname = urlObj.pathname;
    if (pathname === '/image/img.jpg') {
        // response.end('成功');
        var finalPath = path.join(__dirname, pathname);
        fs.readFile(finalPath,'binary',function (err, data) {
            response.end(data,'binary');
        })
    }else{
        response.statusCode=404;
        response.end('文件未找到');
    }
})

server.listen(3000, function () {
    console.log('服务运行在 http://www.localhost:3000')
})
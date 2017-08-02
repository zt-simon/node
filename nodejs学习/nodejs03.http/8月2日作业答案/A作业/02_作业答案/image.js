/**
 * Created by QC.L on 2017/4/20.
 */
var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path')

var server = http.createServer(function (request, response) {
     var obj =  url.parse(request.url)
     var finalPath = path.join(__dirname, obj.pathname)
     var stat = fs.statSync(finalPath)
     // 判断是不是文件夹, 因为在网址输入的过程中, 可能会遇到文件夹的情况
     // 例如: 默认为 http://localhost:8080 时就会出现错误
     if (stat.isDirectory()) {
         response.statusCode = 404
         response.end('Not Found')
         return;
     }
     // 判断文件存不存在的
     fs.exists(finalPath, function (exists) {
       // console.log(exists);  
       // 如果文件存在,会打印true 
       if (exists) {
           fs.readFile(finalPath, 'binary', function (error, data) {
               response.writeHead(200, {'Content-Type':'image/jpg'});
               response.write(data, 'binary');
               response.end();
           })
        // 不存在打印false走else分支就报404   
       } else {
           response.writeHead(404);
           response.end('404 not found');
       }
    });
});
server.listen(8080);

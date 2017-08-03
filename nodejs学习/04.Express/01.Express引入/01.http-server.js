/**
 * Created by dllo on 17/8/3.
 */

//问题: Node.js系统的HTTP有哪些问题;

var http = require('http');
var server =  http.createServer (function (request,response) {

        if(request.url==='/1'){
            response.end('1')

        }else if(request.url==='/2'){
            response.end('2')
        }else if(request.url === '/3'){
            response.end('3');
        }else {
            response.end('其他');
        }

})

server.listen(8080);

//  connect

//  npm 包管理工具;

// 1. npm init
    //初始化package.json文件;
// 2.npm install  依赖/模块;
    //下载项目所需的依赖/模块;
    //本地生成目录node_modules;
// 3.package中包含dependencies(依赖);
    //执行 npm install即可;


//通过npm下载的依赖/模块;
// node_modules该文件夹中的内容都可以直接require;
var connect = require('connect');
// connect解决判断重叠问题;
// 使代码更清晰;
// 弊端: 需要考虑代码顺序;
var app = connect();
app.use('/1',function (request,response) {
    response.end('1')
})
app.use('/2',function (request,response) {
    response.end('2')
})
app.use('/3',function (request,response) {
    response.end('3')
})
app.use('/',function (request,response) {
    response.end('其他')
})

http.createServer(app).listen(8081);

//express
//npm install express --save (控制台下载方法)

var express = require('express');

var appExpress = express();
//  express设置一个get请求
appExpress.get('/1',function (req,res) {
    res.end('1');
})
// express设置一个post请求
appExpress.post('/2',function (req,res) {
    res.end('2');
})
// express设置一个任意请求
appExpress.all('/3',function (req,res) {
    res.end('3');
})

// 加载静态资源;
    //通过express设置静态文件目录,使其内容资源可以直接被访问;
appExpress.use(express.static('./img'))

appExpress.listen(8082,function () {
    console.log('服务器监听 http://localhost:8082');
})




// 引入模块/依赖
var express = require('express');//引入express
var path = require('path');//引入系统路径
var favicon = require('serve-favicon');//引入处理favicon
var logger = require('morgan');//引入日志;
var cookieParser = require('cookie-parser');//引入cookie的设置
var bodyParser = require('body-parser');//引入body解析;
//引入路由;
var index = require('./routes/index');//引入首页路由 index
var users = require('./routes/users');// 引入users;

//创建express对象;
var app = express();

// view engine setup  设置模板引擎; 常用的模板引擎 pug jade ejs html
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));//设置日志状态,开发模式;
app.use(bodyParser.json());//设置body解析方式json
app.use(bodyParser.urlencoded({ extended: false }));//Body需不需要urlencoded
app.use(cookieParser());//设置cookie解析
app.use(express.static(path.join(__dirname, 'public')));//设置静态资源目录;

//使用路由;
app.use('/', index);//app.use('对应url路径,路由)
app.use('/users', users);

// 配置404
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//导出app;
module.exports = app;

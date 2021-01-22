const http = require('http');
const express = require('express');
const app = express();
// 支持跨域
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    // res.header('Content-Type', 'text/html;charset=utf-8');
    next();
});
// 引入body-parser模块
const bodyParser = require('body-parser');
// 配置body-parser模块
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const hostname = '0。0.0.0';
require("./api/user.js")(app);
require("./api/video.js")(app);
const port = 8001;

const server = http.createServer(app);


app.get("/",function(req,res){
    console.log("接收到信息")
    return res.send("请求成功")
})

app.get("/index.html",function(req,res){
    res.sendFile(__dirname + "\\" + "index.html");
})

server.listen(port, hostname, () => {
    console.log(`服务器运行在 http://${hostname}:${port}/`);
});



// const app_video = express();
// const hostname = '0.0.0.0';
// require("./user.js")(app_video);
// require("./api/video.js")(app_video);
// const port = 80;

// const server_video = http.createServer(app_video);


// app_video.get("/",function(req,res){
//     console.log("接收到信息")
//     return res.send("请求成功")
// })

// server_video.listen(port, hostname, () => {
//     console.log(`服务器运行在 http://${hostname}:${port}/`);
// });



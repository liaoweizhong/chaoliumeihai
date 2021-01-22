const db = require("../db.js");
const url  = require('url');
module.exports = function(app){
    
    // 记录保存数据库名称
    let table_name = "";
    // 数据库池链接实例
    let app = param.app;
    // 接口名
    let interface_name = "interfaceTest";

	app.get('/'+interface_name+"/get",function(req,res){
		var connect = db.connection();
		console.log("进入访问")
		db.operate(connect,"select * from "+table_name,[],function(result){
			console.log("接口结果:"+result)
			res.send(result);
		});
	})
	
	// 注册
	app.get('/registered',function(req,res){
		console.log("开始注册")
		var requset_url = req.url;
		var param = url.parse(requset_url,true).query;
		var username = param.username;
		var password = param.password;
		var connect = db.connection();
		console.log("运行sql")
		db.operate(connect,
		"INSERT INTO bs_user (name, username, password) VALUES (?, ?, ?)"
		,[username,username,password],function(result){
			console.log("sql查询完毕")
			res.send(result);
		});
	})
	
	// 登录
	app.get('/login',function(req,res){
		//获取get请求中的参数
		var requset_url = req.url;
		var param = url.parse(requset_url,true).query;
		var username = param.username;
		var password = param.password;
		var connect = db.connection();
		db.operate(connect,"select * from bs_user where username=? and password=?",[username,password],function(result){
			res.send(result);
		});
	})
	
}
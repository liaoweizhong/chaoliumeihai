const db = require("../db.js");
const url  = require('url');
const fs = require("fs")
const updatefile = require('../js/updateFile.js')

const bodyParser=require("body-parser");
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

console.log("加载用户接口")
module.exports = function(app){
    
    app.get("/video/getById",function(req,res){
        var requset_url = req.url;
        var param = url.parse(requset_url,true).query;
        var id = param.id;
        var connect = db.connection();
        db.operate(connect,
            "select id, name, path, master, image, info from bs_video where id = ?",[id],function(result){
			res.send(result);
		});
    })

    // 获取视频数据
    app.get('/video/getList',function(req,res){
        var requset_url = req.url;
        var param = url.parse(requset_url,true).query;
        var connect = db.connection();
        db.operate(connect,
            "select id, name, path, master, image, info from bs_video ",[],function(result){
			res.send(result);
		});
    })

	// 录入视频文件
	app.post('/video/add',jsonParser,function(req,res){
		//获取get请求中的参数
        var param = req.body;
        console.log("/video/add 接口被请求")
        console.log("参数："+JSON.stringify(param))
        var name = param.name;
        var path = param.path;
        var master = param.master;
        var image = param.image;
        var info = param.info;
		var connect = db.connection();
        db.operate(connect,
            "INSERT INTO bs_video (name, path, master, image, info) "+
            "VALUES (?, ?, ?, ?, ?)",[name, path, master, image, info],function(result){
			res.send(result);
		});
    })

    // 导入文件
    app.post('/video/updateVideo',jsonParser,function(req,res){
        console.log("接收到信息1")
        // var param = url.parse(req.url,true).query;
        // 获取数据
        // var param = req.query;
        // console.log("param："+JSON.stringify(param))
        // 获取数据
        var param = req.body;
        // console.log("body:"+JSON.stringify(param))
        var name = param.name;
        var id = param.id;
        var base64 = param.base64;
        var length = param.length;
        var index = param.index;
        // console.log("base64:" + base64)
        // 获取收到的
        updatefile.addFile({
            name, id, base64, length, index
        }).then((data)=>{
            res.send({is: true , id: data.id});
        })
        // res.send();
    })

    // 合并文件
    app.get('/video/mergeVideo',function(req,res){
        console.log("开始合并文件")
        // 获取数据
        var requset_url = req.url;
        var param = url.parse(requset_url,true).query;
        var id = param.id;
        updatefile.merge(id).then((data)=>{
            res.send(data)
        });
    })

    
}
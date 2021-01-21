import { updateVideo , mergeVideo } from '@/api/updateFile'

let update = function(name,base64){

    this.name = name;

    this.id = "";

    this.base64 = base64;

    // 每次上传字节长度
    this.countLength = 100000;

    // 分段处理数据结果
    this.baseArray = [];

    // 处理文件进行分段处理
    this.handleFile = handleFile;

    // 加载文件
    this.updateFile = updateFile;

    // 合并文件
    this.mergeFile = mergeFile;

    // 每次成功的回调函数
    this.oncomplete = null;

    // 初始化事件
    this.init = init;

    // 保存的服务器路径
    this.path = '';

    // 初始化处理
    this.init();

    return this;

}

const init = function(){
    // 对数据进行分段
    this.handleFile()
    // 开始对数据进行上传
    this.updateFile();
}

// 将文件进行分段处理
const handleFile = function(){
    var countLength = this.countLength;
    var base64 = this.base64;
    var min = 0;
    var max = countLength;
    var b = "";
    for( ;; ){
        b = base64.substring(min,max);
        if( b == "" ){ 
            break;
        }
        this.baseArray.push( b );
        min = max;
        max = min + countLength;
    }
    console.log("视频文件数据分段处理结束");
    console.log("分段数量为：" + this.baseArray.length);
}

const updateFile = function(index = 0){
    var name = this.name;
    var base64 = this.baseArray[index];
    if( !base64 ){ 
        this.oncomplete && this.oncomplete({
            index, name, id, res: null, isload: true,
            rate: (index)/this.baseArray.length
        });
        return console.log("请求结束"); 
    }
    var length = this.base64.length;
    var id = this.id;
    updateVideo({
        name: name,
        id: id,
        base64: base64,
        length: length,
        index: index
    }).then((res)=>{
        var rate = (index+1)/this.baseArray.length;
        this.oncomplete && this.oncomplete({
            index, name, id, res, 
            isload: false, rate: rate
        });
        this.id = res.data.id;
        this.updateFile(++index);
    })
}

const mergeFile = function(){
    return new Promise((a)=>{
        var id = this.id;
        if( !id ) return;
        mergeVideo({
            id: id,
        }).then((res)=>{
            debugger;
            this.path = res.data.path;
            a(this.path);
        })
    })
}

export { update }


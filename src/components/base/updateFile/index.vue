<template>
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="视频名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="视频简介">
            <el-input v-model="form.info"></el-input>
        </el-form-item>
        <el-form-item label="视频封面">
            <input type='file' ref='fileImage' @change='updateImage' />
            <div v-show='rate > 0' class='progressRate'>{{imageRate}}%</div>
            <input type='button' @click='updateLoadImage' value='开始上传'>
        </el-form-item>
        <el-form-item label="视频上传">
            <input type='file' ref='fileVideo' @change='updateVideo' />
            <div v-show='rate > 0' class='progressRate'>{{rate}}%</div>
            <input type='button' @click='updateLoad' value='开始上传'>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import { update } from './updateFile'
import { addVideo } from '@/api/updateFile.js'
export default {
    data() {
        return {
            form: {
                name: '',
                imagebase64: '',
                videoId: '',
                imageId: '',
                info: ''
            },
            rate: 0,
            imageRate: 0,
            fileName: "",
            videoBase64: "",
            fileImageName: "",
            videoImageBase64: ""
        }
    },
    methods: {
        onSubmit() {
            console.log('submit!');
            addVideo({
                name: this.form.name,
                path: this.form.videoId,
                master: "站长",
                image: this.form.imageId,
                info: this.form.info
            }).then((e)=>{
                debugger;
            })
        },
        updateImage (){
            // 上传的合计base64数据
            this.getBase64(this.$refs.fileImage.files[0]).then((res)=>{
                this.videoImageBase64 = res.base64;
                // 获取文件名称
                this.fileImageName = res.name;
            });;
        },
        updateVideo (event){
            // 上传的合计base64数据
            this.getBase64(this.$refs.fileVideo.files[0]).then((res)=>{
                this.videoBase64 = res.base64;
                // 获取文件名称
                this.fileName = res.name;
            });
        },
        getBase64 (files){
            return new Promise((a)=>{
                // 创建文件处理对象
                var rs = new FileReader();
                // 处理完毕后事件
                rs.onload = (res)=>{
                    // 获取文件解析的base64数据
                    a({
                        base64:res.currentTarget.result.split(",")[1],
                        name: files.name
                    })
                }
                // 开始处理上传选中文件
                rs.readAsDataURL(files); 
            })
        },
        // 开始上传
        updateLoad (){
            // 开始上传
            var u = new update(this.fileName,this.videoBase64)
            // 每次完成
            u.oncomplete = (res)=>{
                this.rate = parseInt(res.rate * 100)         
                if( res.isload === true ){
                    // 如果是已经完成的状态则触发合并
                    u.mergeFile().then(()=>{
                        this.form.videoId = u.path;
                    })
                }
            };
        },
        // 开始上传封面
        updateLoadImage (){
            // 开始上传
            var u = new update(this.fileImageName,this.videoImageBase64)
            // 每次完成
            u.oncomplete = (res)=>{
                this.form.imageId = u.id;
                this.imageRate = parseInt(res.rate * 100)
                if( res.isload === true ){
                    // 如果是已经完成的状态则触发合并
                    u.mergeFile().then(()=>{
                        this.form.imageId = u.path;
                    })
                }
            };
        }
    }
}
</script>

<style scoped>
    .progressRate {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate();
    }
</style>
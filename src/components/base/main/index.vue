<template>
    <div class='main'>
        <!-- 公告栏 -->
        <div></div>
        <!-- 广告 -->
        <div></div>
        <!-- 内容实体 -->
        <div class='main_content'>
            <!-- 左侧列表内容 -->
            <div class='main_content_left'>
                <!-- 第一行 导航栏 -->
                <div></div>
                <!-- 第二行 开始列表 -->
                <div class='main_content_left_list'>
                    <div class='model' v-for='( it , i ) in videos' :key='i'>
                        <!-- 第一行标题 【P站美图】我绝对是最最可爱的哟！《偶像大师 灰姑娘女孩》舆水幸子生日壁纸特辑 -->
                        <div class='main_content_left_list_title'>{{it.name}}</div>

                        <!-- 时间 -->
                        <div class='timeRow'>
                            <div><i class='el-icon-watch'></i> 2020年11月26日</div>
                            <div><i class='el-icon-folder-opened'></i> p站美图</div>
                            <div><i class='el-icon-view'></i> 382</div>
                        </div>
                        <!-- 第二行简介和封面 -->
                        <div class='main_content_left_list_box'>
                            <!-- 封面 -->
                            <div class='main_content_left_list_box_img'>
                                <!-- <img :src='require("@/assets/images/bg.jpg")' /> -->
                                <img :src='getVideoImage(it)' />
                            </div>
                            <!-- 简介 -->
                            <div class='main_content_left_list_box_info'>
                                <div class='infoText'>
                                    <span>
                                        {{it.info}}
                                    </span>
                                </div>
                                <div>
                                    <div class='goInfo' @click='goVideo(it)'> 查看更多... </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 右侧相关内容 -->
            <div class='main_content_right'>

                <!-- 测试模块 -->
                <comp-list></comp-list>

                <div class='listBox'>
                    <div class='smallBoxName'>
                        <span>ACG资源</span>
                        <div class="stripe-line"></div>
                    </div>
                    <!-- 图片轮播 -->
                    <div>
                        <comp-slider></comp-slider>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import compSlider from './comps/slider'
import compList from './comps/list'
import { getVideo } from '@/api/index.js'
import { localhost, videoPath ,videoImagePath } from '@/api/config.js'
export default {
    components: {
        compSlider,
        compList
    },

    data (){
        return {
            videos: [],
            localhost, 
            videoPath,
            videoImagePath
        }
    },

    mounted (){
        this.getVideoData()
    },

    methods: {
        getVideoData (){
            getVideo().then((res)=>{
                this.videos = res.data;
            });
        },

        getVideoImage (it){
            return this.localhost+this.videoImagePath+it.image;
        },

        goVideo (it){
            open("./#/video/"+it.id);
        }
    }
}
</script>

<style scoped>
    .stripe-line {
        /* background: url("images/stripe.png"); */
        height: 12px;
        overflow: hidden;
        margin-top: 5px;
    }

    .samllBoxInfo {
        height: 54px;
        font-size: 12px;
        line-height: 18px;
    }

    .samllBoxRight {
        font-size: 12px;
        padding: 0 12px;
    }

    .smallBoxImg {
        width:100px;
        height: 70px;
        border-radius: 4px;
        flex-shrink: 0;
    }

    .smallBoxImg img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }

    .smallBox {
        display: flex;
        border-bottom: solid 1px #eeeeee;
        padding: 10px 0;
    }

    .listBox {
        background: #ffffff;
        border-radius: 4px;
        box-shadow: 0 0 3px #0000007a;
        padding: 12px;
        margin-bottom: 15px;
    }

    .main_content_right {
        width: 330px;
        margin: 22px 0;
    }

    .main { 
    }
    .main_content {
        display:flex;
    }
    .main_content_left{
        width: calc(100% - 350px);
    }
    .main_content_left_list {
        background: #ffffff;
        margin: 22px;
        box-shadow: 0 0 3px #0000007a;
        border-radius: 4px;
    }
    .model {
        padding: 15px;
        border-bottom: solid 1px #eeeeee;
    }
    .main_content_left_list_box_img {
        position:relative;
        width: 315px;
        height: 175px;
        flex-shrink: 0;
    }
    .main_content_left_list_box_img img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
    }
    .main_content_left_list_title {
        font-size: 20px;
    }
    .main_content_left_list_box {
        display: flex;
        padding: 11px 0;
    }
    .main_content_left_list_box_info {
        padding: 0 8px;
        font-size: 12px;
        text-indent: 2em;
        line-height: 18px;
        width: 100%;
    }
    .infoText {
        overflow: hidden;
        height: 120px;
    }
    .goInfo {
        padding: 8px 4px;
        background: #f88c00;
        border-radius: 4px;
        color: #fff;
        /* width: 92px; */
        margin-top: 18px;
        transition: background 0.25s;
        cursor: pointer;
    }
    .goInfo:hover {
        background: #c1b6a7;
    }
    .timeRow {
        display:flex;
        font-size: 12px;
        padding: 5px 0 0px;
        align-items: center;
    }
    .timeRow > div {
        margin-right:15px;
    }
</style>
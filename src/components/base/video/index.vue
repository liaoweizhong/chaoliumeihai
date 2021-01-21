<template>
	<div>
		<div class='backgroundC'></div>
		<!-- 播放器 -->
		<div id="video">
			<!-- ui层控制器 -->
			<div class="header">
				<div class="title"> 潮留美海自制播放器 </div>
			</div>

			<!-- 播放本体 -->
			<div class="content cp">
				<!-- 加载画面 -->
				<div id="jzhm" class="fill">
					<img class="fill" :src="require('./img/1.jpg')" />
				</div>
				<!-- 银幕 -->
				<div id="videoContent" class="fill">

				</div>
				<!-- 弹幕 -->
				<div class="DM">
					
				</div>
				<!-- 暂停播放显示状态 -->
				<div class="zhuangtai">
					<img class="fill" :src="require('./img/bf.png')" />
				</div>
			</div>

			<!-- footer -->
			<div class="footer">
				<!-- 进度条 -->
				<div class="progressbar">

					<div class="bar"></div>

				</div>
				<!-- 下方控制盘 -->
				<div class="opt">
					<!-- 暂停播放列表 -->
					<div class="bfOrZt cp">
						<img :src="require('./img/bf.png')" />
					</div>
					<!-- 时间 -->
					<div class="time cp">
						<span class="currentTime">00:00</span>
						<span> / </span>
						<span class="countTime">00:00</span>
					</div>

					<!-- 全屏 -->
					<div class="qp fR cp">
						<img :src='require("./img/qp.png")' />
					</div>

					<!-- 音量 -->
					<div class="yl fR cp">
						<img :src='require("./img/yl.png")' />
						<input class='yl_range' type='range' min="0" max="100" />
					</div>
				</div>
			</div>
		</div>

		<input-box class='inputSymbol'></input-box>
	</div>
</template>

<script>
import { localhost, videoPath ,videoImagePath } from '@/api/config.js'
import { getVideoById } from '@/api/index.js'
import video from "./js/video.js"
import inputBox from "@/components/base/comment/index"
export default {
	components: {
		inputBox
	},
	data (){
		return {
			video: {}
		}
	},
	mounted (){
		this.getData();
	},
	methods:{
		getData (){
			var id = this.$route.params.id;
			getVideoById(id).then((res)=>{
				this.video = res.data[0];
				var path = localhost + videoPath + res.data[0].path;
				// this.v = new video(path, document.getElementById("videoContent"));
			})
		}
	}
}
</script>

<style scoped>

	.backgroundC {
        background-image: url(https://ae01.alicdn.com/kf/HTB18ehESIfpK1RjSZFOq6y6nFXaf.jpg) !important;
        /* background-image: url(~@/assets/images/bg.jpg) !important; */
        position: fixed;
        background-repeat: no-repeat;
        top: 0;
        left: 0;
        z-index: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        opacity: 0.85;
    }

	#video { 
		/* width: 80%; height: 80%; 
		position:absolute;
		top:50%;
		left:50%;
		transform: translate(-50%,-50%);
		background: #000000; */

		width: 80%;
		height: 600px;
		position: relative;
		background: #000000;
		margin: 45px 10%;
	}
	#video .header {
		height: 50px;
		background: #000;
		opacity : .7;
		position:relative;
	}

	#video .content {
		height: calc(100% - 100px);
		background: #0c1618;
		opacity: .7;
		position:relative;
	}

	#video .footer {
		height: 50px;
		background: #0c1618;
		opacity: .7;
	}

	.progressbar {
		width: 100%;
		margin: auto;
		height: 5px;
		background: #656262;
		border-radius : 8px;
	}

	.bar {
		width: 0%;
		height: 100%;
		background: #fff;
		border-radius: 8px;
	}

	.opt > * {
		float: left;
		margin: 0px 5px;
	}

	.opt {
		overflow: hidden;
		color: #fff;
		line-height: 45px;
		padding: 0px 19px;
	}

	.bfOrZt{ 
		width: 20px;
		height: 20px; 
	}

	.footer img {
		width: 20px;
		height: 20px;
		margin-top: 12px;
	}

	.time {
		margin-left: 20px;
		font-size: 12px;
	}

	.fR { float: right; }

	.title {
		color: #fff;
		font-size: 15px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		white-space: nowrap;
	}

	.fill { width: 100%; height: 100%; }
	.fill > * {

	}
	

	.content > div { position: absolute; }

	.zhuangtai {
		width: 50px;
		height: 50px;
		position: absolute;
		right: 20px;
		bottom: 20px;
		border: solid 1px #a1a1a1;
		border-radius: 50%;
		padding: 10px 10px 10px 15px;
		display: none;
	}
	
	.cp { cursor: pointer; }

	video { width : 100%;height:100%; }

	input[type="range"] {
		/*-webkit-box-shadow: 0 1px 0 0px #424242, 0 1px 0 #060607 inset, 0px 2px 10px 0px black inset, 1px 0px 2px rgba(0, 0, 0, 0.4) inset, 0 0px 1px rgba(0, 0, 0, 0.6) inset;*/
		-webkit-appearance: none; /*去除默认样式*/
		background-color: #ebeff4;
		/*border-radius: 15px;*/
		width: 80% !important;
		-webkit-appearance: none;
		height:4px;
		padding: 0;
		border: none;
		position: absolute;
		top: 18px;
		/*input的长度为80%，margin-left的长度为10%*/
	}
	input[type="range"]::-webkit-slider-thumb {
		-webkit-appearance: none;/*去除默认样式*/
		cursor: default;
		top: 0;
		height: 20px;
		width: 20px;
		transform: translateY(0px);
		/*background: none repeat scroll 0 0 #5891f5;*/
		background: #fff;
		border-radius: 15px;
		border: 5px solid #006eb3;
		/*-webkit-box-shadow: 0 -1px 1px #fc7701 inset;*/
	}
	
	.yl_range { display: none;margin-left: 30px; }
	.yl {
		transition: width 0.3s;
		position: relative;
		width : 20px;
	}
	.yl:hover {
		width: 200px;
	}
	.yl:hover > .yl_range { display : block; }

	.inputSymbol {
		z-index: 99;
		position: relative;
		width: 80%;
		margin:auto;
		background: #ffffffc2;
    	padding: 20px;
	}
</style>
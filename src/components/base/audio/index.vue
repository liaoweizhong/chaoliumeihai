<template>
  <div>
    <div class='bg'></div>
    	
    	<div id='audioControl'>
    		
    		<!-- 音乐播放器 -->
			<div id='audio'>
				<div class='audiobefore hide'></div>
				<div class='audioC'>
					<div class='audioHead'>
						<div class='audioTitle'> 次萌音乐播放器 </div>
						<div class='audioInfo'> 享受萌音 此刻开始 </div>
						<div>
							<input class='audioSearch' type='text'>
						</div>
					</div>
					<div class='audioBody'>
						
						<div class='audioListRow' number='*' key='*' backgroundImages='*' music-url='*'>
							
							<div class='audioListRowimage'>
								<img class='play hide' src="image/play.png" />
								<img class='stop hide' src="image/stop.png" />
								<span class='order' fill-data='__order'> 1 </span>
							</div>
							<div class='audioListRowInfo'>
								<div class='huanhang'>
									<span class='audioListRowInfoName' fill-data='musicName'>Teemage Dream</span>
								</div>
								<div class='audioListRowInfoInfo'>
									<span fill-data='musicMaster'>katty Perry</span>
									<span fill-datas='musicTime' class='Time hide'> 5:24M </span>
								</div>
							</div>
							
						</div>
											
					</div>
					
				</div>
			</div>
			
			<div id='audioFace'>
				<div class='audioFacebefore hide'></div>
				
				<div class='audioFacehead'>
					<img onclick='audioPlay.showList()' class='fh activeBtn' src="image/fh.png">
					<img onclick='alert("这个功能还没实现，等待作者完善")' class='sc activeBtn' src="image/sc.png">
				</div>
				<div class='audioFaceBody'>
					<div class='cdCardDiv'>
						<img class='cdCard' src="../js/three/image/pic/33.jpg" />
						<div class='cdCardCenter'></div>
					</div>
					<div class='cdCardInfo'>
						<div class='cdCardInfoMusicName'> Video Games </div>
						<div class='cdCardInfoMaster'> Lana De Ray </div>
					</div>
				</div>
				<div class='timer'> 
					<div class='timerNumber'>
						<span class='timerCurr'> 1:58 </span>
						<span class='timerLength'> 2:44 </span>
					</div>
					<div class='timerLine'>
						<div class='timerLineComplete'></div>	
					</div>
				</div>
				<div style="height: calc(20% - 82px);padding: 15px;background: #0000006e;">
					<div class='optBtn' >
						<input class='yinliang' onchange='audioPlay.playVolume(this.value/100)' value='50' type='range' />
						<img class='activeBtn' onclick='audioPlay.playPrev();' src="image/ht.png" style="height: 100%;">
						<img class='activeBtn' onclick='audioPlay.playStop();$(this).hide().next().show();' src="image/zt.png" style="height: 100%;margin: 0 56px;">
						<img class='activeBtn' onclick='audioPlay.playIng();$(this).hide().prev().show();' src="image/bf.png" style="display: none;height: 100%;margin: 0 56px;">
						<img class='activeBtn' onclick='audioPlay.playNext();' style="transform: rotateY(180deg);height: 100%;" src="image/ht.png">
					</div>
					<!--<img  src="image/model_dq.png">-->
				</div>
			</div>
    		
    	</div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
	.timerLine {
		width: 100%;
		height: 5px;
		background: rgba(153, 153, 153, 0.5294117647058824);
		cursor: pointer;
	}
	.timerLineComplete {
		width: 0%;
		height: 100%;
		background: rgba(255, 255, 255, 0.6705882352941176);
		transition: width 1s;
		transition-timing-function: linear;
	}
	.timerNumber {
		padding:15px 18px;
	}
	.timerCurr {
		color: #d6e5ec;
	}
	.timerLength {
		color: #b4d1d9;
		position: absolute;
		right: 18px;
	}

	* {
		-moz-user-select: none; 
		-o-user-select:none; 
		-khtml-user-select:none; 
		-webkit-user-select:none; 
		-ms-user-select:none; 
		user-select:none;
	}

	@media only screen and (min-width: 640px) {

		#audioControl {
			left: 50%;
			top: 50%;
			position: absolute;
			width: 80%;
			height: 80%;
			min-width: 900px;
			min-height: 650px;
			transform: translate(-50%,-50%);
			overflow: hidden;
			z-index: 10;
			padding: 15px;
		}

		#audio {
			width: 250px;
			height: calc(100% - 30px);
		}
		
		#audioFace {
			margin-left: 260px;
		}
		
		.cdCard {
			width: 500px;
			height: 500px;
		}
		
		.cdCardCenter {
			width: 50px;
			height: 50px;
		}
		
		.cdCardInfoMusicName {
			font-size: 38px;
		}
		
		.optBtn {
			height: 100%;text-align: left;position: relative;
		}

	}

	#audio {
		position: absolute;
		box-shadow: 3px 3px 14px rgba(38, 38, 39, 0.3686274509803922);
		z-index: 10;
	}
	#audio .audiobefore {
		position: absolute;
		width:100%;
		height:100%;
		box-shadow: -3px -3px 14px rgba(38, 38, 39, 0.3686274509803922);
		top: 0;
		left: 0;
	}

	.audioC {
		height: 100%;
	}

	.audioHead {
		text-align: center;
		padding-bottom: 16px;
		color: #ffffff;
	}

	.audioTitle {
		padding: 15px 0 0 0;
		font-size: 16px;
	}

	.audioSearch {
		border: solid 1px #ffffff;
		border-radius: 22px;
		height: 33px;
		outline: none;
		padding: 0 8px;
		background: transparent;
		color: #ffffff;
	}

	.audioInfo {
		padding: 10px;	
	}

	.audioListRowimage { 
		position: absolute;
		width : 25%;
		height:100%;
		line-height: 60px;
		text-align: center;
		border-right: solid 1px rgba(153, 153, 153, 0.12941176470588237);
	}


	.audioListRowInfo {
		margin-left: 25%;
		height: calc(100% - 16px);
		padding: 8px 0 8px 15px;
	}

	.audioListRow {
		position: relative;
		height: 60px;
		cursor: pointer;
	}

	.audioListRow:active {
		transform: scale(0.8,0.8);
		transition: transform .3s;
	}

	#audio .order {
		font-size: 23px;
		color: #40a8af;
	}

	.audioBody {
		background: #ffffff;
		height: calc(100% - 123px);
		overflow-y: auto;
	}

	.audioBody::-webkit-scrollbar {
		width: 0px;
	}

	.audioListRowInfoName {
		font-size: 16px;
		font-family: initial;
	}

	.audioListRowInfoInfo {
		color: #999;
		margin-top: 3px;
	}

	.audioListRowInfoInfo .Time {
		position: absolute;
		right: 20px;
	}

	.audioListRow:nth-child(odd){background:#f1f0f6;}
	.audioListRow:nth-child(even){background:#FFFFFF;}

	.audioListRow.active { background:#fcd384; }

	.audioListRowimage .play {
		width: 60%;
		height: 60%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}

	.audioListRowimage .stop { 
		width: 60%;
		height: 60%;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
	}

	#audioControl .hide {
		display: none;
	}

	.bg:before{
		content: "";
		width:100%;
		height:100%;
		position: absolute;
		left:0;
		top:0;
		background: inherit;
		filter: blur(10px);
		z-index: 2;
	}

	.bg {
		background-image: url(../js/three/image/pic/33.jpg);
		background-repeat: no-repeat;
		background-size: 100% 100%;
		width: 100%;
		height:100%;
		position: absolute;
		top:0;
		left:0;
	}

	#audioFace {
		box-shadow: 3px 3px 14px rgba(38, 38, 39, 0.3686274509803922);
		height: 100%;
		position: relative;
		z-index: 99;
	}
	#audioFace .audioFacebefore {
		position: absolute;
		width:100%;
		height:100%;
		box-shadow: -3px -3px 14px rgba(38, 38, 39, 0.3686274509803922);
		top: 0;
		left: 0;
	}

	.audioFacehead {  
		height: 25px;
		position: relative;
		padding: 15px 10px;
	}

	.audioFacehead img {  
		cursor: pointer;
	}

	.sc {
		position: absolute;
		right: 15px;
		height:calc( 100% - 30px )
	}

	.fh {
		margin-left: 8px;
		height: 100%;
	}


	.activeBtn:active {
		transform: scale(0.8,0.8);
		transition: transform .3s;
	}

	.audioFaceBody {
		height: calc(80% - 55px);
		position: relative;
	}

	.cdCardDiv {
		text-align: center;
		top: 50%;
		left: 50%;
		position: absolute;
		transform: translate(-50%,-50%);
	}

	.cdCard {
		position: relative;
		border-radius: 50%;
		animation: cdtrans 10s linear;
		animation-iteration-count: infinite;
		box-shadow: 3px 3px 3px #999;
	}
	.cdCard:before {
		content: "";
		width: 100%;
		height: 100%;
		position: relative;
		border-radius: 50%;
		animation: cdtrans 10s linear;
		animation-iteration-count: infinite;
		box-shadow: 3px 3px 3px #999;
	}

	.cdCardCenter {
		width: 80px;
		height: 80px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		border-radius: 100%;
		background: #5d5151;
		border: solid 5px rgba(153, 153, 153, 0.6);
	}

	.cdCardInfo {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		text-align: center;
	}

	.cdCardInfoMusicName {
		margin-bottom: 120px;
		color: #fff;
	}

	.cdCardInfoMaster {
		font-size: 16px;
		color: #a6a094;
	}

	.optBtn img {
		cursor: pointer;
	}

	@keyframes cdtrans{
		from{ transform: rotateZ(0deg); }
		to{ transform: rotateZ(360deg); }
	}

	input[type=range] {
		-webkit-appearance: none;
		width: 300px;
		border-radius: 10px;
	}

	input[type=range]::-ms-track {
		height: 25px;
		border-radius: 10px;
		box-shadow: 0 1px 1px #def3f8, inset 0 .125em .125em #0d1112;
		border-color: transparent; /*去除原有边框*/
		color: transparent; /*去除轨道内的竖线*/
	}

	input[type=range]::-ms-thumb {
		border: solid 0.125em rgba(205, 224, 230, 0.5);
		height: 25px;
		width: 25px;
		border-radius: 50%;
		background: transparent;
		margin-top: -5px;
		box-shadow: 0 .125em .125em #3b4547;
	}

	input[type=range]::-ms-fill-lower {
		/*进度条已填充的部分*/
		height: 22px;
		border-radius: 10px;
		background: linear-gradient(to right, #059CFA, white 100%, white);
	}

	input[type=range]::-ms-fill-upper {
		/*进度条未填充的部分*/
		height: 22px;
		border-radius: 10px;
		background: #ffffff;
	}

	input[type=range]:focus::-ms-fill-lower {
		background: linear-gradient(to right, #059CFA, white 100%, white);
	}

	input[type=range]:focus::-ms-fill-upper {
		background: #ffffff;
	}

	.yinliang { 
		top: 50%;
		transform: translate(0,-50%);
		position: absolute;
		right: 15px;
		display: block;
		outline: none;
		background-color: rgba(162, 166, 169, 0.5294117647058824);
	}

	.huanhang {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 149px;
	}

	@media only screen and (min-width: 100px) and (max-width: 640px) {
	
		#audioControl {
			width: 100%;
			height: 100%;
			overflow: hidden;
			z-index: 10;
		}
		
		#audio {
			left: 0;
			width: 100%;
			height:100%;
			transition: left 0.7s;
		}
		
		#audioFace {
			transition: left 0.7s;
			/*display: none;*/
			/*position: absolute;*/
			top:0;
			left: 100%;
			width:100%;
			height:100%;
		}
		
		.cdCard {
			width: 280px;
			height: 280px;
		}
		
		.cdCardCenter {
			width: 80px;
			height: 80px;
		}
		
		.cdCardInfoMusicName {
			font-size: 24px;
		}
		
		.cdCardInfo {
			width: 50%;
		}
		
		.yinliang {
			display: none;
		}
		
		.optBtn {
			height: 100%;text-align: center;position: relative;
		}
		
	}
</style>
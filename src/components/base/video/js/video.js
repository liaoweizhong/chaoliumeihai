
//进度条进度
let video = function () {
	this.constructor = function (url,videoElement) {
		this.setUrl(url);
		this.setVideo(videoElement);
		this.element = $("#video")[0];
		this.progress = $(".progressbar")[0];
		this.progress.onclick = this.onclickProgress.bind(this);
		this.progressBar = $(".progressbar .bar")[0];   //进度条element
		this.duration = $(".countTime")[0]; 
		this.currentTime = $(".currentTime")[0];
		this.playBtn = $(".bfOrZt")[0];
		this.playBtn.onclick = this.onclickplayBtn.bind(this);
		this.playBtn_StopSrc = "img/bf.png";
		this.playBtn_PlaySrc = "img/zt.png";
		this.volumeElementRange = $(".yl_range")[0]; 
		this.volumeElementRange.onchange = this.onchangeVolumeElementRange.bind(this);
		this.fullsScreenElement = $(".qp")[0];
		this.fullsScreenElement.onclick = this.onclickfullsScreenElement.bind(this);
	};
	this.constructor.apply(this,arguments);
}

video.prototype = {

	setUrl: function (url) {
		this.url = url;
	},

	getUrl: function () {
		return this.url;
	},

	setVideo: function (element) {
		var videoElement = document.createElement("video");
		
		videoElement.style.cssText = "width: 100%;height:100%;"

		videoElement.onreadystatechange = this.onreadystatechange.bind(this);
		videoElement.onplay = this.onplay.bind(this);
		videoElement.onload = this.onload.bind(this);
		videoElement.onloadeddata = this.onloadeddata.bind(this);
		videoElement.onloadedmetadata = this.onloadedmetadata.bind(this);
		videoElement.oncanplay = this.oncanplay.bind(this);
		videoElement.onloadstart = this.onloadstart.bind(this);
		videoElement.onpause = this.onpause.bind(this);
		videoElement.onclick = this.onclick.bind(this);
		
		videoElement.autoplay = true;
		videoElement.loop = true;
		//videoElement.muted = true;
		videoElement.playsinline = true;
		videoElement.src = this.getUrl();
		this.videoElement = videoElement;

		element.appendChild(videoElement);
		
	},

	//开始加载
	startLoad: function () {
		
	},
	
	onclick: function(){
		this.onclickplayBtn.apply(this,arguments);
	},
	
	onload: function () {
		debugger;
	},

	onloadstart : function(){
		
		
	},

	onloadeddata : function(){
		debugger;
		
	},
	
	onloadedmetadata : function(){
		debugger;
		
	},

	//加载完成事件
	onreadystatechange: function () {
		debugger;
		document.getElementById("jzhm").style.display = 'none';
		this.videoElement.style.display = 'block';
	},

	//开始加载时间
	onplay: function () {
		debugger;
		document.getElementById("jzhm").style.display = 'none';
		this.videoElement.style.display = 'block';
		this.openProgressBar();  //但开始播放的时候 进度条跟进
		this.setDuration(); //设置一下总时长
		this.setIconByVideoIsPaused(); //设置一下播放按钮的样式
		this.setVolumeElement(); //设置一下播放音量的样式
	},

	//可以开始加载事件
	oncanplay: function () {
		debugger;

	},
	
	//暂停触发事件
	onpause : function(){
		
	},
	
	//开启响应进度条
	openProgressBar : function(){
		this.progressBarKey && this.clearProgressBar();
		this.progressBarKey = setInterval(function(){
			this.setProgressBar();
		}.bind(this),10);
	},
	//关闭响应进度条
	clearProgressBar : function(){
		this.progressBarKey && clearInterval(this.progressBarKey);
		this.progressBarKey = null;
	},
		
	//关于进度条响应
	setProgressBar : function(){
		var v = this.videoElement;
		this.progressBar.style.width = ( v.currentTime / v.duration  * 100 ).toFixed(1) + "%";
		var s = this.sToTime(v.duration);
		this.currentTime.innerText = this.sToTime(v.currentTime);
	},
	
	//把秒换算成时间格式
	sToTime : function(s){
		var f = parseInt(s/60);
		var s = parseInt(s%60);
		s < 10 ? s = "0"+s : ""; 
		return f + ":" + s;
	},
	
	//设置总时长
	setDuration : function(){
		this.duration.innerText = this.sToTime(this.videoElement.duration);
	},
	
	//滑动进度条
	setCurrentTime : function(num){
		this.videoElement.currentTime = num;
	},
	
	//点击进度条响应
	onclickProgress : function(e){
		debugger;
		this.setCurrentTime( (e.offsetX / e.currentTarget.offsetWidth) * this.videoElement.duration );
	},
	
	//点击开始播放安妮
	onclickplayBtn : function(){
		if( this.videoElement.paused ){
			this.videoElement.play();
		}else{
			this.videoElement.pause();
		}
		//根据视频的状态修改图标
		this.setIconByVideoIsPaused();
	},
	
	//根据视频状态修改播放按钮图标
	setIconByVideoIsPaused : function(){
		if( this.videoElement.paused ){
			this.playBtn.children[0].src = this.playBtn_StopSrc;
		}else{
			this.playBtn.children[0].src = this.playBtn_PlaySrc;
		}
	},
	
	//设置声音
	setVolume : function(num){
		this.videoElement.volume = num;
	},
	
	//根据视频声音修改声音控制dom的长度
	setVolumeElement : function(){
		this.volumeElementRange.value = this.videoElement.volume*100;
	},
	
	//视频声音控制dom被被变化事件
	onchangeVolumeElementRange : function(e){
		this.setVolume(e.target.value/100);
	},
	
	//全屏按钮被点击执行
	onclickfullsScreenElement : function(){

		if( this.isFullscreen() ){
			this.exitFullscreen();
		}else{				
			this.requestFullScreen();	
		}
	},
	
	//进入全屏
	requestFullScreen : function() {
		var de = this.element;
		if (de.requestFullscreen) {
			de.requestFullscreen();
		} else if (de.mozRequestFullScreen) {
			de.mozRequestFullScreen();
		} else if (de.webkitRequestFullScreen) {
			de.webkitRequestFullScreen();
		}
	},
	//退出全屏
	exitFullscreen: function() {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExiFullscreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
			}
	},
	//是否全屏
	isFullscreen: function(){
		return document.fullscreenElement    ||
				document.msFullscreenElement  ||
				document.mozFullScreenElement ||
				document.webkitFullscreenElement || false;
	}
	
};

export default video;


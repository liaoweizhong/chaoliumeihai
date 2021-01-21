var param = function(url){
    var p = {};
    url = url.substring(1,url.length);
    url = url.split("&");
    for(var i in url){
        var it = url[i];
        it = it.split("=");
        p[it[0]]= decodeURI(url[i].substring(it[0].length+1,url[i].length));
    }
    return p;
}(location.search);


$(function(){
	
	var selAudioElement = $(".active");
	var selAudioElementOpt = {
		play : function(){
			selAudioElement.find(".stop").addClass("hide");
			selAudioElement.find(".play").removeClass("hide");
			selAudioElement.find(".order").addClass("hide");
		},
		stop : function(){
			selAudioElement.find(".stop").removeClass("hide");
			selAudioElement.find(".play").addClass("hide");
			selAudioElement.find(".order").addClass("hide");
		},
		active : function(){
			$(".cdCardInfoMusicName").text(selAudioElement.find(".audioListRowInfoName").text());
			$(".cdCardInfoMaster").text(selAudioElement.find(".audioListRowInfoInfo span").eq(0).text());
			selAudioElement.addClass("active");
		},
		unactive : function(){
			$(".cdCardInfoMusicName").text(" Video Name ");
			$(".cdCardInfoMaster").text(" Lana De Ray ");
			selAudioElement.removeClass("active");
		}
	}

	var $this = null;
	var $audioControl = $("#audioControl");
	var $audioBody = $(".audioBody");
	var $audio = $audioControl.find("#audio"); 
	var $audioFace = $audioControl.find("#audioFace");
	var MoRen = {
		backgroundImage : "../js/three/image/pic/33.jpg",
	}
	var audio = {
		isPlay : 0,
	}
	
	
	
	$audioBody.delegate(".audioListRowInfo","click",function(e){
		
		
		
		if( document.body.offsetWidth < 640 ){
			
			if( !audioPlay.audio.paused 
				&& $(this).parent().hasClass("active") ){
				e.stopPropagation();	
			}
			//如果是小屏的话
			audioPlay.showInfo();
		}
		
	})
	
	$audioBody.delegate(".audioListRow","click",function(e){
		
		$this = $(this); 

        bofang($this)
        
    })
    
    var bofang = window.bofang = function($this){
        if($this.hasClass("active")){
			//如果是已经被选中的行
			if( audioPlay.audio.paused ){
				//如果暂停状态
				audioPlay.continue();
				$this.find(".stop").addClass("hide");
				$this.find(".play").removeClass("hide");
				$this.find(".order").addClass("hide");
			}else{
				//暂停
				audioPlay.pause();
				$this.find(".stop").removeClass("hide");
				$this.find(".play").addClass("hide");
				$this.find(".order").addClass("hide");
			}
		}else{
			
			if( selAudioElement.length ){
				//关闭之前的
				audioPlay.stop();
				selAudioElementOpt.unactive();
//				selAudioElement.removeClass("active");
				selAudioElement.find(".stop").addClass("hide");
				selAudioElement.find(".play").addClass("hide");
				selAudioElement.find(".order").removeClass("hide");
			}
			//播放现在的
			audioPlay.play($this.attr("music-url"));
			bg.bgChange($this.attr("backgroundImages"));
//			$this.addClass("active");
			$this.find(".stop").addClass("hide");
			$this.find(".play").removeClass("hide");
			$this.find(".order").addClass("hide");
		};
		selAudioElement = $this;
		selAudioElementOpt.active();
		_this = null;
    }
	
	
	var AudioPlay = function(){
		
		this.constructor = function(){
			this.audio = this.createAudio();
			this.audioMode = 0; 
			this.url = "music/";
			this.timerCurr = $(".timerCurr");
			this.timerLength = $(".timerLength");
			this.timerLineComplete = $(".timerLineComplete");
			this.yinliang = $(".yinliang");
		}
		
		this.audioMode = function(mode){
			if( mode == 0 ){
				this.audio.loop = true;
			}
		}
		
		this.loop = function(){
			this.audioMode(0);
		}
		
		this.createAudio = function(){
			var audio = document.createElement("audio");
			audio.autoplay = true;
			audio.volume = 0.5;
			audio.onplay = function(){
				this.progressBarTimer();
				this.timerLengthShow();
				this.timerCurrShow();
			}.bind(this)
			audio.onplaying = function(){
				this.progressBarTimer();
				selAudioElementOpt.play();
			}.bind(this)
			audio.onpause = function(){
				this.progressBarTimerClear();
				selAudioElementOpt.stop();
			}.bind(this)
			audio.onended = function(){
				this.playNext();
			}.bind(this)
			return audio;
		}
		
		this.play = function(url){
			if( url ){
				this.audio.src = this.url+url;	
			}else{
				this.audio.play();
			}
		}
		
		this.continue = function(){
			this.play();
		}
		
		this.stop = function(){
			this.pause();
		}
		
		this.volume = function(number){
			this.audio.volume = number;
		}
		
		this.pause = function(){
			this.audio.pause();
		}
		
		this.setLyric = function(lyricJson){
			this.lyric = lyricJson;
		}
		
		this.startTime = function(){
			if( !this.lyric || this.timer ) return;
			var time = this.audio.currentTime;
			this.timer = setInterval(function(){
				 
			}.bind(this),1000);
		}
		
		this.endTime = function(){
			if( !this.timer ) return;
			clearInterval(this.timer);
			this.timer = null;
		}
		
		this.onLyric = function(){
			
		}
		
		this.progressBarTimerClear = function(){
			this.timer && clearInterval(this.timer); 
			this.timer = null;
		}
		
		this.progressBarTimer = function(){
			if( this.timer ) return; 
			this.timer = setInterval(function(){
				this.timerCurrShow();
			}.bind(this),1000);
		}
		
		this.progressBar = function(){
			//显示当前时长
			this.timerCurrShow(this.audio.currentTime)
			//显示总时长
			this.timerLengthShow(this.audio.duration);	
			//开启计时器
			this.progressBarTimer();
		}
		
		this.setCurr = function(num){
			this.audio.currentTime = num * this.audio.duration;
			this.audio.paused && this.play();
		}
		
		this.timerCurrShow = function(number = this.audio.currentTime){
			this.timerCurr.text(`${number/60 < 1 ? 0 : parseInt(number/60)}:${ parseInt(number%60) }`);
			this.timerLineComplete.width(number / this.audio.duration * 100+"%");
		}
		
		this.timerLengthShow = function(number = this.audio.duration){
			this.timerLength.text(`${parseInt(number/60)}:${ parseInt(number%60) }`);
		}
		
		this.constructor.apply(this,arguments);
		
	}

	
	window.audioPlay = new AudioPlay();
	
	var fileData = new FillData() 
	fileData.fill($(".audioListRow")[0],musicMenu) 

	var bg = {
		bgChange : function(url){
			if(url == "*"){ url = null; }
			$(".bg").css({"background-image":`url(${url || MoRen.backgroundImage})`});
			$(".cdCard").attr("src",url || MoRen.backgroundImage);
		}
	}
	
	window.audioPlay.playNext = function(){
		var $this = selAudioElement.next();
		if( $this.length ){
			$this.click();
//			audioPlay.play($this.attr("music-url"));
//			bg.bgChange($this.attr("backgroundImages"));
		}
	}
	
	window.audioPlay.playPrev = function(){
		var $this = selAudioElement.prev();
		if( $this.length ){
			$this.click();
//			audioPlay.play($this.attr("music-url"));
//			bg.bgChange($this.attr("backgroundImages"));
		}
	}
	
	window.audioPlay.playStop = function(){
		this.pause();
	}
	
	window.audioPlay.playIng = function(){
		this.continue();
	}

	window.audioPlay.playVolume = function(num){
		this.volume(num);
	}

	$(".timerLine").on("click",function(e){
		
		audioPlay.setCurr(e.offsetX / this.offsetWidth); 

	})
	
	
	window.audioPlay.showList = function(){
		$audioFace.css({left:"100%"});
//		setInterval(function(){
//			$audioFace.hide();
//		},700)
		$audio.show().css({left:0});
	}
	
	window.audioPlay.showInfo = function(){
		$audio.css({left:"-100%"});
//		setTimeout(function(){
//			$audio.hide()
//		},700)
		$audioFace.show().css({left:0});
	}

	window.audioPlay.search = function(key){
		
	}

    if( param.id ){
	setTimeout(()=>{
	        var dom = $("[number='"+param.id+"']")[0];
	        dom && bofang($(dom));
		setTimeout(()=>{
			dom && bofang($(dom));
		},1000)
	        
	},2000)
    }

})
 
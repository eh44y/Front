
function slider_carousel(obj,dir,click_delay,interval_delay,timeout_delay){
	var n=1
	var isStart = true
	var leng=$(obj).find(".img_container li").size()
	var intervalID=setInterval(function(){next()},interval_delay)
	var timeoutID
	//------------------------------------동적객체추가▼
	$(obj).find(".img_container .imgbox1").clone().appendTo(obj+" .img_container")
	if(dir=="left"){
		$(obj).find(".img_container .imgbox1:last-child").css({"position":"absolute","left":"100%"})
	}else{
		$(obj).find(".img_container .imgbox1:last-child").css({"position":"absolute","top":"100%"})
	}//if else
	$(obj).find(".img_container .imgbox"+leng).clone().prependTo(obj+" .img_container")
	if(dir=="left"){
		$(obj).find(".img_container .imgbox"+leng+":first-child").css({"position":"absolute","right":"100%"})
	}else{
		$(obj).find(".img_container .imgbox"+leng+":first-child").css({"position":"absolute","bottom":"100%"})
	}//if else
	//------------------------------------공통함수▼
	function change(){
		if(dir=="left"){
			$(obj).find(".img_container").animate({"left":(n-1)*-100+"%"},function(){
				if(n>leng){n=1}
				if(n<1){n=leng}
				$(obj).find(".img_container").css("left",(n-1)*-100+"%")
			})//left animate
		}else{
			$(obj).find(".img_container").animate({"top":(n-1)*-100+"%"},function(){
				if(n>leng){n=1}
				if(n<1){n=leng}
				$(obj).find(".img_container").css("top",(n-1)*-100+"%")
			})//top animate
		}//if
		$(obj).find(".img_container li").removeClass("active")
		$(obj).find(".imgbox"+n).addClass("active")
		$(obj).find(".controls button").removeClass("active")
		$(obj).find(".btn"+n).addClass("active")
		isStart=false
		setTimeout(function(){isStart=true},click_delay)
	}//change
	function next(){
		n++
		change()
	}//next
	function autoplay(){
		clearInterval(intervalID)
		clearTimeout(timeoutID)
		timeoutID=setTimeout(function(){
			var intervalID=setInterval(function(){next()},interval_delay)
		},timeout_delay)//timeout
	}//autoplay
	//------------------------------------버튼구현▼
	$(obj).find(".next").click(function(){
		if(isStart==true){
			n++
			change()
			autoplay()
		}//isStrat true
	})//next click
	$(obj).find(".prev").click(function(){
		if(isStart==true){
			n--
			change()
			autoplay()
		}//isStrat true
	})//prev click
	$(obj).find(".controls button").click(function(){
		if(isStart==true){
			n=$(this).attr("data-n")
			change()
			autoplay()
		}//isStrat true
	})//button click
}//slider_carousel
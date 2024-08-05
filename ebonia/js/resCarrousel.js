function resCarrousel(slider,duration,delay,intervalDelay,timeoutDelay){
	$(slider+"  .img_container").draggable({axis:"x"})
	var slider = slider
	var colCnt = $(slider+"  .img_container>li").size()
	var colPercent = parseInt((100/colCnt)*100)*0.01
	var moveRange = $(slider+"  .img_container").width()/$(slider).width()/colCnt*100
	var n = 1
	var isClick = true
	var duration = duration
	var isMouseDown = false
	var mouseDownX
	var mouseUpX
	var intervalID = setInterval(function(){next()},intervalDelay)
	var timeoutID
	function next(){
		if(isClick==true){
			n++
			change()
		}//if isClick	
	}//next
	function slide(){
		change()
		setAutoPlay()
	}//slide
	function setAutoPlay(){
		clearInterval(intervalID)
		clearTimeout(timeoutID)
		timeoutID = setTimeout(function(){
			intervalID = setInterval(function(){next()},intervalDelay)
		},timeoutDelay-intervalDelay)
	}//setAutoPlay
	$(window).resize(function(){
		moveRange = $(slider+"  .img_container").width()/$(slider).width()/colCnt*100
		$(slider+"  .img_container").css('left',(n-1)*-moveRange+'%')
	})//resize
	$(slider+"  .img_container").mousedown(function(e){
		$(this).addClass('active')
		isMouseDown = true
		mouseDownX = e.clientX
	})//mouseup	
	$(document).mouseup(function(e){
		$(slider+"  .img_container").removeClass('active')
		if(isMouseDown==true){
			mouseUpX = e.clientX
			isMouseDown = false
			if(mouseDownX>mouseUpX+30){//next
				n++
			}else if(mouseDownX<mouseUpX-30){//prev
				n--
			}
			slide()
		}//if isMouseup	
	})//mouseup
	/*clone and postion---------------------------------------*/
	for(i=1;i<=colCnt;i++){
		$(slider+"  .img_container>li:nth-child("+i+")").clone().appendTo(slider+"  .img_container")
		$(slider+"  .img_container>li:nth-child("+(i+colCnt)+")").css({'position':'absolute','left':((i-1)*colPercent+100)+'%'})
		$(slider+"  .img_container>li:nth-child("+(i+colCnt)+")").addClass('imgbox'+(i+colCnt))
	}
	for(i=1;i<=colCnt;i++){
		$(slider+"  .img_container>li:nth-last-child("+i+")").clone().prependTo(slider+"  .img_container")
		$(slider+"  .img_container>li:nth-child(1)").css({'position':'absolute','left':-(i*colPercent)+'%'})
	}
	$(slider+"  .controls li:first-child button").addClass('btn'+(colCnt+1))
	$(slider+"  .controls li:last-child button").addClass('btn0')
	/*button ui----------------------------------------------*/
	$(slider+' .next').click(function(){
		if(isClick==true){
			n++
			slide()
		}//if isClick
	})//next click
	$(slider+' .prev').click(function(){
		if(isClick==true){
			n--
			slide()
		}//if isClick
	})//prev click
	$(slider+' .controls button').click(function(){
		if(isClick==true){
			n=$(this).attr('data-n')
			slide()
		}//if isClick
	})//.controls button click
	function change(){
		isClick=false
		$(slider+"  .img_container").draggable('disable')
		setTimeout(function(){isClick=true;$(slider+"  .img_container").draggable('enable')},delay)
		$(slider+"  .img_container li").removeClass('active')
		$(slider+"  .imgbox"+n).addClass('active')
		if(n>colCnt){$(slider+"  .imgbox1").addClass('active')}
		if(n<1){$(slider+"  .imgbox"+colCnt).addClass('active')}
		$(slider+"  .controls button").removeClass('active')
		$(slider+"  .btn"+n).addClass('active')
		$(slider+"  .img_container").stop().animate({'left':(n-1)*-moveRange+'%'},duration,function(){
			if(n>colCnt){n=1}//if
			if(n<1){n=colCnt}//if
			$(slider+"  .img_container").css('left',(n-1)*-moveRange+'%')
		})//animate function end
	}//change
}//resCarrousel
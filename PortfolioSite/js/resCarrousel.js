function resCarrousel(slider,duration,delay,intervalDelay,timeoutDelay){
	$(slider+"  .skill_container").draggable({axis:"x"})
	var slider = slider
	var colCnt = $(slider+"  .skill_container>li").size()
	var colPercent = parseInt((100/colCnt)*100)*0.01
	var moveRange = $(slider+"  .skill_container").width()/$(slider).width()/colCnt*100
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
		moveRange = $(slider+"  .skill_container").width()/$(slider).width()/colCnt*100
		$(slider+"  .skill_container").css('left',(n-1)*-moveRange+'%')
	})//resize
	$(slider+"  .skill_container").mousedown(function(e){
		$(this).addClass('active')
		isMouseDown = true
		mouseDownX = e.clientX
	})//mouseup	
	$(document).mouseup(function(e){
		$(slider+"  .skill_container").removeClass('active')
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
		$(slider+"  .skill_container>li:nth-child("+i+")").clone().appendTo(slider+"  .skill_container")
		$(slider+"  .skill_container>li:nth-child("+(i+colCnt)+")").css({'position':'absolute','left':((i-1)*colPercent+100)+'%'})
		$(slider+"  .skill_container>li:nth-child("+(i+colCnt)+")").addClass('imgbox'+(i+colCnt))
	}
	for(i=1;i<=colCnt;i++){
		$(slider+"  .skill_container>li:nth-last-child("+i+")").clone().prependTo(slider+"  .skill_container")
		$(slider+"  .skill_container>li:nth-child(1)").css({'position':'absolute','left':-(i*colPercent)+'%'})
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
		$(slider+"  .skill_container").draggable('disable')
		setTimeout(function(){isClick=true;$(slider+"  .skill_container").draggable('enable')},delay)
		$(slider+"  .skill_container li").removeClass('active')
		$(slider+"  .imgbox"+n).addClass('active')
		if(n>colCnt){$(slider+"  .imgbox1").addClass('active')}
		if(n<1){$(slider+"  .imgbox"+colCnt).addClass('active')}
		$(slider+"  .controls button").removeClass('active')
		$(slider+"  .btn"+n).addClass('active')
		$(slider+"  .skill_container").stop().animate({'left':(n-1)*-moveRange+'%'},duration,function(){
			if(n>colCnt){n=1}//if
			if(n<1){n=colCnt}//if
			$(slider+"  .skill_container").css('left',(n-1)*-moveRange+'%')
		})//animate function end
	}//change
}//resCarrousel
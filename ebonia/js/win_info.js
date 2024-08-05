$(function(){
    win_info()   //시작 하자마자
    function win_info(){
        winw=$(window).width()
        winh=$(window).height()
        scrt=$(window).scrollTop()
    }//fn
    $(window).resize(function(){   //창크기 조절을 하자마자
        win_info()
    })//resize
    $(window).scroll(function(){   //스크롤 조절을 하자마자
        win_info()
    })//scroll
})//ready
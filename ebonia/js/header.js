$(function(){

  $(".btn_bar").click(function(){
    $(".gnb").addClass("active")
    /* $("body").css("overflow-y","hidden") */
  })//btn_bar click

  $(".btn_close").click(function(){
    $(".gnb").removeClass("active")
    $("body").css("overflow-y","auto")
    /* $(".gnb>ul>li>ul").stop().slideUp()
    $(".gnb>ul>li>a").removerClass("active") */
  })//btn_close click

  $(".gnb>ul>li>a").click(function(){
    $(".gnb>ul>li>ul").stop().slideUp()
    $(this).siblings("ul").stop().slideDown()
    $(this).parent().siblings("li").children("a").removeClass("active")
    $(this).addClass("active")
    return false
  })//1dep a click



  /* header_motion */
  header_motion()
  function header_motion(){
    if(scrt>=60){
      $("header").addClass("active")
    }else{
      $("header").removeClass("active")
    }
  }//fn end

  $(window).scroll(function(){
    header_motion()
  })//scroll

  $(window).resize(function(){
    header_motion()
  })//resize
  /* header_motion end */

})//ready
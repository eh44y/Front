$(function(){

  init()
  function init(){
    winw = $(window).width()
    winh = $(window).height()
    winIw = $(window).innerWidth()
    winIh = $(window).innerHeight()
    winOw = $(window).outerWidth()
    winOh = $(window).outerHeight()
    scrt = $(window).scrollTop()
    scrl = $(window).scrollLeft()
  }
  $(window).resize(function(){
    init()
  })
  $(window).scroll(function(){
    init()
  })
})//ready
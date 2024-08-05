$(function(){
  addr=location.href
  if(addr.match("sub1-1")){
    dep1=1 ; dep2=1
  }else if(addr.match("sub1-2")){
    dep1=1 ; dep2=2
  }else if(addr.match("sub1-3")){
    dep1=1 ; dep2=3
  }else if(addr.match("sub1-4")){
    dep1=1 ; dep2=4
  }else if(addr.match("sub1-5")){
    dep1=1 ; dep2=5
  }else if(addr.match("sub1-6")){
    dep1=1 ; dep2=6
  }else if(addr.match("sub2-1")){
    dep1=2 ; dep2=1
  }else if(addr.match("sub2-2")){
    dep1=2 ; dep2=2
  }else if(addr.match("sub2-3")){
    dep1=2 ; dep2=3
  }else if(addr.match("sub2-4")){
    dep1=2 ; dep2=4
  }else if(addr.match("buy-page")){
    dep1=1 ; dep2=7
  }
  
  $(".wrap aside section .btn"+dep1+"-"+dep2).show()
  $(".wrap aside .sidenav .menu"+dep1).show()
  $(".wrap aside .sidenav .btn"+dep1+"-"+dep2).addClass("active")

  $(".wrap").addClass("active")
})//ready
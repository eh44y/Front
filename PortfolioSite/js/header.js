$(function () {
  home_h = 0;
  work_w = 0;
  about_h = 0;
  padding = 0;

  set_scroll();
  function set_scroll() {
    //home섹션에 필요한 스크롤 높이
    home_h = winh * 3;
    //about섹션 높이
    about_h = $("section.about > div.inner").outerHeight();
    //work 섹션 넓이
    work_w =
      $("section.work ul.container li").outerWidth() *
        $("section.work ul.container li").size() -
      winw +
      winh;
    //contact 섹션 높이
    $("section.contact").css("margin-left", work_w - winh);
    contact_h = $("section.contact > div.inner").outerHeight();

    dummy_h = home_h + about_h + work_w + contact_h;
    $(".dummy_scroll").height(dummy_h);

    if (scrt < home_h - winh) {
      //home
      $("article.wrap").css("top", 0);
      $("article.wrap").css("left", 0);
    }

    if (scrt >= home_h - winh && scrt < home_h + about_h) {
      //about
      $("article.wrap").css("top", -(scrt - (home_h - winh)));
      $("article.wrap").css("left", 0);
    }

    if (scrt >= home_h + about_h && scrt < home_h + about_h + work_w - winh) {
      $("article.wrap").css("top", -(winh + about_h));
      $("article.wrap").css("left", -(scrt - (home_h + about_h)));
    }

    if (scrt >= home_h + about_h + work_w - winh) {
      $("article.wrap").css(
        "top",
        -(winh + about_h + (scrt - (home_h + about_h + work_w - winh)))
      );
      $("article.wrap").css("left", -(work_w - winh));
    }
  } //fn setscroll
  //---------------------------------------------------//

  //---------------------------------------------------//
  var scr_speed = 0;
  setInterval(function () {
    // 현재위치에서 앞으로나간다 (이동공식)
    current_scrt = $(window).scrollTop();
    $(window).scrollTop(current_scrt + scr_speed); // 속도가 변해야함
    scr_speed = scr_speed * 0.95; // 천천히 0이된다
  }, 20);

  $("section,header,footer,article.wrap").mousewheel(function (e, delta) {
    //scr_speed = scr_speed + 2
    scr_speed += 10 * -delta; // 휠로 가속도를 올리고
    return false;
  }); //wheel

  //---------------------------------------------------//

  $(document).keydown(function (e) {
    if (
      e.keyCode == 38 ||
      e.keyCode == 40 ||
      e.keyCode == 37 ||
      e.keyCode == 39
    ) {
      console.log(e);
      e.preventDefault();
    }
  });

  $(window).resize(function () {
    set_scroll();
  }); //resize
  $(window).scroll(function () {
    set_scroll();
  }); //resize

  $("#header .mnav_btn").click(function () {
    $(this).toggleClass("active");
    $("#header #mnav").toggleClass("active");
  });

  $("#logo a").click(function () {
    $("body,html").stop().animate({ scrollTop: 0 }, 0);
    return false;
  });

  $(".gnb a").on("click", function () {
    let target = $(this).attr("href");
    let liLength = $("#work .container li").length;
    let liBaseWidth = $("#work .work_intro").width();
    let liAfterWidth = parseInt((liBaseWidth + 1) / 2) * liLength;
    $(".mbtn").removeClass("active");
    if (target === "home") {
      target = home_h / 2;
    } else if (target === "about") {
      target = home_h;
    } else if (target === "work") {
      target = home_h + about_h;
    } else if (target === "contact") {
      if (winw > 1000) {
        target = home_h + about_h + work_w + liAfterWidth;
      } else {
        target = home_h + about_h + work_w;
      }
    }
    $("body,html").stop().animate({ scrollTop: target }, 1000);
    return false;
  });
}); //ready

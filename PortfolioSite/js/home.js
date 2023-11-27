$(function () {
  ////////////////////////////////////////////////////// text b teg cover start
  // section home titie1 start
  str1 = $("section.home .int1_title1").text();
  str2 = $("section.home .int1_title2").text();
  obj1 = "section.home .int1_title1";
  obj2 = "section.home .int1_title2";
  $(obj1).empty();
  for (i = 0; i < str1.length; i++) {
    if (str1.charAt(i) == " ") {
      txt = "&nbsp;";
    } else {
      txt = str1.charAt(i);
    } //if end

    if (str1.charAt(i) == "/") {
      $(obj1).append("<br>");
    } else {
      $(obj1).append("<b class='int1_name1_" + i + "'>" + txt + "</b>"); //append end
    } //if end

    $(obj1)
      .find("b:last-child")
      .css("transition-delay", i * 0.1 + "s");
  } //for end
  $(obj2).empty();
  for (i = 0; i < str2.length; i++) {
    if (str2.charAt(i) == " ") {
      txt = "&nbsp;";
    } else {
      txt = str2.charAt(i);
    } //if end

    if (str2.charAt(i) == "/") {
      $(obj2).append("<br>");
    } else {
      $(obj2).append("<b class='int1_name2_" + i + "'>" + txt + "</b>"); //append end
    } //if end

    $(obj2)
      .find("b:last-child")
      .css("transition-delay", i * 0.1 + "s");
  } //for end
  // section home titie1 end
  // section home titie2 start
  str3 = $("section.home .int2_title1").text();
  str4 = $("section.home .int2_title2").text();
  obj3 = "section.home .int2_title1";
  obj4 = "section.home .int2_title2";
  $(obj3).empty();
  for (i = 0; i < str3.length; i++) {
    if (str3.charAt(i) == " ") {
      txt = "&nbsp;";
    } else {
      txt = str3.charAt(i);
    } //if end

    if (str3.charAt(i) == "/") {
      $(obj3).append("<br>");
    } else {
      $(obj3).append("<b class='int2_name1_" + i + "'>" + txt + "</b>"); //append end
    } //if end

    $(obj3)
      .find("b:last-child")
      .css("transition-delay", i * 0.1 + "s");
  } //for end
  $(obj4).empty();
  for (i = 0; i < str4.length; i++) {
    if (str4.charAt(i) == " ") {
      txt = "&nbsp;";
    } else {
      txt = str4.charAt(i);
    } //if end

    if (str4.charAt(i) == "/") {
      $(obj4).append("<br>");
    } else {
      $(obj4).append("<b class='int2_name2_" + i + "'>" + txt + "</b>"); //append end
    } //if end

    $(obj4)
      .find("b:last-child")
      .css("transition-delay", i * 0.1 + "s");
  } //for end
  // section home titie2 end
  ////////////////////////////////////////////////////// text b teg cover end

  var t;
  var main_bg_h;
  var ab_t;
  var ab_h;
  function home_motion() {
    t = scrt - (home_h - winh * 2);

    if (scrt <= home_h - winh * 2) {
      $("ul.container1").css(
        "transform",
        "translateX(" + t * 1 + "px) translateY(" + t * -0.5 + "px)"
      );
      $("ul.container2").css(
        "transform",
        "translateX(" + t * -1 + "px) translateY(" + t * 0.5 + "px)"
      );
      $(".mainbg, ul.menu, #header, .home_scroll").removeClass("active");
      $(".container_box ul").removeClass("active");
      $("h2.title1").addClass("active");
      $("h2.title2").removeClass("active");
    } else {
      $("ul.container1").css(
        "transform",
        "translateX(" + 0 + "px) translateY(" + 0 + "px)"
      );
      $("ul.container2").css(
        "transform",
        "translateX(" + 0 + "px) translateY(" + 0 + "px)"
      );
      $(".mainbg, ul.menu, #header, .home_scroll").addClass("active");
      $(".container_box ul").addClass("active");
      $("h2.title2").addClass("active");
      $("h2.title1").removeClass("active");
    }

    if (scrt > home_h - winh * 2) {
      $(".mainbg>div").each(function () {
        t = (scrt - (home_h - winh * 2)) * -0.8;
        $(this).css("transform", "translateY(" + t + "px)");
      }); //each
    } else {
      $(".mainbg>div").each(function () {
        t = (scrt - (home_h - winh * 2)) * -0.8;
        $(this).css("transform", "translateY(" + 0 + "px)");
      }); //each
    }

    ab_t = $("section.about").offset().top;
    ab_h = $("section.about").innerHeight();
    if (scrt >= ab_t - winh * 0.99 && scrt <= ab_t + ab_h - winh) {
      $(".mainbg").css("background", "#1c1c1c");
    } else {
      $(".mainbg").css("background", "#1c1c1c");
    }
  } //fn

  ////////////////////////////////////////////////////// txt transform motion start
  setInterval(function () {
    if (parseInt(Math.random() * 3) == 0) {
      $(".home .inner .container_box .title1 .int1_title1 b").removeClass(
        "actived"
      );
      random_rotate = parseInt(Math.random() * 7);
      $(
        ".home .inner .container_box .title1 .int1_name1_" + random_rotate
      ).addClass("actived");
    }
  }, 250); //interval
  setInterval(function () {
    if (parseInt(Math.random() * 3) == 0) {
      $(".home .inner .container_box .title1 .int1_title1 b").removeClass(
        "actived"
      );
      random_rotate = parseInt(Math.random() * 16);
      $(
        ".home .inner .container_box .title1 .int1_name2_" + random_rotate
      ).addClass("actived");
    }
  }, 250); //interval
  setInterval(function () {
    if (parseInt(Math.random() * 3) == 0) {
      $(".home .inner .container_box .title2 .int2_title1 b").removeClass(
        "actived"
      );
      random_rotate = parseInt(Math.random() * 19);
      $(
        ".home .inner .container_box .title2 .int2_name1_" + random_rotate
      ).addClass("actived");
    }
  }, 250); //interval
  setInterval(function () {
    if (parseInt(Math.random() * 3) == 0) {
      $(".home .inner .container_box .title2 .int2_title1 b").removeClass(
        "actived"
      );
      random_rotate = parseInt(Math.random() * 11);
      $(
        ".home .inner .container_box .title2 .int2_name2_" + random_rotate
      ).addClass("actived");
    }
  }, 250); //interval
  ////////////////////////////////////////////////////// txt transform motion end

  home_motion();
  $(window).resize(function () {
    home_motion();
  }); //resize
  $(window).scroll(function () {
    home_motion();
  }); //resize
}); //ready

$(function () {
  ////////////////////////////////////////////////////// text b teg cover start
  str1 = $("section.work .wk_span1").text();
  str2 = $("section.work .wk_span2").text();
  obj1 = "section.work .wk_span1";
  obj2 = "section.work .wk_span2";
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
      $(obj1).append("<b class='wk_thk1_" + i + "'>" + txt + "</b>"); //append end
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
      $(obj2).append("<b class='wk_thk2_" + i + "'>" + txt + "</b>"); //append end
    } //if end

    $(obj2)
      .find("b:last-child")
      .css("transition-delay", i * 0.1 + "s");
  } //for end
  ////////////////////////////////////////////////////// text b teg cover end

  ////////////////////////////////////////////////////// work_motion start
  var off_left;
  var ratio;
  var position_left;
  var width;
  var gap_width;
  var position_top;
  var img_height = 230;
  var gap_height;
  var remain_height;
  var gap_winh;
  var str;
  $(".work .container li").each(function () {
    str = $(this).find(".ex_txt").html();
    $(this).find(".ex span").html(str);
  });
  function work_motion() {
    off_left = $(".work").offset().left;
    off_left = -off_left;
    gap_winh = winh;
    $(".work .container li.box").each(function () {
      position_left = $(this).position().left;
      ratio = (off_left - position_left + winw * 0.4) / (winw * 0.4);
      position_top = $(this).find(".imgbox").position().top;
      remain_height = winh - position_top - img_height - 10;

      if (ratio < 0) {
        $(this).css("width", "25%");
        $(this)
          .find("figure")
          .css("height", img_height + "px");
        $(this).find(".ex_txt").css("opacity", 1);
        $(this).find(".ex span").css("opacity", 0);
        $(this).find(".ex").css("transform", "translateY(0px)");
      } else if (ratio >= 0 && ratio <= 1) {
        gap_width = winw * 0.25 * ratio;
        width = "calc(25% + " + gap_width + "px)";
        $(this).css("width", width);
        gap_height = remain_height * ratio;
        $(this)
          .find("figure")
          .css("height", "calc(" + img_height + "px + " + gap_height + "px)");
        $(this)
          .find(".ex_txt")
          .css("opacity", 1 - ratio * 3);
        $(this)
          .find(".ex span")
          .css("opacity", ratio * 3 - 1);
        $(this)
          .find(".ex")
          .css(
            "transform",
            "translateY(" + (0.5 - Math.abs(0.5 - ratio)) * 70 + "px)"
          );
      } else {
        width = "calc(25% + " + winw * 0.25 + "px)";
        $(this).css("width", width);
        gap_height = remain_height;
        $(this)
          .find("figure")
          .css("height", "calc(" + img_height + "px + " + gap_height + "px)");
        $(this).find(".ex_txt").css("opacity", 0);
        $(this).find(".ex span").css("opacity", 1);
        $(this).find(".ex").css("transform", "translateY(0px)");
      }
    }); //each

    /* dummyimg_width = $(".work .dummy .img1").width();
    dummyimg_width = dummyimg_width * 0.5 * -1.1;
    $(".work .dummy .img1").css("margin-left", dummyimg_width); */

    dummy_left = $(".work .dummy").position().left;
    dummy_ratio = (off_left - dummy_left + winw * 0.5) / (winw * 0.5);
    if (winw > 1000) {
      dummy_ratio = dummy_ratio - 0.05;
      dummy_speed = 800;
    } else if (winIw <= 1000 && winIw >= 600) {
      dummy_ratio = dummy_ratio - 0.05;
      dummy_speed = 200;
    } else {
      dummy_ratio = dummy_ratio - 1;
      dummy_speed = 100;
    }
    if (dummy_ratio < 0) {
      $(".work .dummy")
        .find(".img1")
        .css(
          "transform",
          "translateX(" + Math.abs(dummy_ratio) * dummy_speed + "px)"
        );
    } else {
      $(".work .dummy").find(".img1").css("transform", "translateY(0px)");
    }
    if (ratio < 0) {
      $(".work .dummy").find(".text2").css("opacity", 0);
    } else if (ratio >= 0 && ratio <= 1) {
      $(".work .dummy")
        .find(".text2")
        .css("opacity", ratio * 3 - 1);
    } else {
      $(".work .dummy").find(".text2").css("opacity", 1);
    }

    var work_offtop;
    work_offtop = $(".work").offset().top;
    $(".work #particles-js").css("left", off_left + "px");
  } //fn work_motion end
  ////////////////////////////////////////////////////// work_motion end

  ////////////////////////////////////////////////////// txt transform motion start
  setInterval(function () {
    if (parseInt(Math.random() * 3) == 0) {
      $(".wokr .inner .container .dummy .text1 span b").removeClass("actived");
      random_rotate = parseInt(Math.random() * 5);
      $(
        ".work .inner .container .dummy .text1 .wk_thk1_" + random_rotate
      ).addClass("actived");
    }
  }, 400); //interval
  setInterval(function () {
    if (parseInt(Math.random() * 3) == 0) {
      $(".work .inner .container .dummy .text1 span b").removeClass("actived");
      random_rotate = parseInt(Math.random() * 4);
      $(
        ".work .inner .container .dummy .text1 .wk_thk2_" + random_rotate
      ).addClass("actived");
    }
  }, 400); //interval
  ////////////////////////////////////////////////////// txt transform motion end

  work_motion();
  $(window).scroll(function () {
    work_motion();
  }); //scroll
  $(window).resize(function () {
    work_motion();
  }); //resize
}); //ready

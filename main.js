$(function() {
  //オープニングアニメーション
  $(".header-title").fadeIn(2000);
  $(".sub-title").fadeIn(2000);
  //マウスオーバーしたときの色を指定
  $("li a").on("mouseover",function(){
    $(this).css({
      color: "#4dc0b2",
    });
  });

  //マウスアウトしたときに元の色に戻る
  $("li a").on("mouseout",function(){
    $(this).css({
      color: "",
    });
  });
});
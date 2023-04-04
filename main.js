$(function() {
  //マウスオーバーしたときの色を指定
  $(".piyo").on("mouseover",function(){
    $(this).css({
      color: "#4dc0b2",
    });
  });

  //マウスアウトしたときに元の色に戻る
  $(".piyo").on("mouseout",function(){
    $(this).css({
      color: "",
    });
  });
});
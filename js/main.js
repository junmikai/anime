$(function(){
//    キャッチコピー自動移動
	$("#left").animate({
    "marginTop":"200px"},{ duration: 5000});

//    ヘッダー
    $('nav ul li a').hover(function() {
        $(this).css('color', '#c00');
    },
    function() {
        $(this).css('color', '');
      });
      
//    ヒロイン
      $('#heroin1').mouseover(function() {
        $(this).animate({
        "marginTop":"-50px"},{ duration: 200});
        $(this).animate({
        "marginTop":""},{ duration: 200});
    });

    $('#heroin2').mouseover(function() {
        $(this).animate({
        "marginTop":"-50px"},{ duration: 200});
        $(this).animate({
        "marginTop":""},{ duration: 200});
    });


    //    NEWS
    $(".box").mouseover(function() {
        $(this).animate({zIndex:1},{
          duration:2000,
          step:function(now){
            $(this).css({transform:'rotateY(' + (now * 360) + 'deg)'});
        }})
      });

      
      //    フッター 
      $('footer ul li a').mouseover(function(){
        $(this).animate({
            'opacity':'0.1'},{ duration: 400});
            $(this).animate({
            'opacity':'1'},{ duration: 400});
      });
});


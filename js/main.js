$(function(){
  //ローディングエリアを取得
  var loading = $("#loading");
//ローディング中
  $(".loading__img").animate({"marginTop":"30px"},{ duration: 500});
  $(".loading__img").animate({"marginTop":"-30px"},{ duration: 500});
  $(".loading__img").animate({"marginTop":"30px"},{ duration: 500});
  $(".loading__img").animate({"marginTop":"-30px"},{ duration: 500});
  $(".loading__img").animate({"marginTop":"30px"},{ duration: 500});
  //ローディングエリアを隠す処理
  var isHidden = function(){
  loading.fadeOut(1000); //1000ミリ秒かけてフェードアウト
  };
  //1000ミリ秒後にloadingFunc開始
  setTimeout(isHidden,2000);
  });

$(function(){
  
//    キャッチコピー自動移動
  $("#left").animate({"marginTop":"200px"},{ duration: 5000});

//    ヘッダー
    $('nav ul li a').hover(function() {
        $(this).css('color', '#c00');
    },
    function() {
        $(this).css('color', '');
      });
      
//    ヒロイン
      $('#heroin1').mouseenter(function() {
        $(this).animate({
        "marginTop":"-50px"},{ duration: 200});
        $(this).animate({
        "marginTop":""},{ duration: 200});
    });

    $('#heroin2').mouseenter(function() {
        $(this).animate({
        "marginTop":"-50px"},{ duration: 200});
        $(this).animate({
        "marginTop":""},{ duration: 200});
    });


    //    NEWS
    $(".box").mouseenter(function() {
        $(this).animate({zIndex:1},{
          duration:2000,
          step:function(now){
            $(this).css({transform:'rotateY(' + (now * 360) + 'deg)'});
        }})
      });

      
      //    フッター 
      $('footer ul li a').mouseenter(function(){
        $(this).animate({
            'opacity':'0.1'},{ duration: 400});
            $(this).animate({
            'opacity':'1'},{ duration: 400});
      });


      //    キャラ紹介触った時
      $('.charaparent').mouseenter(function() {
        $(this).animate({
        "marginTop":"-50px"},{ duration: 200});
      });
      $('.charaparent').mouseleave(function() {
        $(this).animate({
        "marginTop":""},{ duration: 200});
      });

      //    ストーリーTOP
      $("#catch").css({opacity:'0'});
	    setTimeout(function(){
		  $("#catch").animate({opacity:'1'},2000);
      },3000);
      
      //    ストーリー詳細
      $("#aboutbox").css({opacity:'0'});
	    setTimeout(function(){
      $("#aboutbox").animate({opacity:'1',"marginTop":"150px"},2000);
      },3000);

      //    玉
      var amountScrolled = 500;
      $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('a.sf-back-to-top').fadeIn('slow');
        } else {
            $('a.sf-back-to-top').fadeOut('slow');
        }
      });
      
      $('a.sf-back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
      });
     
});




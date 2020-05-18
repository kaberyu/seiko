$(function () {
  $(window).on('load', function () {
    var winW = $(window).width();
    var winH = $(document).height();
    // ローディング画面
    // $('#loader').fadeOut(500);
    // ヒーローアニメーション表示
    $('#js_logo').addClass('fadein-logo');
    // アニメーション中のボーダーアニメーション
    // if (winW < '640px') {
    //   $('#js_copy-border1, #js_copy-border2').delay(500).animate({
    //     width: 105
    //   }, 500, 'swing');
    //   $('#js_copy-bfade1, #js_copy-bfade2').delay(1000).animate({
    //     width: 75
    //   }, 500, 'swing').delay(300).queue(function () {
    //     $('#js_copy-img').addClass('fadein-copy')
    //     $('#js_hero-bg').addClass('fadein-bg').dequeue();
    //   });
    // } else {
    //   $('#js_copy-border1, #js_copy-border2').delay(500).animate({
    //     width: 200
    //   }, 500, 'swing');
    //   $('#js_copy-bfade1, #js_copy-bfade2').delay(1000).animate({
    //     width: 150
    //   }, 500, 'swing').delay(300).queue(function () {
    //     $('#js_copy-img').addClass('fadein-copy')
    //     $('#js_hero-bg').addClass('fadein-bg').dequeue();
    //   });
    // };

    $('#js_copy-border1, #js_copy-border2').delay(500).animate({
      width: 105
    }, 500, 'swing');
    $('#js_copy-bfade1, #js_copy-bfade2').delay(1000).animate({
      width: 75
    }, 500, 'swing').delay(300).queue(function () {
      $('#js_copy-img').addClass('fadein-copy')
      $('#js_hero-bg').addClass('fadein-bg').dequeue();
    });
    $('#border-top1, #border-top2').delay(1800).animate({
      width: winW / 2 - 8
    }, 500, 'linear');
    $('#border-left, #border-right').delay(2300).animate({
      height: winH - 16
    }, 2000, 'linear');
    $('#border-bottom1, #border-bottom2').delay(4300).animate({
      width: winW / 2 - 8
    }, 500, 'linear');

    // ボーダーアニメーション
    // if (winW < '640px') {
    //   $('#border-top1, #border-top2').delay(1800).animate({
    //     width: winW / 2 - 8
    //   }, 500, 'linear');
    //   $('#border-left, #border-right').delay(2300).animate({
    //     height: winH - 16
    //   }, 2000, 'linear');
    //   $('#border-bottom1, #border-bottom2').delay(4300).animate({
    //     width: winW / 2 - 8
    //   }, 500, 'linear');
    // } else if (winW > '640px' || winW < '1600px') {
    //   $('#border-top1, #border-top2').delay(1800).animate({
    //     width: '48.2%'
    //   }, 500, 'linear');
    //   $('#border-left, #border-right').delay(2300).animate({
    //     height: winH - 40
    //   }, 2000, 'linear');
    //   $('#border-bottom1, #border-bottom2').delay(4300).animate({
    //     width: winW / 2 - 20
    //   }, 500, 'linear');
    // } else {
    //   $('#border-top1, #border-top2').delay(1800).animate({
    //     width: 780
    //   }, 500, 'linear');
    //   $('#border-left, #border-right').delay(2300).animate({
    //     height: winH - 40
    //   }, 2000, 'linear');
    //   $('#border-bottom1, #border-bottom2').delay(4300).animate({
    //     width: 780
    //   }, 500, 'linear');
    // }

    // スクロールボタン遅延表示
    $('#js_hero-bottom').delay(4300).fadeIn();
  });


  $('#js_scroll-down').click(function () {
    $('html, body').animate({
      'scrollTop': 812
    }, 1500);
  });

  $('#scroll-btn').click(function () {
    $('html, body').animate({
      'scrollTop': 0
    }, 1000);
  });
});

$(function () {
  $(window).on('load', function () {
    var winW = $(window).width();
    var winH = $(document).height();
    var heroH = $(window).height();
    $('.hero, .hero-bg').css('height', heroH);
    // ローディング画面
    // $('#loader').fadeOut(500);
    // ヒーローアニメーション表示
    $('#js_logo').addClass('fadein-logo');
    // アニメーション中のボーダーアニメーション
    if (winW < 640) {
      $('#js_copy-border1, #js_copy-border2').delay(500).animate({
        width: 105
      }, 500, 'swing');
      $('#js_copy-bfade1, #js_copy-bfade2').delay(1000).animate({
        width: 75
      }, 500, 'swing').delay(300).queue(function () {
        $('#js_copy-img').addClass('fadein-copy')
        $('#js_hero-bg').addClass('fadein-bg').dequeue();
      });
    } else {
      $('#js_copy-border1, #js_copy-border2').delay(500).animate({
        width: 200
      }, 500, 'swing');
      $('#js_copy-bfade1, #js_copy-bfade2').delay(1000).animate({
        width: 150
      }, 500, 'swing').delay(300).queue(function () {
        $('#js_copy-img').addClass('fadein-copy')
        $('#js_hero-bg').addClass('fadein-bg').dequeue();
      });
    };

    // ボーダーアニメーション
    if (winW < 640) {
      $('#border-top1, #border-top2').delay(1800).animate({
        width: winW / 2 - 8
      }, 500, 'linear');
      $('#border-left, #border-right').delay(2300).animate({
        height: winH - 16
      }, 2000, 'linear');
      $('#border-bottom1, #border-bottom2').delay(4300).animate({
        width: winW / 2 - 8
      }, 500, 'linear');
    } else if (winW > 640 && 1600 > winW) {
      $('#border-top1, #border-top2').delay(1800).animate({
        width: winW / 2 - 20
      }, 500, 'linear');
      $('#border-left, #border-right').delay(2300).animate({
        height: winH - 40
      }, 2000, 'linear');
      $('#border-bottom1, #border-bottom2').delay(4300).animate({
        width: winW / 2 - 20
      }, 500, 'linear');
    } else {
      $('#border-top1, #border-top2').delay(1800).animate({
        width: 780
      }, 500, 'linear');
      $('#border-left, #border-right').delay(2300).animate({
        height: winH - 40
      }, 2000, 'linear');
      $('#border-bottom1, #border-bottom2').delay(4300).animate({
        width: 780
      }, 500, 'linear');
    }

    // スクロールボタン遅延表示
    $('#js_hero-bottom').delay(4300).fadeIn();
  });


  // スムーズスクロール
  $('#js_scroll-down').click(function () {
    var winW = $(window).width();
    var winH = $(window).height();
    if (winW < 640) {
      $('html, body').animate({
        'scrollTop': 812
      }, 1500);
    } else {
      $('html, body').animate({
        'scrollTop': winH
      }, 1500);
    }
  });
  $('#scroll-btn').click(function () {
    $('html, body').animate({
      'scrollTop': 0
    }, 1000);
  });


  // ふわっと表示
  $(window).on('scroll', function () {
    $('.fadeout').each(function () {
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      var targetElement = $(this).offset().top;
      if (scroll + windowHeight > targetElement + 400) {
        $(this).addClass('fadein');
      };
    });
  });
});

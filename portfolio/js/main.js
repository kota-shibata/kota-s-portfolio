$(function(){
  $('.tab__btn').click(function(){
    if ($(this).not('active')) {
      $(this).addClass('active').siblings(this).removeClass('active');
      let index = $('.tab__btn').index(this);
      $('.tab__item').eq(index).addClass('active').siblings('.tab__item').removeClass('active');
    }
  });
});

$('.nav__list li').click(function () {
  $(this).toggleClass('active');
  $('.slide').removeClass('add');
  $('body,html').css('overflow', 'visible');
});


$('.hamburger').click(function () {
  $(this).toggleClass('active');

  $('.slide').toggleClass('add');

  if ($('.slide').hasClass('add')) {
    $('body,html').css('overflow', 'hidden');
  } else {
    $('body,html').css('overflow', 'visible');
  }
});

// スクロールイベント
$(window).scroll(function () {
  $(".fadein").each(function () {
    let trigger_point = $(this).offset().top - $(window).height()
    if ($(window).scrollTop() > trigger_point) {
      $(this).addClass("fade");
    }
  });
})

// modal
$(function () {
  $('.js__modal--open').each(function () {
    $(this).click(function () {
      let target = $(this).data('target');
      let modal = document.getElementById(target);
      $(modal).fadeIn();
      // let modal = ('#target');
      // $(modal).fadeIn();
      return false;
    });
  });
  $('.js__modal--close').click(function () {
    $('.js__modal').fadeOut();
    return false;
  });
});
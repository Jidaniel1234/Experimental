$(window).on("load", function() {

  //var winh = $(window).height();
  //var vidpos = $('.video').offset().top - $(window).scrollTop();

  $('.menu-open').on("click", function() {
    $('.navlist li a').addClass('oopen');
    $('.navcover').addClass('open');
    $('.front').addClass('darken');
    $('.nav').find('img').toggle();
  });

  $('.menu-close').on("click", function() {
    $('.navlist li a').removeClass('oopen');
    $('.navcover').removeClass('open');
    $('.front').removeClass('darken');
    $('.nav').find('img').toggle();
  });

  //$(window).on('scroll', function() {
  //  if (winh * 2 / 5 < vidpos ) {
  //    $('.video').play();
  //  } else if (winh < vidpos) {
  //    $('.video').pause();
  //  } else {
  //    $('.video').pause();
  //  }
  //});

  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#parallax",
    triggerHook: "onEnter",
  })
  .duration('300%')
  .setTween("#parallax", {
    backgroundPosition: "50% 100%",
    ease: Linear.None
  })
  .addIndicators()
  .addTo(controller);

});

$(window).on("load", function() {

  //var winh = $(window).height();
  //var vidpos = $('.video').offset().top - $(window).scrollTop();

  $('.menu-open').on("click", function() {
    addNav();
    marker = $(window).scrollTop();
    //alert(marker);
    max = marker + 100;
    //alert(max);
    if ($(window).scrollTop() > max) {
      removeNav();
    }
  });
  $('.menu-close, .pageon').on("click", function() {
    removeNav();
  });

});

var removeNav = function() {
  $('.navlist li a').removeClass('oopen');
  $('.navcover').removeClass('open');
  $('.front').removeClass('darken');
  $('.nav').find('img').toggle();
}

var addNav = function() {
  $('.navlist li a').addClass('oopen');
  $('.navcover').addClass('open');
  $('.front').addClass('darken');
  $('.nav').find('img').toggle();
}

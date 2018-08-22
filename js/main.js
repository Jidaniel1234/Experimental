$(window).on("load", function() {

  hide();
  //nav open close stuff
  $('.menu-open').on("click", function() {
    addNav();
  });
  $('.menu-close').on("click", function() {
    removeNav();
  });

});

var hide = function() {
  $('.subdiv1 .sub').hide();
  $('.subdiv1 .title').hide();
  $('.subdiv2 .title').hide();
  $('.subdiv3 .title').hide();
  $('.subdiv1 .sub').removeClass('animated fadeInDown');
  $('.subdiv1 .title').removeClass('animated fadeInLeft');
  $('.subdiv2 .title').removeClass('animated fadeInRight');
  $('.subdiv3 .title').removeClass('aniamted fadeInLeft');
}

var removeNav = function() {
  $('.navcover').removeClass('open');
  $('.front').removeClass('darken');
  $('.nav').find('img').toggle();
  hide();
  $('html, body').css({
      overflow: 'auto',
      height: 'auto'
  });
}

var addNav = function() {
  $('.navcover').addClass('open');
  $('.front').addClass('darken');
  $('.nav').find('img').toggle();
  addSeq();
  $('html, body').css({
      overflow: 'hidden',
      height: '100%'
  });
}

var addSeq = function() {
  $('.subdiv1 .sub').show();
  $('.subdiv1 .title').show();
  $('.subdiv2 .title').show();
  $('.subdiv3 .title').show();
  $('.subdiv1 .sub').addClass('animated fadeInDown');
  $('.subdiv1 .title').addClass('animated fadeInLeft');
  $('.subdiv2 .title').addClass('animated fadeInRight');
  $('.subdiv3 .title').addClass('animated fadeInRight');
}

var loading_screen = pleaseWait({
  logo: "css/images/wolf-logo-min.png",
  backgroundColor: 'lightgrey',
  loadingHtml: "<div class='spinner'><div class='double-bounce1'></div><div class='double-bounce2'></div></div>"
});

$(window).on("load", function() {

  loading_screen.finish();
  $('.back').hide();
  $('.forward').hide();
  $('.up').hide();
  hide();
  //nav open close stuff
  mopen();
  mclose();
  //navs for each slide
    $('.f1, .title-1').click(function() {
      $('.viz').removeClass('animated slideInRight');
      $('.viz').addClass('animated slideOutRight');
      $('.menu-open').hide();
      $('.back').show();
    });

    $('.back').click(function() {
      $('.viz').removeClass('animated slideOutRight');
      $('.viz').addClass('animated slideInRight');
      $('.back').hide();
      $('.menu-open').show();
      clear();
    });

    $('.s1, .title-2').click(function() {
      $('.menu-open').hide();
      $('.A').hide();
      $('.viz').removeClass('animated slideInLeft');
      $('.viz').addClass('animated slideOutLeft');
      $('.forward').show();
    });

    $('.forward').click(function() {
      $('.viz').removeClass('animated slideOutLeft');
      $('.viz').addClass('animated slideInLeft');
      $('.forward').hide();
      $('.menu-open').show();
      setTimeout(() => {$('.A').show();}, 1200);
      clear();
    });

    $('.t1, .title-3').click(() => {
      $('.menu-open').hide();
      $('.A').hide();
      $('.B').hide();
      $('.viz').removeClass('animated slideInDown');
      $('.viz').addClass('animated slideOutUp');
      $('.up').show();
    });

    $('.up').click(() => {
      $('.viz').removeClass('animated slideOutUp');
      $('.viz').addClass('animated slideInDown');
      $('.up').hide();
      $('.menu-open').show();
      setTimeout(() => {$('.A, .B').show();}, 1200);
      clear();
    });
});
function mopen() {
    $('.menu-open').on("click", function() {
      addNav();
    });
}
function mclose() {
    $('.menu-close').on("click", function() {
      removeNav();
    });
}
function hide() {
  $('.ncleft').removeClass('animated fadeInLeft');
  $('.ncright').removeClass('animated fadeInRight');
}

function clear() {
  setTimeout(() => {
    $('.viz').removeClass('animated slideInDown slideInRight slideInLeft slideOutUp slideOutLeft slideOutRight');
  }, 1200);
}
function removeNav() {
  $('.navcover').removeClass('open');
  $('.front').removeClass('darken');
  $('.nav').find('img').toggle();
  hide();
  $('.back, .forward, .up').hide();
  $('html, body').css({
      overflow: 'auto',
      height: 'auto'
  });
}

function addNav() {
  $('.navcover').addClass('open');
  $('.front').addClass('darken');
  $('.nav').find('img').toggle();
  $('.back, .forward, .up').hide();
  addSeq();
  $('html, body').css({
      overflow: 'hidden',
      height: '100%'
  });
}

function addSeq() {
  $('.ncleft').addClass('animated fadeInLeft');
  $('.ncright').addClass('animated fadeInRight');
}

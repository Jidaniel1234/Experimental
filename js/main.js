var loading_screen = pleaseWait({
  logo: "css/images/wolf-logo-min.png",
  backgroundColor: 'lightgrey',
  loadingHtml: "<div class='spinner'><div class='double-bounce1'></div><div class='double-bounce2'></div></div>"
});
var curslide;

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
      $('.back').show();
      curslide = 2;
    });

    $('.back').click(function() {
      $('.viz').removeClass('animated slideOutRight');
      $('.viz').addClass('animated slideInRight');
      $('.back').hide();
      clear();
      curslide = 1;
    });

    $('.s1, .title-2').click(function() {
      $('.A').hide();
      $('.viz').removeClass('animated slideInLeft');
      $('.viz').addClass('animated slideOutLeft');
      $('.forward').show();
      curslide = 3;
    });

    $('.forward').click(function() {
      $('.viz').removeClass('animated slideOutLeft');
      $('.viz').addClass('animated slideInLeft');
      $('.forward').hide();
      setTimeout(() => {$('.A').show();}, 1200);
      clear();
      curslide = 1;
    });

    $('.t1, .title-3').click(() => {
      $('.A').hide();
      $('.B').hide();
      $('.viz').removeClass('animated slideInDown');
      $('.viz').addClass('animated slideOutUp');
      $('.up').show();
      curslide = 4;
    });

    $('.up').click(() => {
      $('.viz').removeClass('animated slideOutUp');
      $('.viz').addClass('animated slideInDown');
      $('.up').hide();
      setTimeout(() => {$('.A, .B').show();}, 1200);
      clear();
      curslide = 1;
    });
});
function mopen() {
    $('.menu-open').on("click", function() {
      addNav();
      });
    $(document).keyup(function(e) {
      if (e.keyCode === 27) {
        removeNav();
    }
    });
}
function mclose() {
    $('.menu-close').on("click", function() {
      removeNav();
    });
    $(document).keyup(function(e) {
      if (e.keyCode === 77 || e.keyCode === 78 || e.keyCode === 79) {
        addNav();
      }
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
  $('.menu-close').hide();
  $('.menu-open').show();
  hide();
  if (curslide === 1) {
    $('.back, .forward, .up').hide();
  } else if (curslide === 2) {
    $('.forward, .up').hide();
  } else if (curslide === 3) {
    $('.back, .up').hide();
  } else if (curslide === 4) {
    $('.back, .forward').hide();
  } else {
    $('.back, .forward, .up').hide();
  }
  $('').hide();
  $('html, body').css({
      overflow: 'auto',
      height: 'auto'
  });
}

function addNav() {
  $('.navcover').addClass('open');
  $('.front').addClass('darken');
  $('.menu-open').hide();
  $('.menu-close').show();
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

var loading_screen = pleaseWait({
  logo: "css/images/wolf-logo-min.png",
  backgroundColor: 'lightgrey',
  loadingHtml: "<div class='spinner'><div class='double-bounce1'></div><div class='double-bounce2'></div></div>"
});
var curslide;
var through3choice;

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
    $('.navcover h1, .navcover p').click(function() {
      removeNav();
      console.log(this.className);
      $('.front').removeClass('animated slideInDown');
      $('.front').addClass('animated slideOutUp');
      if (this.className == "title-1") {
        curslide = 2;
        $('.A').show();
        $('.B').hide();
        $('.C').hide();
        $('.viz').removeClass('animated slideInRight');
        $('.viz').addClass('animated slideOutRight');
        $('.back').show();
      } else if (this.className == "title-2") {
        curslide = 3;
        $('.A').hide();
        $('.B').show();
        $('.C').hide();
        $('.viz').removeClass('animated slideInLeft');
        $('.viz').addClass('animated slideOutLeft');
        $('.forward').show();
      } else if (this.className == "title-3") {
        curslide = 4;
        $('.A').hide();
        $('.B').hide();
        $('.C').show();
        $('.viz').removeClass('animated slideInDown');
        $('.viz').addClass('animated slideOutUp');
        $('.up').show();
      }
    });

    $('.f1').click(function() {
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

    $('.s1').click(function() {
      $('.A').hide();
      $('.viz').removeClass('animated slideInLeft');
      $('.viz').addClass('animated slideOutLeft');
      $('.forward').show();
      curslide = 3;
      through3choice = true;
    });

    $('.forward').click(function() {
      if (through3choice) {
        clear();
      } else {
        clearfast();
      }
      $('.viz').removeClass('animated slideOutLeft');
      $('.viz').addClass('animated slideInLeft');
      $('.forward').hide();
      setTimeout(() => {$('.A').show();}, 1200);
      curslide = 1;
      through3choice = false;
    });

    $('.t1').click(() => {
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

function clearfast() {
  $('.viz').removeClass('animated slideInDown slideInRight slideInLeft slideOutUp slideOutLeft slideOutRight');
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
    $('.back').show();
  } else if (curslide === 3) {
    $('.back, .up').hide();
    $('.forward').show();
  } else if (curslide === 4) {
    $('.back, .forward').hide();
    $('.up').show();
  } else {
    $('.back, .forward, .up').hide();
  }
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

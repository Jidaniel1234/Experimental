// During the page load, we use this filler
var loading_screen = pleaseWait({
  logo: "css/images/wolf-logo-min.png",
  backgroundColor: 'lightgrey',
  loadingHtml: "<div class='spinner'><div class='double-bounce1'></div><div class='double-bounce2'></div></div>"
});
var currslide = 0;

$(window).on("load", function() {

  // removes loading screen
  loading_screen.finish();
  hideArrows();

  $(window).click(() => {
    console.log($('.viz').attr('class'));
  });
});

// f(x) for simplfication

//defaults/justincase
function clear() {
  setTimeout(() => {
    $('.viz').removeClass('animated slideInDown slideInRight slideInLeft slideOutUp slideOutLeft slideOutRight');
  }, 1200);
}
function autoScrollFromLanding() {
  $('.front').removeClass('animated slideInDown');
  $('.front').addClass('animated slideOutUp');
}
// for nav and arrows
function hideArrows() {
  $('.back').hide();
  $('.forward').hide();
  $('.up').hide();
}
function addNav() {
  $('.navcover').addClass('open');
  $('.front').addClass('darken');
  $('.menu-open').hide();
  $('.menu-close').show();
  $('.back, .forward, .up').hide();
  $('html, body').css({
      overflow: 'hidden',
      height: '100%'
  });
}
function removeNav() {
  $('.navcover').removeClass('open');
  $('.front').removeClass('darken');
  $('.menu-close').hide();
  $('.menu-open').show();
  $('.ncleft').removeClass('animated fadeInLeft');
  $('.ncright').removeClass('animated fadeInRight');
  $('html, body').css({
      overflow: 'auto',
      height: 'auto'
  });
  switch (currslide) {
    case 1:
      $('.back').show();
      $('.forward').hide();
      $('.up').hide();
      break;
    case 2:
      $('.forward').show();
      $('.back').hide();
      $('.up').hide();
      break;
    case 3:
      $('.up').show();
      $('.forward').hide();
      $('.back').hide();
      break;
    default:
      break;
  }
}

// for OurTeam
function showOurTeam() {
  $('.A').show();
  $('.B').hide();
  $('.C').hide();
  $('.viz').removeClass('animated slideInRight');
  $('.viz').addClass('animated slideOutRight');
  $('.back').show();
  currslide = 1;
}
function hideOurTeam() {
  clear();
  setTimeout(() => {$('.A').hide(); clear();}, 1200);
  $('.B').hide();
  $('.C').hide();
  $('.viz').removeClass('animated slideOutRight');
  $('.viz').addClass('animated slideInRight');
  $('.back').hide();
  currslide = 0;
}
function clearA() {
    $('.viz').removeClass('slideInRight slideOutRight');
}

// for OurRobot
function showOurRobot() {
  $('.B').show();
  $('.A').hide();
  $('.C').hide();
  $('.viz').removeClass('animated slideInLeft');
  $('.viz').addClass('animated slideOutLeft');
  $('.forward').show();
  currslide = 2;
}
function hideOurRobot() {
  clear();
  setTimeout(() => {$('.B').hide(); clear();}, 1200);
  $('.A').hide();
  $('.C').hide();
  $('.viz').removeClass('animated slideOutLeft');
  $('.viz').addClass('animated slideInLeft');
  $('.forward').hide();
  currslide = 0;
}
function clearB() {
  $('.viz').removeClass('slideInLeft slideOutLeft');
}

// for Awards
function showAwards() {
  $('.C').show();
  $('.A').hide();
  $('.B').hide();
  $('.viz').removeClass('animated slideInDown');
  $('.viz').addClass('animated slideOutUp');
  $('.up').show();
  currslide = 3;
}
function hideAwards() {
  clear();
  setTimeout(() => {$('.C').hide(); clear();}, 1200);
  $('.A').hide();
  $('.B').hide();
  $('.viz').removeClass('animated slideOutUp');
  $('.viz').addClass('animated slideInDown');
  $('.up').hide();
  currslide = 0;
}
function clearC() {
  $('.viz').removeClass('slideInDown slideOutUp');
}

// event handlers

//nav event handlers
$('.menu-open').click(() => {
  addNav();
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      removeNav();
    }
  });
});
$('.menu-close').click(() => {
  removeNav();
  $(document).keyup(function(e) {
    if (e.keyCode === 77 || e.keyCode === 78 || e.keyCode === 79) {
      addNav();
    }
  });
});

//our team event handlers
$('.title-1').click(() => {
  clearB();
  clearC();
  currslide = 1;
  autoScrollFromLanding();
  removeNav();
  showOurTeam();
});
$('.f1').click(() => {
  showOurTeam();
});
$('.back').click(() => {
  hideOurTeam();
});

//our robot event handlers
$('.title-2').click(() => {
  clearA();
  clearC();
  currslide = 2;
  autoScrollFromLanding();
  removeNav();
  showOurRobot();
});
$('.s1').click(() => {
  showOurRobot();
});
$('.forward').click(() => {
  hideOurRobot();
});

//our awards event handlers
$('.title-3').click(() => {
  clearA();
  clearB();
  currslide = 3;
  autoScrollFromLanding();
  removeNav();
  showAwards();
});
$('.t1').click(() => {
  showAwards();
});
$('.up').click(() => {
  hideAwards();
});

var map = {66: false, 67: false, 84: false};
$(document).keydown(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[66] && map[67] && map[84]) {
            window.location.href = "http://wolf-corp.github.io/Revolution";
        }
    }
}).keyup(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});

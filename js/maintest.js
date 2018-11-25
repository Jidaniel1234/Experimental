$('.back').hide();
$('.forward').hide();
$('.up').hide();
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

  $('.menu-open').show();
  $(window).click(() => {
    console.log($('.viz').attr('class'));
  });
});

// f(x) for simplfication

//defaults/justincase
function clear() {
  $('.viz').removeClass('animated slideInDown slideInRight slideInLeft slideOutUp slideOutLeft slideOutRight rotateOutUpLeft rotateInDownLeft rotateOutUpRight rotateOutDownRight');
}
function autoToLanding() {
  $('.front').removeClass('animated slideOutUp');
  $('.front').addClass('animated slideInDown');
}
function autoScrollFromLanding() {
  $('.front').removeClass('animated slideInDown');
  $('.front').addClass('animated slideOutUp');
}
function panelScrollDownAuto(panel, animationForward, animationBack) {
  console.log("scrolling down");
  $(panel).removeClass(`animated ${animationForward}`);
  $(panel).addClass(`animated ${animationBack}`);
  if (panel == '.A1' || panel == '.A3' || panel == '.A4' || panel =='.B1') {
    setTimeout(function() {
      $(panel).css({
        width: 0
      });
    }, 1200);
  }
}

function panelScrollUpAuto(effectedPanel, animationForward, animationBack) {
  $(effectedPanel).removeClass(`animated ${animationForward}`);
  $(effectedPanel).addClass(`animated ${animationBack}`);
  $(effectedPanel).css({
    width: '100%',
  });
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
      overflow: 'hidden',
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
  $('.A, .A1, .A2, .A3, .A4, .A5').show();
  $('.B, .B1, .B2, .B3').hide();
  $('.C').hide();
  $('.D').hide();
  $('.E').hide();
  $('.viz').removeClass('animated slideInRight');
  $('.viz').addClass('animated slideOutRight');
  $('.back').show();
  currslide = 1;
}
function hideOurTeam() {
  clear();
  setTimeout(() => {$('.A, .A1, .A2, .A3, .A4, .A5').hide(); clear();}, 1200);
  $('.B, .B1, .B2, .B3').hide();
  $('.C').hide();
  $('.D').hide();
  $('.E').hide();
  $('.viz').removeClass('animated slideOutRight');
  $('.viz').addClass('animated slideInRight');
  $('.back').hide();
  currslide = 0;
}
function ourTeamDefault() {
  clearB();
  clearC();
  clearD();
  clearE();
  currslide = 1;
  autoScrollFromLanding();
  removeNav();
  showOurTeam();
}
function clearA() {
    $('.viz').removeClass('slideInRight slideOutRight');
}
function clearASlides() {
  $('.A, .A1, .A2, .A3, .A4, .A5').removeClass('slideInDown slideInLeft slideInRight slideOutUp slideOutLeft slideOutRight zoomIn zoomOut fadeIn fadeOut');
}

// for OurRobot
function showOurRobot() {
  $('.B, .B1, .B2, .B3').show();
  $('.A, .A1, .A2, .A3, .A4, .A5').hide();
  $('.C').hide();
  $('.D').hide();
  $('.E').hide();
  $('.viz').removeClass('animated slideInLeft');
  $('.viz').addClass('animated slideOutLeft');
  $('.forward').show();
  currslide = 2;
}
function hideOurRobot() {
  clear();
  setTimeout(() => {$('.B, .B1, .B2, .B3').hide(); clear();}, 1200);
  $('.A, .A1, .A2, .A3, .A4, .A5').hide();
  $('.C').hide();
  $('.D').hide();
  $('.E').hide();
  $('.viz').removeClass('animated slideOutLeft');
  $('.viz').addClass('animated slideInLeft');
  $('.forward').hide();
  currslide = 0;
}
function ourRobotDefault() {
  clearA();
  clearC();
  clearD();
  clearE();
  currslide = 2;
  autoScrollFromLanding();
  removeNav();
  showOurRobot();
}
function clearB() {
  $('.viz').removeClass('slideInLeft slideOutLeft');
}
function clearBSlides() {
  $('.B, .B1, .B2, .B3').removeClass('slideInDown slideInLeft slideInRight slideOutUp slideOutLeft slideOutRight');
}

// for Awards
function showAwards() {
  $('.C').show();
  $('.A, .A1, .A2, .A3, .A4, .A5').hide();
  $('.B, .B1, .B2, .B3').hide();
  $('.D').hide();
  $('.E').hide();
  $('.viz').removeClass('animated slideInDown');
  $('.viz').addClass('animated slideOutUp');
  $('.up').show();
  currslide = 3;
}
function hideAwards() {
  clear();
  setTimeout(() => {$('.C').hide(); clear();}, 1200);
  $('.A, .A1, .A2, .A3, .A4, .A5').hide();
  $('.B, .B1, .B2, .B3').hide();
  $('.D').hide();
  $('.E').hide();
  $('.viz').removeClass('animated slideOutUp');
  $('.viz').addClass('animated slideInDown');
  $('.up').hide();
  currslide = 0;
}
function clearC() {
  $('.viz').removeClass('slideInDown slideOutUp');
}

//for lets talk
function showTalk() {
  $('.D').show();
  $('.A, .A1, .A2, .A3, .A4, .A5').hide();
  $('.B, .B1, .B2, .B3').hide();
  $('.C').hide();
  $('.E').hide();
  $('.viz').removeClass('animated rotateInUpLeft');
  $('.viz').addClass('animated rotateOutUpLeft');
  currslide = 0;
}
function hideTalk() {
  clear();
  $('.A, .A1, .A2, .A3, .A4, .A5').hide();
  $('.B, .B1, .B2, .B3').hide();
  $('.C').hide();
  $('.E').hide();
  $('.viz').removeClass('animated rotateOutUpLeft');
  $('.viz').addClass('animated rotateInDownLeft');
  setTimeout(() => {$('.D').hide(); clear();}, 1200);
  $('.up').hide();
  currslide = 0;
}
function clearD() {
  $('.viz').removeClass('rotateOutUpLeft rotateInDownLeft');
}
//for sponsors
function showSponsors() {
  $('.E').show();
  $('.A, .A1, .A2, .A3, .A4, .A5').hide();
  $('.B, .B1, .B2, .B3').hide();
  $('.C').hide();
  $('.D').hide();
  $('.viz').removeClass('animated rotateInDownRight');
  $('.viz').addClass('animated rotateOutUpRight');
  currslide = 0;
}
function hideSponsors() {
  clear();
  setTimeout(() => {$('.E').hide(); clear();}, 1200);
  $('.A, .A1, .A2, .A3, .A4, .A5').hide();
  $('.B, .B1, .B2, .B3').hide();
  $('.C').hide();
  $('.D').hide();
  $('.viz').removeClass('animated rotateOutUpRight');
  $('.viz').addClass('animated rotateInDownRight');
  currslide = 0;
}
function clearE() {
  $('.viz').removeClass('rotateOutUpRight rotateInDownRight');
}

// event handlers

//for home event handlers
$('.title-m').click(() => {
  hideOurTeam();
  hideOurRobot();
  hideAwards();
  hideArrows();
  removeNav();
  clear();
  clearA();
  clearB();
  clearC();
  clearD();
  clearE();
  clearBSlides();
  clearASlides();
  autoToLanding();
});

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
  showOurTeam();
  ourTeamDefault();
  panelScrollUpAuto('.A', 'slideOutUp', 'slideInDown');
  panelScrollUpAuto('.A1', 'slideOutRight', 'slideInRight');
  panelScrollUpAuto('.A2', 'slideOutLeft', 'slideInLeft');
  panelScrollUpAuto('.A3', 'zoomOut', 'zoomIn');
  panelScrollUpAuto('.A4', 'fadeOut', 'fadeIn');
});
$('.f1').click(() => {
  showOurTeam();
});
$('.back').click(() => {
  hideOurTeam();
});
$('.ncleft .sub-1').click(() => {
  ourTeamDefault();
  panelScrollDownAuto('.A', 'slideInDown', 'slideOutUp');
  panelScrollUpAuto('.A1', 'slideOutRight', 'slideInRight');
  panelScrollUpAuto('.A2', 'slideOutLeft', 'slideInLeft');
  panelScrollUpAuto('.A3', 'zoomOut', 'zoomIn');
  panelScrollUpAuto('.A4', 'fadeOut', 'fadeIn');
});
$('.ncleft .sub-2').click(() => {
  ourTeamDefault();
  panelScrollDownAuto('.A', 'slideInDown', 'slideOutUp');
  panelScrollDownAuto('.A1', 'slideInRight', 'slideOutRight');
  panelScrollUpAuto('.A2', 'slideOutLeft', 'slideInLeft');
  panelScrollUpAuto('.A3', 'zoomOut', 'zoomIn');
  panelScrollUpAuto('.A4', 'fadeOut', 'fadeIn');
});
$('.ncleft .sub-3').click(() => {
  ourTeamDefault();
  panelScrollDownAuto('.A', 'slideInDown', 'slideOutUp');
  panelScrollDownAuto('.A1', 'slideInRight', 'slideOutRight');
  panelScrollDownAuto('.A2', 'slideInLeft', 'slideOutLeft');
  panelScrollUpAuto('.A3', 'zoomOut', 'zoomIn');
  panelScrollUpAuto('.A4', 'fadeOut', 'fadeIn');
});
$('.ncleft .sub-4').click(() => {
  ourTeamDefault();
  panelScrollDownAuto('.A', 'slideInDown', 'slideOutUp');
  panelScrollDownAuto('.A1', 'slideInRight', 'slideOutRight');
  panelScrollDownAuto('.A2', 'slideInLeft', 'slideOutLeft');
  panelScrollDownAuto('.A3', 'zoomIn', 'zoomOut');
  panelScrollUpAuto('.A4', 'fadeOut', 'fadeIn');
});
$('.ncleft .sub-5').click(() => {
  ourTeamDefault();
  panelScrollDownAuto('.A', 'slideInDown', 'slideOutUp');
  panelScrollDownAuto('.A1', 'slideInRight', 'slideOutRight');
  panelScrollDownAuto('.A2', 'slideInLeft', 'slideOutLeft');
  panelScrollDownAuto('.A3', 'zoomIn', 'zoomOut');
  panelScrollDownAuto('.A4', 'fadeIn', 'fadeOut');
});

//our robot event handlers
$('.title-2').click(() => {
  clearA();
  clearC();
  clearD();
  clearE();
  currslide = 2;
  autoScrollFromLanding();
  removeNav();
  showOurRobot();
  ourRobotDefault();
  panelScrollUpAuto('.B', 'slideOutUp', 'slideInDown');
  panelScrollUpAuto('.B1', 'slideOutRight', 'slideInRight');
  panelScrollUpAuto('.B2', 'slideOutLeft', 'slideInLeft');
});
$('.s1').click(() => {
  showOurRobot();
});
$('.forward').click(() => {
  hideOurRobot();
});
$('.ncright .sub-1').click(() => {
  ourRobotDefault();
  panelScrollDownAuto('.B', 'slideInDown', 'slideOutUp');
  panelScrollUpAuto('.B1', 'slideOutRight', 'slideInRight');
  panelScrollUpAuto('.B2', 'slideOutLeft', 'slideInLeft');
});
$('.ncright .sub-2').click(() => {
  ourRobotDefault();
  panelScrollDownAuto('.B', 'slideInDown', 'slideOutUp');
  panelScrollDownAuto('.B1', 'slideInRight', 'slideOutRight');
  panelScrollUpAuto('.B2', 'slideOutLeft', 'slideInLeft');
});
$('.ncright .sub-3').click(() => {
  ourRobotDefault();
  panelScrollDownAuto('.B', 'slideInDown', 'slideOutUp');
  panelScrollDownAuto('.B1', 'slideInRight', 'slideOutRight');
  panelScrollDownAuto('.B2', 'slideInLeft', 'slideOutLeft');
});

//our awards event handlers
var pageshown = false;
$('.title-3').click(() => {
  clearA();
  clearB();
  clearD();
  clearE();
  currslide = 3;
  autoScrollFromLanding();
  removeNav();
  showAwards();
  pageshown = true;
});
$('.t1').click(() => {
  showAwards();
  pageshown = true;
});
$('.up').click(() => {
  hideAwards();
  pageshown = false;
});
$('.C').on('DOMMouseScroll mousewheel', function (e) {
  if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0 && pageshown == true) {
    $('.viz').show();
    hideAwards();
    pageshown = false;
  }
});

//for lets talk
$('.title-4').click(() => {
  currslide = 0;
  clearA();
  clearB();
  clearC();
  clearE();
  autoScrollFromLanding();
  removeNav();
  setTimeout(() => {
    $('.viz').hide();
  }, 1200);
  showTalk();
});
$('.talk').click(() => {
  hideTalk();
  $('.viz').show();
})
//
$('.title-5').click(() => {
  currslide = 0;
  clearA();
  clearB();
  clearC();
  clearD();
  autoScrollFromLanding();
  removeNav();
  setTimeout(() => {
    $('.viz').hide();
  }, 1200);
  showSponsors();
});
$('.sponsor').click(() => {
  $('.viz').show();
  hideSponsors();
});

var map = {66: false, 67: false, 84: false};
$(document).keydown(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = true;
        if (map[66] && map[67] && map[84]) {
            alert("Hello");
            window.location.href = "http://wolf-corp.github.io/Revolution";
        }
    }
}).keyup(function(e) {
    if (e.keyCode in map) {
        map[e.keyCode] = false;
    }
});

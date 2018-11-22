
$(window).on("load", function() {

  var loadTime = window.performance.timing.domInteractive - window.performance.timing.navigationStart;
  console.log(loadTime);

  ScrollReveal().reveal('.motto', {
    delay: loadTime,
    duration: 800,
    interval: 150,
    easing: 'ease-out',
    distance: '30%',
    origin: 'left',
  });

  ScrollReveal().reveal('.front', {
    delay: 400
  });
  ScrollReveal().reveal('.notimed', {
    delay: 1000
  });
  ScrollReveal().reveal('.iconArea', {
    delay: loadTime + 7000
  });

  //for landing
  panelScrollDownManual('.front', 'slideInDown', 'slideOutUp');
  panelScrollUpManual('.viz', '.front', 'slideOutUp', 'slideInDown');

  //for OurTeam
  panelScrollDownManual('.A', 'slideInDown', 'slideOutUp');
  panelScrollUpManual('.A1', '.A', 'slideOutUp', 'slideInDown');
  panelScrollDownManual('.A1', 'slideInRight', 'slideOutRight');
  panelScrollUpManual('.A2', '.A1', 'slideOutRight', 'slideInRight');
  panelScrollDownManual('.A2', 'slideInLeft', 'slideOutLeft');
  panelScrollUpManual('.A3', '.A2', 'slideOutLeft', 'slideInLeft');
  panelScrollDownManual('.A3', 'slideInRight', 'slideOutRight');
  panelScrollUpManual('.A4', '.A3', 'slideOutRight', 'slideInRight');
  panelScrollDownManual('.A4', 'slideInLeft', 'slideOutLeft');
  panelScrollUpManual('.A5', '.A4', 'slideOutLeft', 'slideInLeft');

  //for OurRobot
  panelScrollDownManual('.B', 'slideInDown', 'slideOutUp');
  panelScrollUpManual('.B1', '.B', 'slideOutUp', 'slideInDown');
  panelScrollDownManual('.B1', 'slideInRight', 'slideOutRight');
  panelScrollUpManual('.B2', '.B1', 'slideOutRight', 'slideInRight');
  panelScrollDownManual('.B2', 'slideInLeft', 'slideOutLeft');
  panelScrollUpManual('.B3', '.B2', 'slideOutLeft', 'slideInLeft');

  //awards scroll up is similar to the up arrow click, so on the other file

// mobile support

  var ts;
  $('.front').bind('touchstart', function(e) {
      ts = e.originalEvent.touches[0].clientY;
  });

  $('.front').bind('touchmove', function(e) {
      var te = e.originalEvent.changedTouches[0].clientY;
      if (ts > te) {
          console.log('down');
          $(this).removeClass('animated slideInDown');
          $(this).addClass('animated slideOutUp');
      }
  });

  var tsv;
  $('.viz').bind('touchstart', function(e) {
      tsv = e.originalEvent.touches[0].clientY;
  });

  $('.viz').bind('touchmove', function(e) {
      var tev = e.originalEvent.changedTouches[0].clientY;
      if (tsv > tev) {
      } else {
          console.log('up');
          $('.front').removeClass('animated slideOutUp');
          $('.front').addClass('animated slideInDown');
      }
  });
});

function panelScrollDownManual(panel, animationForward, animationBack) {
  $(panel).on('DOMMouseScroll mousewheel', function (e) {
    if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
      console.log("scrolling down");
      $(this).removeClass(`animated ${animationForward}`);
      $(this).addClass(`animated ${animationBack}`);
      if (panel == '.A1' || panel == '.A3' || panel == '.A4' || panel == '.B1') {
        setTimeout(function () {
          $(panel).css({
            'width': 0,
          });
        }, 1200);
      }
    }
  });
  var ts;
  $(panel).bind('touchstart', function(e) {
      ts = e.originalEvent.touches[0].clientY;
  });
  $(panel).bind('touchmove', function(e) {
      var te = e.originalEvent.changedTouches[0].clientY;
      if (ts > te) {
        console.log("scrolling down");
        $(this).removeClass(`animated ${animationForward}`);
        $(this).addClass(`animated ${animationBack}`);
        if (panel == '.A1' || panel == '.A3' || panel == '.A4' || panel == '.B1') {
          setTimeout(function () {
            $(panel).css({
              'width': 'auto',
            });
          }, 1200);
        }
      }
  });
}
function panelScrollUpManual(panel, effectedPanel, animationForward, animationBack) {
  $(panel).on('DOMMouseScroll mousewheel', function (e) {
    if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {
      console.log("scrolling up");
      $(effectedPanel).removeClass(`animated ${animationForward}`);
      $(effectedPanel).addClass(`animated ${animationBack}`);
      $(effectedPanel).css({
        width: '100%',
      });
    }
  });

  var tsv;
  $(panel).bind('touchstart', function(e) {
      tsv = e.originalEvent.touches[0].clientY;
  });

  $(panel).bind('touchmove', function(e) {
      var tev = e.originalEvent.changedTouches[0].clientY;
      if (tsv < tev) {
        console.log("scrolling up");
        $(effectedPanel).removeClass(`animated ${animationForward}`);
        $(effectedPanel).addClass(`animated ${animationBack}`);
        $(effectedPanel).css({
          width: '100%',
        });
      }
  });
}

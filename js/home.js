$(window).on("load", function() {

  var prevpanel;
  var name;
  var j;
  var panels = ['front', 'viz', 'A', 'B', 'C', 'D'];
  var marker = 0;
  const height = $(window).height();
  const scrollTop = $(window).scrollTop();

  ScrollReveal().reveal('.motto', {
    delay: 1500,
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

  panelScrollDown('.front', 'slideInDown', 'slideOutUp');
  panelScrollUp('.viz', '.front', 'slideOutUp', 'slideInDown');
  panelScrollDown('.A', 'slideInDown', 'slideOutUp');
  panelScrollUp('.A1', '.A', 'slideOutUp', 'slideInDown');
  panelScrollDown('.A1', 'slideInRight', 'slideOutRight');
  panelScrollUp('.A2', '.A1', 'slideOutRight', 'slideInRight');

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

function panelScrollDown(panel, animationForward, animationBack) {
  $(panel).on('DOMMouseScroll mousewheel', function (e) {
    if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
      console.log("scrolling down");
      $(this).removeClass(`animated ${animationForward}`);
      $(this).addClass(`animated ${animationBack}`);
    }
  });
}
function panelScrollUp(panel, effectedPanel, animationForward, animationBack) {
  $(panel).on('DOMMouseScroll mousewheel', function (e) {
    if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {
      console.log("scrolling up");
      $(effectedPanel).removeClass(`animated ${animationForward}`);
      $(effectedPanel).addClass(`animated ${animationBack}`);
    }
  });
}

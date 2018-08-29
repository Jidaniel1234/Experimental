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

  $('.front').on('DOMMouseScroll mousewheel', function (e) {
    if (e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
      console.log("scrolling down");
      $(this).removeClass('animated slideInDown');
      $(this).addClass('animated slideOutUp');
    } else {
      console.log("scrolling up");
      if (this.className == 'panel viz') {
        $('.front').removeClass('animated slideOutUp');
        $('.front').addClass('animated slideInDown');
      }
    }
  });

  $('.viz').on('DOMMouseScroll mousewheel', function (e) {
    if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {
      console.log("scrolling up");
      $('.front').removeClass('animated slideOutUp');
      $('.front').addClass('animated slideInDown');
    }
  });
});

  //slidedown nav close and open stuff

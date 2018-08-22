$(window).on("load", function() {

  var marker;
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

  ScrollReveal().reveal('video', {
    delay: 2000,
  });

  $('body').on('DOMMouseScroll mousewheel', function (e) {
    if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) { //alternative options for wheelData: wheelDeltaX & wheelDeltaY
      //scroll down
      console.log('Down');
      $('.front').removeClass('animated slideInDown');
      $('.front').addClass('animated slideOutUp');
    } else {
      //scroll up
      console.log('Up');
      $('.front').removeClass('animated slideOutUp');
      $('.front').addClass('animated slideInDown');
    }
    //prevent page fom scrolling
    return false;
  });

/*
  var controller = new ScrollMagic.Controller();
  new ScrollMagic.Scene({
    triggerElement: "#parallax",
    triggerHook: "onEnter",
  })
  .duration('200%')
  .setTween("#parallax", {
    backgroundPosition: "50% 100%",
    ease: 'ease-in-out',
  })
  .addTo(controller);

  var slides = $('.panel');

  for (var i = 0; i < slides.length; i++) {
    new ScrollMagic.Scene({
      triggerElement: slides[i],
      triggerHook: 'onLeave'
    })
    .setPin(slides[i])
    .addTo(controller);
  }

  for later
  var wipeAnimation = new TimelineMax()
    .fromTo("section.panel.turgoise", 1, {x: "-100%"}, {x: "0%", ease: Linear.easeNone})
    .fromTo("section.panel.green", 1, {x: "100%"}, {x: "0%", ease: Linear.easeNone})
    .fromTo("section.panel.bordeaux", 1, {y: "-100%"}, {y: "0%", ease: Linear.easeNone});

  new ScrollMagic.Scene({
    triggerElement: "#pinContainer",
    triggerHook: "onLeave",
    duration: '300%'
  })
  .setPin("#pinContainer")
  .setTween(wipeAnimation)
  .addIndicators()
  .addTo(controller);
*/
});

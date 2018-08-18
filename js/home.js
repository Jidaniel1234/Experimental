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

  //$(window).on('scroll', function() {
  //  if (winh * 2 / 5 < vidpos ) {
  //    $('.video').play();
  //  } else if (winh < vidpos) {
  //    $('.video').pause();
  //  } else {
  //    $('.video').pause();
  //  }
  //});

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
/* for later
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

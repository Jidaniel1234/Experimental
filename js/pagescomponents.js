$(window).on("load", function() {

  //declaring instances
  const panelMaker = new panelAndDefaults();

  //all the configs
  $('.A2 .rightside .images .imgtopleft').click(function() {
    panelMaker.newPanel("j o s h u a", "", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgtopright').click(function() {
    panelMaker.newPanel("n a t h a n", "", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottomleft').click(function() {
    panelMaker.newPanel("e r i c", "", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottomright').click(function() {
    panelMaker.newPanel("d a n i e l", "", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottommiddle').click(function() {
    panelMaker.newPanel("p r o g r a m m i n g", "", ".A2", ".leftside");
  });

  $('.A3 .leftside .images .imgbottomright').click(function() {
    panelMaker.newPanel("K E V I N", "", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgbottomleft').click(function() {
    panelMaker.newPanel("K A W I N", "", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgbottommiddle').click(function() {
    panelMaker.newPanel("B U I L D I N G", "", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgtopleft').click(function() {
    panelMaker.newPanel("G L O R Y", "", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgtopright').click(function() {
    panelMaker.newPanel("I A N", "", ".A3", ".rightside");
  });
  $('.A3 .leftside .images .imgtopmiddle').click(function() {
    panelMaker.newPanel("G O R D O N", "", ".A3", ".rightside");
  });

  $('.A4 .rightside .images .imgbottomright').click(function() {
    panelMaker.newPanel("e v a n", "", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgbottomleft').click(function() {
    panelMaker.newPanel("s a r a h", "", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgbottommiddle').click(function() {
    panelMaker.newPanel("b u s i n e s s", "", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgtopleft').click(function() {
    panelMaker.newPanel("j a s o n", "", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgtopright').click(function() {
    panelMaker.newPanel("c o n o r", "", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgtopmiddle').click(function() {
    panelMaker.newPanel("c h a n d r a r k", "", ".A4", ".leftside");
  });

  $('.A5 .botside .images .imgfarleft').click(function() {
    panelMaker.newPanel("g i v i n g \xa0\xa0b a c k", "", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgkindaleft').click(function() {
    panelMaker.newPanel("f i r s t \xa0\xa0e v e n t", "", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgmidleft').click(function() {
    panelMaker.newPanel("s e c o n d \xa0\xa0e v e n t", "", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgmidright').click(function() {
    panelMaker.newPanel("t h i r d \xa0\xa0e v e n t", "", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgkindaright').click(function() {
    panelMaker.newPanel("f o u r t h \xa0\xa0e v e n t", "", ".A5", ".topside");
  });
  $('.A5 .botside .images .imgfarright').click(function() {
    panelMaker.newPanel("f i f t h \xa0\xa0e v e n t", "", ".A5", ".topside");
  });
});

//classes for dream makers, life taker

class panelAndDefaults {
  constructor() {
    this.textString = '';
    this.titleString = '';
    this.textOptions = {
      strings: [" ", this.textString],
      typeSpeed: 40,
      backSpeed: 5,
      showCursor: false
    }
    this.titleOptions = {
      strings: [" ", this.titleString],
      typeSpeed: 30,
      backSpeed: 15,
      showCursor: false
    }
  }

  newPanel(titleString, textString, panel, side) {
    titleString = titleString.toUpperCase();
    for (let i = 0; i < titleString.length; i++) {

    }
    this.titleOptions.strings[1] = titleString;
    this.textOptions.strings[1] = textString;
    $('.line').hide();
    setTimeout(() => {$('.line').show()}, 1000);
    var titleTyped = new Typed(`${panel} ${side} .title`, this.titleOptions);
    var textTyped = new Typed(`${panel} ${side} .maintext`, this.textOptions);
  }
}

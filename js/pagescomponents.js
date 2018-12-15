$(window).on("load", function() {

  $('.closeSec').hide();
  $('.infotext').hide();
  $('.dropsel').hide();
  //declaring instances
  const panelMaker = new panelAndDefaults();
  const secEditor = new sectionMan();
  const dropdownManipulator = new dropdownMan('.B3', ['.B3 .middle .title', '.B3 .middle .infofromsides']);
  panelMaker.newPanel("p r o g r a m m i n g", "Programming serves as a key part of the FTC competition, making our robot move based on the controller and also sensors. Our four programmers help develop Java code for Autonomous and TeleOp, bringing us up on top. We practice together, discussing issues and testing prototypes of our programs. In the end, we aim to build a great program to perform our best.", ".A2", ".leftside");

  //all the configs
  $('.A2 .rightside .images .imgtopleft').click(function() {
    panelMaker.textTyped.destroy();
    panelMaker.newPanel("j o s h u a", "", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgtopright').click(function() {
    panelMaker.textTyped.destroy();
    panelMaker.newPanel("c h a n d r a r k", "", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottomleft').click(function() {
    panelMaker.textTyped.destroy();
    panelMaker.newPanel("e r i c", "", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottomright').click(function() {
    panelMaker.textTyped.destroy();
    panelMaker.newPanel("d a n i e l", "As Captain of Multimedia, Daniel programs our website in addition to the robot. He created the current website, and also created time-based autonomous programs for the competition. He enjoys learning new programming languages, playing basketball, and listening in on bitcoin.", ".A2", ".leftside");
  });
  $('.A2 .rightside .images .imgbottommiddle').click(function() {
    panelMaker.textTyped.destroy();
    panelMaker.newPanel("p r o g r a m m i n g", "Programming serves as a key part of the FTC competition, making our robot move based on the controller and also sensors. Our four programmers help develop Java code for Autonomous and TeleOp, bringing us up on top. We practice together, discussing issues and testing prototypes of our programs. In the end, we aim to build a great program to perform our best.", ".A2", ".leftside");
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
    panelMaker.newPanel("e v a n", "Evan is the head of Financing for our team, serving as the UCTA for Wolf Corp. He manages our balances and regularly inputs spendings and raised money. Evan also contributes to building the robot to give an extra hand. He works with Google Sheets and lots of numbers. Evan enjoys gaming, playing basketball, and practicing piano.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgbottomleft').click(function() {
    panelMaker.newPanel("s a r a h", "Sarah controls the Engineering Notebook, an important part of the . It keeps all the documents of our team, even what we have as snacks for each practice. Sarah also meets with businesses in person, asking for a funding to keep our team going. Sarah loves to listen to music, watch the newest movies, and hang out with friends.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgbottommiddle').click(function() {
    panelMaker.newPanel("b u s i n e s s", "", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgtopleft').click(function() {
    panelMaker.newPanel("j a s o n", "Jason works on the Engineering Section for our team, drives the robot during the competition, and helps build and maintain the robot. In the Engineering Section, Jason includes the robot’s mechanisms and functionalities. When he’s not doing robotics, he plays games, dragonboats, and practices the handbell.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgtopright').click(function() {
    panelMaker.newPanel("c o n o r", "Conor oversees Documentation for our team. He ensures that anything from fundraising to Autonomous runs is recorded down, either on paper or online. Conor also keeps check on the robot, making sure it’s not broken or fixing it when it is. In his free time, Conor reads, sleeps, and plays with his dog Tara.", ".A4", ".leftside");
  });
  $('.A4 .rightside .images .imgtopmiddle').click(function() {
    panelMaker.newPanel("n a t h a n", "Nathan is the Business leader for Wolf Corp and supervises all main operations in the category. He reaches out to businesses as a part of that, looking for some to support our team. Besides that, he is also a builder, scouter, and outreach documenter. Nathan likes to play PC games, swim, listen to music, and practice the piano.", ".A4", ".leftside");
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

  $('.B1 .sections .topleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topleft', '.B1');
  });
  $('.B1 .sections .topright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topright', '.B1');
  });
  $('.B1 .sections .botleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botleft', '.B1');
  });
  $('.B1 .sections .botright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botright', '.B1');
  });
  $('.B1 .sections .closeSec').click(function() {
    $('.B1 .sections .closeSec').fadeOut(250);
    secEditor.showAllSec('.B1');
  });

  $('.B2 .sections .topleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topleft', '.B2');
  });
  $('.B2 .sections .topright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topright', '.B2');
  });
  $('.B2 .sections .botleft button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botleft', '.B2');
  });
  $('.B2 .sections .botright button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botright', '.B2');
  });
  $('.B2 .sections .topmid button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.topmid', '.B2');
  });
  $('.B2 .sections .botmid button').click(function() {
    secEditor.hideAllSecExceptAndEnlarge('.botmid', '.B2');
  });
  $('.B2 .sections .closeSec').click(function() {
    $('.B2 .sections .closeSec').fadeOut(250);
    secEditor.showAllSec('.B2');
  });

  //B3 Dropdown stuff
  $('.B3 .left .dropdown .droplabel').click(function() {
    if (dropdownleftopen) {
      $('.B3 .left .dropdown .dropmenu .dropsel').removeClass('fadeInDown');
      $('.B3 .left .dropdown .dropmenu .dropsel').addClass('fadeOutUp');
      $('.B3 .left .dropdown .dropmenu .dropsel').fadeOut(1500);
      $('.B3 .left .dropdown .droplabel img').removeClass('flip180');
      $('.B3 .left .dropdown .droplabel img').addClass('unflip180');
      dropdownleftopen = false;
    } else {
      $('.B3 .left .dropdown .dropmenu .dropsel').addClass('fadeInDown');
      $('.B3 .left .dropdown .dropmenu .dropsel').removeClass('fadeOutUp');
      $('.B3 .left .dropdown .dropmenu .dropsel').show();
      $('.B3 .left .dropdown .droplabel img').removeClass('unflip180');
      $('.B3 .left .dropdown .droplabel img').addClass('flip180');
      dropdownleftopen = true;
    }
  });
  $('.B3 .right .dropdown .droplabel').click(function() {
    if (dropdownrightopen) {
      $('.B3 .right .dropdown .dropmenu .dropsel').removeClass('fadeInDown');
      $('.B3 .right .dropdown .dropmenu .dropsel').addClass('fadeOutUp');
      $('.B3 .right .dropdown .dropmenu .dropsel').fadeOut(1500);
      $('.B3 .right .dropdown .droplabel img').removeClass('flip180');
      $('.B3 .right .dropdown .droplabel img').addClass('unflip180');
      dropdownrightopen = false;
    } else {
      $('.B3 .right .dropdown .dropmenu .dropsel').addClass('fadeInDown');
      $('.B3 .right .dropdown .dropmenu .dropsel').removeClass('fadeOutUp');
      $('.B3 .right .dropdown .dropmenu .dropsel').show();
      $('.B3 .right .dropdown .droplabel img').removeClass('unflip180');
      $('.B3 .right .dropdown .droplabel img').addClass('flip180');
      dropdownrightopen = true;
    }
  });
  dropdownManipulator.handleChoice(1, '.left', 'Chassis', 'a');
  dropdownManipulator.handleChoice(2, '.left', 'Protectors', 'b');
  dropdownManipulator.handleChoice(3, '.left', 'Sensors & Encoders', 'c');
  dropdownManipulator.handleChoice(4, '.left', 'Channels, Gears, and More', 'd');
  dropdownManipulator.handleChoice(1, '.right', 'Wheels', 'e');
  dropdownManipulator.handleChoice(2, '.right', 'Intake System', 'f');
  dropdownManipulator.handleChoice(3, '.right', 'Deposit System', 'g');
  dropdownManipulator.handleChoice(4, '.right', 'Hanging', 'h');

  $('.panel').hover(function () {
    let classed = this.className;
    console.log(classed);

    if (classed.search('B') > 0 || classed.search('D d') > 0 || classed.search('E e') > 0  || classed.search('A a') > 0 || classed.search('A5') > 0 || classed.search('C c') > 0) {
      $('.nav .menu-open').addClass('invertedColors');
      $('.nav .back').addClass('invertedColors');
    } else if (classed.search('A1') > 0 || classed.search('A3') > 0) {
      $('.nav .menu-open').addClass('invertedColors');
      $('.nav .back').removeClass('invertedColors');
    } else if (classed.search('A2') > 0 || classed.search('A4') > 0) {
      $('.nav .menu-open').removeClass('invertedColors');
      $('.nav .back').addClass('invertedColors');
    } else {
      $('.nav .menu-open').removeClass('invertedColors');
      $('.nav .back').removeClass('invertedColors');
    }

    if (classed.search('C c') > 0) {
      $('.C').attr('id', 'particles-js');
      $('.D').removeAttr('particles-js');
      $('.E').removeAttr('particles-js');
    } else if (classed.search('D d') > 0) {
      $('.D').attr('id', 'particles-js');
      $('.C').removeAttr('particles-js');
      $('.E').removeAttr('particles-js');
    } else if (classed.search('E e') > 0) {
      $('.E').attr('id', 'particles-js');
      $('.D').removeAttr('particles-js');
      $('.C').removeAttr('particles-js');
    }
  });
});

let dropdownleftopen = false;
let dropdownrightopen = false;
//classes for dream makers, life taker

class panelAndDefaults {
  constructor() {
    this.textString = '';
    this.titleString = '';
    this.textOptions = {
      strings: [" ", this.textString],
      typeSpeed: 5,
      backSpeed: 0.1,
      showCursor: false,
    };
    this.titleOptions = {
      strings: [" ", this.titleString],
      typeSpeed: 30,
      backSpeed: 15,
      showCursor: false,
      onComplete: (self) => {
        this.picChose = false;
      }
    };
    this.titleTyped;
    this.textTyped;
    this.picChose = false;
  }

  newPanel(titleString, textString, panel, side) {
    titleString = titleString.toUpperCase();
    this.titleOptions.strings[1] = titleString;
    this.textOptions.strings[1] = textString;
    $('.line').hide();
    setTimeout(() => {$('.line').show()}, 1000);
    if (!this.picChose) {
      this.titleTyped = new Typed(`${panel} ${side} .title`, this.titleOptions);
      this.textTyped = new Typed(`${panel} ${side} .maintext`, this.textOptions);
      this.textTyped.start();
      this.picChose = true;
    }
  }
}

// class for b1 b2 sections

class sectionMan {
  constructor() {
    this.sections = [];
  }

  checkSec(panel) {
    if (panel == '.B1') {
      this.sections = ['.topleft', '.topright', '.botleft', '.botright'];
    } else if (panel == '.B2') {
      this.sections = ['.topleft', '.topright', '.botleft', '.botright', '.botmid', '.topmid'];
    } else {
      console.log("Invalid panel");
    }
  }
  hideAllSecExceptAndEnlarge(not, panel) {
    this.checkSec(panel);
    for (let i = 0; i < this.sections.length; i++) {
      if (this.sections[i] == not) {
        $(`${panel} .sections ${this.sections[i]}`).addClass('enlarged');
        $(`${panel} .sections button`).hide();
        $(`${panel} .sections .infolabel`).hide();
        $(`${panel} .sections .infotext`).show();
      } else if (this.sections[i] !== not) {
        $(`${panel} .sections ${this.sections[i]}`).hide();
        $(`${panel} .sections ${this.sections[i]}`).removeClass('enlarged');
      }
    }
    setTimeout(function() {
      $(`${panel} .sections .closeSec`).fadeIn(500);
    }, 1000);
  }
  showAllSec(panel) {
    this.checkSec(panel);
    for (let i = 0; i < this.sections.length; i++) {
      $(`${panel} .sections ${this.sections[i]}`).removeClass('enlarged');
      $(`${panel} .sections button`).show();
      $(`${panel} .sections .infolabel`).show();
      $(`${panel} .sections .infotext`).hide();
      $(`${panel} .sections ${this.sections[i]}`).show();
    }
  }
}

class dropdownMan {
  constructor(panel, outputarea) {
    this.panel = panel;
    this.outputarea = outputarea;
    this.titleOptions = {
      strings: [" ", ""],
      typeSpeed: 20,
      backSpeed: 20,
      showCursor: false
    }
    this.textOptions = {
      strings: [" ", ""],
      typeSpeed: 40,
      backSpeed: 3,
      showCursor: false
    }
  }

  handleChoice(selected, section, title, output) {
    $(`${this.panel} ${section} .dropdown .dropmenu .dropsel${selected}`).click(() => {
      let editedTitle = title.split('').join('\xa0').toUpperCase();
      this.titleOptions.strings[1] = editedTitle;
      this.textOptions.strings[1] = output;
      let titleTyped = new Typed(this.outputarea[0], this.titleOptions);
      let textTyped = new Typed(this.outputarea[1], this.textOptions);
      if (section == '.left') {
        setTimeout(function() {
          $('.B3 .left .dropdown .dropmenu .dropsel').removeClass('fadeInDown');
          $('.B3 .left .dropdown .dropmenu .dropsel').addClass('fadeOutUp');
          $('.B3 .left .dropdown .dropmenu .dropsel').fadeOut(1500);
          $('.B3 .left .dropdown .droplabel img').removeClass('flip180');
          $('.B3 .left .dropdown .droplabel img').addClass('unflip180');
        }, 500);
        dropdownleftopen = false;
      } else if (section == '.right') {
        setTimeout(function() {
          $('.B3 .right .dropdown .dropmenu .dropsel').removeClass('fadeInDown');
          $('.B3 .right .dropdown .dropmenu .dropsel').addClass('fadeOutUp');
          $('.B3 .right .dropdown .dropmenu .dropsel').fadeOut(1500);
          $('.B3 .right .dropdown .droplabel img').removeClass('flip180');
          $('.B3 .right .dropdown .droplabel img').addClass('unflip180');
          dropdownrightopen = false;
        }, 500);
      }
    });
  }
}

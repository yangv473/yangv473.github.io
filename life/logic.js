var myData = null;

$.ajax({
  url: 'data.json',
  dataType: 'json',
  success: function (data) {
    myData = data;
  },
  error: function (err) {
    console.log('Error');
    console.log(err);
  }
});

var Life = {
  clicks : 0,
  age    : 0,
  stage  : 'infant',
  infant : 5,
  child  : 15,
  teen  : 30,
  adult  : 90,
  senior : 130,
  living : true
};

var emotion = ['love',
               'despair',
               'anger',
               'aggravation',
               'happiness',
               'anxiousness',
               'sadness',
               'scared',
               'surprised',
               'stressed',
               'jealousy',
               'curiosity',
               'excitement',
               'pride',
               'greedy',
               'alert',
               'annoyed',
               'amused',
               'ashamed',
               'attraction',
               'betrayed',
               'bitter',
               'bored',
               'calm',
               'cheerful',
               'cocky',
               'courageous',
               'depressed',
               'determined',
               'disgust',
               'embarrassed',
               'frustrated',
               'horrified',
               'lucky',
               'insecurity',
               'inspired',
               'intimidated',
               'lazy',
               'pessimistic',
               'death',
               'hunger'
               ];        


var eventInterval = null;                  
var prevEvent = '';

// deaths---------------------------------------------------------------------------------------
$('.live').click(function(e) {
  newLifeEvent();
});

$('.auto').click(function(e) {
  eventInterval = setInterval(newLifeEvent, 2000);
});

function newLifeEvent() {
  if (Life.living) {
    increment_timeline();
    render_special_event();
    render_semi_event();
    render_event();
  } else {
    $('body').removeClass().addClass('death');
  }
}

// the pop ups/special events-------------------------------------------------------------------
function render_special_event() {
  if (Life.clicks == 10) {
    clearInterval(eventInterval);
    $('.special-event').addClass('show');
  }
}

$('.close').click(function() {
  // eventInterval = setInterval(newLifeEvent, 2000);
  $('.special-event').removeClass('show');
});
$('.square').click(function() {
  $('.square').removeClass('smile');
  $(this).addClass('smile');
});

// ????????????????????????????????????????????????????????????????
function render_semi_event() {
  if (Life.clicks == 6) {
    var htmlEvent = document.createElement('p');
    htmlEvent.innerHTML = 'You are now a child';
    htmlEvent.classList.add('semi-event');
    $('.story').prepend(htmlEvent);

  }
}

// adding the story------------------------------------------------------------------------------
function render_event() {
  var randomEmotion  = Math.floor(Math.random() * emotion.length); // randomly generate a number
  var currentEmotion = emotion[randomEmotion];

  if (currentEmotion === 'death') {
    Life.living = false;
  }

  var randomEvent  = Math.floor(Math.random() * 3); // randomly generate a number
  var currentEvent = myData[Life.stage][currentEmotion][randomEvent];

  if (currentEvent === prevEvent) {
    render_event();
    return;
  }

  checkEvent(Life.stage, currentEmotion, randomEvent);

  var htmlEvent = document.createElement('p');
  htmlEvent.innerHTML =currentEvent;
  htmlEvent.classList.add('life-event');

  $('.story').prepend(htmlEvent);
  setTime();
  setAge();

  prevEvent = currentEvent;
}

function checkEvent(stage, emotion, eventNum) {
  if (stage === 'infant' && emotion === 'anger' && eventNum === 2) {
    // var num = Math.floor(Math.random() * 3);
    // var popup = '.anger-' + num;
    // $(popup).addClass('show');
  }
}

// gradient colors changing and time icons------------------------------------------------------

function setTime() {
  var timeNum = Math.ceil(Math.random() * 9);
  var timeClass = 'gradient-' + timeNum;
  $('body').removeClass().addClass(timeClass);

  var clock_image = '<img class="time-img" src="time' + timeNum + '.png" />'
  $($('.life-event')[0]).prepend(clock_image);
}
function setAge() {
   if (Life.stage === 'infant') {
    var infant_image = '<img class="time-img" src="infant.gif" />'
    $($('.life-event')[0]).prepend(infant_image);
  }
  if (Life.stage === 'child') {
    var infant_image = '<img class="time-img" src="child.gif" />'
    $($('.life-event')[0]).prepend(infant_image);
  }
  if (Life.stage === 'teen') {
    var infant_image = '<img class="time-img" src="teen.gif" />'
    $($('.life-event')[0]).prepend(infant_image);
  }
  if (Life.stage === 'adult') {
    var infant_image = '<img class="time-img" src="adult.gif" />'
    $($('.life-event')[0]).prepend(infant_image);
  }
  if (Life.stage === 'senior') {
    var infant_image = '<img class="time-img" src="senior.gif" />'
    $($('.life-event')[0]).prepend(infant_image);
  }
}
// how many clicks needed to reach the next stage------------------------------------------------
function increment_timeline() {
  Life.clicks += 1;

  if (Life.clicks <= 5) {
    Life.stage = 'infant';
  } else if (Life.clicks > 5 && Life.clicks <= 15) {
    Life.stage = 'child';
  } else if (Life.clicks > 15 && Life.clicks <= 30) {
    Life.stage = 'teen';
  } else if (Life.clicks > 30 && Life.clicks <= 90) {
    Life.stage = 'adult';
  }else if (Life.clicks > 90 && Life.clicks <= 130) {
    Life.stage = 'senior';
  }
}




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
  stage  : 'child',
  infant : 5,
  child  : 15,
  teen   : 30,
  adult  : 90,
  senior : 130,
  living : true,
  auto_live : false
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
var randomEmotion  = Math.floor(Math.random() * emotion.length); // randomly generate a number
var currentEmotion = emotion[randomEmotion];
// deaths---------------------------------------------------------------------------------------
$('.live').click(function(e) {
  newLifeEvent();
});

$('.auto').click(function(e) {
  if (Life.auto_live == false) {
    $('.live').addClass('auto-live');
    Life.auto_live = true;
    eventInterval = setInterval(newLifeEvent, 5000);
    $(this).html('manual');
  } else {
    $('.live').removeClass('auto-live');
    Life.auto_live = false;
    clearInterval(eventInterval);
    $(this).html('auto');
  }
  
  
});

function newLifeEvent() {
  if (Life.living) {
    increment_timeline();
    render_special_event();
    render_special_child_event();
    render_special_teen_event();
    render_special_adult_event();
    render_semi_event();
    render_teen_event();
    render_adult_event();
    render_senior_event();
    render_event();
  } else {
    $('body').removeClass().addClass('death');
  }
}

// the pop ups/special events-------------------------------------------------------------------
function render_special_event() {
  if (Life.clicks === 10) {
    clearInterval(eventInterval);
    $('.special-event-1').addClass('show');
  }
}

$('.square').click(function() {
  $('.square').removeClass('smile');
  $(this).addClass('smile');
});
function render_special_child_event() {
  if (Life.clicks === 6) {
    clearInterval(eventInterval);
    $('.special-child-event').addClass('show');
  }
}
function render_special_teen_event() {
  if (Life.clicks === 25) {
    clearInterval(eventInterval);
    $('.special-teen-event').addClass('show');
  }
}
$('.close').click(function() {
  if (Life.auto_live) {
    eventInterval = setInterval(newLifeEvent, 5000);
  } 
  $('.special-teen-event').removeClass('show');
  $('.special-adult-event').removeClass('show');
  $('.special-child-event').removeClass('show');
  $('.special-event-1').removeClass('show');
});
$('.exit').click(function() {
  if (Life.auto_live) {
    eventInterval = setInterval(newLifeEvent, 5000);
  } 
  $('.special-adult-event').removeClass('show');
});


function render_special_adult_event() {
  if (Life.clicks === 36) {
    clearInterval(eventInterval);
    $('.special-adult-event').addClass('show');
  }
}


function render_semi_event() {
  if (Life.clicks == 1) {
    var htmlEvent = document.createElement('p');
    htmlEvent.innerHTML = 'You are now a child';
    htmlEvent.classList.add('semi-event');
    $('.story').prepend(htmlEvent);

  }
}
function render_teen_event() {
  if (Life.clicks == 16) {
    var htmlEvent = document.createElement('p');
    htmlEvent.innerHTML = 'You are now a teen';
    htmlEvent.classList.add('semi-event');
    $('.story').prepend(htmlEvent);

  }
}
function render_adult_event() {
  if (Life.clicks == 31) {
    var htmlEvent = document.createElement('p');
    htmlEvent.innerHTML = 'You are now an adult';
    htmlEvent.classList.add('semi-event');
    $('.story').prepend(htmlEvent);

  }
}
function render_senior_event() {
  if (Life.clicks == 91) {
    var htmlEvent = document.createElement('p');
    htmlEvent.innerHTML = 'You are now a senior';
    htmlEvent.classList.add('semi-event');
    $('.story').prepend(htmlEvent);

  }
}

// adding the story------------------------------------------------------------------------------
function render_event() {
  var randomEmotion  = Math.floor(Math.random() * emotion.length); // randomly generate a number
  
  currentEmotion = emotion[randomEmotion];

  // console.log('ln182', currentEmotion)


  if (currentEmotion === 'death') {
    Life.living = false;
  }

  var randomEvent  = Math.floor(Math.random() * 3); // randomly generate a number
  var currentEvent = myData[Life.stage][currentEmotion][randomEvent];

  if (currentEvent === prevEvent) {
    render_event();
    return;
  }

  var htmlEvent = document.createElement('p');
  htmlEvent.innerHTML =currentEvent;
  htmlEvent.classList.add('life-event');

  $('.story').prepend(htmlEvent);
  setImage();
  setTime();
  // setAge();

  prevEvent = currentEvent;
}


// gradient colors changing and time icons------------------------------------------------------
function setImage() {
  var image = '<img class="time-img" src="' + currentEmotion + '.png" />'
  $($('.life-event')[0]).prepend(image);
  console.log('currentEmotion', currentEmotion);
}
function setTime() {
  var timeNum = Math.ceil(Math.random() * 9);
  var timeClass = 'gradient-' + timeNum;
  $('body').removeClass().addClass(timeClass);

  var clock_image = '<img class="time-img" src="time' + timeNum + '.png" />'
  $($('.life-event')[0]).prepend(clock_image);
}
// function setAge() {
//   if (Life.stage === 'child') {
//     $('.life-event').addClass('child-text');
//   } else if (Life.stage === 'teen') {
//     $('.life-event').addClass('teen-text');
//   } else if (Life.stage === 'adult') {
//     $('.life-event').addClass('adult-text');
//   } else if (Life.stage === 'senior') {
//     $('.life-event').addClass('senior-text');
//   }
// }
// how many clicks needed to reach the next stage------------------------------------------------
function increment_timeline() {
  Life.clicks += 1;

  if (Life.clicks <= 15) {
    Life.stage = 'child';
  } else if (Life.clicks > 15 && Life.clicks <= 30) {
    Life.stage = 'teen';
  } else if (Life.clicks > 30 && Life.clicks <= 90) {
    Life.stage = 'adult';
  } else if (Life.clicks > 90 && Life.clicks <= 130) {
    Life.stage = 'senior';
  }
}




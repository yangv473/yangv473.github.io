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
               'hate',
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
               'hopeful',
               'horrified',
               'humiliated',
               'lucky',
               'insanity',
               'insecurity',
               'inspired',
               'intimidated',
               'lazy',
               'pessimistic',
               'optimistic',
               'shame',
               'shy',
               'threatened',
               'vengeful',
               'death',
               'hunger'
               ];                                     

$('.live').click(function() {
  if (Life.living) {
    // do some living stuff
    increment_timeline();
    render_special_event();
    render_event();
  } else {
    // do some dead stuff
    $('body').removeClass().addClass('death');
  }
});

function render_special_event() {
  if (Life.clicks == 10) {
    $('.special-event').addClass('show');
  }
}

$('.close').click(function() {
  $('.special-event').removeClass('show');
});
$('.square').click(function() {
  $('.square').addClass('smile');
});

function render_semi_event() {
  if (Life.clicks == 5) {
    $('.story').prepend('You are now a teen!');
  }
}

function render_event() {
  var randomEmotion  = Math.floor(Math.random() * emotion.length); // randomly generate a number
  var currentEmotion = emotion[randomEmotion];

  if (currentEmotion === 'death') {
    Life.living = false;
  }

  var randomEvent  = Math.floor(Math.random() * 3); // randomly generate a number
  var currentEvent = myData[Life.stage][currentEmotion][randomEvent];

  var htmlEvent = document.createElement('p');
  htmlEvent.innerHTML =currentEvent;
  htmlEvent.classList.add('life-event');

  $('.story').prepend(htmlEvent);
  setTime();
}

function setTime() {
  var timeNum = Math.floor(Math.random() * 9) + 1;
  var timeClass = 'gradient-' + timeNum;
  $('body').removeClass().addClass(timeClass);


  $('.time-icon').addClass('is-hidden');
  var currentTime = '.time-icon-' + timeNum;
  $(currentTime).removeClass('is-hidden');
}

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


// $('body').addClass('gradient-1')



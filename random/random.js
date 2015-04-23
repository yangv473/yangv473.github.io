function quotes(){

var aquote = new Array;
aquote[0]="\"You go girl\"";
aquote[1]="\"You're the best\"";
aquote[2]="\"I like your hair\""
aquote[3]="\"You make awesome stuff\""
aquote[4]="\"You are so smart\""
aquote[5]="\"You're so hard working\""
aquote[5]="\"You're so funny\""

rdmQuote = Math.floor(Math.random()*aquote.length);
document.getElementById("txtbox") .value=aquote[rdmQuote];
}

var extra = ["e1.png", "e2.png", "e3.png", "e4.png", "e5.png",""];
var stache = ["m2.png", "m3.png", "m4.png", "m5.png", "m6.png",""];
var hair = ["h1.png", "h2.png",""];

var selectedpoem = false;

$(".extra-button").click(function() {
  
  $(".extra-holder").html('<img src="' + extra[Math.floor(Math.random()*extra.length)]+ '">');
  
  var newheight = (Math.floor(Math.random() * 100) + 100) + "px";
  
});

$(".stache-button").click(function() {
  
  $(".stache-holder").html('<img src="' + stache[Math.floor(Math.random()*stache.length)]+ '">');
  
  var newheight = (Math.floor(Math.random() * 100) + 100) + "px";
  
});

$(".hair-button").click(function() {
  
  $(".hair-holder").html('<img src="' + hair[Math.floor(Math.random()*hair.length)]+ '">');
  
  var newheight = (Math.floor(Math.random() * 100) + 100) + "px";
  
});









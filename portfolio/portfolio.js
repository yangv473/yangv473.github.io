// $('.show').click(function() {

var print = $('.print');
var isPrintActive = false;

var web = $('.web');
var isWebActive = false;

var motion = $('.motion');
var isMotionActive = false;

var about = $('.about');
var isAboutActive = false;

$('.print-button').on('mouseenter', function() {
	print.addClass('print-active');
});

$('.print-button').on('mouseleave', function() {
	if ( isPrintActive === false ) {
		print.removeClass('print-active');	
	}
});

$('.print-button').on('click', function() {
	isPrintActive = true;

	web.addClass('is-grey');
	motion.addClass('is-grey');
	about.addClass('is-grey');
	web.removeClass('web-active');
	about.removeClass('web-active');
	motion.removeClass('web-active');
	web.removeClass('about-active');
	about.removeClass('about-active');
	motion.removeClass('about-active');
	web.removeClass('motion-active');
	about.removeClass('motion-active');
	motion.removeClass('motion-active');
	print.removeClass('is-grey');
});

// web

$('.web-button').on('mouseenter', function() {
	web.addClass('web-active');
});

$('.web-button').on('mouseleave', function() {
	if ( isWebActive === false ) {
		web.removeClass('web-active');	
	}
});

$('.web-button').on('click', function() {
	isWebActive = true;

	print.addClass('is-grey');
	about.addClass('is-grey');
	motion.addClass('is-grey');
	print.removeClass('print-active');
	about.removeClass('print-active');
	motion.removeClass('print-active');
	print.removeClass('about-active');
	about.removeClass('about-active');
	motion.removeClass('about-active');
	print.removeClass('motion-active');
	about.removeClass('motion-active');
	motion.removeClass('motion-active');
	web.removeClass('is-grey');
});

//motion

$('.motion-button').on('mouseenter', function() {
	motion.addClass('motion-active');
});

$('.motion-button').on('mouseleave', function() {
	if ( isMotionActive === false ) {
		motion.removeClass('motion-active');	
	}
});

$('.motion-button').on('click', function() {
	isMotionActive = true;

	web.addClass('is-grey');
	about.addClass('is-grey');
	print.addClass('is-grey');
	print.removeClass('print-active');
	about.removeClass('print-active');
	web.removeClass('web-active');
	print.removeClass('web-active');
	about.removeClass('web-active');
	web.removeClass('about-active');
	print.removeClass('about-active');
	about.removeClass('about-active');
	web.removeClass('print-active');
	motion.removeClass('is-grey');
});

// about
$('.about-button').on('mouseenter', function() {
	about.addClass('about-active');
});

$('.about-button').on('mouseleave', function() {
	if ( isAboutActive === false ) {
		about.removeClass('about-active');	
	}
});

$('.about-button').on('click', function() {
	isAboutActive = true;

	web.addClass('is-grey');
	print.addClass('is-grey');
	motion.addClass('is-grey');
	print.removeClass('print-active');
	motion.removeClass('print-active');
	web.removeClass('print-active');
	print.removeClass('web-active');
	motion.removeClass('web-active');
	web.removeClass('web-active');
	print.removeClass('motion-active');
	motion.removeClass('motion-active');
	web.removeClass('motion-active');
	about.removeClass('is-grey');
});



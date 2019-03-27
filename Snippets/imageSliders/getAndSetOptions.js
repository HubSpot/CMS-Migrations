// list of settings, events, and methods: http://kenwheeler.github.io/slick/
// there may be some additional ones specific to the HubSpot version

// note: I'm using the slick-initialized class. if you have multiple sliders on your page you'll need to be more specific in your selectors.



// get the value of an option:
$('.slick-initialized').slick('slickGetOption', '');
// example:
$('.slick-initialized').slick('slickGetOption', 'autoplay');

// get values of all options:
$('.slick-initialized').get(0).slick.options;



// set the value of an option:
$('.slick-initialized').slick('slickSetOption', '', '', true);
// the true at the end is for a refresh to the UI. just do it.
// example:
$('.slick-initialized').slick('slickSetOption', 'autoplay', false, true);



// effectively pause transitions:
$('.slick-initialized').slick('slickSetOption', 'autoplaySpeed', 10000000, true);
// alternatively:
$('.slick-initialized').slick('slickSetOption', 'autoplay', false, true);
// ^this sometimes takes a bit to trigger
// there is another, more consistent way to turn off the transitions. see: turnOffAutoplay.js



// restart transitions:
// change 3000 to whatever your transitions should be. it's in milliseconds,
// so 3000 equals 3 seconds.
// it takes about 30-60 seconds for this to kick in after having paused it.
$('.slick-initialized').slick('slickSetOption', 'autoplaySpeed', 3000, true);

// few more examples:
$('.slick-initialized').slick('slickSetOption', 'speed', 2000, true);
$('.slick-initialized').slick('slickSetOption', 'autoplaySpeed', 8000, true);
$('.slick-initialized').slick('slickSetOption', 'arrows', false, true);


// example usage of an event
// after slide changes:
$('.slick-initialized').on('afterChange', function(event, slick, currentSlide, nextSlide){
    // do stuff
});

// log all of a slider's options to the console:
// (this will do it after every slide change, so if that's going to both you make sure to turn off autoplay first)
// it will log the slider data to the console. your options will be in an object for the key "options"
$('.slick-initialized').on('afterChange', function(event, slick, currentSlide, nextSlide){
    console.log(slick);
});

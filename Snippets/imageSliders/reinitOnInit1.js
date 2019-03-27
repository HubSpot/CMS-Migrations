/*
this snippet fires on document ready. it destroys the slick slider and immediately re-initializes it with the settings set in slickSettings.
*/



$(document).ready(function() {
    var slickSettings = {
        "infinite":true,
        "autoplay":true,
        "autoplaySpeed":1000.0,
        "adaptiveHeight":false,
        "arrows":true,
        "dots":true,
        "lazyLoad":"ondemand",
        "asNavFor":"#hs_cos_gallery_module_149736213341883 .hs_cos_gallery_thumbnails",
        "displayMode":"standard",
        "fade":false,
        "lightboxRows":3
    };
    $('.hs_cos_gallery_main').one('init', function(slick) {
        setTimeout(function () {
            $('.hs_cos_gallery_main').slick('unslick');
            $('.hs_cos_gallery_main').slick(slickSettings);
        }, 0);
    });
});



/*

Notes:

 - The jQuery .one() method will only fire once, rather than reinitializing our slider for all eternity.
 - The setTimeout function is because of a bug.
 - If you're only trying to change a few settings or to add a handful of settings, I would suggest copying over all of the slider's existing options. You can do this by heading into the source code for the page you're working on. Do a search for hsslick and you should see the initialization function. It will look something like:

 $("#hs_cos_gallery_module_1489481802803590").hsSlick(
	{"infinite":true,"autoplay":true,"autoplaySpeed":5000.0,"adaptiveHeight":false,"arrows":true,"dots":true,"lazyLoad":"ondemand","asNavFor":"#hs_cos_gallery_module_1489481802803590 .hs_cos_gallery_thumbnails","displayMode":"standard","fade":false,"lightboxRows":3}
);

Just copy those over (and if you're nice, format nicely like how I have in my code above) into the slickSettings variable. And then add or edit your own settings.

*/

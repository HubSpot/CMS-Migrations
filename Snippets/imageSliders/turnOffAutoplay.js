// In the console of your page run this:
$(".slick-initialized").slick("unslick");

/*
It destroys (un-initializes) the slider. Then open up the source code of the page. Do a search for hsslick and you should see the initialization function. It will look something like:

$("#hs_cos_gallery_module_1489481802803590").hsSlick(
   {"infinite":true,"autoplay":true,"autoplaySpeed":5000.0,"adaptiveHeight":false,"arrows":true,"dots":true,"lazyLoad":"ondemand","asNavFor":"#hs_cos_gallery_module_1489481802803590 .hs_cos_gallery_thumbnails","displayMode":"standard","fade":false,"lightboxRows":3}
);

Change "autoplay": true to "autoplay": false and paste your code into the console of your page.

If you're using your own custom settings just copy those over instead and change the autoplay value to false. Your slider shouldn't autoplay now.

An alternative way to do this would be to use the "slickSetOption" method to either change the autoplay value or the autoplaySpeed value, although this can be a bit finicky in my experience.
*/

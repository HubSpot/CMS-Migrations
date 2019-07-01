// Some example Masonry code you might use:

// To initalize:
// store the .post-listing element in a variable
// initialize with masonry() inside an imagesLoaded() call on the container element:
var $container = $('.post-listing');
$container.imagesLoaded(function() {
    $container.masonry({
        itemSelector: '.post-item',
        horizontalOrder: true,
    });
});

// I'd recommend at least including the itemSelector option. There are others though. For example if you want the Masonry plugin to set the gutter (space between columns) instead of by doing it through CSS:

var $container = $('.post-listing');
$container.imagesLoaded(function() {
    $container.masonry({
        itemSelector: '.post-item',
        horizontalOrder: true,
        gutter: 20,
    });
});


// for debugging in the console of a page you can:

// get info about your Masonry instance with:
$('.post-listing').data('masonry');

// uninitalize your Masonry instance with:
$('.post-listing').masonry('destroy');

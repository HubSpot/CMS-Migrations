// https://github.com/liabru/jquery-match-height

// basic:
$('.post-item').matchHeight();

// on document ready:
$(document).ready(function() {
    $('.post-item').matchHeight();
});

// with the default options:
$('.post-item').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
});

// targeting a different element for a height to match:
$('.first-post').matchHeight({
    target: $('.post-item')
});

// a way to access / log each item in each row
var rows = $.fn.matchHeight._rows($('.post-item'));
$.each(rows, function(i, row) {
    console.log('row: ', row);
    $.each(row, function(i, item) {
        console.log('item: ', item);
    });
});

// remove binding to elements (typically used for debugging)
$('.post-item').matchHeight({
    remove: true
});

// manually set heights using the plugin's row functionality, including on Isotope's layoutComplete event
function setPostItemBoxHeightByRow() {
    var rows = $.fn.matchHeight._rows($('.post-item'));
    $.each(rows, function(i, row) {
        var intHeight = 0;
        $.each(row, function(i, item) {
            $(item).find('.post-item-box').each(function() {
                if ($(this).outerHeight() > intHeight) {
                   intHeight = $(this).outerHeight()
                }
            });
        });
        $(row).find('.post-item-box').each(function() {
            $(this).css('height', intHeight);
        });
    });
}
setPostItemBoxHeightByRow();
$('.post-listing').on( 'layoutComplete', function( event, laidOutItems ) {
    setPostItemBoxHeightByRow();
});

// open/close lightbox
$('.lightbox-btn-trigger').click(function() {
  $(this).next(".lightbox").addClass('open');
});

$('.close').click(function() {
  $(this).parents(".lightbox").removeClass('open');
});


// close by clicking outside of lightbox
$(document).on('click', function(event) {
    if ($(event.target).has('.lightbox-container').length) {
        $(".lightbox").removeClass('open');
    }
});

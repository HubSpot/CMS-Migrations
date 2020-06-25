//Sticky Footer
function updateHeight(){
    var bodyHeight = $( window ).outerHeight() - $('.header').outerHeight() - $('.footer').outerHeight();
    $('.container-wrapper').css('min-height', bodyHeight + 'px');
}
updateHeight();
$(window).on("resize", updateHeight);

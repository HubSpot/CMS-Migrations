//Sticky Footer
function updateHeight(){
    var bodyHeight = $( window ).outerHeight() - $('.header-container-wrapper').outerHeight() - $('.footer-container-wrapper').outerHeight();
    $('.body-container-wrapper').css('min-height', bodyHeight + 'px');
}
updateHeight();
$(window).on("resize", updateHeight);

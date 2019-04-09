(function(exports) {
    exports.updateHeightFlex = function() {
        function addStyleString(str) {
            var node = document.createElement('style');
            node.innerHTML = str;
            document.body.appendChild(node);
        }
        addStyleString('html, body { min-height: 100vh!important }');
        addStyleString('body { display: flex!important; flex-direction: column!important }');
        addStyleString('.header-container-wrapper, .footer-container-wrapper {flex-shrink: 0!important}' );
        addStyleString('.body-container-wrapper { flex-grow: 1!important }');
    }
    exports.updateHeightJS = function() {
        var bodyHeight = $(window).height() - $('.header-container-wrapper').outerHeight() - $('.footer-container-wrapper').outerHeight();
        var bodyContainerWrapperPaddingAndMargin = $('.body-container-wrapper').outerHeight() - $('.body-container-wrapper').height();
        $('.body-container-wrapper').css('min-height', (bodyHeight + bodyContainerWrapperPaddingAndMargin) + 'px');
    };
})(this.stickyFooter = {});
(function() {
    if (Modernizr.flexbox) {
        stickyFooter.updateHeightFlex();
    } else {
        stickyFooter.updateHeightJS();
        $(window).on('resize', stickyFooter.updateHeightJS);
    }
})();

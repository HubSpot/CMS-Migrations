$('.blog-listing-wrapper:not(.simple-listing)').jscroll({
    loadingHtml: '<div class="loader">Loading...</div>',
    autoTrigger: 'true',
    contentSelector: '.blog-listing-wrapper',
    nextSelector: 'a.next-posts-link:last'
});

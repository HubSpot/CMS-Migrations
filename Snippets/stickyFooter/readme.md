This is a snippet for when a customer wants their footer stickied to the bottom of the viewport when the page height isn't large enough to do it for them.

`sticky-footer-v1.js` is the original version found here: http://hubspot-migrations.hs-sites.com/snippets/sticky-footer. `sticky-footer-v2.js` improves on v1, so it's preferable to use that. If it doesn't work for whatever reason, you can try v1.

To use this, upload and link to `modernizr-flexbox.js`. Then anywhere below that in the document, include sticky-footer-v2.js. Not in the `<head>` tag though because it adds CSS to the body, meaning the browser must have started parsing the `<body>` tag. Otherwise you'll get an error like "Cannot read property 'appendChild' of null". Alternatively you can just add the `sticky-footer-v2` code in a document ready function.

What it does is creates an object, `stickyFooter` that has two methods. `stickyFooter.updateHeightFlex()` injects CSS into the page. It's the CSS here (adapted for HubSpot pages): http://blog.schoenwald.media/sticky-footer-with-flexbox/. It pushes the `.footer-container-wrapper` down to the bottom of the page. The second method is `stickyFooter.updateHeightJS()`, which is the updated version of the original sticky footer script. It uses jQuery's `outerHeight()` method to calculate heights including padding and margin.

The bottom part in the self-executing anonymous function runs Modernizr's feature detection for flexbox. If the browser can use flexbox, it executes `stickyFooter.updateHeightFlex()`. If not, it executes `stickyFooter.updateHeightJS()`.

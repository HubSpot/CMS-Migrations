Masonry is a plugin used for grid layouts, most often used for blogs. I've included some example code in `example.js` for how to initialize a Masonry instance and for also including a few different options. I've also included a few functions that I find useful for debugging.

The Masonry documentation is pretty good. The site is here: https://masonry.desandro.com/. You'll find documentation for all the options you can pass into your initialization:  https://masonry.desandro.com/options.html. You'll also find the plugin's methods: https://masonry.desandro.com/methods.html and events: https://masonry.desandro.com/events.html.

To use Masonry you need to at least upload to the customer's File Manager `masonry.pkgd.min.js` and then link to it from your template. This will allow you to initialize the plugin and use all of its options, methods, and events. The most simple initialization would be something like:

```javascript
$('.post-listing').masonry();
```

You can pass in an options of options as well, which looks something like:

```javascript
$('.post-listing').masonry({
    itemSelector: '.post-item'
});
```

`itemSelector` "Specifies which child elements will be used as item elements in the layout".

I suggest also included `imagesloaded.pkgd.min.js`, which gives you an event listener for when all images have finished loading in your container. So for example:

```javascript
$('.post-listing').imagesLoaded(function() {
    // code to execute
});
```

...where your code will execute once all images inside the `.post-listing` element have fully loaded. This is important for Masonry because it's going to absolutely position your `itemSelector` elements based on how large the elements are (which changes once the images are loaded). So if you initialize before the images have loaded (for example at the document ready event), you're likely going to have an overlap. So you'll want to initialize with something like:

```javascript
$('.post-listing').imagesLoaded(function() {
    $('.post-listing').masonry({
        itemSelector: '.post-item'
    });
});
```

Or as a best practice you should cache jQuery objects and initialize like this:

```javascript
var $container = $('.post-listing');
$container.imagesLoaded(function() {
    $container.masonry({
        itemSelector: '.post-item'
    });
});
```

Suggested reading:

 - Difference between document ready and window load: https://stackoverflow.com/questions/5182016/what-is-the-difference-between-window-load-and-document-ready
 - Cache jQuery objects: http://fizzy.school/cache-jquery-objects
 - Why initializing using `imagesLoaded()` is preferable initializing on the window load event: https://metafizzy.co/blog/window-load-last-resort/

This is a plugin for dynamically matching heights of elements on a page. Documentation lives here: https://github.com/liabru/jquery-match-height.

To use, upload `matchHeight-min.js` to the customer's File Manager and link to it from the template. Make your call after this file has loaded (so on document ready for example). Note that this plugin has known limitations: https://github.com/liabru/jquery-match-height#known-limitations

The most basic usage is to grab your element through jQuery and then call the `matchHeight()` method without any options. So for example:

```javascript
$('.post-item').matchHeight();
```

You can also pass in options of `byRow`, `property`, `target`, and `remove`. Here they are with their default values:

```javascript
$('.post-item').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
});
```

You can target a specific item to match heights by:

```javascript
$('.first-post').matchHeight({
    target: $('.post-item')
});
```

This plugin is responsive, meaning it updates on window resize. There's a throttle of 80ms (so it waits 80ms to update after window resize).

This plugin allows for a few useful debugging functions that you can throw into the console of your page. You can remove bindings using:

```javascript
$('.post-item').matchHeight({
    remove: true
});
```

To see the rows that the plugin is detecting on your page:

```javascript
$.fn.matchHeight._rows($('.post-item'));
```


Sometimes the plugin gets weird and doesn't really work properly. This can happen if you're trying to match heights of elements that are children of siblings. So for example if you want to match heights for elements `div.post-item-box` with a markup like:

```html
<div class="post-listing">
    <div class="post-item">
        <div class="post-item-box"></div>
    </div>
    <div class="post-item">
        <div class="post-item-box"></div>
    </div>
    <div class="post-item">
        <div class="post-item-box"></div>
    </div>
</div>
```

But we can still use its row functionality to update heights manually. This will loop through the rows, log each row to the console, then loop through the items in each row and log each item to the console:

```javascript
// a way to access each item in each row
var rows = $.fn.matchHeight._rows($('.post-item'));
$.each(rows, function(i, row) {
    console.log('row: ', row);
    $.each(row, function(i, item) {
        console.log('item: ', item);
    });
});
```

You could then use something like this:

```javascript
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
```

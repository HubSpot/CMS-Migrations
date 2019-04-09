This is from: https://github.com/constancecchen/object-fit-polyfill. I've included some instructions here as well, since this one can be a bit tricky.

It's a polyfill for the CSS property `object-fit` (and optionally `object-position`). This allows it to be used in IE9+ and Edge. It works with both `<img>` tags and `<video>` tags. If you're going to implement CSS that uses `object-fit`, please use this polyfill to get your CSS working in IE / Edge. Instructions:

1. If you're using `<img>` tags, add an attribute and value on them of `data-object-fit="cover"`. You'd have `<img>` tags that look like: `<img src="image-url-goes-here" data-object-fit="cover">`. If you're using `<video>` tags, you'd add the `data-object-fit` attribute to the `<video>` tag, and then nest the `<source>` tag inside, like:
```html
<video data-object-fit="cover">
    <source src="movie-url-goes-here" type="video/mp4">
</video>
```

2. Save the `.js` file in the File Manager and link to it in the footer. It's included in this folder as `objectFitPolyfill.min.js`.

3. Now you're going to include your CSS. It can be a little tricky. Basically what the polyfill does is it first looks to see if the browser has the native functionality for the `object-fit` property. If it does, the polyfill won't do anything. If it doesn't, the polyfill will run some JS on your elements (which it finds by looking for those `data-object-fit` attributes). It will basically do some math and position things accordingly through CSS. You'll see some CSS get added inline. Assuming you've set your base CSS correctly, the inline CSS should take care of the rest.

On the `<img>` or `<video>` tags, you need to set CSS like:

```css
.media {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Or whatever object-fit you want */
}
```
That's the CSS from the polyfill page on GitHub. But just to clarify, you need to actually include those `100%` values, and the `object-fit` value that you want. Then on this element's **immediate** parent, set this CSS:

```css
.container {
    width: 25em; /* Or whatever you want it to be */
    height: 25em; /* Or whatever you want it to be */
}
```
It doesn't need to be in `em`s. But it has to be a fixed value of some kind. I think you can also use `calc(100%)` if you want the height or width to be 100%.

If you look at the elements in IE / Edge, you'll see inline styling that looks something like:

on the media itself:

![Image of inline styling on media](../../Assets/Images/object-fit1.png)

and on the parent:

![Image of inline styling on media's parent](../../Assets/Images/object-fit2.png)

These declarations need to actually apply to the elements for this polyfill to work properly, If there are declarations that have an `!important` flag over-ruling the inline declarations, some of the positioning / sizing will probably be incorrect, possibly resulting in images that appear to be missing or that just don't look right. IE / Edge will cross out declarations that aren't applying in its developer tools, just like Chrome. We do have browserstack logins if you don't have IE / Edge on your computer.

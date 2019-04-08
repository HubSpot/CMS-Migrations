# Blog Grid Clearfix

**Purpose:** to resolve a common CSS issue that happens when building a simple multi-column blog grid using floats.

## Instructions

This issue happens when a blog grid is built using CSS floats and the heights for the posts are not even (e.g. more post summary text or a taller featured image). To resolve this, you can either:

1.) Use this snippet to clear the float of the first post in each row so that the grid doesn't break
2.) Use the match height snippet to ensure that all posts in the grid are the same height

If you're looking to simply fix the grid issue that can be seen below, add in the part of the CSS snippet that corresponds with how many posts there are in the row. Please be sure to adjust this for different breakpoints using media queries if the blog doesn't break down to one post per row (e.g. there are two posts per row at 767px and one post per row at 479px).

![Image of inline styling on media](../../Assets/Images/blogGridClearfix.png)

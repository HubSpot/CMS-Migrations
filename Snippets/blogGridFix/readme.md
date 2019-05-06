# Blog Grid Fix

**Purpose:** to resolve a common CSS issue that happens when building a simple multi-column blog grid using CSS floats.

## Instructions

This issue happens when a blog grid is built using CSS floats and the heights for the posts in a row are not even (e.g. more post summary text or a taller featured image). To resolve this, you can either:

1.) Use this snippet to clear the float of the first post in each row so that the grid doesn't break
2.) Use the match height snippet (https://github.com/HubSpot/CMS-Migrations/tree/master/Snippets/matchHeight) to ensure that all posts in the grid are the same height

If you're looking to simply fix the grid issue that can be seen in the image below, add in the part of the CSS snippet that corresponds with how many posts there are per row in your blog layout. Please be sure to adjust this for different breakpoints (e.g. tablet and mobile).

![Image of inline styling on media](../../Assets/Images/blogGridFix.png)

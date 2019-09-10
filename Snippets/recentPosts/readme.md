# Recent Blog Posts

**Purpose:** to print out a set of recent blog posts but enabling you to not duplicate the recent post on the blog post page

## Instructions

Add this code snippet either in a custom module or at the bottom of your blog post HTML. This snippet prints out a select amount of recent posts from a given blog. You can change how many posts will be printed out on line three of the code snippet.

## Special Notes

Why do we need this module when we have the blog_recent_post function. Currently when using that function on a blog post page if you're viewing the most recent post you will see that post duplicated at the bottom of the blog post. To avoid this we make sure to not exceed the number defined on line 3 and additional to check to make sure the recent post and current post URLs do not match. 

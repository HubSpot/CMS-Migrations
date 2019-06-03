# Printing the Blog Topic Title on a Topic Page

**Purpose:** to pull the topic name onto the corresponding topic page of a blog.

## Instructions

Add the following code inside of the {% if topic %} conditional where you want the topic title to show.

```html
{% set string_to_split = content.title %}
{% set newArray = string_to_split|split('|', 2) %}
{% for item in newArray %}
	{% if loop.last %}
		<h2 style="text-align: center;">{{ item }}</h2>
	{% endif %}
{% endfor %}
```

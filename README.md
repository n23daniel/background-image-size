### Background Image Size
jQuery plugin that mimics the background-size CSS property to HTML image tags.

###Usage
###### HTML
```
<div class="background-cover">
  <img src="path-to-image">
</div>
```
###### JS 
```
$(document).ready(function() {
  $(".background-cover").background("cover");
  $(".background-contain").background("contain");
});
```

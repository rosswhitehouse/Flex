Flex
====


##Step One

Firstly we have to install Flex in two stages. Firstly, installing Google Jquery, then Flex's own JS

###JQuery

To install JQuery, simply copy the following link directly **before** your last `</body>` tag, if you have any other javascript files, they must be linked **after** JQuery:

```HTML
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
```

###Flex.js

To install `flex.js`, first download it and make sure it is in a file called flex.js.

Then, again in your `<head>`, simply insert:

```HTML
<script type="text/javascript" src="flex.js"></script>
```

Remember, if flex.js is inside a js folder, you need to add `js/` to your `src` link.

##Step Two

Next we have to apply flex to your menu. Find your set of items and, if you haven't already, create a `<ul>` around the menu and `<li>` elements around the items. Give the `ul` a class, make sure it's something unique that won't be repeated elsewhere in your files.

Here's an example to show this:

```HTML
<ul class='menu'>
  <li> Home </li>
  <li> About </li>
  <li> News </li>
  <li> Contact </li>
</ul>
```
Next you need to go into your Javascript file, or the flex.js file, and enter the following:
```JAVASCRIPT
$('.menu').flex({
  
});
```
In this example we've used `.menu` because that was the class of the `ul` we wanted. If your class is different, change this.

##Step Three

Finally there are a number of options that can be set to customize Flex, including direction, order and horizontal and vertical orientations. If you're familiar with Flexbox, you'll be familiar with some of the things you can customise.

Check out the demo for more!

[rosswhitehouse.github.io/flex](rosswhitehouse.github.io/flex)

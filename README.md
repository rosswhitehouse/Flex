Flex
====


##Step One

Firstly we have to install Flex in two stages. Firstly, installing Google Jquery, then Flex's own JS

###JQuery

To install JQuery, simply copy the following link directly **before** your last `</body>` tag, if you have any other javascript files, they must be linked **after** JQuery:

```HTML
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
```

###Flex.js

To install `flex.js`, first download it and make sure it is in a file called flex.js.

Then, again in your `<head>`, simply insert:

```HTML
<script type="text/javascript" src="flex.js"></script>
```

Remember, if flex.js is inside a js folder, you need to add `js/` to your `src` link.

##Step Two

Next we have to apply flex to your gallery. Find your set of images and, if you haven't already, create a `<div>` around them. Give this wrapper a class, make sure it's something unique that won't be repeated elsewhere in your files.

Here's an example to show this:

```HTML
<div class='box'>
  <img src='images/img1.jpg' />
  <img src='images/img2.jpg' />
  <img src='images/img3.jpg' />
</div>
```
Next you need to go into your Javascript file, or the flex.js file, and enter the following:
```JAVASCRIPT
$('.box').flex({
  
});
```
In this example we've used `.box` because that was the class of the div we wanted. If your class is different, change this.

##Step Three

Finally there are a number of options that can be set to customize Flex, including direction, background colour and horizontal and vertical orientations. If you're familiar with Flexbox, you'll be familiar with some of the things you can customise.

In order to change an option, find the following section (from step two):

```javascript
$('.box').flex({
  
});
```
Your class might be different to ours, but the rest should look the same. Between the brackets simply enter the attribute you want to change, followed by a colon, then the value you wish to set in apostrophes. Here's an example using background colour:

```javascript
$('.box').flex({
  background: 'blue'
});
```
If you intend to add more than one change, to add a comma at the end of the line.

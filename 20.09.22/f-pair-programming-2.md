
# Pair programming 2

> Please locate your breakout-room in the Excel sheet: `1-pair-programming.xls`

## Exercise 1

use the following html:

```html
<!DOCTYPE html>
<html>
<head>
<div class="output">
    <h1>Hello</h1>
    <div>Test</div>
    <ul>
        <li id="one">One</li>
        <li class="red">Two</li>
    </ul>
    <div>Test</div>
</div>
</body>
</html>
```

Take the following steps to understand how HTML elements can be manipulated with JavaScript code.

- Select the element with the class output.
- Create another JavaScript object called mainList and select only the ul tag that is within the output element. Update the ID of that ul tag to mainList.
- Search for the tagName of each div, and output them into the console as an array.
- Using a for loop, set the ID of each of the div tags to id with a numeric value of the order they appear within output. 
- Still within the loop, alternate the color of the contents of each element in output to be red or blue.

## Exercise 2

Star rating system
Create a star rating component that is fully interactive and dynamic using JavaScript.

You can use the following HTML and CSS as a starting template. Provide the completed script element as your answer.

```html
<!DOCTYPE html>
<html>
<head>
    <title>Star Rater</title>
    <style>
        .stars ul {
            list-style-type: none;
            padding: 0;
        }
        .star {
            font-size: 2em;
            color: #ddd;
            display: inline-block;
        }
        .orange {
            color: orange;
        }
        .output {
            background-color: #ddd;
        }
    </style>
</head>
<body>
    <ul class="stars">
        <li class="star">&#10029;</li>
        <li class="star">&#10029;</li>
        <li class="star">&#10029;</li>
        <li class="star">&#10029;</li>
        <li class="star">&#10029;</li>
    </ul>
    <div class="output"></div>
	
    <script src="app.js"></script>     

</body>
</html>
```
Hints Take the following steps:

- Select all the stars within the ul that have a class of stars into an object, and create another object for the output element.
- Create another object to contain the results of calling querySelectorAll() on elements with a class of star.
- Loop through the resulting node list, adding to the element object the value of the index plus 1, and adding an event listener listening for a click. Attach a function called starRate() to the click event of each star element.
- Within the starRate() function, add to the output the value of the star using the event target and the element object's star value, which was set in the previous step.
- Loop through all the stars using forEach() to check if the index value of the star element is less than the star value; if it is, apply a class of orange. Otherwise, remove the class of orange from the classList element.
# Group Activity 2

There are 2 parts. The second part is optional. 


## Part A: Star rating system 

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
ANSWER:


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
	
    <script>        const starsUL = document.querySelector(".stars");
        const output = document.querySelector(".output");
        const stars = document.querySelectorAll(".star");
        stars.forEach((star, index) => {
            star.starValue = (index + 1);
            star.addEventListener("click", starRate);
        });

        function starRate(e) {
            output.innerHTML =
                `You Rated this ${e.target.starValue} stars`;
            stars.forEach((star, index) => {
                if (index < e.target.starValue) {
                    star.classList.add("orange");
                } else {
                    star.classList.remove("orange");
                }
            });
        }</script>     

</body>
</html>


Hints Take the following steps:

- Select all the stars within the ul that have a class of stars into an object, and create another object for the output element.
- Create another object to contain the results of calling querySelectorAll() on elements with a class of star.
- Loop through the resulting node list, adding to the element object the value of the index plus 1, and adding an event listener listening for a click. Attach a function called starRate() to the click event of each star element.
- Within the starRate() function, add to the output the value of the star using the event target and the element object's star value, which was set in the previous step.
- Loop through all the stars using forEach() to check if the index value of the star element is less than the star value; if it is, apply a class of orange. Otherwise, remove the class of orange from the classList element.


## Part B: (Optional)

In JavaScript's early days, which was the high time of gaudy home pages with lots of animated images, people came up with some truly inspiring ways to use the language.

One of these was the mouse trail—a series of elements that would follow the mouse pointer as you moved it across the page.

In this exercise, you will implement a mouse trail. Use absolutely positioned ´<div>´ elements with a fixed size and background color. Create a bunch of such elements and, when the mouse moves, display them in the wake of the mouse pointer.

There are various possible approaches here. You can make your solution as simple or as complex as you want. A simple solution to start with is to keep a fixed number of trail elements and cycle through them, moving the next one to the mouse’s current position every time a "mousemove" event occurs.


> hints

Creating the elements is best done with a loop. Append them to the document to make them show up. To be able to access them later to change their position, you’ll want to store the elements in an array.

Cycling through them can be done by keeping a counter variable and adding 1 to it every time the "mousemove" event fires. The remainder operator (% elements.length) can then be used to get a valid array index to pick the element you want to position during a given event.

Another interesting effect can be achieved by modeling a simple physics system. Use the "mousemove" event only to update a pair of bindings that track the mouse position. Then use requestAnimationFrame to simulate the trailing elements being attracted to the position of the mouse pointer. At every animation step, update their position based on their position relative to the pointer (and, optionally, a speed that is stored for each element). Figuring out a good way to do this is up to you.

> You can find the startup file in the src directory: `trail.html` 

## Links
- [Eloquent JavaScript](https://eloquentjavascript.net/15_event.html)
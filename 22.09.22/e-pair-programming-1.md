
# Pair programming

> Please locate your breakout-room in the Excel sheet: `1-pair-programming.xls`

## Exercise 1

Write the necessary code in `p1exercise1.html` to allow users toggle the theme of the page i.e display regular mode and dark mode.

- Within the HTML document, set up a Boolean value variable to use that will toggle the color modes.
- Use `onclick` to set up a function that outputs a message in the console when clicked. You can use the value of the Boolean variable.
- Within the function, add a condition that checks whether the darkMode variable is true or false.
- If false, then update the page style to a background color of black and a font color of white.
- Add an else response that changes the color of the background to white and the color of the text to black. Also, update the value of the darkMode variable accordingly.


## Exercise 2
Create several divs with color names in textContent. Add JavaScript to add click event listeners to each element, and as each element is clicked, update the background color of the body to match the color name in the div.

You can use `p1exercise2.html` as a template.

## Exercise 3

Using a basic HTML file, the below exercise will demonstrate the order of loading for the window object and the document object using DOMContentLoaded, which is an event that fires once the document object content is loaded in the browser. The window object will load afterward, even if the window.onload statement comes first.

- Within a basic HTML file, create a function named message that requires two parameters, the first one being a string value for the message and the second an event object. Within the function, output into the console using console.log the event and the message.
- Using the window object, attach an onload function to the event object. Invoke the function, passing a string value of Window Ready and the event object to the message function for output.
- Create a second function to capture the DOM content loading, and add an event listener listening for DOMContentLoaded to the document object. Once that event is triggered, pass the event object and a string value of Document Ready to the message output function.
- Change the order of the event listeners, placing the document event statement prior to the window onload: does it make a difference in the output?
- Using the document object, add the DOMContentLoaded event listener, which will send to the function the arguments of Document Ready and the event object that was triggered.
- Run the script and see which event is triggered first; change the order of the events to see if the output sequence changes.

You can use `p1exercise3.html` as a template.

## Exercise 4

Our aim is to change the background color of the element on the page as the various mouse events occur. On mousedown over the element, the element will turn green. When the mouse is over the element, it will turn red. As the mouse moves out of the element boundaries, the color will turn yellow. When the mouse is clicked, the color will go green, and when the mouse is released, it will change to blue. The actions also be logged in the console.

- Create a blank element on the page and assign a class to it.
- Select the element using its class name.
- Assign a variable to the element object from the page.
- Update the content of the element to say hello world.
- Using the style properties of the element, update the height and width, then add a default background color to it.
- Create a function to handle two arguments, the first being a color value as a string and the second being the event object of the trigger.
- In the function, output the color value to the console, and for the event, output the event type to the console.
- Add event listeners to the element: mousedown, mouseover, mouseout, and mouseup. For each of these events, send two arguments to the function that you created: a color value and the event object.
- Run the code and try it in your browser.

You can use `p1exercise4.html` as a template.

## Exercise 5

Change the text in a div element on the page. This exercise will demonstrate how you can get the value from an input field and place it within a page element. It also covers tracking button clicks and details about the event target. You can use `p1exercise5.html` as a template.

> Take the following steps:

- Using the above HTML as a template, add the JavaScript code, selecting each page element, including the div, the input field, and the button element. Assign these element objects to variables in your code.
 - Create an empty array called log, which will be used to track and log all the events.
- Create a function that will capture the event object details in an object, adding it to the log array. Get the event target and create an object, adding it to the array that stores the input value at the time, the type of event, the class name of the target element, and the tag name of the target element.
- Within the logging function, get the value of the content within the input and assign that value to the textContent of the div.
- Clear the div content after the information is added to the log array.
- Add an event listener to both of the first two buttons that sends the event object to the tracking function created in the earlier steps.
- Attach an event listener to the third button that outputs the log content to the console.


## Links
- [mdn](https://developer.mozilla.org/en-US/docs/Web/API)
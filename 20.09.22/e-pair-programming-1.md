
# Pair programming 1

> Please locate your breakout-room in the Excel sheet: `1-pair-programming.xls`

## Exercise 1

Create an HTML file containing a page element with a class of output using the following code template:

<!DOCTYPE html >
<html>
	<div class="output"></div>
  <script src="app.js"></script>
</html>

create app.js and make the following changes to the output element:

- step 1:  Select the page element as a JavaScript object.
- step 2: Update the textContent property of the selected page element e.g write your name
- step 3: Using the classList.add object method, add a class of red to the element.
- step 4: Update the id property of the element to tester.
- step 5: Through the style object, add a backgroundColor property of red to the page element.
- step 6: Get the document URL via document.URL and 
- step 7: update the text of the output element to contain the value of the document URL. 
- step 8: You can log it in the console first to ensure you have the correct value.

	
## Exercise 2

Use querySelectorAll() to select all matching elements in the following HTML file:

```html
<!doctype html>
<html>
<head>
    <title></title>
</head>
<body>
    <div class="container">
        <div class="myEle">One</div>
        <div class="myEle">Two</div>
        <div class="myEle">Three</div>
        <div class="myEle">Four</div>
        <div class="myEle">Five</div>
    </div>
    <script>
      
    </script>
</body>
</html>
```


Within a script element, 

- step 1: use QuerySelectorAll() to select all the matching occurrences of the elements with that class and store them in a variable.
- step 2:Output all the elements into the console, first as an array and 
- step 3: then looping through them to output them one by one.



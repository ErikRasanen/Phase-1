# Pair programming 1

> Please locate your breakout-room in the Excel sheet: `e-pair-programming.xls`

There are three parts: A, B and C

## Part A: Generating a Printable Version of a Web Page Using CSS Media Queries

> The final outcome of this part can be found in the src folder. Please try to solve the problem on own first.

The aim is to apply a CSS layout to change to the printable version of the page. This is achieved by removing unnecessary items from the printing view and tidying up the styling elsewhere in order to make the page ready for printing.

Figure `media1.png` in the img folder showcase the expected layout in print preview mode:

- Let's start with `media.html` in the src folder. In the HTML we've got a <header> block where a logo would normally go, a <main> tag section containing a <section> for the main content, and <aside> for the sidebar content. Finally, there is a <footer> tag to complete the web page.

- Let's remove the advert sidebar and footer navigation from the print view. Add the following new CSS media query:

```css
@media only print {
    footer, aside {
        display: none;
    }
}
```

This code will hide the display of the footer and aside tags when the web page is printed off. You should be able to view your print media style changes in the print preview mode of your device.

- Let's tidy up the final display of the web page when in print mode by removing the unnecessary margin now that the sidebar and the background colors have been removed in the print view. Add the following new CSS to your existing print media query:

```css
header, section {
    margin-right: 0;
    background: transparent;
}
```

> Now you can see that the sidebar and footer are no longer visible in print mode

## Part B: Using Media Queries to Change the Page Layout

> The final outcome of this part can be found in the src folder. Please try to solve the problem on own first.

In this part, we'll make responsive navigation based on the browser's screen width.

Let's start with `reponsive.html` in the src folder. 

We'll change the CSS styles on the navigation menu to make the code styled for mobile devices. Then, we'll remove display: flex from the nav ul element to make the navigation list items collapse underneath one another, instead of sitting horizontally in the same row. We'll also change the styling on the a tag element further to make it more suitable for mobiles by giving the links a background color and changing this on its hovered/tapped state.

It's worth noting the importance of the * { margin:default margins and the padding of all elements on the web page to zero. 
By default, many web browsers apply a margin and/or padding to list styles (ul/li), which would cause us issues when trying to style the navigation. For complete control and cross-browser fluency, it's better to reset. The following code snippet shows the example code of the changes:

```css
<style>
    * {
      margin: 0;
      padding: 0;
    }

    nav ul {
      list-style: none;
    }

    nav a {
      color: white;
      background: black;
      font-weight: bold;
      display: block;
      padding: 15px;
      font-size: 15px;
      text-decoration: none;
      text-align: center;
    }

    nav a:hover {
      background: darkgray;
    }

</style>
```

If you now open  `reponsive.html` in the web browser, you'll be able to see how the navigation has changed to be vertically stacked, as opposed to being displayed in a row as it was before.

Next, we will add our first media query to apply the display: flex style to only screen sizes of 480 pixels or above (which commonly means landscape mobile and wider):

```css
    @media (min-width: 480px) {
    	nav ul {
    		display: flex;
    	}
    	nav li {
    		flex: 1 1 auto;
    	}
    }
```

Adding display: flex to the ul parent element ensures that the child li elements are displayed in the same row. Then, by providing the flex: 1 1 auto; directive, we tell the li elements that the basis of growing and shrinking in width changes, this flex property combines the flex-grow, flex-shrink, and flex-basis properties into one shorthand property. This will create a single row of navigation elements, with the spacing and element widths being automatically calculated as the web page screen width increases or decreases.

Now, the navigation system will comprise flexible blocks in a row, each with an on-screen width of 480 pixels or above.

Now, to cater for even wider screens, we're going to increase the font size for screens of 768 pixels or higher (which commonly would be screens for tablets and other bigger devices):

```css
    @media only screen and (min-width: 768px) {
	    nav a {
	        font-size: 20px;
	    }
	}
```

Now you should notice the styling change as different breakpoints are reached.

As a recap, you have learned how to take an existing web page that was not responsive or mobile-friendly and change the styling structure to make it a mobile-first web page, and you have used media queries to apply responsive CSS3 styling as the screen size increases to change the styles/layout to suit the screen better. 

## Part C:
- Explain the meaning of the following snippet? Pay attention to the `*`

```css
* {
      margin: 0;
      padding: 0;
    }
```
ANSWER: ALL margin and padding is removed


- What happens if you change `@media only screen` to `@media screen` in the following snippet?

```css
@media only screen and (min-width: 768px) {
nav a {
 font-size: 20px;
}
}
```
ANSWER: Nothing happens with new browsers. "Only" command is for old browsers. 

## Reference(s)
- The HTML and CSS Workshop By Lewis Coulson , Brett Jephson , Rob Larsen 



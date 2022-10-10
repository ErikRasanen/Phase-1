# Group Activity 1

There are 2 parts. The second part is optional. 

## Part A:

In `counter.html` (located the `src` folder), there are 2 buttons and a paragraph with the counter value.

1. Add an event listener to enable incrementing the counter

The increment button should increment the counter value by 1 on each click and stop incrementing when the counter value reaches 10. To implement this you should:
- Get the DOM element with the corresponding id.
- Add an event listener that increments the counter value on each click, up to 10.

2. Add an event listener to enable decrementing the counter

The decrement button should decrement the counter value by 1 and stop decrementing when the counter value reaches 0. To implement this you should:
-  Get the DOM element with the corresponding id.
- Add an event listener that decrements the counter value on each click, until 0.

    <script>
      let button = document.getElementById('counter-increment');
      let button2 = document.getElementById('counter-decrement');
      let display = document.getElementById('counter-value');
      let count = 0;
      button.addEventListener('click', () => {
      if (count <= 9){
        count++
        display.innerHTML = count;
      }  
      });
      button2.addEventListener('click', () => {
      if (count >= 1){
        count--
        display.innerHTML = count;
      }   
      });

    
  </script>



## Part B (optional)

Write a page that displays a balloon (using the balloon emoji, 🎈). When you press the up arrow, it should inflate (grow) 10 percent, and when you press the down arrow, it should deflate (shrink) 10 percent.

You can control the size of text (emoji are text) by setting the font-size CSS property (style.fontSize) on its parent element. Remember to include a unit in the value—for example, pixels (10px).

The key names of the arrow keys are "ArrowUp" and "ArrowDown". Make sure the keys change only the balloon, without scrolling the page.

When that works, add a feature where, if you blow up the balloon past a certain size, it explodes. In this case, exploding means that it is replaced with an 💥 emoji, and the event handler is removed (so that you can’t inflate or deflate the explosion).

You can find the startup file `balloon.html` in the `src` directory.

> Links
- [Eloquent JavaScript](https://eloquentjavascript.net/15_event.html)
- [Unicode emoji characters](https://unicode.org/emoji/charts/full-emoji-list.html)





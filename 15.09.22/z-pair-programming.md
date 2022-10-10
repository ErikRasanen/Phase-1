
# Extra (Optional): Pair-Programming

> Please locate your breakout-room in the Excel sheet: `g-pair-programming.xls`

1. In your console, copy the following function and verify
   that the following invocations match your expectations:

   ```js
   function square(num){
      return num * num;
   }

   square(10) + 2;
   square(100) + square(77);
   square(8 / 2)
   square(2 + 17);
   square(square(15));
   ```

2. Describe how `square(square(15))` is
   evaluated.

3. Rename `square`'s `num` parameter in your above code to `foo`, and
   rename the uses of that parameter in the body to `foo` as well. Will the
   function `square` still work? Why or why not?

4. What is wrong with the following definitions of `square`? Write a sentence or
   two describing the issue(s); then, try copying the erroneous examples into a
   console one-at-a-time and observing the error(s) generated (you may have to
   attempt to invoke the functions to see the error). What errors are produced
   (if any) for each erroneous version? Do the errors make sense?

   ```js
   function square(foo) {
     return x * x;
   }

   function square(5) {
     return 5 * 5;
   }

   function square("x") {
     return "x" * "x";
   }
   ```

5. Fix the invalid syntax in the following functions (you can copy and paste these
   invalid definitions into your console and then edit them there):

   ```js
   func square1(x {
     return x * x;
   }

   functionsquare2 x)
     return x * x;
   }

   function (x) square3 {
     return x * x;
   ```

6. The following functions exhibit poor style -- fix these issues using the
   original version of `square` as a reference.

   ```js
   function square(x){return x*x;}

   function square (x) { return x *x;
   }

   function square(x)
   {
   return x * x;
   }
   ```

7. Complete the function `cube` that returns the cube of x:

  ```js
  function cube(x) {
    // your code here
  }
  ```

8. Complete the function `fullName` that should take two parameters, `firstName`
   and `lastName`, and returns the `firstName` and `lastName` concatenated
   together with a space in between.

  ```js
  // don't forget the parameters!
  function fullName() {
    // your code here
  }
  fullName("John", "Doe") // => "John Doe"
  ```

9. Write a function `average` that takes two numbers as input (parameters), and
   returns the average of those numbers.

10. Write a function `greeter` that takes a name as an argument and *greets*
    that name by returning something along the lines of `"Hello, <name>!"`

## More Practice

1. Think of at least three activities that you enjoy doing outdoors and the
   range of temperatures and weather patterns (*e.g* sunny, windy, snowy, rainy,
   etc.) that are best for these activities. Write a function `whatToDoOutside`
   that accepts a *temperature* and *condition* as parameters and outputs a
   string of the format: "The weather is ideal for: ACTIVITY" (where ACTIVITY is
   an actual activity). Make sure to include an `else` that indicates what
   should be done if the conditions do not match any activities. If you're short
   on inspiration, here are some ideas:

   + **Snow Sports:** snowboarding, skiing
   + **Water Sports:** surfing, sailing, paddle boarding, swimming
   + **Team Sports:** basketball, baseball, football (American or everywhere
     else), etc.

2. Modify the `scoreToGrade` function so that it returns `'A+/A-'` for
   scores of 98-100/90-92 respectively. Apply the same logic for all other
   letter grades.

3. A couple of useful built-in mathematical functions are `Math.random`,
   `Math.floor` and `Math.ceil`. Look these functions up on
   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
   to learn how they work, and use them to implement the following functions:

   + `randInt`: Should accept a single numeric argument (`n`), and return a
     number from `0` to `n`.
   + `guessMyNumber`: Should accept a single numeric argument and compare it to
     a random number between `0` and `5`. It should return one of the following
     strings:

     - "You guessed my number!" if the argument matches the random number.
     - "Nope! That wasn't it!" if the argument did not match the random number.

4. The `guessMyNumber` function above accepts a guess `n` and checks it against a
   random number from `0` to `5` -- if the guess `n` is greater than `5`, output
   a different message indicating that the guess is out of bounds.

   - **NOTE:** It will be helpful to *first* write a `randInt` function that
     accepts a number `n` and computes a random integer from `0` to `n`; then,
     you can use this function in `guessMyNumber`.

## Reference
- [Hack Reactor](https://github.com/hackreactor/javascript_101/tree/master/3-functions)
- [Hack Reactor](https://github.com/hackreactor/javascript_201/tree/master/2-logical-operators-advanced-conditionals)
- [Hack Reactor](https://github.com/hackreactor/javascript_201/tree/master/1-booleans-comparisons-conditionals)
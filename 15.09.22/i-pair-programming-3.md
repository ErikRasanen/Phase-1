
# Pair-Programming: Arrays

> Please locate your breakout-room in the Excel sheet: `g-pair-programming.xls`

## Creating Arrays

1. Using the array: `["cat", "fox", "dog", "monkey"]`, what is the index of:

   + "dog"?
   + "monkey"?
   + "cat"?

ANSWER:
2
3
0


2. Fix the syntax/style in the following arrays:

  ```js
  [ 1, 3 4 7,9, ]
  "the""quick""brown","fox" "jumped","over" the lazy, "dog",  ]
  [true false,true
  ```
  ANSWER:
  [1, 3, 4, 7, 9]
  ["the", "quick", "brown","fox", "jumped", "over", "the lazy", "dog"]
  [true, false, true]

3. Create arrays in the *global scope* of your program consisting of strings that represent:

   + Your favorite TV shows/movies
   + Names of people you know/care about
   + Favorite sports/activities

ANSWER:
["Stargate", "Expanse", "Pawn Stars"]
["Channa", "Veikko", "Anatoli"]
["Tabletennis", "Fishing", "Mushroompicking"]


## Accessing Array Elements

1. Using the arrays that you created in the last exercise, use the console to access:

    + First elements,
    + Last elements,
    + Other elements!




2. Write a function `first` that takes an array as an argument and returns the
   first element in that array.

ANSWER:
function first(arr) {
  return arr[0];
}

3. Write a function `last` that takes an array as an argument and returns the
   *last* element in the array. **Hint:** What is the relationship between the
   *index* of the last element in the array and the *length* of the array?

ANSWER:
function last(arr) {
  var lastIndex = arr.length - 1;
  return arr[lastIndex];
}


4. We can use the *assignment operator* (`=`) to replace elements in arrays with
   other ones like so:

   ```js
   var animals = ['dog', 'elephant', 'zebra']
   // let's replace 'dog' with 'hippo'
   animals[0] = 'hippo';
   animals; // => ['hippo', 'elephant', 'zebra']
   ```

5. Using the same principle, perform the following:

   ```js
   // 1. Change all odd numbers to be those numbers multiplied by two:
   var numbers = [4, 9, 7, 2, 1, 8];
   // TODO: your code here
   numbers; // => [4, 18, 14, 2, 2, 8]

ANSWER:
let numbers = [4, 9, 7, 2, 1, 8];

numbers[1] = numbers[1] * 2;
numbers[2] = numbers[2] * 2;
numbers[4] = numbers[4] * 2;

numbers;


   // 2. Fix the typos by replacing each element with a correctly spelled version
   var places = ['snfranisco', 'oacklannd', 'santacrus']
   // TODO: your code here
   places; // => ['san francisco', 'oakland', 'santa cruz']
   ```

ANSWER:
let places = ['snfranisco', 'oacklannd', 'santacrus']

places[0] = 'san francisco';
places[1] = 'oakland';
places[2] = 'santa cruz';

places;


6. Try the following in a console:

   ```js
   var arr = [];
   arr[7] = "Hello."
   arr; // => ???
   ```
   ANSWER:
   ,,,,,,,Hello.

   What is the value of `arr` after assigning an element to its seventh index?
   Explain the result in plain English.

   ANSWER: system creates 7 empty index slots and then assigns "Hello"


## Reference
- [Hack Reactor](https://github.com/hackreactor/javascript_301/tree/master/2-arrays)
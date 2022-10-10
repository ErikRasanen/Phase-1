
# Pair-Programming: Objects

> Please locate your breakout-room in the Excel sheet: `g-pair-programming.xls`

## Creating Objects

1.  Create an object that represents *you*. It should contain your first name,
    last name, age and hometown.

    let me = ["Erik", "Räsänen", 35, "Porvoo"]

2.  Add three more key/value pairs to your object that represent other attributes
    of yourself. Ideas include (but are not limited to):
    - Favorite TV Shows/Movies/Sports/Activities etc.
    - Occupation
    - Date of Birth
    - Pets (number of pets, names of pets, etc.)

    **HINT:** You can just modify the object that you created before.

3.  The values in an object can be objects themselves, and in fact, this is a
    very common pattern. For example, consider the following object that
    represents a computer:

    ```js
    var computer = {
      brand: "Apple",
      year: 2014,
      model: "MacBook Pro",
      size: "15-inch",
      specs: {
        processor: "2.3GHz Intel Core i7",
        memory: "16 GB 1600 MHz DDR3",
        graphics: "Intel Iris Pro 1536 MB"
      }
    }
    ```

    You should notice that the `specs` key in the `computer` object is an object
    itself! We could access information about the processor using dot-notation
    like so:

    ```js
    computer.specs.processor; // => "2.3GHz Intel Core i7"
    ```

    Change your object to have a `name` key, the value of which is an *object*
    &#x2013; this object should have `first`, `last` and `middle` keys
    containing your first, last, and middle names respectively (make sure to
    *remove* the `firstName` and `lastName` keys that you added before). You
    should be able to access your *last name* afterwards like so (assuming your
    object is called `you`):

    ```js
    you.name.last; // => YOUR LAST NAME
    ```

4.  Look up your favorite movie on IMDB, and make an object that represents some
    aspects of that movie, *e.g.*:
    - Title
    - Director
    - Year released
    - Rating
    - Actors

    **HINT:** Most movies have multiple actors. What data-structure do we use to
    represent a collection of similar things?

## Creating New Key/Value Pairs

1. Create a new empty object in your console called `obj` like this:

   ```js
   var obj = {};
   ```

2. Add a new key/value pair to the object `obj` by *assigning* a new value to a
   new key like so:

   ```js
   obj.hello = "world";
   obj["number"] = 25;
   ```

3. Now, check the value of `obj` in the console and ensure that it has the two
   key/value pairs added above. This is how we create new key/value pairs in
   existing objects.

4. In the console, add a `favoriteColor`
   key/value pair to the object that represents you.

## Accessing Values by Key

1.  Fix the attempts to access values in the `person` object:

    ```js
    var key = "name";
    var person = {
        name: "Alyssa P. Hacker",
        age: 26,
        hometown: "somewhere"
    };
    person[age]; // => 26
    person.key; // => "Alyssa P. Hacker"
    ```

2. Write a function `fullName` that takes a person object as an argument, and
   returns that person's full name as a string. By *person object*, we mean an
   object that has the structure of the object you created to represent
   yourself above, for example:

   ```js
   var alyssa = {
     name: {
       first: "Alyssa",
       middle: "P.",
       last: "Hacker"
     },
     age: 26
   };

   function fullName(person) {
     // TODO: your code here
   }

   fullName(alyssa); // => "Alyssa P. Hacker"
   ```

3. What happens if you pass a person object to `fullName` that doesn't have a
   middle name?

   ```js
   fullName({name: {first: "John", last: "Doe"}}); // => "John Doe"
   ```

   Your `fullName` function should work correctly regardless of whether or not
   the person has a middle name -- if it doesn't produce the output shown above
   when given the object `{name: {first: "John", last: "Doe"}}`, fix it so that
   it does.

4. We often deal with **arrays of objects**; below is an example of an array of
   objects, where each object represents a *person*:

   ```js
   var people = [
     {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
     {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
     {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
     {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
     {name: {first: "Louis", last: "Reasoner"}, age: 21}
   ];
   ```

   1. Add the object representing yourself to this array of people (if your
      `name` key does not have the same "shape" as the ones above, make sure you
      change it to look like these).
   2. (Not included)
   3. Write a function that finds the average age of the `people` array.
   4. (Not included)


## Reference
- [Hack Reactor](https://github.com/hackreactor/javascript_301/tree/master/4-objects)
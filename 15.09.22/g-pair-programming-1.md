
# Pair-Programming 1

> Please locate your breakout-room in the Excel sheet: `g-pair-programming.xls`

## Logical Operators

1. Is the `!` operator a *unary* operator, or *binary* operator?

2. Evaluate each of the following expressions first on a whiteboard, and then in
   a console:

   ```js
   !(2 >= 2)
   !(4 === 4)
   !(5 !== 5)
   ```
ANSWER:
console.log(!(2 >= 2)) = false
console.log(!(4 === 4)) = false
console.log(!(5 !== 5)) = true


3. Evaluate each of the following expressions first on a whiteboard, and then in a
   console:

   ```js
   1 > 2 || 2 > 2 || 3 > 2
   5 < 5 || 75 < 74
   ```

   ANSWER:
    console.log(1 > 2 || 2 > 2 || 3 > 2)    = true
    console.log(5 < 5 || 75 < 74)           = false

## Conditionals: `else if` & `else`

1. Write a function called `scoreToGrade` that accepts a *number* as a parameter
   and returns a *string* representing a letter grade corresponding to that
   score.

   For example, the following grades should be returned given these scores:

   + 'A' >= 90
   + 'B' >= 80
   + 'C' >= 70
   + 'D' >= 60
   + 'F' < 60

   ```js
   function scoreToGrade(score) {
     // TODO: your code here
   }
   scoreToGrade(95); // => 'A'
   scoreToGrade(72); // => 'C'
   ```

ANSWER:

  function scoreToGrade(score) {
    if (score > 100) {
       return "INVALID SCORE";
    } else if (score >= 90) {
       return "A";
    } else if (score >= 80) {
       return "B";
    } else if (score >= 70) {
       return "C";
    } else if (score >= 60) {
       return "D";
    } else if (score < 60 && score >= 0) {
       return "F";
    } else {
       return "INVALID SCORE";
    }
   }
    console.log(scoreToGrade(95)); // => 'A'
    console.log(scoreToGrade(72)); // => 'C' 
    console.log(scoreToGrade(59)); // => 'F'
    console.log(scoreToGrade(0)); // => 'F'
    console.log(scoreToGrade(101)); // => 'INVALID SCORE'
    console.log(scoreToGrade(-1)); // => 'INVALID SCORE'



2. Modify the `scoreToGrade` function so that it returns `'INVALID SCORE'` if
   the score is greater than `100` or less than `0`.

   ANSWER:

     function scoreToGrade(score) {
    if (score > 100) {
       return "INVALID SCORE";
    } else if (score >= 90) {
       return "A";
    } else if (score >= 80) {
       return "B";
    } else if (score >= 70) {
       return "C";
    } else if (score >= 60) {
       return "D";
    } else if (score < 60 && score >= 0) {
       return "F";
    } else {
       return "INVALID SCORE";
    }
   }
    console.log(scoreToGrade(95)); // => 'A'
    console.log(scoreToGrade(72)); // => 'C' 
    console.log(scoreToGrade(59)); // => 'F'
    console.log(scoreToGrade(0)); // => 'F'
    console.log(scoreToGrade(101)); // => 'INVALID SCORE'
    console.log(scoreToGrade(-1)); // => 'INVALID SCORE'

3. The following function returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result.

```js
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
```

Rewrite it, to perform the same, but without if, in a single line. Make two variants of checkAge:
- Using a question mark operator ?
- Using OR ||


## Reference
- [Hack Reactor](https://github.com/hackreactor/javascript_201/tree/master/2-logical-operators-advanced-conditionals)
- [Hack Reactor](https://github.com/hackreactor/javascript_201/tree/master/1-booleans-comparisons-conditionals)
- [Solution question3](https://javascript.info/function-basics#rewrite-the-function-using-or)


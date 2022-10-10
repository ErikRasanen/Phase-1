# Group discussion 1

Please visit the link below and discuss in groups how to solve the  the followings tasks. 
> Please do not check the solutions until you give it a try.

- Part 1: [function checkAge(age)](https://javascript.info/function-basics#is-else-required)

ANSWER: There is no difference, because?





- Part 2 [Function min(a, b)](https://javascript.info/function-basics#function-min-a-b)

ANSWER:

function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }
  console.log(min(2,5))
  console.log(min(3,- 1))
  console.log(min(1,1))


- Part 3: [Function pow(x,n)](https://javascript.info/function-basics#function-pow-x-n)

ANSWER:

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
   console.log(`Power ${n} is not supported, use a positive integer`);
  } else {
    console.log( pow(x, n) );
  }



- Part 4: rewrite the functions above using expression instead of declaration.

## Tasks & Solution
- https://javascript.info/function-basics#tasks

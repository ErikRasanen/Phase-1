
# Pair programming

> Please locate your breakout-room in the Excel sheet: `1-pair-programming.xls`

1. Declare and initialize a variable total to 0. Use a for loop to add the value of each element of the myArr array to total.
```js
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

```

ANSWER:
const myArr = [2, 3, 4, 5, 6];
// Only change code below this line
let sum = 0;
for (let i = 0; i < myArr.length; i++) {
  sum += myArr[i];

console.log(sum);  
}



2. Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. Use dot notation for all properties where possible, otherwise use bracket notation.
```js
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = undefined;
```

ANSWER:

const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

console.log(gloveBoxContents);


3. Delete the tails property from myDog. You may use either dot or bracket notation.
```js
// Setup
const myDog = {
  "name": "Gasper",
  "legs": 4,
  "tails": 1,
  "friends": ["Matti", "Niina"],
  "bark": "woof"
};




// Only change code below this line

ANSWER:

const myDog = {
  "name": "Gasper",
  "legs": 4,
  "tails": 1,
  "friends": ["Matti", "Niina"],
  "bark": "woof"
};


delete myDog.tails;
console.log(myDog);

```
4. Modify the function abTest so that if a or b are less than 0 the function will immediately exit with a value of undefined.
```js
// Setup
function abTest(a, b) {
  // Only change code below this line

  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```
ANSWER:

function abTest(a, b) {
  
  if (a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(-1,-1))


5. Write a switch statement to set answer for the following conditions:
a - apple
b - bird
c - cat
default - stuff

```js
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line


  // Only change code above this line
  return answer;
}

switchOfStuff(1);
```

ANSWER:

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch(val) {
  case 1:
    return "apple";
    break;
  case 2:
    return "bird";
    break;
  case 3:
    return "cat";
    break;
  default:
    return "stuff";
}


  // Only change code above this line
  return answer;
}

console.log(switchOfStuff(1));
console.log(switchOfStuff(2));
console.log(switchOfStuff(3));
console.log(switchOfStuff(4));


6. Refactor the following imperative code to be declarative by using the forEach() native array method instead of a for loop:
```js
const sum = function(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result = result + array[i];
  }
  return result;
};
sum([5, 10, 15]); // => 30
```

7. Write a function called min that find the smallest number in an array of numbers and returns it.

```js
const min = function(array) {

//
}

min([100, 54, 73, 8, 12, 3]); // => 3
```

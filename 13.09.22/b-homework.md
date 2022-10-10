
# Homework

> Deadline before the start of the lecture

Estimated workload is 140min.
- Videos: 93min
- Reflection & Knowledge check: 45 min

## Videos

- Syntax Basics & Types From min 42 till the end
https://youtu.be/FhguwBJeqWs

- Control Flow (53min)
https://youtu.be/JloLGV9DmtQ

## Reflection & Knowledge check: 

1. 
- Write a string that represents your full name.
let name = 'Erik Räsänen';
console.log(name);

- Write a string that represents your favorite food.
let food = 'Leipä';
console.log(food);

- Use the `+` operator (known as **concatenation**) to combine two or more strings.
let name = 'Erik Räsänen';
let food = 'Leipä';
let combine = name + ' likes ' + food;
console.log(combine);


2. 
- Declare two variables: `employee` and `name`.
- Assign the value `"Matti"` to `name`.
- Copy the value from `name` to `employee`.
- display the value of `employee` using `console.log` . What is the output?

let employee;
let name;
name = 'Matti'
name = employee
console.log(employee)

ANSWER: undifined

3.  What is the output of the following snippet?
```js
const q = '1';
switch (q) {
    case '1':
        answer = "one";
        break;
    case 1:
        answer = 1;
        break;
    case 2:
        answer = "this is the one";
        break;
    default:
        answer = "not working";
}
console.log(answer);
```
ANSWER: one



4. What is the output of the following snippet?

```js
let myTime = 9;
let output;
if (myTime >= 8 && myTime < 12) {
    output = "Wake up, it's morning";
} else if (myTime >= 12 && myTime < 13) {
    output = "Go to lunch";
} else if (myTime >= 13 && myTime <= 16) {
    output = "Go to work";
} else if (myTime > 16 && myTime < 20) {
    output = "Dinner time";
} else if (myTime >= 22) {
    output = "Time to go to sleep";
} else {
    output = "You should be sleeping";
}

console.log(output);
```
ANSWER: Wake up, it's morning


5. What is the output of the following snippet?

```js
let a = 5;
let b = 10;
let c = 20;
let d = 30;

console.log(a > b || b > a);
console.log(a > b && b > a);
console.log(d > b || b > a);
console.log(d > b && b > a);
```
ANSWER:
true 
false 
true 
true


6. What is the output of the following snippet?
```js
let step = 3;
 
for (let i = 0; i < 1000; i += step) {
    if (i > 10) {
        break;
    }
    console.log(i);
}
```
ANSWER: 
0
3
6
9






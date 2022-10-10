# Group discussion 1


Given the students array: `["Matti", "Rami", "Niina", "Mirja"];`
Discuss in Groups how you to display  the names of each student individually with some words around them:

1. using for loop

ANSWER:
let students = ["Matti", "Rami", "Niina", "Mirja"]
  let arrayLength = students.length;
  for (var i = 0; i < arrayLength; i++) {
    console.log('my name is',students[i],',and I am a student at Metropolia');
  }



2. using foreach with callback 

ANSWER:
let students = ["Matti", "Rami", "Niina", "Mirja"]
  function iterate(item) {
  console.log('my name is',item,',and I am a student at Metropolia');
}
students.forEach(iterate);



3. using foreach and arrow function

let students = ["Matti", "Rami", "Niina", "Mirja"]

students.forEach(element => {
    console.log("my name is " + element + ", and I am a student at Metropolia");
});


The output should be `my name is Matti, and I am a student at Metropolia`

## Optional Refresher:  Arrow function

convert the following functions to Arrow function:

```js
function add(a,b) {
  return a+b
}
console.log(add(2,3))
```

ANSWER:
let add = (a,b) => a + b;
console.log(add(2,3)




```js
function square(n) {
  return n * n
}
console.log(square(3)) 
```
ANSWER:
let square = (n) => n * n;
console.log(square(3))



```js
function myFunc(a, b){
  let chuck = 42;
  return a + b + chuck;
}
console.log(myFunc(2,3))
```

ANSWER:
let myFunc = (a,b) => {
  const chuck = 42;
  return a + b + chuck;
};
console.log(myFunc(2,3))


        

```js
function sayHello() {
     return "Hello there";
}
console.log(sayHello());		
```

ANSWER:
let sayHello = () => "Hello there";
console.log(sayHello());




```js
function myObj() {
    return { cost: 500};
}
console.log(myObj());

```

ANSWER:
let myObj = () => ({cost: 500})
console.log(myObj())











# Homework

> Deadline before lecture

Estimated workload is 83min.
- Videos:  43min
- Reflection & Knowledge check: 40 min

## Videos

- [Modern JavaScript Tutorial #4 - Functions](https://youtu.be/xUI5Tsl2JpY)

## Reflection & Knowledge check:  

1. What value is output into the console?

```js
let val = 10;
function tester(val){
    val += 10;
    if(val < 100){
        return tester(val);
    }
    return val;
}
tester(val);
console.log(val);

```
ANSWER: It will output 10


2. What will be output into the console by the below code?

```js
let testFunction = function(){
    console.log("Hello");
}();
```
ANSWER: Output is Hello

3. What will be output to the console?

```js
(function () {
    console.log("Welcome");
})();

(function () {
    let firstName = "Matti";
})();

let result = (function () {
    let firstName = "Matti";
    return firstName;
})();

console.log(result);
(function (firstName) {
    console.log("My Name is " + firstName);
})("Matti");
```
ANSWER:
Welcome 
Matti 
My Name is Matti

4. What will be output to the console?

```js
let test = (num) => num + 5;
console.log(test(14));
What will be output to the console?
var addFive = function addFive(num) {
return num + 2;
};
let addFive = (num) => num + 2;
console.log(addFive(14));
```




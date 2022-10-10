# Group discussion 3

Discuss in Groups:

1.  The difference between the following loops:
- while 
- do..while   
- for (;;)   

ANSWER: The difference between do-while and while is that do-while evaluates its expression at the bottom of the loop instead of the top and FOR is repeated action

2. What is the last value printed by this code? Why?

```js
let i = 3;

while (i) {
  console.log(i--);
}
```
ANSWER: 1


3. What is the output for the following code?

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


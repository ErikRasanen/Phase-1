
# Pair-Programming 2

> Please locate your breakout-room in the Excel sheet: `d-pair-programming.xls`


1. Use the for loop to output even numbers from 2 to 10.

ANSWER:

for (let i = 2; i < 11; i+=2) {
    console.log( `number ${i}!` );
  }



2. Rewrite the code changing the for loop to while without modifying the behavior  i.e the output should stay same.

```js
for (let i = 0; i < 3; i++) {
  console.log( `number ${i}!` );
}
```
ANSWER:
let i = 2;
while (i < 11) {
  console.log( `number ${i}!` );
  i+=2;
}


3. Run this code and explain what is happening

```js
let val = prompt("What number?");
val = Number(val);
let num = 100;
let message = "nothing";
if (val > num) {
    message = val + "  was greater than " + num;
} else if (val === num) {
    message = val + "  was equal to " + num;
} else {
    message = val + " is less than " + num;
}
console.log(message);
console.log(message);
```
ANSWER:
System will ask for number and check if it's smaller/equal/bigger than 100 and display message according to result.

## Reference

- https://javascript.info/


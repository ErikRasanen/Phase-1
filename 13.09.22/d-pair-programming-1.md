
# Pair programming 1

> Please locate your breakout-room in the Excel sheet: `d-pair-programming.xls`

1. Enter the following expressions into your console.

   ```js
   1 + 2
   3 * 5
   5 / 4 - 13
   5000 * 234
   1073 / 57 + 200
   1073 /( 57 + 200)
   ```
ANSWER: 
3 
15 
-11.75 
1170000 
218.82456140350877 
4.175097276264592


2. Why are the values produced by the following two expressions different? What
   are they?

   ```js
   3 + 2 * 4 - 1
   (3 + 2) * (4 - 1)
   ```
   ANSWER: java has inbuild calculation order according to math

   10
   15

3. Calculate 52 years in minutes using the console.

ANSWER:
console.log(52*365*24*60);
27331200

4. What is the percentage of letters in the Finnish alphabet that are vowels? Use the console to find out.

ANSWER:
console.log(8/13*100 + "%");
61.53846153846154%

5. Try the following expressions in the console:

   ```js
   6 % 2
   42 % 10
   5 % 2
   6 % 3
   7 % 4
   100 % 12
   ```
ANSWER:

0 
2 
1 
0 
3 
4


- What is the significance of the result? How does the `%` (modulus) operator
   work?

   ANSWER:
   Modulus is the leftover amount of number when something is divided

6. Try the following:

   ```js
   3 % 2
   4 % 2
   5 % 2
   6 % 2
   ```

- What do the results tell you about the first operand to the modulus operator?

ANSWER:
Parittomat luvut antavat vastaukseksi 1
Parilliset luvut antavat vastaukseksi 0


## Reference
- [Hack Reactor](https://github.com/hackreactor/)
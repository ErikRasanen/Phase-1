# Homework

Estimated workload is  about 2hours 20min: 

- Videos: 1hour 40min 
- Knowledge check: 40 min

THE KNOWLEDGE CHECK QUESTIONS ARE IN THE ATTACHED FILE (Readme.md). You can also find them in Moodle.

## Part A: Video recording
> Please choose one option from the followings:

- The first option is beginner friendly. We continue where we left off last week: From min 1:35 till 3:13 (About 1hour 40min)
https://youtu.be/vLnPwxZdW4Y
 
- The second  option is also beginner friendly, but digs deeper. We continue where we left off last week: (From min 3:17 till 4:45) && (From min 7:04 till 7:14 (About 1hour 40min)

https://youtu.be/_bYFu9mBnr4
 
- The last option is 30 hour long, from Beginner to Advanced. 
We will cover bits and pieces from Chapter 5,6,8 and 9:
- Chapter 5: Flow Control @(7:01:58)
- Chapter 6: Loops @(7:53:49)
- Chapter 8: Pointers @(9:53:23)
- Chapter 9: References @(12:11:04)

https://www.youtube.com/watch?v=8jLOx1hD3_o


## Part B: Reflection & Knowledge check

1. Write a for loop that prints every even number from 0 to 20.

ANSWER:
#include <iostream>

using namespace std;

int main() {
        for (int i = 1; i <= 20; ++i) {
        cout << i << " ";
    }
    return 0;
}

-------------------------------

2. Write a function named sumTo() that takes an integer parameter named value, and returns the sum of all the numbers from 1 to value.

For example, sumTo(5) should return 15, which is `1 + 2 + 3 + 4 + 5`.

> Hint: Use a non-loop variable to accumulate the sum as you iterate from 1 to the input value, much like the pow() example above uses the total variable to accumulate the return value each iteration.

ANSWER:
#include <iostream>
 
int sumOfDigits(int );
 
// Returns sum of all digits in numbers from 1 to n
int sumOfDigitsFrom1ToN(int n)
{
    int result = 0; // initialize result
 
    // One by one compute sum of digits in every number from
    // 1 to n
    for (int x = 1; x <= n; x++)
        result += sumOfDigits(x);
 
    return result;
}
 
// A utility function to compute sum of digits in a
// given number x
int sumOfDigits(int x)
{
    int sum = 0;
    while (x != 0)
    {
        sum += x %10;
        x   = x /10;
    }
    return sum;
}
 
// Driver Program
int main()
{
    int n;
    std::cin >> n;
    std::cout << "Sum of digits in numbers from 1 to " << n << " is "
         << sumOfDigitsFrom1ToN(n);
    return 0;
}

---------------------------

3. Name two reasons why we prefer to pass arguments by const reference instead of by non-const reference whenever possible.

ANSWER:
1. it's cost efective. 
2. Arrays can't be passed by non-const reference.

---------------------------

4. What is the difference between a const pointer and a pointer-to-const?

ANSWER:

-A constant pointer is a pointer that CAN'T CHANGE the ADDRESS its holding.

-A pointer to a constant is a pointer that CAN'T CHANGE the VALUE of the address its holding through the pointer.
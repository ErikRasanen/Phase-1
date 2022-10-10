# Group discussion 1

Discuss in Groups:

1. Why the following code does not compile:

```cpp
#include <iostream>

int main()
{
    if (true)
    {
        int x{ 5 };
    } // x destroyed here
    else
    {
        int x{ 6 };
    } // x destroyed here

    std::cout << x << '\n'; // x isn't in scope here

    return 0;
}
```
ANSWER:
In this one x should be global integer.



2. What's wrong with the following snippet?

```cpp
if (codesActivated());
    doSomething();
```
ANSWER: 
it should be like this ---->

if (codesActivated()){
    doSomething();
}

you can use a function as a condition for if, but that function should return a boolean value"




3.  What's wrong with the following snippet?

```cpp
#include <iostream>

int main()
{
    std::cout << "Enter 0 or 1: ";
    int x{};
    std::cin >> x;
    if (x = 0) 
        std::cout << "You entered 0";
    else
        std::cout << "You entered 1";

    return 0;
}
```
ANSWER: x == 0

#include <iostream>

int main()
{
    std::cout << "Enter 0 or 1: ";
    int x{};
    std::cin >> x;
    if (x == 0) 
        std::cout << "You entered 0";
    else
        std::cout << "You entered 1";

    return 0;
}



4. Why switch statements are preferred over if-else chains (when there is a choice) ?

ANSWER:
switch is simple in this situation

5.  What's wrong with the following snippet?

```cpp
switch (x)
{
    case 54:
    case 54:  // error: already used value 54!
    case '6': // error: '6' converts to integer value 54, which is already used
}
```
ANSWER: There is string inside switch, only integers are accepted.


6. How do you indicate intentional fall-through in switch statements .
ANSWER:
Don't put "break" and use [[fallthrough]]

7. Extra: Why does the switch type only allow for integral (or enumerated) types? 


ANSWER: 

switch requires an integer type (or a type implicitly convertible to an integer) because array-indexing requires an integer type.






# Pair programming 2

> Please locate your breakout-room in the Excel sheet: `1-pair-programming.xls`

1. Explain how this program works

```cpp
#include <iostream>

int main()
{
    int x{ 1 };
    int& ref{ x };

    std::cout << x << ref << '\n';

    int y{ 2 };
    ref = y;
    y = 3;

    std::cout << x << ref << '\n';

    x = 4;

    std::cout << x << ref << '\n';

    return 0;
}
```
ANSWER:
When a variable is declared as a reference, it becomes an alternative name for an existing variable.


2. Why should we set pointers that aren’t pointing to a valid object to ‘nullptr’?
ANSWER:
Program will crash if the pointer does not have value or nullptr



3. Why should you favor references over pointers whenever possible?
ANSWER:
Pointers have the additional abilities of being able to change what they are pointing at, and to be pointed at null. However, these pointer abilities are also inherently dangerous: A null pointer runs the risk of being dereferenced, and the ability to change what a pointer is pointing at can make creating dangling pointers easier

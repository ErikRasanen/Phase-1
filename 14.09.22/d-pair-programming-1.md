
# Pair programming 1

> Please locate your breakout-room in the Excel sheet: `d-pair-programming.xls`

- Questions 1- Question 5
- https://www.learncpp.com/cpp-tutorial/introduction-to-function-parameters-and-arguments/

1.

#include <iostream>

void multiply(int x, int y)
{
    std::cout << x * y << '\n';
}

int main()
{
    multiply(4, 5);
    return 0;
}

2. Toinen arvo puuttuu ja palauttaminen ei onnistu

3.Two functions is being used nested first to sum of 3 numbers 1,2,3 resulting 6 and after that multiply the result 6 with 4 resulting output of number 24.

4.
#include <iostream>

int doubleNumber(int numero)
{
    return numero * 2;
}

int main()
{
    std::cout << doubleNumber(7) << '\n';
    return 0;
}


5.
#include <iostream>


int doubleNumber(int numero)
{
    return numero * 2;
}

int main()
{
    int numero;
    std::cout << "Enter number to double: ";
    std::cin >> numero;
    std::cout << doubleNumber(numero) << '\n';
    return 0;
}



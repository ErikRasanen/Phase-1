
# Pair programming 2

> Please locate your breakout-room in the Excel sheet: `d-pair-programming.xls`

Write a program that performs as a very simple calculator. 
- Your calculator should be able to handle the five basic math operations: add, subtract, multiply, and divide on two input values. 
- Your program should prompt the user to enter three arguments: two integers values and a character to represent an operation. 
  - If the entry arguments are 35, 24, and +; the program output should be "The sum of 35 and 24 is 59"

  # include <iostream>
using namespace std;

int main() {

  char op;
  float num1, num2;

  cout << "Enter operator: +, -, *, /: ";
  cin >> op;

  cout << "Enter two operands: ";
  cin >> num1 >> num2;

  switch(op) {

    case '+':
      cout << num1 << " + " << num2 << " = " << num1 + num2;
      break;

    case '-':
      cout << num1 << " - " << num2 << " = " << num1 - num2;
      break;

    case '*':
      cout << num1 << " * " << num2 << " = " << num1 * num2;
      break;

    case '/':
      cout << num1 << " / " << num2 << " = " << num1 / num2;
      break;

    default:
      // If the operator is other than +, -, * or /, error message is shown
      cout << "Error! operator is not correct";
      break;
  }

  return 0;
}
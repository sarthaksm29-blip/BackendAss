/*
  Assignment 4
  Generate a Multiplication Table (For Loop)
*/

// function to print multiplication table of a number n
function generateMultiplicationTable(n) {
  console.log("Multiplication Table of " + n + ":");

  // using for loop from 1 to 10
  for (let i = 1; i <= 10; i++) {
    let result = n * i;
    console.log(n + " * " + i + " = " + result);
  }
}

// sample testing
generateMultiplicationTable(5);

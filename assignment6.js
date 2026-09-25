/*
  Assignment 6
  Find the First Even Number (Do-While & Continue)
*/

// function to find first even number from an array
function findFirstEven(arr) {
  // check if array is empty
  if (arr.length === 0) {
    console.log("Array is empty");
    return null;
  }

  let i = 0;
  let firstEven = null;

  do {
    // if number is odd, skip using continue
    if (arr[i] % 2 !== 0) {
      i++;
      continue;
    }

    // if even number is found, store it and break
    firstEven = arr[i];
    break;
  } while (i < arr.length);

  // log result
  if (firstEven !== null) {
    console.log("First even number: " + firstEven);
  } else {
    console.log("No even number found in the array");
  }

  return firstEven;
}

// sample testing
let numbers1 = [1, 3, 5, 8, 11, 14];
findFirstEven(numbers1);

let numbers2 = [3, 7, 9, 15];
findFirstEven(numbers2);

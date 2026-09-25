/*
  Assignment 2
  User Profile Management
*/

// 1. Primitive Data Types
let userName = "Rahul";
let userAge = 21;
let isPremiumUser = true;
let userBio = null;
let userId = Symbol("id");

// 2. Non-Primitive Data Types
let userAddress = {
  city: "Mumbai",
  country: "India"
};

let favoriteItems = ["Laptop", "Book", "Headphones", "Watch"];

// 3. Function to return greeting
function getUserGreeting() {
  return "Hello " + userName + ", welcome back!";
}

// 4. Logging output
console.log(userName);
console.log(userAddress.city);
console.log(favoriteItems[2]);
console.log(getUserGreeting());

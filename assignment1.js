/* 
  Assignment 1
  Shopping cart system
*/

// global variable for total cart value
var totalCartValue = 0;

// 10% fixed tax rate
const taxRate = 0.1;

function addToCart(itemPrice, discount) {
  // subtract discount
  let priceAfterDiscount = itemPrice - discount;

  // calculate 10% tax
  let tax = priceAfterDiscount * taxRate;

  // add tax to get final price
  let finalPrice = priceAfterDiscount + tax;

  // add item price to total cart
  totalCartValue += finalPrice;

  console.log("Final Price of Item: ₹" + finalPrice.toFixed(2));
}

// sample items
addToCart(1000, 100);
addToCart(2000, 200);

// print total
console.log("Total Cart Value: ₹" + totalCartValue.toFixed(2));

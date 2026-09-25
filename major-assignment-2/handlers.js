/*
  Major Assignment 2 - E-Commerce Product Card Handlers (Modular)
  Contains all event handler functions
*/

// Helper to log both to browser console and screen UI
function logMessage(msg) {
  console.log(msg);
  const logOutput = document.getElementById("log-output");
  if (logOutput) {
    const entry = document.createElement("div");
    entry.className = "log-entry";
    entry.textContent = "> " + msg;
    logOutput.appendChild(entry);
    logOutput.scrollTop = logOutput.scrollHeight;
  }
}

// 1. Product card single click handler
// Demonstrates difference between event.target and event.currentTarget
function handleCardClick(event) {
  logMessage("Product details opened");
  
  console.log("--- Event Target vs CurrentTarget Demonstration ---");
  console.log("event.target (the actual element that was clicked):", event.target);
  console.log("event.currentTarget (the element listening to this event - the product card):", event.currentTarget);
  
  logMessage("event.target: <" + event.target.tagName.toLowerCase() + "> | event.currentTarget: <" + event.currentTarget.tagName.toLowerCase() + ">");
}

// 2. Product card double-click handler (zooms product image)
function handleCardDoubleClick(event, productImage) {
  logMessage("Product image zoomed");
  productImage.classList.toggle("zoomed");
}

// 3. Mouseover handler (change card border)
function handleCardMouseOver(event, productCard) {
  productCard.classList.add("card-hover");
}

// 4. Mouseout handler (restore original border)
function handleCardMouseOut(event, productCard) {
  productCard.classList.remove("card-hover");
}

// 5. Add to Cart button click handler
// Uses event.stopPropagation() and disables button
function handleAddToCart(event) {
  event.stopPropagation(); // prevent triggering card click
  logMessage("Product added to cart");
  
  event.target.disabled = true;
  event.target.textContent = "Added to Cart";
}

// 6. Wishlist button click handler
// Uses event.stopPropagation() and updates text
function handleWishlist(event) {
  event.stopPropagation(); // prevent triggering card click
  logMessage("Added to wishlist");
  
  event.target.textContent = "❤️ Wishlisted";
}

// 7. Delete button click handler
// Uses event.preventDefault(), event.stopPropagation(), confirmation dialog, and removes from DOM
function handleDelete(event, productCard) {
  event.preventDefault();   // prevent default anchor or button behavior
  event.stopPropagation();  // prevent triggering card click
  
  const userConfirmed = confirm("Are you sure you want to delete this product card?");
  if (userConfirmed) {
    logMessage("Product card removed from the DOM");
    productCard.remove();
  } else {
    logMessage("Deletion cancelled by user");
  }
}

/*
  Major Assignment 2 - E-Commerce Product Card Application Setup
  Attaches event listeners to DOM elements using addEventListener()
*/

document.addEventListener("DOMContentLoaded", () => {
  // DOM element references
  const productCard = document.getElementById("product-card");
  const productImage = document.getElementById("product-image");
  const addToCartBtn = document.getElementById("add-to-cart-btn");
  const wishlistBtn = document.getElementById("wishlist-btn");
  const deleteBtn = document.getElementById("delete-btn");

  if (!productCard) return;

  // 1. Click on product card
  productCard.addEventListener("click", (event) => {
    handleCardClick(event);
  });

  // 2. Double-click on product card (zoom image)
  productCard.addEventListener("dblclick", (event) => {
    handleCardDoubleClick(event, productImage);
  });

  // 3. Mouseover on product card (change border)
  productCard.addEventListener("mouseover", (event) => {
    handleCardMouseOver(event, productCard);
  });

  // 4. Mouseout from product card (restore border)
  productCard.addEventListener("mouseout", (event) => {
    handleCardMouseOut(event, productCard);
  });

  // 5. Click on Add to Cart button
  addToCartBtn.addEventListener("click", (event) => {
    handleAddToCart(event);
  });

  // 6. Click on Wishlist button
  wishlistBtn.addEventListener("click", (event) => {
    handleWishlist(event);
  });

  // 7. Click on Delete button
  deleteBtn.addEventListener("click", (event) => {
    handleDelete(event, productCard);
  });
});

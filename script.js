// LOCAL PRODUCT IMAGES
const products = [
  { name: "White T-Shirt", price: 499, img: "images/tshirt1.jpg" },
  { name: "Denim Jacket", price: 1499, img: "images/jacket1.jpg" },
  { name: "Cargo Pants", price: 899, img: "images/pants1.jpg" },
  { name: "Summer Dress", price: 799, img: "images/dress1.jpg" },
];

// LOAD PRODUCTS
function loadProducts() {
  const productGrid = document.getElementById("products-grid");
  const featuredGrid = document.getElementById("featured-grid");

  if (productGrid) products.forEach(p => createCard(p, productGrid));
  if (featuredGrid) products.slice(0, 3).forEach(p => createCard(p, featuredGrid));
}

function createCard(prod, container) {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${prod.img}" alt="${prod.name}">
    <h3>${prod.name}</h3>
    <p class="price">₱${prod.price}</p>
    <button class="add-cart-btn">Add to Cart</button>
  `;
  container.appendChild(card);

  card.querySelector(".add-cart-btn").addEventListener("click", () => {
    addToCart(prod);
  });
}

// ADD TO CART FUNCTION
function addToCart(product) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  showCartPopup(product.name);
}

// POPUP FUNCTION
function showCartPopup(productName) {
  const popup = document.createElement("div");
  popup.className = "cart-popup";
  popup.innerHTML = `
    <p>✅ "${productName}" Successfully added!</p>
    <div class="popup-buttons">
      <button id="add-more-btn">Add More</button>
      <button id="checkout-btn">Check Out</button>
    </div>
  `;
  document.body.appendChild(popup);

  document.getElementById("add-more-btn").onclick = () => document.body.removeChild(popup);
  document.getElementById("checkout-btn").onclick = () => window.location.href = "cart.html";
}

window.onload = loadProducts;

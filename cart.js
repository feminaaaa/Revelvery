document.addEventListener("DOMContentLoaded", function () {
  const addToCartBtn = document.querySelector(".btn");
  const sizeButtons = document.querySelectorAll(".size-options button");
  const quantityInput = document.getElementById("quantity");
  const popup = document.getElementById("popup");

  let selectedSize = localStorage.getItem("selectedSize") || null;

  // Auto-select stored size
  if (selectedSize) {
    sizeButtons.forEach(btn => {
      if (btn.textContent === selectedSize) {
        btn.classList.add("selected");
      }
    });
  }

  // Select size
  sizeButtons.forEach(button => {
    button.addEventListener("click", () => {
      sizeButtons.forEach(btn => btn.classList.remove("selected"));
      button.classList.add("selected");
      selectedSize = button.textContent;
      localStorage.setItem("selectedSize", selectedSize);
    });
  });

  // Add to cart
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      if (!selectedSize) {
        alert("Please select a size.");
        return;
      }

      const quantity = parseInt(quantityInput.value) || 1;
      const cartItem = {
        name: "Skull Black Tee",
        price: 999,
        size: selectedSize,
        quantity: quantity,
        image: "a.jpg"
      };

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(cartItem);
      localStorage.setItem("cart", JSON.stringify(cart));

      popup.classList.add("show");
      setTimeout(() => popup.classList.remove("show"), 2500);
    });
  }
});

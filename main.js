document.addEventListener('DOMContentLoaded', () => {
  let allProducts = []; // Stores all products from data.json
  let filteredProducts = []; // Stores currently filtered products
  let currentIndex = 0;
  let quantity = 1;
  let cart = []; // Array to hold cart items { id, quantity }
  let categories = []; // Stores categories from data.json

  // Prevent double-tap zoom on mobile
  let lastTouchEnd = 0;
  document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
      event.preventDefault();
    }
    lastTouchEnd = now;
  }, false);

  // DOM elements
  const productImage = document.querySelector('.product-image');
  const productName = document.querySelector('.product-name');
  const productFeatures = document.querySelector('.product-features');
  const productDescription = document.querySelector('.product-description');
  const priceHome = document.querySelector('.price-home');
  const priceStore = document.querySelector('.price-store');
  const deliveryInfo = document.querySelector('.delivery-info');
  const qtyValue = document.querySelector('.qty-value');
  const leftArrow = document.querySelector('.nav-arrow.left');
  const rightArrow = document.querySelector('.nav-arrow.right');
  const qtyMinus = document.querySelector('.qty-minus');
  const qtyPlus = document.querySelector('.qty-plus');
  const addToCartBtn = document.querySelector('.add-to-cart'); // Get add to cart button
  const cartCountSpan = document.querySelector('.cart-count'); // Get cart count span
  const cartIcon = document.querySelector('.cart-icon'); // Get cart icon
  const menuIcon = document.querySelector('.menu-icon'); // Get menu icon

  // Cart Modal elements
  const cartModal = document.getElementById('cart-modal');
  const closeModalBtn = document.querySelector('.close-button');
  const cartItemsList = document.getElementById('cart-items');
  const cartTotalPriceSpan = document.getElementById('cart-total-price');

  // Menu Modal elements
  const menuModal = document.getElementById('menu-modal');
  const menuCloseButton = document.querySelector('.menu-close-button');
  const menuCategoriesContainer = document.querySelector('.menu-categories');
  const menuServiceSection = document.querySelector('.menu-service-section ul'); // Parent for service links

  // Delivery info (static for now)
  const DELIVERY_TEXT = '(Tepoztlán: 30 min, Cuernavaca: 60-120 min)';

  // --- Cart Functions ---
  function loadCart() {
    const localCart = localStorage.getItem('cart');
    if (localCart) {
      cart = JSON.parse(localCart);
    }
    updateCartCount();
  }

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.textContent = totalItems;
    cartCountSpan.style.display = totalItems > 0 ? 'inline-block' : 'none'; // Hide if 0 items
  }

  function renderCartItems() {
    cartItemsList.innerHTML = ''; // Clear current list
    let totalPrice = 0;

    cart.forEach(item => {
      const product = allProducts.find(p => p.id === item.id); // Use allProducts here
      if (product) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
          <div class="cart-item-info">${product.name}</div>
          <div class="cart-item-quantity">${item.quantity} x $${product.price.toFixed(2)}</div>
          <button class="remove-item-btn" data-id="${product.id}">&times;</button>
        `;
        cartItemsList.appendChild(listItem);
        totalPrice += product.price * item.quantity;
      }
    });

    cartTotalPriceSpan.textContent = totalPrice.toFixed(2);
  }

  function addItemToCart(productId, qty) {
    const itemIndex = cart.findIndex(item => item.id === productId);

    if (itemIndex > -1) {
      // Item already in cart, update quantity
      cart[itemIndex].quantity += qty;
    } else {
      // Add new item to cart
      cart.push({ id: productId, quantity: qty });
    }
    saveCart();
    updateCartCount();
    // Only render cart items if the modal is currently open for efficiency
    if (cartModal.style.display === 'block') {
        renderCartItems();
    }
    console.log(`Added ${qty} of product ${productId} to cart.`);
  }

  function removeItemFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartCount();
    renderCartItems(); // Re-render cart after removal
    console.log(`Removed product ${productId} from cart.`);
  }
  // --- End Cart Functions ---

  // --- Menu Functions ---
  function renderMenuCategories() {
    menuCategoriesContainer.innerHTML = ''; // Clear existing categories
    const ul = document.createElement('ul');

    // Add 'TODOS' (All Products) option
    const allLi = document.createElement('li');
    const allA = document.createElement('a');
    allA.href = '#';
    allA.classList.add('menu-link');
    allA.textContent = 'TODOS';
    allA.dataset.categoryId = '0'; // Use '0' or 'all' to signify all products
    allLi.appendChild(allA);
    ul.appendChild(allLi);

    categories.forEach(category => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#';
      a.classList.add('menu-link');
      a.textContent = category.name.toUpperCase();
      a.dataset.categoryId = category.id;
      li.appendChild(a);
      ul.appendChild(li);
    });
    menuCategoriesContainer.appendChild(ul);
  }

  function filterProductsByCategory(categoryId) {
    if (categoryId === 0) { // Check for the 'TODOS' category ID
      filteredProducts = [...allProducts];
    } else {
      filteredProducts = allProducts.filter(p => p.category === categoryId);
    }
    currentIndex = 0; // Reset to first product in filtered list
    renderProduct();
    menuModal.style.display = 'none'; // Close menu after selection
  }
  // --- End Menu Functions ---


  // Fetch products from data.json
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      allProducts = data.data; // Store all products
      categories = data.categories; // Store categories
      filteredProducts = [...allProducts]; // Initially show all products

      loadCart(); // Load cart after products are loaded
      renderProduct();
      renderCartItems(); // Initial render of the cart on load
      renderMenuCategories(); // Render menu categories on load
    })
    .catch(err => {
      productName.textContent = 'Error cargando productos';
      console.error('Error loading data.json:', err);
    });

  function renderProduct() {
    const p = filteredProducts[currentIndex]; // Use filteredProducts here
    const productControls = document.querySelector('.product-controls'); // Get this element

    if (!p) {
      productImage.src = '';
      productImage.style.display = 'none'; // Hide the image
      productImage.parentElement.style.display = 'none'; // Hide the image nav container

      productName.textContent = 'No products available';
      productFeatures.textContent = '';
      productDescription.textContent = '';
      priceHome.innerHTML = '';
      priceStore.innerHTML = '';
      deliveryInfo.textContent = '';
      qtyValue.textContent = 0;

      leftArrow.disabled = true;
      rightArrow.disabled = true;
      addToCartBtn.disabled = true; // Disable add to cart if no products

      // Hide quantity selector and add to cart button
      productControls.style.display = 'none'; // Hide the entire controls section

      return;
    }

    // Ensure image, controls, and buttons are visible if a product is found
    productImage.style.display = 'block';
    productImage.parentElement.style.display = 'flex'; // Assuming .product-image-nav is flex
    productControls.style.display = 'flex'; // Show the entire controls section

    addToCartBtn.disabled = false;
    productImage.src = p.img;
    productImage.alt = p.name;
    productName.textContent = p.name.toUpperCase();
    productFeatures.textContent = p.features;
    productDescription.textContent = p.description;
    priceHome.innerHTML = `<span style="color:#d32f2f;font-weight:700">A DOMICILIO $${Math.round(p.price * 1.08)}</span>`;
    priceStore.innerHTML = `<span style="color:#111;font-weight:700">*EN TIENDA $${p.price}</span>`;
    deliveryInfo.textContent = DELIVERY_TEXT;
    qtyValue.textContent = quantity;
    // Disable arrows at ends based on filteredProducts
    leftArrow.disabled = currentIndex === 0;
    rightArrow.disabled = currentIndex === filteredProducts.length - 1; // Use filteredProducts length
  }

  leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      quantity = 1; // Reset quantity on product change
      renderProduct();
    }
  });
  rightArrow.addEventListener('click', () => {
    if (currentIndex < filteredProducts.length - 1) { // Use filteredProducts length
      currentIndex++;
      quantity = 1; // Reset quantity on product change
      renderProduct();
    }
  });

  qtyMinus.addEventListener('click', () => {
    if (quantity > 1) {
      quantity--;
      qtyValue.textContent = quantity;
    }
  });
  qtyPlus.addEventListener('click', () => {
    quantity++;
    qtyValue.textContent = quantity;
  });

  // Add to Cart Button Listener
  addToCartBtn.addEventListener('click', () => {
      const currentProduct = filteredProducts[currentIndex]; // Use filteredProducts
      if (currentProduct) {
          addItemToCart(currentProduct.id, quantity);
      }
  });

  // --- Modal Event Listeners ---
  cartIcon.addEventListener('click', () => {
    console.log('Cart icon clicked directly!'); // Log to confirm listener is triggered
    renderCartItems(); // Make sure cart display is up to date before showing
    cartModal.style.display = 'block';
  });

  closeModalBtn.addEventListener('click', () => {
    cartModal.style.display = 'none';
  });

  // Open menu modal
  menuIcon.addEventListener('click', () => {
    menuModal.style.display = 'block';
  });

  // Close menu modal
  menuCloseButton.addEventListener('click', () => {
    menuModal.style.display = 'none';
  });

  // Event delegation for category links in the menu
  menuCategoriesContainer.addEventListener('click', (event) => {
    const categoryLink = event.target.closest('.menu-link');
    if (categoryLink && categoryLink.dataset.categoryId) {
      event.preventDefault(); // Prevent default link behavior
      filterProductsByCategory(parseInt(categoryLink.dataset.categoryId, 10));
    }
  });

  // Event delegation for service links in the menu
  menuServiceSection.addEventListener('click', (event) => {
    const serviceLink = event.target.closest('.menu-link');
    if (serviceLink && serviceLink.dataset.categoryId) {
      event.preventDefault(); // Prevent default link behavior
      console.log(`Service link clicked: ${serviceLink.dataset.categoryId}`);
      // Add logic here for specific service pages/modals later if needed
      menuModal.style.display = 'none'; // Close menu
    }
  });

  // Close modals when clicking outside of their content
  window.addEventListener('click', (event) => {
    if (event.target === cartModal) {
      cartModal.style.display = 'none';
    }
    if (event.target === menuModal) {
      menuModal.style.display = 'none';
    }
  });

  // Event delegation for removing items from the cart list
  cartItemsList.addEventListener('click', (event) => {
      const removeBtn = event.target.closest('.remove-item-btn');
      if (removeBtn) {
          const productId = parseInt(removeBtn.dataset.id, 10);
          removeItemFromCart(productId);
      }
  });

  // Initial load handled by fetch success

}); 
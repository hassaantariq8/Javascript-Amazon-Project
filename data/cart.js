export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }];
}
cleanUpCart();

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(productId) {
  if (!productId) {
    console.error('Cannot add to cart: productId is undefined or null');
    return;
  }

  let matchingItem = cart.find(cartItem => cartItem.productId === productId);

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });
  }
  cleanUpCart();
  saveToStorage();
}


export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;

  saveToStorage();
}

function cleanUpCart() {
  cart = cart.filter(cartItem => cartItem.productId);

  // Save the cleaned-up cart back to localStorage
  saveToStorage();
}

// Call this function to clean the cart
cleanUpCart();
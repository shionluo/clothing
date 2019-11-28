export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCardItem = cartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCardItem) {
    return cartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const subtractItemFromCart = (cartItems, cartItemToSubtract) => {
  const existingCardItem = cartItems.find(
    cartItem => cartItem.id === cartItemToSubtract.id
  );

  if (existingCardItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToSubtract.id);
  }

  return cartItems.map(cartItem =>
    cartItem.id === cartItemToSubtract.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

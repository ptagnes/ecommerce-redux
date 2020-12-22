export const addItemToCart = (cartItems: any, cartItemToAdd: any) => {
  const existingCartItem = cartItems.find((cartItem: any) => {
    const item1 = cartItem.cartOptions;
    const item2 = cartItemToAdd.cartOptions;
    const condition1 = cartItem.id === cartItemToAdd.id;
    const condition2 = JSON.stringify(item1) === JSON.stringify(item2);
    return condition1 && condition2;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem: any) =>
      cartItem.id === cartItemToAdd.id &&
      JSON.stringify(cartItem.cartOptions) ===
        JSON.stringify(cartItemToAdd.cartOptions)
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems: any, cartItemToRemove: any) => {
  const existingCartItem = cartItems.find((cartItem: any) => {
    const item1 = cartItem.cartOptions;
    const item2 = cartItemToRemove.cartOptions;
    const condition1 = cartItem.id === cartItemToRemove.id;
    const condition2 = JSON.stringify(item1) === JSON.stringify(item2);
    return condition1 && condition2;
  });
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(
      (cartItem: any) =>
        cartItem.id !== cartItemToRemove.id ||
        (cartItem.id === cartItemToRemove.id &&
          JSON.stringify(cartItem.cartOptions) !==
            JSON.stringify(cartItemToRemove.cartOptions))
    );
  }
  return cartItems.map((cartItem: any) =>
    cartItem.id === cartItemToRemove.id &&
    JSON.stringify(cartItem.cartOptions) ===
      JSON.stringify(cartItemToRemove.cartOptions)
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

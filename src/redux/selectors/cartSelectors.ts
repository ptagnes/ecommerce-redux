import { createSelector } from "reselect";

const selectCart = (state: any) => state.cartState;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalatedQuantity: any, cartItem: any) =>
        accumalatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (accumalatedQuantity: any, cartItem: any) =>
        accumalatedQuantity + cartItem.quantity * cartItem.price,
      0
    );
  }
);

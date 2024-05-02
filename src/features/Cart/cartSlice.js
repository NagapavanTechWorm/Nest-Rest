import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : defaultState;
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: getCartFromLocalStorage(),
  reducers: {
    addItem: (state, action) => {
        const { product } = action.payload;
        const existingItem = state.cartItems.find((item) => item.cartId === product.cartId);
        if (existingItem) {
            existingItem.amount += product.amount;
        } else {
            state.cartItems.push(product);
        }
        state.numItemsInCart += product.amount;
        state.cartTotal += product.price * product.amount;
        cartSlice.caseReducers.calculateTotals(state);
        toast.success('Item added to cart');
    },

    clearCart: () => {
      localStorage.setItem('cart', JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartId } = action.payload;
      console.log("pay",action.payload)
      const product = state.cartItems.find((item) => item.cartId === cartId);
      if (product) {
        state.cartItems = state.cartItems.filter((item) => item.cartId !== cartId);
        state.numItemsInCart -= product.amount;
        state.cartTotal -= product.price * product.amount;
        cartSlice.caseReducers.calculateTotals(state);
        toast.error('Item removed from cart');
      } else {
        console.warn(`Item with cartID ${cartId} not found in cart.`);
      }
    },
    editItem: (state, action) => {
      const { cartId, amount } = action.payload;
      const existingItem = state.cartItems.find((item) => item.cartId === cartId);
      if (existingItem) {
        state.numItemsInCart += amount - existingItem.amount;
        state.cartTotal += existingItem.price * (amount - existingItem.amount);
        existingItem.amount = amount;
        cartSlice.caseReducers.calculateTotals(state);
        toast.success('Cart updated');
      }
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + state.shipping + state.tax;
      localStorage.setItem('cart', JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;

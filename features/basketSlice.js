import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromBasket: (state, action) => {
      const itemId = action.payload.id;
      const existingItem = state.items.find((item) => item.id === itemId);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => item.id !== itemId);
        }
      }
    },
  },
});

export const selectedBasketItemsQuantity = (state, id) => {
  const clickItem = state.basket.items.find((item) => item.id === id);
  return clickItem ? clickItem.quantity : 0;
};

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export default basketSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeFromCart: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.pre_id === action.payload.pre_id
      );

      let newCart = [...state.items];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `No se pudo remover el producto (pre_id: ${action.payload.pre_id}), no está en el carrito!`
        );
      }

      state.items = newCart;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, deleteItemFromCart } =
  cartSlice.actions;

export const selectCartItems = (state) => state.cart.items;

export const selectCartItemsWithId = (state, pre_id) =>
  state.cart.items.filter((item) => item.pre_id === pre_id);

export const selectCartTotal = (state) =>
  state.cart.items.reduce(
    (total, item) => (total += item.ppa_precio * item.quantity),
    0
  );
export default cartSlice.reducer;

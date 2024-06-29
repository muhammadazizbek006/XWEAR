import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  data: [],
};

export const productsWishlistDataSlice = createSlice({
  name: "wishlist",
  initialState: initialStateValues,
  reducers: {
    addProductToWishlist: (state, action) => {
      state.data.push(action.payload);
      
    },
  },
});

export const { addProductToWishlist } = productsWishlistDataSlice.actions;

export default productsWishlistDataSlice.reducer;

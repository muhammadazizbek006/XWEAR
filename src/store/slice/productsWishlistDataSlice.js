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
    deleteUserOfferLinkData: (state, actions) => {
      state.data = state.data.filter(
        (pradakt) => pradakt.id !== actions.payload
      );
    },
  },
});

export const { addProductToWishlist, deleteUserOfferLinkData } =
  productsWishlistDataSlice.actions;

export default productsWishlistDataSlice.reducer;

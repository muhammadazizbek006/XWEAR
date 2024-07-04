import { configureStore } from "@reduxjs/toolkit";
import productsWishlistDataSlice from "./slice/productsWishlistDataSlice";

export const store = configureStore({
  reducer: {
    tanlanganMahsulotlar: productsWishlistDataSlice,
  },
});



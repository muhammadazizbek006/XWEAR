import { configureStore } from "@reduxjs/toolkit";
import productsWishlistDataSlice from "./slice/productsWishlistDataSlice";
import laykSlice from "./slice/laykSlice";

export const store = configureStore({
  reducer: {
    tanlanganMahsulotlar: productsWishlistDataSlice,
    likemaxsulotlar: laykSlice,

  },
});



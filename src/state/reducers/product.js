import { createSlice } from '@reduxjs/toolkit';

import {
  fetchProductList,
  fetchProductDetails,
  addProductToCart,
} from '../actions/product';

const initialState = {
  loading: false,
  productList: [],
  productDetails: null,
  shoppingCartItemCount: 0,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.productList = action.payload;
      })
      .addCase(fetchProductList.rejected, (state) => {
        state.loading = false;
        state.productList = [];
      })
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
      })
      .addCase(fetchProductDetails.rejected, (state) => {
        state.loading = false;
        state.productDetails = null;
      })
      .addCase(addProductToCart.pending, (state) => {
        state.loading = true;
      })
      .addCase(addProductToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.shoppingCartItemCount = action.payload.count;
      })
      .addCase(addProductToCart.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default productSlice.reducer;

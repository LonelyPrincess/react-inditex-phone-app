import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestJson } from '../utils/AjaxHelper';

const apiBaseUrl = 'https://front-test-api.herokuapp.com/api';

const initialState = {
  loading: false,
  productList: [],
  productDetails: null,
};

/**
 * Async action to obtain list of available products.
 * @returns {Promise} Promise object with list of products.
 */
export const fetchProductList = createAsyncThunk(
  'product/fetchProductList',
  () => requestJson(`${apiBaseUrl}/products`),
);

/**
 * Async action to obtain detailed information on the selected product.
 * @returns {Promise} Promise object with information on a product.
 */
export const fetchProductDetails = createAsyncThunk(
  'product/fetchProductDetails',
  (productId) => requestJson(`${apiBaseUrl}/products/${productId}`),
);

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
      .addCase(fetchProductDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.productDetails = action.payload;
      });
  },
});

// Selector functions to read state contents
export const selectLoading = (state) => state.product.loading;
export const selectProductList = (state) => state.product.productList;
export const selectProductDetails = (state) => state.product.productDetails;

export default productSlice.reducer;

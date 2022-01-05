import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { requestJson } from '../utils/AjaxHelper';

const apiBaseUrl = 'https://front-test-api.herokuapp.com/api';

const initialState = {
  loading: false,
  productList: [],
  productDetails: null,
  shoppingCartItemCount: 0,
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

/**
 * Async action to add an item to the shopping cart.
 * @returns {Promise} Promise object with number of items in cart.
 */
export const addProductToCart = createAsyncThunk(
  'product/addProductToCart',
  ({ productId, colorCode, storageCode }) => requestJson(`${apiBaseUrl}/cart`, {
    method: 'post',
    body: JSON.stringify({
      id: productId,
      colorCode,
      storageCode,
    }),
  }),
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

// Selector functions to read state contents
export const selectLoading = (state) => state.product.loading;
export const selectProductList = (state) => state.product.productList;
export const selectProductDetails = (state) => state.product.productDetails;
export const selectShoppingCartItemCount = (state) => state.product.shoppingCartItemCount;

export default productSlice.reducer;

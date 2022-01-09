import { createAsyncThunk } from '@reduxjs/toolkit';

import * as ProductAPI from '../../utils/ProductAPI';

/**
 * Async action to obtain list of available products.
 * @returns {Promise} Promise object with list of products.
 */
export const fetchProductList = createAsyncThunk(
  'product/fetchProductList',
  () => ProductAPI.fetchProductList(),
);

/**
 * Async action to obtain detailed information on the selected product.
 * @returns {Promise} Promise object with information on a product.
 */
export const fetchProductDetails = createAsyncThunk(
  'product/fetchProductDetails',
  (productId) => ProductAPI.fetchProductDetails(productId),
);

/**
 * Async action to add an item to the shopping cart.
 * @returns {Promise} Promise object with number of items in cart.
 */
export const addProductToCart = createAsyncThunk(
  'product/addProductToCart',
  ({ productId, colorCode, storageCode }) => (
    ProductAPI.addProductToCart({ productId, colorCode, storageCode })
  ),
);

import { configureStore } from '@reduxjs/toolkit';

import productReducer from '../state/productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

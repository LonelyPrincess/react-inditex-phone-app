import { configureStore } from '@reduxjs/toolkit';

import productReducer from './reducers/product';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

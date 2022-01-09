// Selector functions to read state contents
export const selectLoading = (state) => state.product.loading;
export const selectProductList = (state) => state.product.productList;
export const selectProductDetails = (state) => state.product.productDetails;
export const selectShoppingCartItemCount = (state) => state.product.shoppingCartItemCount;

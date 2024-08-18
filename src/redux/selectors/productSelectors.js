import { createSelector } from 'reselect';

// Base selector for products state
const selectProductsState = (state) => state.products;

export const selectPagination = createSelector(
  [selectProductsState],
  (productsState) => productsState.pagination,
);

export const selectProducts = createSelector(
  [selectProductsState],
  (productsState) => productsState.products,
);

export const selectProduct = createSelector(
  [selectProductsState],
  (productsState) => productsState.product,
);

export const selectLoading = createSelector(
  [selectProductsState],
  (productsState) => productsState.loading,
);

export const selectError = createSelector(
  [selectProductsState],
  (productsState) => productsState.error,
);

export const selectCreatedProducts = createSelector(
  [selectProductsState],
  (productsState) => productsState.formProducts,
);

export const selectCustomProductById = createSelector(
  [selectCreatedProducts, (state, productId) => productId],
  (formProducts, productId) =>
    formProducts.find((product) => product.id === productId),
);

export const selectProductById = createSelector(
  [selectCreatedProducts, selectProductsState, (state, productId) => productId],
  (formProducts, apiProducts, productId) => {
    const foundInForm = formProducts.find(
      (product) => product.id === productId,
    );

    if (foundInForm) {
      return foundInForm;
    }

    return apiProducts.products.find(
      (product) => String(product.id) === String(productId),
    );
  },
);

import {
  fetchProductsAPI,
  fetchProductDetailsAPI,
  createProductAPI,
  updateProductAPI,
  deleteProductAPI,
} from '../../api/apiProducts';

// Action Types
export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const FETCH_PRODUCT_DETAILS_REQUEST = 'FETCH_PRODUCT_DETAILS_REQUEST';
export const FETCH_PRODUCT_DETAILS_SUCCESS = 'FETCH_PRODUCT_DETAILS_SUCCESS';
export const FETCH_PRODUCT_DETAILS_FAILURE = 'FETCH_PRODUCT_DETAILS_FAILURE';

export const CREATE_PRODUCT_REQUEST = 'CREATE_PRODUCT_REQUEST';
export const CREATE_PRODUCT_SUCCESS = 'CREATE_PRODUCT_SUCCESS';
export const CREATE_PRODUCT_FAILURE = 'CREATE_PRODUCT_FAILURE';

export const UPDATE_PRODUCT_REQUEST = 'UPDATE_PRODUCT_REQUEST';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAILURE = 'UPDATE_PRODUCT_FAILURE';

export const DELETE_PRODUCT_REQUEST = 'DELETE_PRODUCT_REQUEST';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAILURE = 'DELETE_PRODUCT_FAILURE';

export const SET_PRODUCTS_FILTER = 'SET_PRODUCTS_FILTER';

export const SET_PRODUCTS_PAGINATION = 'SET_PRODUCTS_PAGINATION';

export const RESET_PRODUCT_FORM = 'RESET_PRODUCT_FORM';

// Action Creators
export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const fetchProductDetailsRequest = (id) => ({
  type: FETCH_PRODUCT_DETAILS_REQUEST,
  payload: id,
});

export const fetchProductDetailsSuccess = (product) => ({
  type: FETCH_PRODUCT_DETAILS_SUCCESS,
  payload: product,
});

export const fetchProductDetailsFailure = (error) => ({
  type: FETCH_PRODUCT_DETAILS_FAILURE,
  payload: error,
});

export const createProductRequest = (product) => ({
  type: CREATE_PRODUCT_REQUEST,
  payload: product,
});

export const createProductSuccess = (product) => ({
  type: CREATE_PRODUCT_SUCCESS,
  payload: product,
});

export const createProductFailure = (error) => ({
  type: CREATE_PRODUCT_FAILURE,
  payload: error,
});

export const updateProductRequest = (product) => ({
  type: UPDATE_PRODUCT_REQUEST,
  payload: product,
});

export const updateProductSuccess = (product) => ({
  type: UPDATE_PRODUCT_SUCCESS,
  payload: product,
});

export const updateProductFailure = (error) => ({
  type: UPDATE_PRODUCT_FAILURE,
  payload: error,
});

export const deleteProductRequest = (id) => ({
  type: DELETE_PRODUCT_REQUEST,
  payload: id,
});

export const deleteProductSuccess = (id) => ({
  type: DELETE_PRODUCT_SUCCESS,
  payload: id,
});

export const deleteProductFailure = (error) => ({
  type: DELETE_PRODUCT_FAILURE,
  payload: error,
});

export const setProductsFilter = (filter) => ({
  type: SET_PRODUCTS_FILTER,
  payload: filter,
});

export const setProductsPagination = (pagination) => ({
  type: SET_PRODUCTS_PAGINATION,
  payload: pagination,
});

export const resetProductForm = () => ({
  type: RESET_PRODUCT_FORM,
});

export const fetchProductsRequest = (limit = 20) => ({
  type: FETCH_PRODUCTS_REQUEST,
  payload: { limit },
});

// Fetch products
export const fetchProducts = (limit) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCTS_REQUEST });
    try {
      const products = await fetchProductsAPI(limit);
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      dispatch(fetchProductsFailure(error.message));
    }
  };
};

// Fetch product details
export const fetchProductDetails = (id) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_PRODUCT_DETAILS_REQUEST, payload: id });
    try {
      const product = await fetchProductDetailsAPI(id);
      dispatch(fetchProductDetailsSuccess(product));
    } catch (error) {
      dispatch(fetchProductDetailsFailure(error.message));
    }
  };
};

// Create product
export const createProduct = (product) => {
  return async (dispatch) => {
    dispatch({ type: CREATE_PRODUCT_REQUEST, payload: product });
    try {
      const createdProduct = await createProductAPI(product);
      dispatch(createProductSuccess(createdProduct));
    } catch (error) {
      dispatch(createProductFailure(error.message));
    }
  };
};

// Update product
export const updateProduct = (id, product) => {
  return async (dispatch) => {
    dispatch({ type: UPDATE_PRODUCT_REQUEST, payload: product });
    try {
      const updatedProduct = await updateProductAPI(id, product);
      dispatch(updateProductSuccess(updatedProduct));
    } catch (error) {
      dispatch(updateProductFailure(error.message));
    }
  };
};

// Delete product
export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_PRODUCT_REQUEST, payload: id });
    try {
      await deleteProductAPI(id);
      dispatch(deleteProductSuccess(id));
    } catch (error) {
      dispatch(deleteProductFailure(error.message));
    }
  };
};

import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  FETCH_PRODUCT_DETAILS_REQUEST,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  FETCH_PRODUCT_DETAILS_FAILURE,
  CREATE_PRODUCT_REQUEST,
  UPDATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  UPDATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_SUCCESS,
  RESET_PRODUCT_FORM,
  SET_PRODUCTS_PAGINATION,
} from '../actions/productsActions';

const initialState = {
  products: [],
  product: null,
  form: {
    name: '',
    price: '',
    description: '',
    published: false,
  },
  loading: false,
  error: null,
  pagination: {
    limit: 20,
    total: 0,
    currentPage: 1,
  },
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch Products
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, loading: true };

    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload.products,
        pagination: {
          ...state.pagination,
          total: action.payload.total,
        },
      };

    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Fetch Product Details
    case FETCH_PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true };

    case FETCH_PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };

    case FETCH_PRODUCT_DETAILS_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Create Product
    case CREATE_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case CREATE_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload };

    case CREATE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Update Product
    case UPDATE_PRODUCT_REQUEST:
      return { ...state, loading: true };

    case UPDATE_PRODUCT_SUCCESS:
      return { ...state, loading: false, product: action.payload };

    case UPDATE_PRODUCT_FAILURE:
      return { ...state, loading: false, error: action.payload };

    // Delete Product
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload,
        ),
      };

    // Reset Product Form
    case RESET_PRODUCT_FORM:
      return { ...state, form: initialState.form };

    // Set Products Pagination
    case SET_PRODUCTS_PAGINATION:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default productReducer;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productsActions';
import {
  selectPagination,
  selectLoading,
  selectError
} from '../../redux/selectors/productSelectors';
import ProductTabs from 'components/product/ProductTabs/ProductTabs';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const pagination = useSelector(selectPagination);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProducts(pagination.limit, pagination.currentPage));
  }, [dispatch, pagination.limit, pagination.currentPage]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ProductTabs />
    </div>
  );
};

export default ProductListPage;

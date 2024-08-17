import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productsActions';
import {
  selectProducts,
  selectPagination,
  selectLoading,
  selectError,
} from '../../redux/selectors/productSelectors';
import ProductList from 'components/product/ProductList/ProductList';
import PaginationButtons from 'components/product/PaginationButtons/PaginationButtons';
import ProductTable from 'components/product/ProductTable/ProductTable';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
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
      <PaginationButtons />
      <ProductList products={products} />
      <ProductTable products={products} />
      <PaginationButtons />
    </div>
  );
};

export default ProductListPage;

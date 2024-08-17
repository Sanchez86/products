import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productsActions';
import ProductCard from 'components/product/ProductCard/ProductCard';
import PaginationButtons from 'components/product/PaginationButtons/PaginationButtons';
import ProductTable from 'components/product/ProductTable/ProductTable';
import {
  selectProducts,
  selectPagination,
  selectLoading,
  selectError,
} from '../../redux/selectors/productSelectors';

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
      <div className="product-list">
        {products?.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      <ProductTable products={products} />
      <PaginationButtons />
    </div>
  );
};

export default ProductListPage;

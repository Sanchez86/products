import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../redux/actions/productsActions';
import {
  selectProducts,
  selectLoading,
  selectError
} from '../../redux/selectors/productSelectors';
import ProductTabs from '../../components/product/ProductTabs/ProductTabs';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [offset, setStart] = useState(0);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    dispatch(fetchProducts(offset, limit));
  }, [dispatch, offset, limit]);

  const handleLoadMore = (increment) => {
    setStart(prevStart => prevStart + increment);
    setLimit(prevLimit => prevLimit + increment);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Products</h1>
      <ProductTabs 
        products={products} 
        handleLoadMore={handleLoadMore}
      />
    </div>
  );
};

export default ProductListPage;

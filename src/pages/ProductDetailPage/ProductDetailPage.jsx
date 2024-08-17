import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../redux/actions/productsActions';
import ProductDetails from '../../components/product/ProductDetails/ProductDetails';
import { selectProduct, selectLoading, selectError } from '../../redux/selectors/productSelectors';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector(selectProduct);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, [dispatch, id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailPage;

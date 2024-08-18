import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../redux/actions/productsActions';
import ProductDetails from '../../components/product/ProductDetails/ProductDetails';
import {
  selectProduct,
  selectLoading,
  selectError,
  selectCustomProductById,
} from '../../redux/selectors/productSelectors';
import Loader from 'components/common/Loader/Loader';

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const customProduct = useSelector((state) =>
    selectCustomProductById(state, id)
  );
  const productFromAPI = useSelector(selectProduct);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (!customProduct) {
      dispatch(fetchProductDetails(id));
    }
  }, [dispatch, id, customProduct]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  const product = customProduct || productFromAPI;

  if (!product) return <div>Product not found.</div>;

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetailPage;

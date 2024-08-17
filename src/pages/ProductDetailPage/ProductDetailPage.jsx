import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../redux/actions/productsActions';


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
    <div className="product-detail">
      {product ? (
        <>
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <p>Rating: {product.rating.rate} (based on {product.rating.count} reviews)</p>
        </>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetailPage;

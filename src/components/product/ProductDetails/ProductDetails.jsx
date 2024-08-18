import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar, FaEdit } from 'react-icons/fa';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import styles from './ProductDetails.module.css';

const ProductDetails = ({ product }) => {
  if (!product) return <p>Product not found.</p>;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className={styles['star']} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className={styles['star']} />);
    }

    while (stars.length < 5) {
      stars.push(<FaRegStar key={stars.length} className={styles['star']} />);
    }

    return stars;
  };

  return (
    <div className={styles['product-details']}>
      <Link to={`/products/edit-product/${product.id}`} className={styles.link}>
        <FaEdit className={styles.editIcon} /> Edit Product
      </Link>
      <br />

      <img
        src={product.image || 'https://via.placeholder.com/150'}
        alt={product.title}
        className={styles['product-image']}
      />
      <div className={styles['product-info']}>
        <h1 className={styles['product-title']}>{product.title}</h1>
        <p className={styles['product-price']}>Price: ${product.price}</p>
        <p className={styles['product-category']}>
          Category: {product.category}
        </p>
        <p className={styles['product-description']}>
          Description: {product.description}
        </p>
        {product.rating && (
          <div className={styles['product-rating']}>
            <div className={styles['stars']}>
              {renderStars(product.rating.rate)}
            </div>
            <p className={styles['reviews']}>
              <AiOutlineEye className={styles['reviews-icon']} />{' '}
              {product.rating.count} reviews
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

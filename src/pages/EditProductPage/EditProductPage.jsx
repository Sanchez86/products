import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import {
  deleteProduct,
  fetchProductDetails,
  updateProduct,
} from '../../redux/actions/productsActions';
import { selectProductById } from '../../redux/selectors/productSelectors';
import Loader from 'components/common/Loader/Loader';
import styles from './EditProductPage.module.css';

const EditProductPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const product = useSelector((state) => selectProductById(state, id));
  const [formData, setFormData] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    } else {
      dispatch(fetchProductDetails(id));
    }
  }, [product, id, dispatch]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(id, formData));
    navigate('/products');
  };

  const handleRemove = () => {
    dispatch(deleteProduct(id));
    navigate('/products');
  };

  if (!product) {
    return <Loader />;
  }

  return (
    <div className={styles.editProductPage}>
      <h1 className={styles.title}>Edit Product</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="price">Price</label>
          <input
            id="price"
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>
        <div className={styles.formGroup}>
          <img src={formData.image} alt="" className={styles.image} />
          <label htmlFor="image">Image URL</label>
          <input
            id="image"
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="category">Category</label>
          <input
            id="category"
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={styles.formControl}
          />
        </div>
        <div className={styles.buttons}>
          <button type="submit" className={styles.submitButton}>
            Update Product
          </button>
          <button onClick={handleRemove} className={styles.removeButton}>
            Rmove Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProductPage;

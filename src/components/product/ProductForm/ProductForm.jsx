import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../redux/actions/productsActions';
import styles from './ProductForm.module.css';

const ProductForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: '',
    price: '',
    description: '',
    image: '',
    category: '',
    published: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProduct(form));
    setForm({
      title: '',
      price: '',
      description: '',
      image: '',
      category: '',
      published: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Title:
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={form.price}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={form.image}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={form.category}
          onChange={handleChange}
          required
        />
      </label>
      <label className={styles.check}>
        Published:
        <input
          type="checkbox"
          name="published"
          checked={form.published}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create Product</button>
    </form>
  );
};

export default ProductForm;

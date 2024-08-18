import React, { useState } from 'react';
import ProductList from '../ProductList/ProductList';
import { useSelector } from 'react-redux';
import { selectCreatedProducts, selectProducts } from '../../../redux/selectors/productSelectors';
import styles from './ProductTabs.module.css';

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState('apiProducts');
  const apiProducts = useSelector(selectProducts);
  const createdProducts = useSelector(selectCreatedProducts);

  return (
    <div>
      <div className={styles.tabs}>
        <button 
          className={`${styles.tab} ${activeTab === 'apiProducts' ? styles.active : ''}`} 
          onClick={() => setActiveTab('apiProducts')}
          title="API products">
          API Products
        </button>
        <button 
          className={`${styles.tab} ${activeTab === 'createdProducts' ? styles.active : ''}`} 
          onClick={() => setActiveTab('createdProducts')}
          disabled={!createdProducts.length > 0}
          title={!createdProducts.length > 0 ? 'No products' : 'Created products'}>
          Created Products
        </button>
      </div>
      {activeTab === 'apiProducts' && <ProductList products={apiProducts} />}
      {activeTab === 'createdProducts' && <ProductList products={createdProducts} />}
    </div>
  );
};

export default ProductTabs;

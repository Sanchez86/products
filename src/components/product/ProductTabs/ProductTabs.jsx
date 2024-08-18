import React, { useState } from 'react';
import ProductList from '../ProductList/ProductList';
import { useSelector } from 'react-redux';
import { selectCreatedProducts } from '../../../redux/selectors/productSelectors';
import styles from './ProductTabs.module.css';
import PaginationButtons from '../PaginationButtons/PaginationButtons';

const ProductTabs = ({ products, handleLoadMore }) => {
  const [activeTab, setActiveTab] = useState('apiProducts');
  const createdProducts = useSelector(selectCreatedProducts);

  // Состояние текущей страницы для каждого типа продуктов
  const [apiCurrentPage, setApiCurrentPage] = useState(1);
  const [createdCurrentPage, setCreatedCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Индексы для отображения товаров на текущей странице
  const apiStartIndex = (apiCurrentPage - 1) * itemsPerPage;
  const apiEndIndex = apiStartIndex + itemsPerPage;
  const createdStartIndex = (createdCurrentPage - 1) * itemsPerPage;
  const createdEndIndex = createdStartIndex + itemsPerPage;

  // Товары для текущей страницы
  const apiCurrentProducts = products.slice(apiStartIndex, apiEndIndex);
  const createdCurrentProducts = createdProducts.slice(createdStartIndex, createdEndIndex);

  // Количество страниц
  const apiTotalPages = Math.ceil(products.length / itemsPerPage);
  const createdTotalPages = Math.ceil(createdProducts.length / itemsPerPage);

  // Обработчик изменения страницы
  const handleApiPageChange = (page) => {
    if (page >= 1 && page <= apiTotalPages) {
      setApiCurrentPage(page);
    }
  };

  const handleCreatedPageChange = (page) => {
    if (page >= 1 && page <= createdTotalPages) {
      setCreatedCurrentPage(page);
    }
  };

  return (
    <div>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'apiProducts' ? styles.active : ''}`}
          onClick={() => {
            setActiveTab('apiProducts');
            setApiCurrentPage(1); // Сброс текущей страницы при смене таба
          }}
          title="API products"
        >
          API Products
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'createdProducts' ? styles.active : ''}`}
          onClick={() => {
            setActiveTab('createdProducts');
            setCreatedCurrentPage(1); // Сброс текущей страницы при смене таба
          }}
          disabled={!createdProducts.length}
          title={
            !createdProducts.length ? 'No products' : 'Created products'
          }
        >
          Created Products
        </button>
      </div>
      {activeTab === 'apiProducts' && (
        <div>
          <ProductList products={apiCurrentProducts} />
          <PaginationButtons
            currentPage={apiCurrentPage}
            totalPages={apiTotalPages}
            onPageChange={handleApiPageChange}
          />
          
          <div className={styles.buttons}>
            <button
              onClick={() => handleLoadMore(8)}
              disabled={products.length >= 8}
            >
              8 Products
            </button>
            <button
              onClick={() => handleLoadMore(8)}
              disabled={products.length >= 16}
            >
              16 Products
            </button>
            <button
              onClick={() => handleLoadMore(4)}
              disabled={products.length >= 20}
            >
              20 Products
            </button>
          </div>
        </div>
      )}
      {activeTab === 'createdProducts' && (
        <div>
          <ProductList products={createdCurrentProducts} />
          <PaginationButtons
            currentPage={createdCurrentPage}
            totalPages={createdTotalPages}
            onPageChange={handleCreatedPageChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProductTabs;

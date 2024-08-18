import React from 'react';
import PropTypes from 'prop-types';
import styles from './PaginationButtons.module.css';

const PaginationButtons = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.button}
      >
        &lt;
      </button>
      {[...Array(totalPages).keys()].map((page) => (
        <button
          key={page + 1}
          onClick={() => handlePageChange(page + 1)}
          className={`${styles.button} ${currentPage === page + 1 ? styles.active : ''}`}
        >
          {page + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.button}
      >
        &gt;
      </button>
    </div>
  );
};

PaginationButtons.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PaginationButtons;

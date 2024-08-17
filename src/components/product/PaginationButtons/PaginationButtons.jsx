import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsPagination } from '../../../redux/actions/productsActions';
import { selectPagination } from '../../../redux/selectors/productSelectors';

const PaginationButtons = () => {
  const dispatch = useDispatch();
  const pagination = useSelector(selectPagination);

  const handlePageChange = (newPage) => {
    dispatch(setProductsPagination({ ...pagination, currentPage: newPage }));
  };

  return (
    <div className="pagination-buttons">
      <button onClick={() => handlePageChange(pagination.currentPage - 1)} disabled={pagination.currentPage === 1}>
        Previous
      </button>
      <span>Page {pagination.currentPage}</span>
      <button onClick={() => handlePageChange(pagination.currentPage + 1)}>
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;

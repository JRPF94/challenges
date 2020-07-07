import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const canGoBack = page => page - 1 >= 0;;

const canGoForward = (page, totalItems, offset) => (
  (page + 1) < (totalItems / offset)
);

const Pagination = ({
  totalItems,
  page,
  offset,
  onPageChange
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  if (page !== currentPage) {
    setCurrentPage(page);
  }

  const handlePageChange = jump => {
    setCurrentPage(prev => {
      if (jump === 1 && !canGoForward(prev, totalItems, offset)) {
        return prev;
      }
      else if (jump === -1 && !canGoBack(prev)) {
        return prev;
      }
      const nextPage = prev + jump;
      onPageChange(nextPage);
      return nextPage;
    });
  };

  const totalPages = totalItems > 0 ? Math.ceil(totalItems / offset) : 1;

  return (
    <div className="pagination-container">
      {
        canGoBack(currentPage) && (
          <button onClick={() => handlePageChange(-1)}>Previous</button>
        )
      }
      {totalItems > 0 && 
        <span className="pagination-text">{page + 1} of {totalPages}</span>
      }
      {
        canGoForward(currentPage, totalItems, offset) && (
          <button onClick={() => handlePageChange(1)}>Next</button>
        )
      }
    </div>
  );
};

Pagination.propTypes = {
  totalItems: PropTypes.number,
  page: PropTypes.number,
  offset: PropTypes.number,
  onPageChange: PropTypes.func
};

Pagination.defaultProps = {
  totalItems: 0,
  page: 0,
  offset: 7,
  onPageChange: () => {}
};

export default Pagination;
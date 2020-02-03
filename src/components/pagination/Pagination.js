import React from "react";
/**
 *
 * @param {*} param0
 * bookDatalength : lenth of the book array object
 * click: onclick event will trigger
 * currentPage
 * booksPerPage: number of page and default is 10 book per page
 */
const Pagination = ({ bookDatalength, click, currentPage, booksPerPage }) => {
  const pageNumbers = [];
  const pageLength = bookDatalength;
  for (let i = 1; i <= Math.ceil(pageLength / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = pageNumbers.map(number => {
    return (
      <li
        key={number}
        id={number}
        onClick={click}
        className={currentPage === number ? "active" : ""}>
        {number}
      </li>
    );
  });
  return <ul className='pagination-cls'>{renderPageNumbers}</ul>;
};

export default Pagination;

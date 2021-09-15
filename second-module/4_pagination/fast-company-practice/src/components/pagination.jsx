import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ length, count, updatePage, currentPage }) => {
    const numberOfPages = Math.ceil(length / count);
    const pages = [];
    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {pages.map((page) => (
                    <li
                        className={
                            'page-item ' +
                            (page === currentPage ? 'active' : '')
                        }
                        key={page}
                    >
                        <a
                            className="page-link"
                            onClick={() => {
                                updatePage(page);
                            }}
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    length: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    updatePage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;

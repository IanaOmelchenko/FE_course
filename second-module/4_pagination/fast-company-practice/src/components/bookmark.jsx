import React from 'react';
import PropTypes from 'prop-types';

const BookMark = ({ status, onToggle }) => {
    return (
        <button onClick={onToggle}>
            <i
                className={status ? 'bi bi-bookmark-fill' : 'bi bi-bookmark'}
            ></i>
        </button>
    );
};

BookMark.propTypes = {
    status: PropTypes.string.isRequired,
    onToggle: PropTypes.func.isRequired
};

export default BookMark;

import React from 'react';
import PropTypes from 'prop-types';

const SearchStatus = ({ length }) => {
    const renderPhrase = () => {
        if (length <= 0) {
            return 'No company tonight';
        } else {
            return `${length} will make you company`;
        }
    };
    const colorPhrase = () => {
        let classes = 'badge m-2 bg-';
        if (length <= 0) {
            classes += 'danger';
            return classes;
        } else {
            classes += 'primary';
            return classes;
        }
    };
    return <span className={colorPhrase()}>{renderPhrase()}</span>;
};

SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};

export default SearchStatus;

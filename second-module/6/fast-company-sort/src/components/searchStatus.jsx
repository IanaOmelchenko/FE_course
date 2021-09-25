import React from 'react';
import PropTypes from 'prop-types';

const SearchStatus = ({ userCount }) => {
    const renderPhrase = () => {
        if (userCount <= 0) {
            return 'No company tonight';
        } else {
            return `${userCount} will make you company`;
        }
    };
    const colorPhrase = () => {
        let classes = 'badge m-2 bg-';
        if (userCount <= 0) {
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
    userCount: PropTypes.number.isRequired
};

export default SearchStatus;

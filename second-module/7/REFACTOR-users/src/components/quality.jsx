import React from 'react';
import PropTypes from 'prop-types';

const Quality = ({ color, name }) => {
    return (
        <>
            {
                <span className={`badge btn - sm m-1 bg-${color}`}>
                    {name}
                </span>
            }
        </>
    );
};

Quality.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};

export default Quality;

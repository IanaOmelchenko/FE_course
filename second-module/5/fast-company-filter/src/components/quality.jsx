import React from 'react';
import PropTypes from 'prop-types';

const Quality = ({ user }) => {
    return (
        <>
            {user.qualities.map((quality) => (
                <span key = {quality._id} className={`badge btn - sm m-1 bg-${quality.color}`}>
                    {quality.name}
                </span>
            ))}
        </>
    );
};

Quality.propTypes = {
    user: PropTypes.object.isRequired
};

export default Quality;

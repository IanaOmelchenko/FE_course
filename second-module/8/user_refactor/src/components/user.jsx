import React from 'react';
import PropTypes from 'prop-types';

const User = ({ user }) => {
    return (
        user &&
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
        </tr>
    );
};

User.propTypes = {
    user: PropTypes.object,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};

export default User;

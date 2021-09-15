import React from 'react';
import User from './user';
import PropTypes from 'prop-types';

const Users = ({ users, onDelete, onToggle }) => {
    const usersToTable = users.map((user) => (
        <User
            user={user}
            key={user._id}
            onDelete={onDelete}
            onToggle={onToggle}
        />
    ));
    return <>{usersToTable}</>;
};

Users.propTypes = {
    users: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};

export default Users;

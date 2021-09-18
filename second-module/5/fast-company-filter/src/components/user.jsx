import React from 'react';
import Quality from './quality';
import BookMark from './bookmark';
import PropTypes from 'prop-types';

const User = ({ user, onDelete, onToggle }) => {
    return (
        user &&
        <tr key={user._id}>
            <td>{user.name}</td>
            <td>
                <Quality user={user} />
            </td>
            <td>{user.profession.name}</td>
            <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>
                <BookMark
                    onToggle={() => onToggle(user._id)}
                    status={user.status}
                />
            </td>
            <td>
                <button
                    onClick={() => onDelete(user._id)}
                    className="badge bg-danger btn - sm"
                >
                    Delete
                </button>
            </td>
        </tr>
    );
};

User.propTypes = {
    user: PropTypes.object,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired
};

export default User;

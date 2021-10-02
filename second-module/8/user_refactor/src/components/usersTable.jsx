import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import BookMark from './bookmark';
import QualitiesList from './qualitiesList';
import Table from './table';
import { Link } from 'react-router-dom';

const UsersTable = ({ users, onDelete, currentSort, onSort, onToggle, userCount }) => {
    const columns = {
        name: {
            iter: 'name',
            name: 'Name',
            component: (user) => (
                <Link to = {`/users/${user._id}`}>{user.name}</Link>
            )
        },
        qualities: {
            name: 'Characteristics',
            component: (user) => (
                <QualitiesList
                    qualities={user.qualities}/>)
        },
        professions: { iter: 'profession.name', name: 'Profession' },
        completedMeetings: { iter: 'completedMeetings', name: 'Met,times' },
        rate: { iter: 'rate', name: 'Rating' },
        bookmark: {
            iter: 'status',
            name: 'Bookmark',
            component: (user) => (
                <BookMark
                    status={user.status}
                    onToggle={() => onToggle(user._id)}
                />
            )
        },
        delete: {
            component: (user) => (
                <button
                    onClick={() => onDelete(user._id)}
                    className="badge bg-danger btn - sm">
            Delete
                </button>
            ),
            name: 'Delete'
        }
    };
    return (
        <>
            <Table
                onSort={onSort}
                currentSort={currentSort}
                columns={columns}
                userCount={userCount}
                data = {users}
            >
                <TableHeader
                    {...{ onSort, currentSort, columns, userCount }}
                />
                <TableBody {...{ columns, data: users }}/>
            </Table>
        </>
    );
};

UsersTable.propTypes = {
    users: PropTypes.array,
    onDelete: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    userCount: PropTypes.number.isRequired,
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
};

export default UsersTable;

import React, { useState, useEffect } from 'react';
import SearchStatus from './components/searchStatus';
import Pagination from './components/pagination';
import GroupList from './components/groupList';
import UsersTable from './components/usersTable';
import _ from 'lodash';

import API from './API';

function App() {
    const [users, setUsers] = useState();
    const [professions, setProfessions] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProf, setSelectedProf] = useState();
    const [sortBy, setSortBy] = useState({ iter: 'name', order: 'asc' });
    const [countPerPage] = useState(5);

    useEffect(() => {
        API.users.fetchAll().then((userData) => setUsers(userData));
    }, []);

    useEffect(() => {
        API.professions.fetchAll().then((data) => setProfessions(data));
    }, []);

    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const lastUser = currentPage * countPerPage;
    const firstUser = lastUser - countPerPage;
    const filteredUsers = users && selectedProf ? users.filter((user) => user.profession._id === selectedProf._id) : users;
    const userCount = users && filteredUsers.length;
    const sortedUsers = _.orderBy(filteredUsers, [sortBy.iter], [sortBy.order]);
    const currentPageUsers = users && sortedUsers.slice(firstUser, lastUser);

    const updatePage = (pageNumber) => setCurrentPage(pageNumber);

    const handleFilterSelect = (item) => {
        setSelectedProf(item);
    };

    const handleSort = (sortItem) => {
        setSortBy(sortItem);
    };

    const handleDelete = (userId) => {
        setUsers(
            users.filter((it) => {
                return it._id !== userId;
            })
        );
    };
    const handleToggleBookMark = (userId) => {
        setUsers(
            users.filter((user) => {
                if (user._id === userId) {
                    user.status = !user.status;
                    return user;
                }
                return user;
            })
        );
    };

    const clearFilter = () => { setSelectedProf(); };

    return (
        <div className='d-flex'>
            {professions &&
                <div className='d-flex flex-column flex-shrink-0 p-3'>
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onFilterSelect={handleFilterSelect} />
                    <button className='btn btn-secondary mt-2'
                        onClick={clearFilter}>
                            Clear filter
                    </button>
                </div>
            }
            <>
                {users && professions &&
                <div className='d-flex flex-column'>
                    <SearchStatus userCount={userCount} />
                    <UsersTable
                        users={currentPageUsers}
                        onDelete={handleDelete}
                        onToggle={handleToggleBookMark}
                        userCount={userCount}
                        onSort = {handleSort}
                        currentSort = {sortBy}
                    />
                    <div className='d-flex justify-content-center'>
                        <Pagination
                            length={userCount}
                            count={countPerPage}
                            updatePage={updatePage}
                            currentPage={currentPage}
                        />
                    </div>
                </div>
                }
            </>
        </div>
    );
}

export default App;

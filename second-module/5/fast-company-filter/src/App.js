import React, { useState, useEffect } from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import API from './API';
import Pagination from './components/pagination';
import GroupList from './components/groupList';

function App() {
    const [users, setUsers] = useState();
    const [professions, setProfessions] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedProf, setSelectedProf] = useState();
    const [countPerPage] = useState(3);

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
    const filteredUsers = selectedProf ? users.filter((user) => user.profession._id === selectedProf._id) : users;
    const userCount = users && filteredUsers.length;
    const currentPageUsers = users && filteredUsers.slice(firstUser, lastUser);
    const updatePage = (pageNumber) => setCurrentPage(pageNumber);

    const handleFilterSelect = (item) => {
        console.log('item', item);
        setSelectedProf(item);
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

    const showTable = () => {
        if (userCount > 0) {
            return (
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Characteristics</th>
                    <th scope="col">Profession</th>
                    <th scope="col">Met, times</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Bookmark</th>
                    <th scope="col">Delete</th>
                </tr>
            );
        }
    };

    const clearFilter = () => { setSelectedProf(); };

    return (
        <div className='d-flex'>
            {users && professions &&
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
                    <SearchStatus length={userCount} />
                    <table className="table">
                        <thead>{showTable()}</thead>
                        <tbody>
                            <Users
                                users={currentPageUsers}
                                onDelete={handleDelete}
                                onToggle={handleToggleBookMark}
                            />
                        </tbody>
                    </table>
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

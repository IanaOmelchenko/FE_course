import React, { useState } from 'react';
import Users from './components/users';
import SearchStatus from './components/searchStatus';
import API from './API';
import Pagination from './components/pagination';

function App() {
    const [users, setUsers] = useState(API.users.fetchAll());
    const [currentPage, setCurrentPage] = useState(1);
    const [countPerPage] = useState(3);

    const lastUser = currentPage * countPerPage;
    const firstUser = lastUser - countPerPage;

    const currentPageUsers = users.slice(firstUser, lastUser);
    const updatePage = (pageNumber) => setCurrentPage(pageNumber);

    const handleDelete = (userId) => {
        setUsers(
            users.filter((item) => {
                return item._id !== userId;
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
        if (users.length > 0) {
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

    return (
        <>
            <SearchStatus length={users.length} />
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
            <Pagination
                length={users.length}
                count={countPerPage}
                updatePage={updatePage}
                currentPage={currentPage}
            />
        </>
    );
}

export default App;

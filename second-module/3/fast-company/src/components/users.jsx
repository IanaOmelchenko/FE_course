import React from 'react';
import User from './user';

const Users = ({users, onDelete, takeClick}) => {   
    const checkHeader = () => {
        if(users.length>0){
            return (
                <tr>
                <th scope="col">Имя</th>
                <th scope="col">Качества</th>
                <th scope="col">Профессия</th>
                <th scope="col">Встретился, раз</th>
                <th scope="col">Оценка</th>
                <th scope="col">Избранное</th>
                <th scope="col">Delete</th>
              </tr>
            )};
        } 

    let newUsers = users && users.map((user) => { 
        return (
        <User user={user}
            key = {user._id}
              onDelete = {onDelete}
              takeClick = {takeClick}/>
            )
    });

    return (
    <>
        <table className="table">
            <thead>
                {checkHeader()}
            </thead>
            <tbody>
                {newUsers}
            </tbody>
        </table>
    </>
    );
}

export default Users;
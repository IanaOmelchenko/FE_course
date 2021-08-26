import React, { useState } from 'react';
import API from '../API';


const Users = () => {
    const [users, setUsers] = useState(API.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(users.filter((item)=>{
            console.log('users.length', users.length);
            return item._id !== userId;
        })
        )};
    const renderPhrase = number => {
        const table = document.querySelector('.table');
        if(number === 0){
            table.innerHTML = '';
            return `Никто не тусанет с тобой сегодня`;
        }
        else if(number ===1){
            return `${number} человек тусанет с тобой сегодня`;
        }
        else if(number>1&&number<5){
            return `${number} человека тусанет с тобой сегодня`;
        }
        else{
            return `${number} человек тусанут с тобой сегодня`;
        }
    };
    const checkTable = () => {
        if(users.length>0){
            return newUsers;
        }

    }
    const colorPhrase = () =>{
        let classes = 'badge bg-';
        classes += users.length === 0?'danger':'primary';
        return classes;
    }

   
    let newUsers = users && users.map((user, index) => { return (
            <tr key = {user._id}>
             <td>{user.name}</td>
             <td>{user.qualities.map((quality) => {return <span className = {`badge m-1 bg-${quality.color}`} key={quality._id}>{quality.name}</span>})}</td>
            <td>{user.profession.name}</td>
             <td>{user.completedMeetings}</td>
            <td>{user.rate}</td>
            <td>{<button className = 'badge bg-danger' onClick={()=>handleDelete(user._id)}>Delete</button>}</td>
            </tr>)
    });

    return (<>
    <span className = {colorPhrase()}>{renderPhrase(users.length)}</span>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Имя</th>
      <th scope="col">Качества</th>
      <th scope="col">Профессия</th>
      <th scope="col">Встретился, раз</th>
      <th scope="col">Оценка</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
     {checkTable()}
  </tbody>
</table>
    </>);
}

export default Users;
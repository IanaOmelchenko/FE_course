import React from 'react';
import Quality from './quality';
import BookMark from './bookmark';

const User = ({user, onDelete, takeClick}) => {
    return (
        <tr key = {user._id}>
        <td>{user.name}</td>
        <td>{user.qualities.map((quality) => {return <Quality quality={quality}/>})}</td>
        <td>{user.profession.name}</td>
        <td>{user.completedMeetings}</td>
        <td>{user.rate}</td>
        <td><BookMark status={user.status} onClick={()=>takeClick(user._id)}/></td>
        <td>{<button className = 'badge bg-danger' onClick={()=>onDelete(user._id)}>Delete</button>}</td>
        </tr>
      );
}
 
export default User;
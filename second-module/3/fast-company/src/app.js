import React,{useState} from 'react';
import SearchStatus from './components/searchStatus';
import Users from './components/users'
import API from './API'

const App = () => {
    const [users, setUsers] = useState(API.users.fetchAll());
    const handleDelete = (userId) => {
        setUsers(users.filter((item)=>{
            return item._id !== userId;
        })
    )};

    const takeClick = (userId) => {
        setUsers(users.filter((item)=>{
            if(item._id === userId){
                item.status = !item.status;
                return item;
            }
            return item;
        })
    )};

    return ( 
        <>
        <SearchStatus length={users.length}/>
        <Users users = {users}
               onDelete={handleDelete}
               takeClick={takeClick}/>
        </>
    );
}
 
export default App;
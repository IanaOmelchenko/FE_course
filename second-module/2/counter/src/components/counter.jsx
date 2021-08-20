import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const tags = ['tag1', 'tag2', 'tag3'];
    const formCount = () => {return count===0?'Zero':count;};
    const getBadgeClasses = () => {
        let classes = 'badge m-2 bg-';
        classes +=count===0?'danger':'primary';
        return classes;
    }
    const handleIncrement = (productId) => {
       setCount(count+1);
    }
    const handleDecrement = (productId) => {
        if(count>0){
            setCount(count-1);
        }
     }
    const renderTags = () => {
        return tags.map((tag)=>(<li key = {tag}>{tag}</li>));
    };

    return (<>
        {tags.length === 0 && "No tags found!"}
        {renderTags()}
        <span className = {getBadgeClasses()}>{formCount()}</span>
        <button 
        onClick = {()=>handleIncrement({id:1})}
        className = 'btn btn-secondary btn-sm'>Increment</button>
         <button 
        onClick = {()=>handleDecrement({id:1})}
        className = 'btn btn-secondary btn-sm'>Decrement</button>
        </>)}
 
export default Counter;
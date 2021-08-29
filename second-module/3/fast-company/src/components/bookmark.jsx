import React from 'react'; 

const BookMark = ({status, ...rest}) => {
    return (<button style = {{color: status?'red':'blue'}} {...rest}><i className="bi bi-bookmark-full">HI!</i></button>);
}
 
export default BookMark;
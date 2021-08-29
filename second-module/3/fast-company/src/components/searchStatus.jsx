import React from 'react';

const SearchStatus = ({length}) => {
    const renderPhrase = length => {
        if(length === 0){
            return `Никто не тусанет с тобой сегодня`;
        }
        else if(length === 1){
            return `${length} человек тусанет с тобой сегодня`;
        }
        else if(length > 1 && length < 5){
            return `${length} человека тусанет с тобой сегодня`;
        }
        else{
            return `${length} человек тусанут с тобой сегодня`;
        }
    };

    const colorPhrase = () =>{
        let classes = 'badge bg-';
        classes += length === 0?'danger':'primary';
        return classes;
    }

    return ( 
        <span className = {colorPhrase()}>{renderPhrase(length)}</span>
     );
}
 
export default SearchStatus;
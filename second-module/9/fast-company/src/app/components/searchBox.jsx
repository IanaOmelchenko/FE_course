import React from "react";
import PropTypes from "prop-types";

const SearchBox = ({ handleInput, searchTerm }) => {
    return (
        <div>
            <input onChange = {handleInput} placeholder = "Search" type="text" value = {searchTerm}/>
        </div>
     );
};

SearchBox.propTypes = {
    handleInput: PropTypes.func.isRequired,
    searchTerm: PropTypes.string.isRequired
};

export default SearchBox;

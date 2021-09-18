import React from 'react';
import PropTypes from 'prop-types';

const GroupList = ({ items, valueProperty, contentProperty, onFilterSelect, selectedItem }) => {
    const getType = (el) => {
        if (typeof items === 'object' && items !== null && !Array.isArray(items)) {
            return (
                <ul className="list-group">
                    {Object.keys(items).map((item) => {
                        return <li
                            key = {items[item][valueProperty]}
                            className={'list-group-item' + (items[item] === selectedItem ? ' active' : '')}
                            role='button'
                            onClick={() => onFilterSelect(items[item])}>
                            {items[item][contentProperty]}
                        </li>;
                    })}
                </ul>
            );
        } else if (Array.isArray(items)) {
            return (<ul className="list-group">
                {items.map((item) => {
                    return <li
                        key = {item[valueProperty]}
                        className={'list-group-item' + (item === selectedItem ? ' active' : '')}
                        role='button'
                        onClick={() => onFilterSelect(item)}>
                        {item[contentProperty]}
                    </li>;
                })}
            </ul>);
        }
    };

    return (
        <>
            { getType(items) }
        </>
    );
};

GroupList.defaultProps = {
    valueProperty: '_id',
    contentProperty: 'name'
};

GroupList.propTypes = {
    items: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    onFilterSelect: PropTypes.func,
    selectedItem: PropTypes.object
};

export default GroupList;

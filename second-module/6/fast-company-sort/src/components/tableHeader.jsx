import React from 'react';
import PropTypes from 'prop-types';

const TableHeader = ({ onSort, userCount, currentSort, columns }) => {
    const showTable = () => {
        if (userCount > 0) {
            return (
                <tr>
                    {Object.keys(columns).map((column) => (
                        <th key = {column}
                            onClick ={columns[column].iter
                                ? () => handleSort(columns[column].iter)
                                : undefined}
                            {...{ role: columns[column].iter && 'button' }}
                            scope="col">
                            {columns[column].name}
                            {<i className = {handleArrow(columns[column].iter)}></i>}
                        </th>
                    ))}
                </tr>
            );
        }
    };

    const handleArrow = (sortItem) => {
        let arrowClass = 'bi bi-caret-';
        if (currentSort.iter === sortItem) {
            if (currentSort.order === 'asc') {
                arrowClass += 'up-fill';
            } else {
                console.log('currentSort.order', currentSort.order);
                arrowClass += 'down-fill';
            }
        }
        return arrowClass;
    };

    const handleSort = (sortItem) => {
        if (currentSort.iter === sortItem) {
            onSort({
                ...currentSort,
                order: currentSort.order === 'asc'
                    ? 'desc'
                    : 'asc'
            });
        } else {
            onSort({ iter: sortItem, order: 'asc' });
        }
    };

    return (
        <thead>{showTable()}</thead>
    );
};

TableHeader.propTypes = {
    userCount: PropTypes.number.isRequired,
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
};

export default TableHeader;

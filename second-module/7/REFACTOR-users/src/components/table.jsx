import React from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';
import PropTypes from 'prop-types';

const Table = ({ onSort, currentSort, columns, userCount, data, children }) => {
    return (
        <>{ data &&
            <table className="table">
                {children || <>
                    <TableHeader
                        {...{ onSort, currentSort, columns, userCount }}/>
                    <TableBody {...{ columns, data }}/>
                </>}

            </table>}
        </>
    );
};

Table.propTypes = {
    data: PropTypes.array,
    userCount: PropTypes.number.isRequired,
    onSort: PropTypes.func,
    currentSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired,
    children: PropTypes.array
};

export default Table;

import React from 'react';
import Quality from './quality';
import PropTypes from 'prop-types';

const QualitiesList = ({ qualities }) => {
    return <>
        {qualities.map((quality) => (
            <Quality
                key= {quality._id}
                {...quality}
                color = {quality.color}
                name = {quality.name}
            />
        ))}
    </>;
};

QualitiesList.propTypes = {
    qualities: PropTypes.array.isRequired
};

export default QualitiesList;
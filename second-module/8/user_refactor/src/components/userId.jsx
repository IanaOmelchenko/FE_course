import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import API from '../API';

const UserId = ({ match, history }) => {
    const pageId = match.params.id;
    const [userById, setUserById] = useState();

    const returnToUsers = () => {
        history.push('/users');
    };

    useEffect(() => {
        API.users.getById(pageId).then((userData) => setUserById(userData));
    }, []);

    const addUserData = () => {
        if (!userById || userById === 'undefined') {
            return (
                <><h1>{'Loading...'}</h1>
                    <button onClick={() => returnToUsers()}>{'All Users'}</button></>
            );
        } else {
            return (
                <><h1 key = {userById._id}>{'Name: ' + userById.name}</h1>
                    <div>{'Profession: ' + userById.profession.name}</div>
                    <div>{'Completed meetings: ' + userById.completedMeetings}</div>
                    <div>{'Rate: ' + userById.rate}</div>
                    <button onClick = {() => returnToUsers()}>{'All Users'}</button>
                </>
            );
        }
    };

    return (
        <>{ addUserData() }</>
    );
};

UserId.propTypes = {
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default UserId;

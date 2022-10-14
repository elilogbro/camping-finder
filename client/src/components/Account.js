import React, { useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';

export default function Account() {

    const { currentUser } = useContext(CurrentUserContext)

    if (!currentUser) {
        return (
            <div>Loading...</div>
        )
    }

    return (
        <div>
            <p>{currentUser.name}</p>
            <p>{currentUser.username}</p>
        </div>
    )
}
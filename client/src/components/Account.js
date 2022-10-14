import React from 'react';

export default function Account({currentUser}) {

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
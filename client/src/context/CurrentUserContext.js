import React, { useState, createContext, useEffect } from 'react';

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)

    const updateCurrentUser = (value) => {
        setCurrentUser(value)
    }

    useEffect(() => {
        fetch('/me')
        .then(res => {
            if (res.ok) {
                res.json()
                .then(currentUser => updateCurrentUser(currentUser))
            }
        })
    }, [])

    return (
        <CurrentUserContext.Provider
            value={{ currentUser, updateCurrentUser }}
        >
            {children}
        </CurrentUserContext.Provider>
    )
}
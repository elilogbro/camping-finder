import React, { useState, createContext } from 'react';

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)

    const updateCurrentUser = (value) => {
        setCurrentUser(value)
    }

    return (
        <CurrentUserContext.Provider
            value={{ currentUser, updateCurrentUser }}
        >
            {children}
        </CurrentUserContext.Provider>
    )
}
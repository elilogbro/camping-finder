import React, { useState, createContext, useEffect } from 'react';

export const CurrentUserContext = createContext();

export const CurrentUserProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null)
    const [name, setName] = useState(null)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const updateCurrentUser = (value) => {
        setCurrentUser(value)
        if (value) {
            setName(value.name)
            setUsername(value.username)
            setPassword(value.password)
        }
    }

    const updateName = (value) => {
        setName(value)
    }

    const updateUsername = (value) => {
        setUsername(value)
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
            value={{ currentUser, name, username, password,  updateName, updateUsername, updateCurrentUser }}
        >
            {children}
        </CurrentUserContext.Provider>
    )
}
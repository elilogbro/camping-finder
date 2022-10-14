import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CurrentUserContext } from '../context/CurrentUserContext';

export default function Links() {

    const { currentUser } = useContext(CurrentUserContext);
    const { updateCurrentUser } = useContext(CurrentUserContext);
    
    const onLogOut = () => {
        fetch('/logout', {
            method: "DELETE"
        })
        updateCurrentUser(null)
    }

    if (!currentUser) {
        return (
            <div>
                <Link to="/">
                    Map
                </Link>
                <Link to="/campsite-form">
                    Add A Campsite
                </Link>
                <Link to="/signup">
                    Register
                </Link>
                <Link to="/login">
                    Login
                </Link>
            </div>
        )
    }

    return (
        <div>
            <Link to="/">
                Map
            </Link>
            <Link to={`/users/${currentUser.id}`}>
                Account
            </Link>
            <Link to="/campsite-form">
                Add A Campsite
            </Link>
            <Link
                to="/login"
                onClick={onLogOut}
            >
                Logout
            </Link>
        </div>
    )
}
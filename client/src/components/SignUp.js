import React, { useState, useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { useHistory } from 'react-router-dom';

export default function SignUp() {

    let history = useHistory();
    const [errors, setErrors] = useState(null)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [newUserData, setNewUserData] = useState({
        name: "",
        username: "",
        password: ""
    })

    const { updateCurrentUser } = useContext(CurrentUserContext)

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    const handleNewAccount = (e) => {
        e.preventDefault()
        
        fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUserData)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(signedUpUser => {
                    updateCurrentUser(signedUpUser)
                })
            }
            else {
                res.json().then(data => setErrors(data.error))
            }
        })
    
        setNewUserData({
            name: "",
            username: "",
            password: ""
        })

        history.push('/')
    }

    const handleFormChange = (e) => {
        const key = e.target.name
        const value = e.target.value
  
        setNewUserData({
            ...newUserData, [key] : value
        })
    }

    return (
        <div>
            <form onSubmit={handleNewAccount}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={newUserData.name}
                    onChange={handleFormChange}
                />
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={newUserData.username}
                    onChange={handleFormChange}
                />
                <label>Password</label>
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    value={newUserData.password}
                    onChange={handleFormChange}
                />
                <label>Show Password</label>
                <input
                    type="checkbox"
                    onChange={togglePasswordVisibility}
                />
                <button type="submit">Create Account</button>
            </form>
            {errors && <div>{errors}</div>}
        </div>
    )
}
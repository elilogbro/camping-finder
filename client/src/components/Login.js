import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUserContext } from "../context/CurrentUserContext";

export default function Login() {

    let history = useHistory();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [errors, setErrors] = useState(null)
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const { updateCurrentUser } = useContext(CurrentUserContext);
    const { currentUser } = useContext(CurrentUserContext)

    const handleLogin = (e) => {
        e.preventDefault()

        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => {
            if (res.ok) {
                res.json().then(loggedInUser => {
                    onLogIn(loggedInUser)
                })
            }
            else {
                res.json().then(data => setErrors(data.errors))
            }
        })

        setFormData({
            username: "",
            password: ""
        })
    }

    const handleFormChange = (e) => {
        const key = e.target.name
        const value = e.target.value
  
        setFormData({
            ...formData, [key] : value
        })
    }

    const pushToSignUp = () => {
        history.push('/signup')
    }

    const onLogIn = (loggedInUser) => {
        updateCurrentUser(loggedInUser)
    }

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible)
    }

    if (currentUser) {
        return (
            <div>Welcome, {currentUser.name}!</div>
        )
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>Username</label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleFormChange}
                />
                <label>Password</label>
                <input
                    type={isPasswordVisible ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                />
                <label>Show Password</label>
                <input
                    type="checkbox"
                    onChange={togglePasswordVisibility}
                />
                <button type="submit">Log In</button>
                <p>Need an account?</p>
                <button onClick={pushToSignUp}>Create an account</button>
            </form>
            {errors &&
                errors.map(e => 
                    <div>
                        <span
                            role="img"
                            aria-label="X"
                        >
                            ❌
                        </span>
                        {e[0] + " " + e[1]}
                    </div>
                )
            }
        </div>
    )
}
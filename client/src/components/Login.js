import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CurrentUserContext } from "../context/CurrentUserContext";
import { FcHighPriority } from 'react-icons/fc';
import {
    LoginContainer,
    Input,
    Label,
    CheckboxContainer,
    Button,
    ErrorContainer,
    CreateAccountContainer
} from '../styles/LoginStyles';

export default function Login() {

    let history = useHistory();

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [errors, setErrors] = useState(null)
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const { updateCurrentUser } = useContext(CurrentUserContext);

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
                history.push(`/review-form`)
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

    return (
        <LoginContainer onSubmit={handleLogin}>
            <Label>Username</Label>
            <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleFormChange}
            />
            <Label>Password</Label>
            <Input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleFormChange}
            />
            <CheckboxContainer>
                <Label>Show Password</Label>
                <input
                    type="checkbox"
                    onChange={togglePasswordVisibility}
                />
            </CheckboxContainer>
            <Button type="submit">Log In</Button>
            <CreateAccountContainer>
                <p>Need an account?</p>
                <Button onClick={pushToSignUp}>Create an account</Button>
            </CreateAccountContainer>
            {errors &&
                <ErrorContainer>
                        <FcHighPriority
                            style={{
                                paddingRight: '4px'
                            }}
                        />
                        {errors}
                </ErrorContainer>
            }
        </LoginContainer>
    )
}
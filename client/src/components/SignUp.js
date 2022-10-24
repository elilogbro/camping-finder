import React, { useState, useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { useHistory } from 'react-router-dom';
import { FcHighPriority } from 'react-icons/fc';
import {
    SignUpContainer,
    Label,
    Input,
    CheckboxContainer,
    Button,
    ErrorContainer,
    Error
} from '../styles/SignUpStyles';

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
                    history.push('/');
                })
            }
            else {
                res.json().then(data => setErrors(Object.entries(data.errors)))
            }
        })
    
        setNewUserData({
            name: "",
            username: "",
            password: ""
        })
    }

    const handleFormChange = (e) => {
        const key = e.target.name
        const value = e.target.value
  
        setNewUserData({
            ...newUserData, [key] : value
        })
    }

    return (
        <SignUpContainer onSubmit={handleNewAccount}>
            <Label>Name</Label>
            <Input
                type="text"
                name="name"
                value={newUserData.name}
                onChange={handleFormChange}
            />
            <Label>Username</Label>
            <Input
                type="text"
                name="username"
                value={newUserData.username}
                onChange={handleFormChange}
            />
            <Label>Password</Label>
            <Input
                type={isPasswordVisible ? "text" : "password"}
                name="password"
                value={newUserData.password}
                onChange={handleFormChange}
            />
            <CheckboxContainer>
                <Label>Show Password</Label>
                <input
                    type="checkbox"
                    onChange={togglePasswordVisibility}
                />
            </CheckboxContainer>
            <Button type="submit">Sign Up</Button>
            <ErrorContainer>
                {errors &&
                    errors.map(e =>
                        <Error>
                            <FcHighPriority
                                style={{
                                    paddingRight: '4px'
                                }}
                            />
                            {e[0] + " " + e[1]}
                        </Error> 
                    )
                }
            </ErrorContainer>
        </SignUpContainer>
    )
}
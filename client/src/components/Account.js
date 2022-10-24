import React, { useContext, useState } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { RiPencilFill } from 'react-icons/ri';
import { FcHighPriority } from 'react-icons/fc';
import { ThreeDots } from 'react-loader-spinner';
import {
    AccountContainer,
    Button,
    P,
    Form,
    Input,
    Label,
    CredP,
    PContainer,
    ConfirmationContainer,
    CredsContainer,
    ErrorContainer
} from '../styles/AccountStyles';

export default function Account() {

    const { currentUser, updateCurrentUser, name, username, updateName, updateUsername, password } = useContext(CurrentUserContext)
    const [isInEditMode, setIsInEditMode] = useState(false)
    const [errors, setErrors] = useState(null)
    const [confirmationMessage, setConfirmationMessage] = useState(null)

    if (!currentUser) {
        return (
            <ThreeDots />
        )
    }

    const changeEditMode = () => {
        setIsInEditMode(!isInEditMode)
        setConfirmationMessage(null)
    }

    const handleUpdatedProfile = () => {
        setErrors(null)
        if (name !== currentUser.name || username !== currentUser.username) {
            fetch(`/users/${currentUser.id}`, {
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name: name, username: username})
            })
            .then(res => {
                if(res.ok) {
                    res.json().then(updatedUser => handleUpdatedUser(updatedUser))
                    setErrors(null)
                    setConfirmationMessage("Information updated successfully!")
                    }
                else {
                    res.json().then(data => setErrors(Object.entries(data.errors)))
                }
            })
        }
        setIsInEditMode(!isInEditMode)
    }

    const handleUpdatedUser = (updatedUser) => {
        updateCurrentUser(updatedUser)
    }

    const renderErrors = errors &&
        errors.map(e => 
            <ErrorContainer key={e}>
                    <FcHighPriority
                        style={{
                            paddingRight: '4px'
                        }}
                    />
                    {e[0] + " " + e[1]}
            </ErrorContainer>
        )

    if (isInEditMode) {
        return (
            <AccountContainer>
                <P>Member since: {currentUser.formatted_created_at}</P>
                <Button onClick={handleUpdatedProfile} >Save Profile<RiPencilFill /></Button>
                <Form>
                    <Label>Name:</Label>
                    <Input
                        type="text"
                        name="name"
                        placeholder={name}
                        value={name}
                        onChange={e => updateName(e.target.value)}
                    />
                    <Label>Username:</Label>
                    <Input
                        type="text"
                        name="username"
                        placeholder={username}
                        value={username}
                        onChange={e => updateUsername(e.target.value)}
                    />
                </Form>
                {renderErrors}
            </AccountContainer>
        )
    }

    return (
        <AccountContainer>
            <P>Member since: {currentUser.formatted_created_at}</P>
            <Button onClick={changeEditMode}>Edit Profile <RiPencilFill /></Button>
            <PContainer>
                <CredsContainer>
                    <CredP>Name:</CredP>
                    <CredP>{currentUser.name}</CredP>
                </CredsContainer>
                <CredsContainer>
                    <CredP>Username:</CredP>
                    <CredP>{currentUser.username}</CredP>
                </CredsContainer>
            </PContainer>
            {confirmationMessage && <ConfirmationContainer>{confirmationMessage}</ConfirmationContainer>}
            {renderErrors}
        </AccountContainer>
    )
}
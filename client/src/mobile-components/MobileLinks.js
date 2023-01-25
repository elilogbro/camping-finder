import React, { useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { FaUser } from "react-icons/fa";
import {
    NavbarLink
} from '../styles/NavStyle';

import {
    NavbarContainer,
    LogoLink,
    Logo,
    LinksContainer
} from '../mobile-styles/MobileLinksStyles';

export default function MobileLinks() {

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
            <NavbarContainer>
                <LogoLink to="/">
                    <Logo
                        src={process.env.PUBLIC_URL + '/tento-logo.png'}
                        alt="website logo"
                    />
                </LogoLink>
                <LinksContainer>
                    <NavbarLink to="/campsite-form">
                        Add a Campsite
                    </NavbarLink>
                    <NavbarLink to="/signup">
                        Register
                    </NavbarLink>
                    <NavbarLink to="/login">
                        Login
                    </NavbarLink>
                </LinksContainer>
            </NavbarContainer>
        )
    }

    return (
        <NavbarContainer>
            <LogoLink to="/">
                <Logo
                    src={process.env.PUBLIC_URL + '/tento-logo.png'}
                    alt="website logo"
                />
            </LogoLink>
            <LinksContainer>
                <NavbarLink to="/campsite-form">
                    Add a Campsite
                </NavbarLink>
                <NavbarLink
                    to="/login"
                    onClick={onLogOut}
                >
                    Logout
                </NavbarLink>
                <NavbarLink
                    secondary="true"
                    to={`/users/${currentUser.id}`}
                >
                    <FaUser
                        style={{
                            alignSelf: 'self-start',
                            width: '6vw',
                            height: 'auto',
                            margin: '1vw',
                            marginBottom: '0',
                            marginTop: '0'
                        }}
                    />
                </NavbarLink>
            </LinksContainer>
        </NavbarContainer>
    )
}
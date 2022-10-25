import React, { useContext } from 'react';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { FaUser } from "react-icons/fa";
import {
    Logo,
    LogoLink,
    NavbarContainer,
    LeftNavbarLinkContainer,
    P,
    RightNavbarLinkContainer,
    NavbarLink,
    UserLogo
} from '../styles/NavStyle';

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
            <NavbarContainer>
                <LeftNavbarLinkContainer>
                    <LogoLink to="/">
                        <Logo 
                            src={process.env.PUBLIC_URL + '/tento-logo.png'} 
                            alt="website logo"     
                        />
                    </LogoLink>
                    <NavbarLink to="/campsite-form">
                        Add a Campsite
                    </NavbarLink>
                </LeftNavbarLinkContainer>
                <RightNavbarLinkContainer>
                    <NavbarLink to="/signup">
                        Register
                    </NavbarLink>
                    <NavbarLink to="/login">
                        Login
                    </NavbarLink>
                </RightNavbarLinkContainer>
            </NavbarContainer>
        )
    }

    return (
        <NavbarContainer>
            <LeftNavbarLinkContainer>
                <LogoLink to="/">
                    <Logo 
                        src={process.env.PUBLIC_URL + '/tento-logo.png'} 
                        alt="website logo"    
                    />
                </LogoLink>
                <NavbarLink to="/campsite-form">             	
                    Add a Campsite
                </NavbarLink>
            </LeftNavbarLinkContainer>
            <RightNavbarLinkContainer>
                <P>
                    Welcome, {currentUser.name}!
                </P>
                <UserLogo to={`/users/${currentUser.id}`}>
                    <FaUser
                        style={{
                            alignSelf: 'self-start'
                        }}
                    />
                </UserLogo>
                <NavbarLink
                    to="/login"
                    onClick={onLogOut}
                >
                    Logout
                </NavbarLink>
            </RightNavbarLinkContainer>
        </NavbarContainer>
    )
}
import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
    width: 100vw;
    height: fit-content;
    background-color: #15883e;
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const LeftNavbarLinkContainer = styled.div`
    display: flex;
    margin-right: auto;
    align-items: center;
`;

export const RightNavbarLinkContainer = styled.div`
    display: flex;
    margin-left: auto;
    align-items: center;
`;

export const NavbarLink = styled(Link)`
    align-self: center;
    color: white;
    font-size: large;
    text-decoration: none;
    margin: 1vw;
    margin-bottom: 0;
    margin-top: 0;
    :hover {
        text-decoration: underline;
        text-decoration-thickness: 0.5px;
    }
`;

export const LogoLink = styled(Link)`
    text-decoration: none;
    height: 90%;
    width: auto;
`;

export const Logo = styled.img`
    vertical-align: bottom;
`;

export const P = styled.p`
    color: white;
    font-size: large;
    text-decoration: none;
    margin: 10px;
    align-self: end;
`;
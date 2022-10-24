import {Link} from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
    width: 100%;
    height: 40px;
    background-color: #15883e;
    margin-top: 0px;
    display: flex;
    flex-direction: row;
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
    align-self: end;
    color: white;
    font-size: large;
    text-decoration: none;
    margin: 10px;
    :hover {
        text-decoration: underline;
        text-decoration-thickness: 0.5px;
    }
`;

export const LogoLink = styled(Link)`
    color: white;
    font-size: large;
    text-decoration: none;
    margin: 0px;
`;

export const Logo = styled.img`
    padding-top: 4px;
    margin: 0px;
    height: 40px;
`;

export const P = styled.p`
    color: white;
    font-size: large;
    text-decoration: none;
    margin: 10px;
    align-self: end;
`;
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
    overflow: hidden;
`;

export const LogoLink = styled(Link)`
    text-decoration: none;
    height: 90%;
    width: auto;
`;

export const Logo = styled.img`
    vertical-align: bottom;
`;

export const LinksContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
`
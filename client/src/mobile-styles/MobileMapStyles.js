import styled from "styled-components";

export const MapContainer = styled.div`
    background-color: #7B6251;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100vw;
    height: 90vh;
    margin-top: 4vh;
    border: solid #7B6251;
`;

export const MapOptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    color: white;
    border-bottom: solid #7B6251 4px;
    width: 100%;
    justify-content: space-evenly;
`;

export const LegendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: baseline;
    width: fit-content;
`;

export const DropdownContainer = styled(LegendContainer)`
`;

export const Label = styled.label`
    padding-bottom: 4px;
    font-size: large;
`;

export const Image = styled.img`
    height: auto;
    width: 20vw;
`;

export const Dropdown = styled.select`
    display: flex;
    border-radius: 6px;
    padding: 6px;
    color: black;
    width: fit-content;
    text-align-last: center;
    font-size: medium;
    font-weight: bold;
    cursor: pointer;
`;

export const Option = styled.option`
    font-size: small;
    font-weight: bold;
`;

export const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Verdana, sans-serif;
    background-color: #9BB493;
    padding: 0px;
    width: fit-content;
`;

export const P = styled.p`
    border-top: 1px solid;
    border-bottom: 1px solid;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #DEE6DB;
    font-size: 16px;
`;

export const P2 = styled.p`
    cursor: pointer;
`;
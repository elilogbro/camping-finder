import styled from "styled-components";

export const MapContainer = styled.div`
    background-color: #7B6251;
    height: auto;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 60vw;
    height: 86vh;
    margin-top: 4vh;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: solid #7B6251 6px;
`;

export const MapOptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: center;
    color: white;
    border-bottom: solid #7B6251 4px;
    width: 101%;
    justify-content: center;
`;

export const LegendContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: baseline;
    padding: 12px;
`;

export const DropdownContainer = styled(LegendContainer)`
`;

export const Label = styled.label`
    padding-bottom: 4px;
    font-size: large;
`;

export const Image = styled.img`
    height: 6vh;
    width: 6vw;
    border: solid 0.7px;
`;

export const Dropdown = styled.select`
    display: flex;
    border-radius: 6px;
    padding: 4px;
    color: black;
    width: fit-content;
    text-align-last: center;
    font-size: medium;
    font-weight: bold;
    cursor: pointer;
`;

export const Option = styled.option`
    font-size: medium;
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
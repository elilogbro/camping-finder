import styled from 'styled-components';

export const CampsiteContainer = styled.div`
    display: flex;
    font-family: Verdana, sans-serif;
    flex-direction: column;
    padding: 20px;
    align-self: center;
    text-align: left;
`;

export const Header = styled.div`
    flex-direction: column;
    background-color: #DDE6DB;
    color: black;
    padding: 16px;
    width: 40vw;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    border: solid 0.5px;
    border-radius: 6px;
`;

export const Indent = styled.p`
    margin: 12px;
`;

export const Description = styled.div`
    margin-top: 60px;
    padding: 16px;
    width: 60vw;
    color: black;
    border: solid;
    background-color: #DDE6DB;
    border: solid 0.5px;
    border-radius: 6px;
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

export const SubHeader = styled.div`
    background-color: #DDE6DB;
    color: black;
    padding: 16px;
    margin-left: 16px;
    width: 10vw;
    height: fit-content;
    text-align: left;
    border: solid 0.5px;
    border-radius: 6px;
`;

export const ReviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    align-self: center;
    text-align: center;
`;

export const Button = styled.button`    
    display: in-line block;
    width: fit-content;
    text-align: center;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    border-radius: 500px;
    transition-property: background-color,border-color,color,box-shadow,filter;
    transition-duration: .3s;
    border: 1px solid transparent;
    letter-spacing: 2px;
    min-width: 160px;
    text-transform: uppercase;
    white-space: normal;
    font-weight: 700;
    text-align: center;
    padding: 16px 14px 18px;
    color: #fff;
    background-color: #15883e;
    height: 48px;
    :hover{
        background-color: #1db954;
    }
    margin: 4px;
`;

export const ErrorContainer = styled.div`
    align-self: center;
    margin-top: 8px;
`;

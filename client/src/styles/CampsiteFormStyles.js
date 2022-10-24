import styled from 'styled-components';

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 50px;
    padding-top: 10px;
`

export const FormContainer = styled.form`
    display: flex;
    margin-top: 30px;
    padding: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-color: #DDE6DB;
    border: solid #7B6251;
    flex-direction: column;
    align-items: center;
    height: fit-content;
    width: fit-content;
`;

export const Input = styled.input`
    padding: 6px;
    margin: 10px;
    text-align: center;
    border-radius: 6px;
    font-size: 16px;
    background: #fbfbfb;
    border: 2px solid transparent;
    box-shadow: 0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%);
    :focus{
        border: 2px solid #7B6251;
        border-radius: 4px;
    }
    width: 200px;
    display: flex;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    height: 10px;
`;

export const Label = styled.div`
    font-family: Verdana, sans-serif;
    padding-top: 18px;
`;

export const Dropdown = styled.select`
    display: flex;
    border-radius: 8px;
    padding: 4px;
    color: black;
    width: fit-content;
    text-align-last: center;
    font-size: medium;
    cursor: pointer;
    margin-top: 20px;
`;

export const Button = styled.button`    
    display: inline-block;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    line-height: 1;
    border-radius: 500px;
    transition-property: background-color,border-color,color,box-shadow,filter;
    transition-duration: .3s;
    border: 1px solid transparent;
    letter-spacing: 2px;
    min-width: 120px;
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
    align-self: center;
    margin-top: 20px;
`;

export const Error = styled.div`
    padding: 4px;
    padding-top: 8px;
    align-self: baseline;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Confirmation = styled.div`
    margin-right: 50px;
`;
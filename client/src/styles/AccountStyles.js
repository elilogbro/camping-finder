import styled from 'styled-components';

export const AccountContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 4vw;
    padding-top: 20px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-color: #DDE6DB;
    border: solid black 0.5px;
    flex-direction: column;
    align-items: center;
    height: 368px;
    width: 280px;
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
`;

export const P = styled.p`
    padding-bottom: 40px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    padding: 8px;
    text-align: center;
    border-radius: 6px;
    font-size: 16px;
    background: #fbfbfb;
    border: 2px solid transparent;
    box-shadow: 0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%);
    :focus{
        border: 2px solid #000;
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
    padding-bottom: 10px;
`;

export const CredP = styled.p`
    margin: 4px;
`;

export const PContainer = styled(Form)`
    margin-top: 16px;
    display: flex;
    flex-direction: column;
`;

export const CredsContainer = styled.div`
    margin: 12px;
`;

export const ErrorContainer = styled(CredP)`
margin-top: 12px;
`;

export const ConfirmationContainer = styled(CredP)`
    width: max-content;
`;

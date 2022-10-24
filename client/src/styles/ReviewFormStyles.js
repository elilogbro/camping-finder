import styled from 'styled-components';

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

export const TextArea = styled.textarea`
    padding: 7px;
    margin-top: 80px;
    border-radius: 6px;
    font-size: 16px;
    background: #fbfbfb;
    border: 2px solid transparent;
    height: 30vh;
    box-shadow: 0 0 0 1px #dddddd, 0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 1.5px 0 rgb(0 0 0 / 5%);
    :focus{
        // border: 2px solid #7B6251;
        border-radius: 4px;
    }
    width: 30vw;
    display: flex;
    border: solid #15883e;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
`;

export const Button = styled.button`
    display: inline-block;
    outline: none;
    margin-top: 20px;
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
    align-self: start;
`;

export const Button2 = styled(Button)`
    align-self: center;
    margin-top: 16px;
`;

export const ErrorContainer = styled.div`
    margin-top: 20px;
`;

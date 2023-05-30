import styled from "styled-components";

export const FormContainer = styled.div`
    background-color: #DCD7C9;
    padding: 20px;
    border-radius: 5px;
    overflow: hidden;

    h1 {
        font-family: 'Kristi', cursive;
        font-size: 3rem;
        font-weight: 500;
        text-align: center;
    }
`

export const StyledLabel = styled.p`
    display: block;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
    font-weight: 400;
`

export const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    background: #DCD7C9;
    border-bottom: 1px solid rgb(44, 54, 57);
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;

    ::placeholder {
    font-family: 'Poppins', sans-serif;
    color: ${({theme}) => theme.colors.darkGreen};
    }

    input[type="text"] {
    font-family: 'Poppins', sans-serif;
    }
`

export const StyledMessage = styled.textarea`
    width: 100%;
    padding: 10px;
    background: ${({theme}) => theme.colors.cream};
    border-bottom: 1px solid rgb(44, 54, 57);
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;
    border-top: 1px solid transparent;
    font-family: 'Poppins', sans-serif;

    ::placeholder {
    font-family: 'Poppins', sans-serif;
    color: ${({theme}) => theme.colors.darkGreen};
    }
`
export const StyledButton = styled.button`
    width: 120px;
    height: 45px;
    margin-top: 0.5rem;
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    letter-spacing: 1.2px;
    font-weight: 400;
    color: ${({theme}) => theme.colors.cream};
    background: ${({theme}) => theme.colors.darKGreen};
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(44, 54, 57, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    float: right;

    &:hover {
        background-color: ${({theme}) => theme.colors.mauve};
        box-shadow: 0px 15px 20px rgba(141, 89, 80, 0.4);
        color: ${({theme}) => theme.colors.darKGreen};
        transform: translateY(-2px);
    }
`
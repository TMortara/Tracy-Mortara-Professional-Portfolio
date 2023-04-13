import styled from "styled-components";

export const FormContainer = styled.div`
    background-color: #DCD7C9;
    padding: 20px;
    border-radius: 5px;

    h1 {
        font-family: 'Kristi', cursive;
        font-size: 3rem;
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
    background: #DCD7C9;
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
    letter-spacing: 1.5px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.darkGreen};
    background: ${({theme}) => theme.colors.darkGreen};
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(44, 54, 57, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    
    &:hover {
        background-color: #8D5950;
        box-shadow: 0px 15px 20px rgba(141, 89, 80, 0.4);
    color: white;
    transform: translateY(-2px); */
    }
`

// export const FormContainer = styled.div`
//     width: 100%;
//     height: auto;
//     background-color: #fff;
//     border-radius: 10px;

// `
// export const StyledForm = styled.form`

// `
// export const InputWrapper = styled.div`
//     border: 2px solid transparent;
//     width: 90%;
//     padding-left: 10px;
//     display: flex;
//     flex-direction: column;
// `
// export const InputStyled = styled.input`
//     width: 100%;
//     font-size: 1.5rem;
//     padding: 1rem;
//     border-bottom: 1px solid rgb(100, 21, 173);
//     border-left: 1px solid transparent;
//     border-right: 1px solid transparent;
//     border-top: 1px solid transparent;
//     /* outline: 0px transparent !important; */
// `
// export const MessageStyled = styled.textarea`
//     width: 100%;
//     font-size: 1.5rem;
//     border-bottom: 1px solid rgb(100, 21, 173);
//     border-left: 1px solid transparent;
//     border-right: 1px solid transparent;
//     border-top: 1px solid transparent;
//     /* outline: 0px transparent !important; */
// `

// export const ButtonStyled = styled.input`
//     position: absolute;
//     bottom: 20px;
//     right: 20px;
//     padding: 10px;
//     background-color: rgb(8, 8, 63);
//     color: #fff;
//     border: none;
//     border-radius: 5px;
//     padding: 12px 25px 12px 24px;
//     cursor: pointer;
// `
import { FormContainer, InputStyled, InputWrapper, MessageStyled, StyledForm } from "../styles/layout/Form.styled"

export const ContactForm = () => {
    return (
        <FormContainer>
        <StyledForm >
            <InputWrapper>
            <p>Name</p>
            <InputStyled type="text" placeholder="First and Last Name" />
            </InputWrapper>
            <InputWrapper>
            <p>Email</p>
            <InputStyled type="email" placeholder="email@domain.com" />
            </InputWrapper>
            <InputWrapper>
            <p>Message</p>
           <MessageStyled placeholder="Your message here." />
            </InputWrapper>
        </StyledForm>
        </FormContainer>
    )
}
// onSubmit={handleSubmit}
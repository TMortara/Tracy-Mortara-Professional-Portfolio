import { FormContainer, StyledButton, StyledInput, StyledLabel, StyledMessage } from "../styles/layout/Form.styled";
import React, { useRef } from 'react';

export const ContactForm = () => {

    const nameRef = useRef('');
    const emailRef = useRef('');
    const messageRef = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            message: messageRef.current.value
        }
        alert("Thank you for messaging me! \n" + JSON.stringify(data) )
    }

    return ( 
        <FormContainer className="container">
            <h1>
                Contact Me
            </h1>
            <form className="form" onSubmit={handleSubmit}>
                <StyledLabel>
                    First name
                </StyledLabel>
                <StyledInput type="text" name="name" tabIndex="1" placeholder="First and Last Name" ref={nameRef} required />
                <StyledLabel>Email</StyledLabel>
                <StyledInput type="email" name="email" tabIndex="2" placeholder="email@domain.com" ref={emailRef} required />
                <StyledLabel>Message</StyledLabel>
                <StyledMessage rows="6" name="message" tabIndex="3" placeholder="Add your message here" ref={messageRef} required />
                <StyledButton type="submit" className="send">Send Message</StyledButton>
            </form>
        </FormContainer>
    )
}
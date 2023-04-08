import { ButtonStyled, FormContainer, InputStyled, InputWrapper, MessageStyled, StyledForm } from "../styles/layout/Form.styled";
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

        alert("tadaaa!: \n" + JSON.stringify(data) + "Your data 😎")
    }

    return ( 
        <div className="container">
            <h1>
                Contact Me
            </h1>
            <form className="form" onSubmit={handleSubmit}>
                <p>
                    First name
                </p>
                <input type="text" name="name" tabIndex="1" placeholder="First and Last Name" ref={nameRef}/>
                <p>Email</p>
                <input type="email" name="email" tabIndex="2" placeholder="email@domain.com" ref={emailRef}/>
                <p>Message</p>
                <textarea rows="6" name="message" placeholder="Add your message here" ref={messageRef}/>
                <button type="submit" className="send">Send Message</button>
            </form>
        </div>
        // <FormContainer>
        // <StyledForm >
        //     <InputWrapper>
        //     <p>Name</p>
        //     <InputStyled type="text" placeholder="First and Last Name" />
        //     </InputWrapper>
        //     <InputWrapper>
        //     <p>Email</p>
        //     <InputStyled type="email" placeholder="email@domain.com" />
        //     </InputWrapper>
        //     <InputWrapper>
        //     <p>Message</p>
        //    <MessageStyled placeholder="Your message here." />
        //     </InputWrapper>
        //     <ButtonStyled type="submit" value="Send Message"/>
        // </StyledForm>
        // </FormContainer>
    )
}
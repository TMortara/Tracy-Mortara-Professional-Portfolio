import {
  FormContainer,
  StyledButton,
  StyledInput,
  StyledLabel,
  StyledMessage,
} from "../styles/layout/Form.styled";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  // const nameRef = useRef("");
  // const emailRef = useRef("");
  // const messageRef = useRef("");
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    // const data = {
    //     name: nameRef.current.value,
    //     email: emailRef.current.value,
    //     message: messageRef.current.value
    // }
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          alert("Thank you for messaging me!");
        },
        (error) => {
          alert("Your email was not sent. Please try again.", error.text);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <FormContainer className="container">
      <form ref={form} onSubmit={sendEmail}>
        <StyledLabel>Name</StyledLabel>
        <StyledInput
          type="text"
          name="name"
          tabIndex="1"
          placeholder="First and Last Name"
          // ref={nameRef}
          required
        />
        <StyledLabel>Email</StyledLabel>
        <StyledInput
          type="email"
          name="email"
          tabIndex="2"
          placeholder="email@domain.com"
          // ref={emailRef}
          required
        />
        <StyledLabel>Message</StyledLabel>
        <StyledMessage
          rows="6"
          name="message"
          tabIndex="3"
          placeholder="What's on your mind?!"
          // ref={messageRef}
          required
        />
        <StyledButton type="submit" value="Send">
          Send Message
        </StyledButton>
      </form>
    </FormContainer>
  );
};

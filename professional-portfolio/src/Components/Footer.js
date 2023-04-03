import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export const FooterWrapper = styled.div`
padding: 0 2rem;
display: flex;
width: 95%;
height: 6%;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
position: fixed;
bottom:0;
`
export const FooterIcons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Footer = () => {
    return (
        <FooterWrapper>
            <p>TM &copy; 2023</p>
            <FooterIcons>
                <p><a href="https://github.com/TMortara" target="_blank"><FaGithub size={'2rem'} /></a></p> 
                <p><a href="" target="_blank"><FaLinkedin size={'2rem'}/></a></p>
            </FooterIcons>
        </FooterWrapper>   
    );
};

export default Footer;
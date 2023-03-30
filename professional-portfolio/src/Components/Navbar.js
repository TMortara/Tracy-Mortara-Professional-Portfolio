import React, { useState } from "react";
import styled from "styled-components";

// import Menu from './Menu';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <NavWrapper>
            <Logo>Tracy Mortara</Logo>
            <Hamburger onClick={() => setIsOpen(!isOpen)}>
                <span />
                <span />
                <span />
                <span />
            </Hamburger>
            <Menu isOpen={isOpen}>
                <MenuLink href="/">About Me</MenuLink>
                <MenuLink href="#AboutMe">Portfolio</MenuLink>
                {/* <MenuLink href="#Skills">Skills</MenuLink> */}
                <MenuLink href="#Contact">Contact</MenuLink>
                <MenuLink href="#Resume">Resume</MenuLink>
            </Menu>  
        </NavWrapper>   
    );
};

const NavWrapper = styled.div`
padding: 0 2rem;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
background: white;
font-family: 'Raleway', sans-serif;

`

const Logo = styled.h1`
padding: 1rem 0;
color: blue;
text-decoration: none;
font-weight: 800;
font-size: 2.8rem;
font-family: 'Kristi', cursive;

`
const Hamburger = styled.div`
display: none;
flex-direction: column;
cursor: pointer;

span {
    height: 2px;
    width: 25px;
    background-color: orange;
    margin-bottom: 4px;
    border-radius: 5px;
}

@media (max-width: 768px) {
    display: flex;

}
`
const MenuLink = styled.a`
padding: 0.5rem 0.5rem;
cursor: pointer;
text-align: center;
text-decoration: none;
color: blue;
font-size: 1rem;

&:hover {
    color: red;
}
`
const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: relative;

@media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0")};

}
`



export default Navbar;
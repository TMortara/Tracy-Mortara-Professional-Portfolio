import {
  Hamburger,
  Nav,
  HamburgerLineOne,
  HamburgerLineTwo,
  HamburgerLineThree,
  NavList,
  NavItem,
  NavLink,
  Icons,
} from "../styles/layout/NavBar.styled";

import { useState } from "react";
import { NavItems } from "../../data/NavItems";

import { FaGithub, FaLinkedin } from "react-icons/fa";


export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Nav>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <HamburgerLineOne isOpen={isOpen} />
          <HamburgerLineTwo isOpen={isOpen} />
          <HamburgerLineThree isOpen={isOpen} />
        </Hamburger>
        <NavList isOpen={isOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItem
                key={index}
                index={index}
                isOpen={isOpen}
                onClick={() => setIsOpen(false)}
              >
                <NavLink href={navItem.href}>{navItem.text}</NavLink>
              </NavItem>
            ))}
                            <Icons>
                    <NavLink href="https://github.com/TMortara" target="_blank"><FaGithub /></NavLink>
                    <NavLink href="https://www.linkedin.com/in/tracymortara/" target="_blank"><FaLinkedin /></NavLink>
                </Icons>
          {/* {NavItems && NavItems.map((NavItem, index)) => (
            <NavItem key={index}>{console.log(index)};<a href=""></a></NavItem>
        ))} */}
        </NavList>
        {/* <div>Let's Connect</div> */}
      </Nav>
    </>
  );
};

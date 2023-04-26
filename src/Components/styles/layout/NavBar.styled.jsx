import styled from "styled-components";

export const Nav = styled.nav`
    height: 80px;
    width: 100%;
    padding: 0 20px;
    /* background-color: rgba(13, 13, 13, 0.5); */
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    z-index: 98;
    transition: all 1s ease-in-out;
`
export const Hamburger = styled.div`
    cursor: pointer;
    /* background: ${({theme}) => theme.colors.salmon}; */
    transition: ${({theme}) => theme.transition};
    padding: 0.7rem;
    border-radius: 5px;
    display: none;
    position: absolute;
    right: 20px;
    z-index: 999;

    @media (max-width: ${({theme}) => theme.mobile}) {
        display: inline-block;
    }
`

export const HamburgerLineOne = styled.div`
    width: 15px;
    height: 3px;
    margin: 5px 0;
    background: linear-gradient(
        135deg,
        rgba(191, 126, 4, 1) 0%,
        rgba(141, 89, 80, 1) 100%
    );
    transition: ${({theme}) => theme.transition};
    transform: ${({isOpen}) => isOpen ? 'rotate(180deg)' : "none"};

`

export const HamburgerLineTwo = styled.div`
    width: 30px;
    height: 3px;
    margin: 5px 0;
    background: linear-gradient(
        135deg,
        rgba(191, 126, 4, 1) 0%,
        rgba(141, 89, 80, 1) 100%
    );
    transition: ${({theme}) => theme.transition};
    transform: ${({isOpen}) => isOpen ? 'rotate(180deg)' : "none"};
`

export const HamburgerLineThree = styled.div`
    width: 15px;
    height: 3px;
    margin: 5px 0;
    margin-left: 15px;
    background: linear-gradient(
        135deg,
        rgba(191, 126, 4, 1) 0%,
        rgba(141, 89, 80, 1) 100%
    );
    transition: ${({theme}) => theme.transition};
    transform: ${({isOpen}) => isOpen ? 'rotate(180deg)' : "none"};

`
export const NavList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    font-size: 1rem;


    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 14rem;
        height: 100vh;
        background: ${({theme, isOpen}) => isOpen ? theme.colors.cream : theme.colors.mauve};
        color: ${({theme}) => theme.colors.lightPink};
        position: fixed;
        top: 0;
        right: ${({isOpen}) => isOpen ? "0" : "-24rem"};
        padding-top: 3rem;
        justify-content: flex-start;
        flex-direction: column;
        z-index: 998;
        transition: 0.5s;
    }
`
export const NavItem = styled.li`
    margin: 0.2rem 0.7rem;

    &:last-child {
        margin-right: 0;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        margin: 1.2rem 0;
    }
`

export const NavLink = styled.a`
      color: ${({theme}) => theme.colors.darkGold};

      &::after {
        content: "";
        display: block;
        height: 3px;
        width: 0%;
        background: ${({theme}) => theme.colors.mauve};
        transition: all ease-in-out 300ms;
      }

      &:hover {
        &::after {
            width: 100%;

        }
      } 
`

export const Icons = styled.div`
    display: none;

    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 150px;
        display: flex;
        align-items: center;
        justify-content: space-around;

        a {
            margin: 0 1rem;
            font-size: 2rem;
        }
    }
`

// export const Logo = styled.h1`
// padding: 1rem 0;
// text-decoration: none;
// font-weight: 800;
// font-size: 3rem;
// font-family: 'Kristi', cursive;
// color: white;
// `

// export const NavWrapper = styled.div`
// padding: 0 2rem;
// display: flex;
// width: 95%;
// justify-content: space-between;
// align-items: center;
// flex-wrap: wrap;
// position: fixed;
// top:0;
// `
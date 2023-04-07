import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    background: ${({theme}) => theme.colors.green};
    color: ${({theme}) => theme.colors.darkGold};
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    font-size: 1rem;
    scroll-behavior: smooth;
}

a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.salmon};

    &:hover {
        color: ${({theme}) => theme.colors.white};
    }
}
ul {
    list-style: none;
}
/* hr {
   background: linear-gradient(
    to right,
    ${({theme}) => theme.colors.white} 0%,
    ${({theme}) => theme.colors.white} 100%
   );
   border: 0;
   height: 1px;
} */

`;
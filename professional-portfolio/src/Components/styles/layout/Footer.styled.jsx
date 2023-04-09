import styled from "styled-components";

export const StyledFooter = styled.footer`
    height: 80px;
    width: 100%;
    padding: 0 20px;
    /* background-color: rgba(13, 13, 13, 0.5); */
    display: flex;
    align-items: center;
    justify-content: space-around;
    /* position: fixed;
    z-index: 98;
    transition: all 1s ease-in-out; */
`

export const FooterIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    font-size: 1.5rem;


    @media (max-width: ${({theme}) => theme.mobile}) {
        width: 150px;
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: space-around;

        a {
            margin: 0 1rem;
            font-size: 2rem;
        }
    }
`

export const FooterText = styled.p`
    font-size: 1rem;

    span {
        font-family: 'Kristi', cursive;
        font-size: 2rem;
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        font-size: 0.8rem;

        a {
            margin: 0 1rem;
            font-size: 2rem;
        }
    }
`
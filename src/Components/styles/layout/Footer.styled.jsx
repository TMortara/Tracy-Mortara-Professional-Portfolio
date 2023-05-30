import styled from "styled-components";

export const StyledFooter = styled.footer`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const FooterIcons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.5rem;

    a {
        margin: 0 1rem;
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        a {
            font-size: 1.5rem;
        }
    }
`

export const FooterText = styled.p`
    font-size: 1rem;

    span {
        font-family: 'Kristi', cursive;
        font-size: 2rem;
        margin-right: 0.5rem;
    }
    
    @media (max-width: ${({theme}) => theme.mobile}) {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 0.8rem;

        a {
            margin: 0 1rem;
            font-size: 2rem;
        }
    }
`
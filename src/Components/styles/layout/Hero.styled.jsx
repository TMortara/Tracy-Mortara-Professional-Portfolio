import styled from "styled-components";

export const StyledHeroSection = styled.section`
width: 100%;
height: 90vh;
background-size: 100%;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;

@media (max-width: ${({theme}) => theme.mobile}) {
       width: 100%;    
    }
`

export const HeroTitle = styled.h1`
    width: 100%;
    max-width: 58rem;
    color: ${({theme}) => theme.colors.darkGold};
    font-family: 'Kristi', cursive;
    font-size: 8rem;
    font-weight: 500;

    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 5rem;
    }
`

export const HeroText = styled.div`
    font-size: 1.4rem;
    margin: 0.4rem;
    color: ${({theme}) => theme.colors.beige};

    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 1rem;
    }
`

export const HeroIcons = styled.div`
    font-size: 1.5rem;
    margin: 0.5rem;

    a {
        padding: 0.5rem;
    }
`
import styled from "styled-components";

export const StyledHeroSection = styled.section`
width: 100%;
height: 90vh;
/* background: url("./images/paper.jpg") center no-repeat; */
/* opacity: 0.8; */
background-size: 100%;
position: relative;
display: flex;
align-items: center;
justify-content: center;
text-align: center;

@media (max-width: ${({theme}) => theme.mobile}) {
       width: 100%;    
    }

`

// export const HeroContent = styled.div`
// `

export const HeroTitle = styled.h1`
    width: 100%;
    max-width: 58rem;
    color: ${({theme}) => theme.colors.darkGold};
    font-family: 'Kristi', cursive;
    font-size: 8rem;

    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 5rem;
    }
`
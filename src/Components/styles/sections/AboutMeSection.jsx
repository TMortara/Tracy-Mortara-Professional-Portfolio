import styled from "styled-components";

export const AboutMeSectionStyled = styled.section`
    min-height: 90vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10rem 0 5rem 0; 

    @media (max-width: ${({theme}) => theme.mobile}) {
       flex-direction: column;
       /* align-items: flex-start; */
    }
`

export const HeadshotContainer = styled.div`
    height: 13rem;
    width: 13rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    /* margin-right: 2.5rem; */
    position: relative;

    @media (max-width: ${({theme}) => theme.mobile}) {
        margin-bottom: 3rem;
    }
`

export const Headshot = styled.img`
    height: 12rem;
    width: 12rem;
    border-radius: 50%;
    position: absolute;
    z-index: 4;
`
export const HeadshotBorder = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    position: absolute;
    z-index: 2;
    background: ${({theme}) => theme.colors.gold};
`
export const HeadshotBorderTwo = styled.div`
    height: 12.5rem;
    width: 12.5rem;
    border-radius: 50%;
    position: absolute;
    z-index: 3;
    background: ${({theme}) => theme.colors.white};
`
export const AboutTextContainer = styled.div`
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;

    p {
        font-size: 1.4rem;
        text-align: justify;
        margin-bottom: 1.5rem;

        span {
            font-size: 2.2rem;
        }
    }
    span {
        font-family: 'Kristi', cursive;
        font-size: 3.5rem;
        color: ${({theme}) => theme.colors.beige};
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
        p {
            font-size: 1.2rem;
            text-align: center;
        }
    }
`

export const Title = styled.span`
    font-family: 'Kristi', cursive;
    font-size: 2rem;
`

export const AboutHeading = styled.h1`
    font-size: 1.5rem;
    margin-bottom: 20px;

    @media (max-width: ${({theme}) => theme.mobile}) {
        font-size: 1.5rem;
        text-align: center;

        span {
            font-size: 2.2rem;
            color: ${({theme}) => theme.colors.beige};
        }
    }
`
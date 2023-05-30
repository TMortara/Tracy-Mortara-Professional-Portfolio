import styled from "styled-components";

export const ProjectStyledSection = styled.div`
    min-height: 90vh;
    padding-top: 5rem 0 5rem 0;
    width: 100%;
`

export const SingleProject = styled.div`
    display: flex;
    align-items: center;
    

    &:nth-child(even) {
        flex-direction: row-reverse;
        margin: 3rem 0;
        
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
       flex-direction: column;

       &:nth-child(even) {
        flex-direction: column;
        margin: 1rem 0;
        }
    }
`
export const ProjectImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
    perspective: 1000px;
    padding-right: 3rem;

    &:nth-child(even) {
    }

    img {
        width: 100%;
        border-radius: 10px;
        transition: ${({theme}) => theme.transition};
    }

    img:hover {
        transform: scale(1.2);
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
       margin: 0.5rem 0.5rem;
       justify-content: center;
       padding-right: 0;
       width: 70%;

       img {
        width: 140%;
        border-radius: 8px;
       }

       img:hover {
        transform: scale(1.1);
        transition: ${({theme}) => theme.transition};
    }
    }
`
export const ProjectText = styled.div`
    flex: 1;
    
    h1 {
        font-size: 3.1rem;
        margin-bottom: 2rem;
        font-family: 'Kristi', cursive;
        font-weight: 500;

        @media (max-width: ${({theme}) => theme.mobile}) {
            text-align: center;
        }
    }
    p {
        font-size: 1.4rem;
        text-align: justify;
        text-justify: distribute;
        padding-right: 3.5rem;

        @media (max-width: ${({theme}) => theme.mobile}) {
            padding-right: 0;
            font-size: 1.2rem;
            text-align: center;
        }
    }
    div {
        display: flex;
        align-items: center;

        a {
            display: flex;
            align-items: center;
            margin: 2rem 2rem 2rem 0;
            font-size: 1rem;

            svg {
                margin-right: 0.5rem;
                color: ${({theme}) => theme.colors.cream};
            }

            @media (max-width: ${({theme}) => theme.mobile}) {
            font-size: 1rem;
            }
        }
        @media (max-width: ${({theme}) => theme.mobile}) {
            justify-content: center;
        }
    }
`

export const Tags = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;

    span {
       margin-bottom: 0.5rem;
       display: inline-block;
       padding: 7px;
       margin-top: -1rem;
       margin-right: 1rem;
       font-size: 1rem;
       border: 1px solid #2C3639;
       border-radius: 10px;
       background-color: #2C3639;
       color: ${({theme}) => theme.colors.cream};

    @media (max-width: ${({theme}) => theme.mobile}) {
        justify-content: center;
        font-size: 0.9rem;
    }
    }
`

export const OtherProjectsSection = styled.section`
    min-height: 60vh;
    padding: 5rem 0 5rem 0;
    width: 100% auto;
`

export const OtherProjectItems = styled.div`
    display: flex;

    @media (max-width: ${({theme}) => theme.mobile}) {
        flex-direction: column;
    }
`

export const SingleOtherProject = styled.div`
    min-height: 20rem;
    border-radius: 10px;
    background: #2C3639;
    display: flex;
    flex-direction: column;
    justify-content: start;
    flex: 1;
    padding: 1.2rem;
    margin-right: 2rem;
    transition: all 300ms ease-in-out;

    &:hover {
        transform: translateY(-1rem);
    }

    &:last-child {
    }

    @media (max-width: ${({theme}) => theme.mobile}) {
            margin: 1rem;
        }
`
export const SingleOtherProjectText = styled.div`
    font-size: 1rem;

    h1 {
        font-family: 'Kristi', cursive;
        font-size: 2.5rem;
        font-weight: 500;
        text-align: center;
        margin: 0.8rem 0;
        padding-bottom: 0.2rem;
    }
    p {
        font-size: 1.2rem;
        text-align: center;
        text-justify: distribute; 
               
        padding-bottom: 1.5rem;
    }
    div {
        display: flex;
        justify-content: center;
        align-items: center;

        a {
            display: flex;
            align-items: center;
            font-size: 1rem;
            padding: 0.5rem;

            svg {
                margin-right: 0.5rem;
                color: ${({theme}) => theme.colors.cream};
                
            }

            @media (max-width: ${({theme}) => theme.mobile}) {
            font-size: 0.9rem;
            }
        }

        @media (max-width: ${({theme}) => theme.mobile}) {
            justify-content: center; 
        }
    }

`

export const OtherProjectTags = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;

    span {
        background: #3F4E4F;
        margin-bottom: 0.5rem;
        display: inline-block;
        padding: 4px;
        margin-right: 1rem;
        font-size: 1rem;
        border: 1px solid #2C3639;
        border-radius: 10px;
        color: ${({theme}) => theme.colors.cream};
    }
`
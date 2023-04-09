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
        /* transform: rotateY(30deg); */
        transition: ${({theme}) => theme.transition};
    }
    img:hover {
        transform: scale(1.2);
        /* transform: rotateY(0deg);
        transition: ${({theme}) => theme.transition}; */
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
       margin: 0.5rem 0.5rem;
       justify-content: center;

       img {
        /* transform: scale(0); */
        width: 80%;
        border-raidus: 8px;
       }
       img:hover {
        transform: scale(1.5);
        transition: ${({theme}) => theme.transition};
        /* transform: rotateY(0deg);
        transition: ${({theme}) => theme.transition}; */
    }
    }
`
export const ProjectText = styled.div`
    flex: 1;
    
    
    h1 {
        font-size: 3rem;
        margin-bottom: 2rem;
        font-family: 'Kristi', cursive;

        @media (max-width: ${({theme}) => theme.mobile}) {
            text-align: center;
        }
    }
    p {
        font-size: 1.4rem;
        text-align: justify;
        padding-right: 3.5rem;
    }
    div {
        display: flex;
        align-itmes: center;

        a {
            display: flex;
            align-items: center;
            margin: 2rem 2rem 2rem 0;
            font-size: 1rem;

            svg {
                margin-right: 0.5rem;
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

export const Tags = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 0.5rem;

    span {
       margin-bottom: 0.5rem;
       display: inline-block;
       padding: 7px;
       margin-right: 1rem;
       font-size: 1rem;
       border: 1px solid #2C3639;
       border-radius: 10px;
       background-color: #2C3639;



    @media (max-width: ${({theme}) => theme.mobile}) {
        justify-content: center;
        font-size: 0.9rem;
    }
    }
`
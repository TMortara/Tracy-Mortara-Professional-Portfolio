import styled from "styled-components";

export const SectionHeading = styled.div`
    text-align: center;
    margin-bottom: 2rem;

    h1 {
        display: inline-block;
        font-family: 'Kristi', cursive;
        font-size: 4rem;
        margin: 0.5rem 0 1.5rem 0;
        position: relative;

        &::after {
            content: '';
            display: block;
            height: 2px;
            width: 50%;
            background: ${({theme}) => theme.colors.mauve};
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -7px;
        }
    }

    p {
        margin-top: 1rem;
        font-size: 1.4rem;
    }
    @media (max-width: ${({theme}) => theme.mobile}) {
        text-align: center;
    }
`
import styled from "styled-components";

export const SectionHeading = styled.div`
    text-align: center;
    margin-bottom: 6rem;

    h1 {
        display: inline-block;
        font-family: 'Kristi', cursive;
        font-size: 3.5rem;
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
    @media (max-width: ${({theme}) => theme.mobile}) {
        text-align: left;
    }
`
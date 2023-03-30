import styled from "styled-components"

export const Hero = styled.div`
color: white;
background-color: blue;
height: 500px;
width: 100%;
position: relative;
`
export const Title = styled.h1`
color: white;
background-color: orange;
position: absolute;
left: 5%;
bottom: 5%;
`

const HeroComponent = (props) => {
    console.log(props)
    return (<Hero>
        <Title>I'm on the bottom left</Title>
    </Hero>)
}

export default HeroComponent
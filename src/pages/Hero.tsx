import React from 'react'
import styled from 'styled-components'

const Hero = () => {
  return (
    <div>
     <Container>
     <Image>Image</Image>
     <Text>
        <Wrap>
        <Bd>
        
        </Bd>Wrap
        <Sm style={{fontSize: "15px"}}></Sm>
        </Wrap>
     </Text>
     </Container>
    </div>
  )
}

export default Hero

const Sm = styled.div``;
const Bd = styled.div`
font-size: 25px;
@media sreen and (min-width:1024px){
    font-size: 40px;
}
`;
const Wrap = styled.div`
width: 90%;
height: 90%;
`;
const Text = styled.div`
display: flex;
justify-content:center;
align-items:center;

@media sreen and (min-width:680){
   height: 100%;
}

background-color: yellow;
`;

const Image = styled.div`
width: 100%;
height:200px;

@media sreen and (min-width:680px){
   height:n 100%;
}
background-color: red;
color: white;
`;

const Container = styled.div`
background-color: purple;
@media screen and (min-width: 680px){
    display: flex;
    height: 300px;
    align-items: center;
}
`;

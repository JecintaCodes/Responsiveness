import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <div style={{width: "100%", height:"100%",display:'flex',justifyContent:"center"}}>

      <Container>

      <Footing>
      <div style={{fontWeight:"bold", fontSize:"25px"}}>Text</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      </Footing>

      <Footing>
      <div style={{fontWeight:"bold", fontSize:"25px"}}>Title</div>
      <div>ContentimcmNUP7BJBOQBHBUHJKIKUUYBTUGFEFNGTGN</div>
      <div>ContentimcmNUP7BJBOQBHBUHJKIKUUYBTUGFEFNGTGN</div>
      <div>ContentimcmNUP7BJBOQBHBUHJKIKUUYBTUGFEFNGTGN</div>
      <div>ContentimcmNUP7BJBOQBHBUHJKIKUUYBTUGFEFNGTGN</div>
      </Footing>

      <Footing>
      <div style={{fontWeight:"bold", fontSize:"25px"}}>Title</div>
      <div>ContentimcmNUP7BJBOQBHBUHJKIKUUYBTUGFEFNGTGN</div>
      <div>ContentimcmNUP7BJBOQBHBUHJKIKUUYBTUGFEFNGTGN</div>
      <div>ContentimcmNUP7BJBOQBHBUHJKIKUUYBTUGFEFNGTGN</div>
      <div>ContentimcmNUP7BJBOQBHBUHJKIKUUYBTUGFEFNGTGN</div>
      </Footing>

      <Footing>
      <div style={{fontWeight:"bold", fontSize:"25px"}}>Title</div>
      <div>ContentimcmNUP7BJBOQBHBUHJKIKUUYBTUGFEFNGTGN</div>
      <div>ContentimcmNUP7BJBOQBHBUHJKIKUUYBTUGFEFNGTGN</div>
      <div>ContentimcmNUP7BJBOQBHBUHJKIKUUYBTUGFEFNGTGN</div>
      <div>ContentimcmNUP7BJBOQBHBUHJKIKUUYBTUGFEFNGTGN</div>
      </Footing>

      <Footing>
      <div style={{fontWeight:"bold", fontSize:"25px"}}>Text</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      </Footing>

      <Footing>
      <div style={{fontWeight:"bold", fontSize:"25px"}}>Text</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      </Footing>

      <Footing>
      <div style={{fontWeight:"bold", fontSize:"25px"}}>Text</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      <div>Content</div>
      </Footing>

      <Conditioins>
      Lorem ipsum dolor sit amet consectetur
      Lorem ipsum dolor sit amet consectetur
      Lorem ipsum dolor sit amet consectetur
      </Conditioins>

      </Container>

    </div>
  )
}

export default Footer

const Conditioins = styled.div`
padding-bottom: 10px;
`;

const Footing = styled.div`
display: flex;
flex-direction: column;
gap: 15px;
align-items:center;
`;

const Container = styled.div`
margin-top: 50px;
display: flex;
flex-wrap: wrap;
gap: 30px;
justify-content: space-evenly;
width: 90%;
`;

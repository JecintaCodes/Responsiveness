import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
      <Container>
      <Nav>=</Nav>
      <Desktop>
      <div>Home</div>
      <div>About</div>
      <div>Contact</div>
      <div>Views</div>
      </Desktop>
      </Container>
      <div>button</div>
    </div>
  )
}

export default Header

// const Container = styled.div``;
const Desktop = styled.div`
display:none;
@media screen and (min-width: 680px) {
  display: flex;
}
gap: 20px;
`;
const Nav = styled.div`
@media screen and (min-width: 680px){
  display: none;
}
`;
const Container = styled.div`
width: 100%;
height: 80px;
background-color:blue;
color: white;
display: flex;
align-items:center;
justify-content: center;
`;

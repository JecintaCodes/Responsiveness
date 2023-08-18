import React from 'react'
import styled from 'styled-components'

const Sider = () => {
  return (
    <div>
     <Container>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     <Card/>
     </Container> 
    </div>
  )
}

export default Sider
const Card = styled.div`
width: 90%;
height: 200px;
back-ground-color:red;
border-radius: 10px;
@media screen and (min-width:700px){
    width: 300px;
}
`;

const Container = styled.div`
display: flex;
justify-content: center;
flex-wrap:wrap;
gap: 20px;
margin-top: 20px;
overflow-x:hidden;
width: 100vw;
height: fit-content;
`;

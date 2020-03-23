import React from 'react';
import Pink_Virus from './Pink_Virus.png';
import Blue_Virus from './Blue_Virus.png';
import styled, { keyframes } from "styled-components"

import { Box, Grommet, Nav, Header } from "grommet";

import { grommet } from "grommet/themes";
import { Link} from "react-router-dom";


function NavBar(props) {


  

const Button = styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;


  return (
    <div className="nav-bar">

        <Grommet theme={grommet}>
            <Header background="dark-1" pad="medium">
              <Box direction="row" align="center" gap="small">
               CORONA QUEST!
              </Box>
              <Nav direction="row">
              <div>
                    <Rotate><img src={Pink_Virus} alt="pink virus"></img></Rotate>
                      <Button><div><Link to="/scoreboard">Scoreboard</Link></div></Button> 
                      <Button color="default" ><div><Link to="/">Login</Link></div></Button>
                      <Button color="default" ><div><Link to="/startscreen">Play Game</Link></div></Button>
                      <Rotate><img src={Blue_Virus} alt="blue virus"></img></Rotate>
                    </div>
              </Nav>
            </Header>
          </Grommet>




{/* full theme={customTheme} */}
        {/* <Grommet >
              <Box background="dark-1" pad="small" fill>
                <Box direction="row" pad={{ vertical: "small" }}>
                  <Nav width="small" margin={{ right: "small" }} style={{paddingTop: '125px'}}>
                    <div>
                    <Rotate><img src={Pink_Virus}></img></Rotate>
                      <Button><div><Link to="/scoreboard">Log In</Link></div></Button> 
                      <Button color="default" ><div><Link to="/startscreen">Play Game</Link></div></Button>
                      <Button color="default" ><div><Link to="/">Scoreboard</Link></div></Button>
                      <Rotate><img src={Blue_Virus}></img></Rotate>
                    </div>
                      
                  </Nav>
                  <Main style={{fontSize: 100 + 'px', paddingTop: '300px'}}>Welcome to Corona Quest!</Main>
                </Box>
              </Box>
        </Grommet> */}



        {/* <Rotate><img src={Pink_Virus}></img></Rotate>
        <Button color="default"><div><Link to="/scoreboard">Scoreboard</Link></div></Button>
        <Button color="default" ><div><Link to="/startscreen">Play Game</Link></div></Button>
        <Button color="default" ><div><Link to="/">Log In</Link></div></Button>
        <Rotate><img src={Blue_Virus}></img></Rotate> */}
    </div>
  );
}

export default NavBar;
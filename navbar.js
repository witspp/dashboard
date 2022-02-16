import React from "react";

import { Body, Nav, Col1, Col2, Col3,Mid,Part1,Part2,Footer } from "../css/navbarcss";

const navbar = () => {
  return (
    <Body>
      <Nav>
        <Col1>
        <h1>WELCOME</h1>

        </Col1>

        <Col2>
        </Col2>

        <Col3>
          <h>Home</h>
          <h>About</h>
          <h>contact Us</h>
        </Col3>
      </Nav>


      <Mid>
        <Part1>
          
        </Part1>
        <Part2>
         
        </Part2>

      </Mid>


      <Footer>
      <h1>SERVICES</h1>
      <h4>SOCIAL MEDIA</h4>
      {/* <h1>SOCIAL MEDIA</h1> */}
      </Footer>
    </Body>
  );
};

export default navbar;

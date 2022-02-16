import styled from "styled-components";

const Body = styled.div`
  
  border-radius: 20px;
  height: 100px;


`;

const Nav = styled.div`
  display: grid;
  grid-template-columns: 6fr auto 5fr;
`;

const Col1 = styled.div`

 
  border-radius: 30px;
  background-color:rgb(30,3,65);
  color: white;
  font-size: 40px;
`;

const Col2 = styled.div`
  background-color: white;
`;

const Col3 = styled.div`
display:flex;
width:100%;
justify-content:space-around;
font-size:45px;
`;

const Mid = styled.div`
display: grid;
grid-template-columns:auto auto ;

`;

const Part1 = styled.div`


background-color:;
`;


const Part2 = styled.div`
border-top-right-radius:25px;
height:550px;
width:1100px;
background-color:white;
`;

const Footer = styled.div`
height:250px;
width:100%;
background-color:rgb(188,189,188);
border-color:black;
`;


export { Body, Nav, Col2, Col1, Col3,Mid,Part1,Part2,Footer};

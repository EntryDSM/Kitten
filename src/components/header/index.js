import React, { useState, useEffect} from 'react';
import styled from "styled-components";
import Entryheader from "../../assets/images/entry-header-image.png";

function Header() {
  const [height, setHeight] = useState(120);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY > 200){
        setHeight(80);
      }else{
        setHeight(120);
      }
    })
  }, [])
  return (
      <MainHeader height={height}>
        <Entrylogo width="322px" height="95.12px" src={Entryheader} />
          <Navbar>
            <A href="#main">RECEIPT</A>
            <A href="#entryDSM">ENTRY&nbsp;DSM</A>
            <A href="#portfolio">PORTFOLIO</A>
            <A href="#history">HISTORY</A>
            <A>TEAM</A>
            <A>MEMBER Q&amp;A</A>
          </Navbar>
    </MainHeader>
  );
}

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 867px;
`;

const MainHeader = styled.header`
  font-family: Arial;
  font-weight: 400;
  position: fixed;
  z-index: 98;
  top: 0;
  left: 0;
  right: 0;
  background-color: #FFFFFF;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: ${props => `${props.height}px`};
  transition:0.25s;
`;
const Entrylogo = styled.img`
  margin-top: 25px;   
`;

const A = styled.a`
  font-size: 20px;
  color: black;
  text-decoration: none;
`;

export default Header;
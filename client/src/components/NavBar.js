import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from '../styles'

 
const NavBar = ({ props, user, setUser})=> {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }
 
 const [collapsed, setCollapsed] = useState(true);
 
 const toggleNavbar = () => setCollapsed(!collapsed);
 
 return (
   <div>
    <Logo>
       <Link style={{color: "rgb(212,175,55)"}} to="/"> BRIDE<span style={{textDecoration: "line-through", color: "rgb(212,175,55)"}}>zilla</span>
     <p style={{marginTop: "0px", fontSize: "20px", color: "rgb(212,175,55)" }}>every bride's dream app</p></Link>
     </Logo>
     <Navbar color="faded" light>
       <NavbarBrand style={{color: "rgb(212,175,55)", fontFamily: "Permanent Marker, cursive"}} href="/" className="mr-auto">Menu</NavbarBrand>
       <NavbarToggler style={{color: "rgb(212,175,55)"}} onClick={toggleNavbar} className="mr-2" />
       <Collapse isOpen={!collapsed} navbar>
         <Nav navbar>
           <NavItem>
             <NavLink href="/new">Bride's Checklist</NavLink>
           </NavItem>
           <NavItem>
             <NavLink href="/bridesmaid">Bridesmaids</NavLink>
           </NavItem>
           <NavItem>
             <Button onClick={handleLogoutClick}>Log Out</Button>
           </NavItem>
         </Nav>
       </Collapse>
     </Navbar>
   </div>
 );
}
 
export default NavBar;

const Logo = styled.h1`
 font-family: "Permanent Marker", cursive;
 font-size: 3rem;
 margin: 0;
 line-height: 1;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 8px;
 
 a {
   color: inherit;
   text-decoration: none;
 }
`;



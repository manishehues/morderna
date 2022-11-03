import React, { useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink , Link} from 'react-router-dom';
import $ from 'jquery';
function Header(){

  useEffect(() => {
    $(window).scroll(function(){
      if ($(this).scrollTop() > 5) {
         $('#header').addClass('header-scrolled');
      } else {
         $('#header').removeClass('header-scrolled');
      }
    });
  });

    return(
        <>
        
        <header id="header" class="fixed-top d-flex align-items-center ">
            <div class="container d-flex justify-content-between align-items-center">
                <div class="logo">
                    <h1 class="text-light"><Link to="/"><span>Moderna</span></Link></h1>        
                </div>
                <Navbar  expand="lg">                  
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto">
                          <NavLink to="/">Home</NavLink>
                          <NavLink to="./about">About</NavLink>
                          <NavLink to="./services">Services</NavLink>
                          <NavLink to="./portfolio">Portfolio</NavLink>
                          <NavLink to="./team">Team</NavLink>
                          <NavLink to="./blog">Blog</NavLink>                          
                      </Nav>
                    </Navbar.Collapse>                  
                </Navbar>                
            </div>
        </header>
        </>
    )
}

export default Header;
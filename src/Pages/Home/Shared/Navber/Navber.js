import React from 'react';
import { Nav, Container, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Navber.css'
import logo from '../../../../Images/logo (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart, faUserCircle  } from '@fortawesome/free-solid-svg-icons';

import { HashLink } from 'react-router-hash-link';


function Navber() {
  const element = <FontAwesomeIcon icon={faShoppingCart} />
  const user =<FontAwesomeIcon icon={faUserCircle} />


  return <>
    <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <NavLink to="/home"><img src={logo} alt="" /></NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className=''>

          <Nav.Link className='link-style ms-auto' as={Link} to="/home"><h6 >Home</h6></Nav.Link>
          <HashLink className='link-style' style={{textDecoration:'none'}} smooth to="/#shop-container"><h6>Shop</h6></HashLink>
          <Nav.Link className='link-style' as={Link} to="/"><h6>Checkout</h6></Nav.Link>
          <Nav.Link className='link-style' as={Link} to="/"><h6>Blog</h6></Nav.Link>
          <Nav.Link className='link-style' as={Link} to="/"><h6>Contact Us</h6></Nav.Link>
         
          <Nav.Link className='link-style' as={Link} to="/login"><h6>{user}</h6></Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>

  </>
}

export default Navber;
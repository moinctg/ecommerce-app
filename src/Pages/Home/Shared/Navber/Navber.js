import React from 'react';
import { Nav, Container, Navbar,Button} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Navber.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faShoppingCart, faUserCircle  } from '@fortawesome/free-solid-svg-icons';

import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';


function Navber() {
  const element = <FontAwesomeIcon icon={faShoppingCart} />
  const icon =<FontAwesomeIcon icon={faUserCircle} />
  // const { user, logOut } = useAuth()

  return <>
  <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <div className='row'>
          <div className='col-6-lg'>
           <p>Free shipping on all UK orders!</p>
           </div>
           <div className='col-6-md'>
                            
                                <div className='row'>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-facebook fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-instagram fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-twitter fontawesome-style"></i>
                                    </a>
                                </div>
                                <div className='col-3 mx-auto'>
                                    <a href="#">
                                    <i class="fab fa-instagram fontawesome-style"></i>
                                    </a>
                                </div>
                                </div>
                             </div>
                             </div>
          </Navbar.Brand>
        </Container>
      </Navbar>
    <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
      <Container>
      <Navbar.Brand Link="/home"className='logo'>Funshion</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className=''>

          <Nav.Link className='link-style ms-auto' as={Link} to="/home"><h6 >Home</h6></Nav.Link>
          <Nav.Link className='link-style' as={Link} to="/contact"><h6>About Us</h6></Nav.Link>
          <HashLink className='link-style' style={{textDecoration:'none'}} smooth to="/#shop-container"><h6>Shop</h6></HashLink>
          <Nav.Link className='link-style' as={Link} to="/pages"><h6>Pages</h6></Nav.Link>
          <Nav.Link className='link-style' as={Link} to="/blog"><h6>Blog</h6></Nav.Link>
   
          {/* <a>
            {
              user ?.email ?
               <>
               {user.displayName} {icon} <Button onClick={ logOut }>Logout</Button>
                </>
               
               : <Nav.Link className='link-style' as={Link} to="/login"><Button>Login</Button></Nav.Link>
            }
            
          </a> */}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default Navber;

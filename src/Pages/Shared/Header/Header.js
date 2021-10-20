import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Header.css';
const Header = () => {
  const {user,logOut} = useAuth();
  console.log(user);
    return (
      <>
      <Navbar bg="dark" variant="dark " sticky="top" collapseOnSelect expand="lg">
          <Container>
              <Navbar.Brand className="nav-head">Trust Medical Center</Navbar.Brand>
              <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end nav">
                  
                  <Link  to="/home">Home</Link>
                  <Link to="/services">Services</Link>
                  <Link  to="/about">About Us</Link>
                  <Link to="/pricing">Pricing</Link>
                  {user?.email && <Navbar.Text>
                  Signed in as: <a href="#login">{user?.displayName}
                  </a>
                  </Navbar.Text>}
                  {user?.email ?<Button onClick={logOut} variant="warning">LogOut</Button>:
                      <Link  to="/login">LogIn</Link>}
                  
              </Navbar.Collapse>
              
          </Container>
      </Navbar>
  </>
    );
};

export default Header;
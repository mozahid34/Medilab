import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar fixed="top" bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/home">MediLab</Navbar.Brand>
    <Nav className="me-auto">
      <NavLink className="navi" to="/home">Home</NavLink>
      <NavLink className="navi" to="/doc">Doctor</NavLink>
      <NavLink className="navi" to="/appoint">Appointment</NavLink>
      <NavLink className="navi" to="/contact">contact</NavLink>
      <NavLink className="navi" to="/login">Log In</NavLink>
    </Nav>
    </Container>
  </Navbar>
        </div>
    );
};

export default Header;
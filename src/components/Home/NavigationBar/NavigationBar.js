import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <Navbar  expand="lg">
            <Container>
                <Navbar.Brand href="#home">Doctors Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Dental Services</Nav.Link>
                        <Nav.Link href="#link">Reviews</Nav.Link>
                        <Nav.Link href="#link">Blog</Nav.Link>
                        <Nav.Link href="#link">Contuct Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;

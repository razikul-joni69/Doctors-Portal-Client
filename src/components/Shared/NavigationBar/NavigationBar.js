import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">Doctors Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">
                            <Link to="home">Home</Link>
                        </Nav.Link>
                        <Nav.Link href="appointmetn">
                            <Link to="appointment">Appointment</Link>
                        </Nav.Link>
                        <Nav.Link href="#link">
                            <Link to="/dashboard/appointment">Dashboard</Link>
                        </Nav.Link>
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

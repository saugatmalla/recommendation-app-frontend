import { Navbar, Container, Nav } from "react-bootstrap";
import React from "react";

export default function Header() {
    return (
        <div>
            <Navbar bg="light" expand="sm">
                <Container id="nav">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About Us</Nav.Link>
                    <Nav.Link href="#">Coupnes</Nav.Link>
                    <Nav.Link href="#">Shopping List</Nav.Link>
                    <Nav.Link href="#">Search product</Nav.Link>
                    <Nav.Link href="#">Flyer</Nav.Link>
                    <Nav.Link href="#">Coupnes</Nav.Link>
                    <Nav.Link href="#">Shopping List</Nav.Link>
                    <Nav.Link href="#">Search product</Nav.Link>
                </Container>
            </Navbar>
        </div>

    )
}
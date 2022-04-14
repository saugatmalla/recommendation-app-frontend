import React from "react";
import { Link, useLocation } from 'react-router-dom'
import { Navbar, Container, Nav } from "react-bootstrap";



export default function Header() {
    console.log(useLocation())
    return (
        <div>
            <Navbar bg="light" expand="sm">
                <Container id="nav">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>

                    {useLocation().pathname === "/login" ?
                        (<Nav.Link as={Link} to="/registration">Register</Nav.Link>) :
                        useLocation().pathname === "/registration" ?
                            (<Nav.Link as={Link} to="/login">Login</Nav.Link>) :
                            null}

                </Container>
            </Navbar>
        </div >
    )
}
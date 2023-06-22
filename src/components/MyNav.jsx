import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class navigationBar extends Component {
    render() {
        return (
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Sci-Fi BookShop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Browse</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        )

    }
}
export default navigationBar

/* FUNCTIONAL
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavigationBar = () => {
    return (
        <Navbar bg="primary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Sci-Fi BookShop</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About</Nav.Link>
                    <Nav.Link href="#pricing">Browse</Nav.Link>
                    <input
                type="text" 
                 
                value={searchText} 
                onChange={this.searchChange} 
                placeholder="search by title"
                 />
                </Nav>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;*/
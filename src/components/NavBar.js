import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import PropTypes from 'prop-types';
//todo : replace with a logo  and its href should be the home page
//todo : fix the Routes  and active one's
const NavBar = props => {

    return (
        <Navbar variant="dark" expand="sm" style={{backgroundColor: props.color}}>
            <Navbar.Brand href="/home">Ashkan-Esz</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse className="justify-content-left">
                <Nav>
                    <Nav.Item as="li" className="pl-3 pr-3">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>

                    <Nav.Item as="li" className="pl-3 pr-3">
                        <LinkContainer to="/rezome">
                            <Nav.Link>Rezome</Nav.Link>
                        </LinkContainer>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

NavBar.propTypes={
    color : PropTypes.string.isRequired,
};

export default NavBar;
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import "./style.css"

class TopNav extends Component {

    render() {
        return (
            <div className="header-top-nav">
                <div className="navbar navbar-expand-lg" id="navbar-1">
                    <div className="container">
                        <Link to="/" className="navbar-brand">
                            <img
                                className="navbar-logo"
                                src="/images/Logo.png"
                                alt="nav_logo"
                            />
                        </Link>

                        <div className="operation">
                            <p className="navbar-location">
                                <b>Located At:</b>
                            </p>

                            <p className="navbar-street">
                                1736 Shore Pkwy
                            </p>

                            <p className="navbar-city">
                                Brooklyn, NY 11214
                            </p>
                        </div>

                    </div>
                </div>

                <div className="navbar navbar-expand-lg" id="navbar-2">
                    <div className="collpase navbar-collapse">
                        <div className="container">
                            <div className="navbar-nav d-flex justify-content-end">
                                <a href="tel:(718)372-1031" className="navbar-phone">
                                    <b>
                                        718.372.1031
                            </b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Navbar id="navbar-3" collapseOnSelect expand="lg">
                    <div className="container">
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" id="toggle" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/home" className="nav-link">
                                        HOME
                                    </Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/expect" className="nav-link" activeClassName="active">
                                        WHAT TO EXPECT
                                    </Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/services" className="nav-link" activeClassName="active">
                                        SERVICES
                                    </Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/contact" className="nav-link" activeClassName="active">
                                        CONTACT US
                                    </Link>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>

            </div>
        )
    }
}

export default TopNav



import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import "./style.css"

class Nav extends Component {
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

                        <div>
                            <Link to="/contact">
                                <Button
                                    className="navbar-btn"
                                    variant="outline-dark"
                                >
                                    <b>
                                        CONTACT US
                            </b>
                                </Button>
                            </Link>

                            <div>
                                <h6 className="navbar-hours">
                                    <b>Mon-Sat 9am-7pm</b>
                                </h6>
                            </div>

                            <div>
                                <h6 className="navbar-street">
                                    1736 Shore Pkwy
                            </h6>

                                <h6 className="navbar-city">
                                    Brooklyn, NY 11214
                            </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar navbar-expand-lg" id="navbar-2">
                    <div className="collpase navbar-collapse">
                        <div className="container">
                            <div className="navbar-nav d-flex justify-content-end">
                                <a href="tel:+718-372-1031" className="navbar-phone">
                                    <b>
                                        718.372.1031
                            </b>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="navbar navbar-expand-lg" id="navbar-3">
                    <div className="collpase navbar-collapse">
                        <div className="container">

                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <Link to="/home" className="nav-link">
                                        HOME
                                    </Link>
                                </li>
                                
                                <li className="navbar-item">
                                    <Link to="/expect" className="nav-link">
                                        WHAT TO EXPECT
                                    </Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/services" className="nav-link">
                                        SERVICES
                                    </Link>
                                </li>

                                <li className="navbar-item">
                                    <Link to="/staff" className="nav-link">
                                        MEET THE STAFF
                                    </Link>
                                </li>


                                <li className="navbar-item">
                                    <Link to="/contact" className="nav-link">
                                        CONTACT US
                                    </Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav



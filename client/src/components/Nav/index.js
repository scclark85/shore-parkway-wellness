import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";
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
                                src="/public/images/Logo.png"
                                alt="nav_logo"
                            />
                        </Link>

                        <div className="operation">
                            <p className="navbar-hours">
                                <b>Mon-Sat 9am-7pm</b>
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

                <div className="navbar navbar-expand-lg" id="navbar-3">
                    <div className="collpase navbar-collapse">
                        <div className="container">

                            <ul className="navbar-nav mr-auto">
                                <li className="navbar-item">
                                    <NavLink to="/home" className="nav-link">
                                        HOME
                                    </NavLink>
                                </li>

                                <li className="navbar-item">
                                    <NavLink to="/expect" className="nav-link" activeClassName="active">
                                        WHAT TO EXPECT
                                    </NavLink>
                                </li>

                                <li className="navbar-item">
                                    <NavLink to="/services" className="nav-link" activeClassName="active">
                                        SERVICES
                                    </NavLink>
                                </li>

                                {/* <li className="navbar-item">
                                    <NavLink to="/staff" className="nav-link" activeClassName="active">
                                        MEET THE STAFF
                                    </NavLink>
                                </li> */}


                                <li className="navbar-item">
                                    <NavLink to="/contact" className="nav-link" activeClassName="active">
                                        CONTACT US
                                    </NavLink>
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



import React, { Component } from 'react';
import Product from "../components/Product";
import Float from "../components/Float";
import "./style.css"

class Services extends Component {

    render() {
        return (
            <div className="container">
                <Float />
                <header>
                    <br />
                        <p className="services">Services Available</p>
                </header>
                <br />

                    <Product />
            </div>
        )
    }
}
export default Services
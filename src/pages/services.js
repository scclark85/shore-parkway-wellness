import React, { Component } from 'react';
import Product from "../components/Product";
import "./style.css"

class Services extends Component {

    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <h1>Services Page</h1>
                    </div>
                </header>
                <br />

                <div className="container">
                    <Product />

                </div>
            </div>
        )
    }
}
export default Services
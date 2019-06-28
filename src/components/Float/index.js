import React, { Component } from 'react';
import "./style.css"

class Float extends Component {
    render() {
        return (
            <div className="container">
               
                <a href="/contact" className="float">
                    <i className="fas fa-2x fa-envelope my-float"></i>
                </a>

            </div>
        )
    }
}

export default Float
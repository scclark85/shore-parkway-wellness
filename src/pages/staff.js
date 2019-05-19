import React, { Component } from 'react';
import Employees from "../components/Employees"
import "./style.css"

class Staff extends Component {

    render() {
        return (

            <div>
                <header className="jumbotron"
                    style={{
                        color: "",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        minHeight: 300,
                        padding: 0,
                    }}>
                    <div className="container">
                        <h1>Meet The Staff Page</h1>
                    </div>
                </header>

                <Employees />
            </div>
        )
    }
}
export default Staff
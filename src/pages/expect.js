import React, { Component } from 'react';
import ExpectCont from "../components/ExpectCont"

class Expect extends Component {

    render() {
        return (
            <div>
                <header className="jumbotron"
                    style={{
                        color: "",
                        backgroundColor: "rgb(140, 114, 114, .2)",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        minHeight: 300,
                        padding: 0,
                    }}>
                    <br />
                    <br />

                    <div className="container">
                        <h1>What To Expect Page</h1>
                    </div>
                </header>

                <div className="container">
                    <ExpectCont />
                </div>
                <br />
                <br />

            </div>
        )
    }
}
export default Expect
import React, { Component } from 'react';
// import Float from "../components/Float";
import ExpectCont from "../components/ExpectCont"

class Expect extends Component {

    render() {
        return (
            <div>
                {/* <Float /> */}
                <header className="container">
                <br />
                    <p className="contact">WHAT YOU NEED TO KNOW</p>
                </header>
                <br />

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
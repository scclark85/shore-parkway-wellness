import React, { Component } from 'react';
import "./style.css"

class Main extends Component {
    render() {
        return (
            <div>
                {/* Full Page Image Header with Vertically Centered Content */}
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div className="col-12 text-center"
                                style={{
                                    textAlign: "",
                                    fontFamily: 'Mitr, sans-serif',
                                    fontSize: "50px"
                                }}>
                                <b>YOUR TESTOSTERONE AND HORMONE REPLACEMENT SPECIALISTS</b>
                            </div>
                        </div>
                    </div>
                </header>
                <br />
                <br />

                <div className="container jumbotron"
                    style={{
                        fontFamily: 'Mitr, sans-serif',
                        backgroundColor: "rgb(140, 114, 114, .2)"
                    }}>
                    <div className="text-center">
                        <b>WHO WE ARE.</b>
                    </div>
                    <br />

                    <p>At Shore Parkway Wellness, we specialize in a customized treatment plan for each of our patients.  We are dedicated to help you achieve your wellness objectives.  We also specialize in prescribing a natural hormone replacement for both men and women.  Our focus is to keep people well, rather than on a diseased based medicine.</p>

                    <p><i>Your hormone response is as unique as your fingerprints</i> and one size does not fit all.  Customized Therapy is more effective.</p>
                    <br />

                    <div className="text-center">
                        <b>WHAT ARE THE BENEFITS?</b>
                    </div>
                    <br />

                    <div className="row">
                        <div className="col-4">
                            <ul>
                                <li>More energy</li>
                                <li>Increased sex drive</li>
                                <li>Stronger, more frequent errections</li>
                                <li>Better mood</li>
                                <li>Decreased body fat</li>
                            </ul>
                        </div>

                        <div className="col-4">
                            <ul>
                                <li>Improved muscle mass and strength</li>
                                <li>Improved bone density</li>
                                <li>Improved memory and concentration</li>
                                <li>Feel like yourself again!</li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-center"><b>Call today to schedule your first evaluation!</b></p>

                </div>
            </div >
        )
    }
}

export default Main
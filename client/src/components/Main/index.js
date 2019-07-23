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
                                    fontSize: "200%"
                                }}>
                                <b>YOUR TESTOSTERONE AND HORMONE REPLACEMENT SPECIALISTS</b>
                            </div>
                        </div>
                    </div>
                </header>
                <br />
                <br />

                <div className="container jumbotron" id="about"
                    style={{
                        fontFamily: 'Mitr, sans-serif',
                        backgroundColor: "rgb(140, 114, 114, .2)"
                    }}>
                    <div className="text-center">
                        <b>WHO WE ARE.</b>
                    </div>
                    <br />

                    <p>At Shore Parkway Wellness, we specialize in a customized treatment plan for each of our patients.  We are dedicated to help you achieve your wellness objectives, and specialize in prescribing a natural hormone replacement for both men and women.  Our focus is to keep people well, rather than on a diseased based medicine.</p>

                    <p><i>Your hormone response is as unique as your fingerprints</i> and one size does not fit all.  Customized therapy is more effective.</p>
                    <br />

                    <div className="text-center">
                        <b>WHAT ARE THE BENEFITS?</b>
                    </div>
                    <br />

                    <div className="row">
                        <ul className="benefits" type="none">
                            <li><span className="fa fa-check icon-success" id="check"></span> More energy</li>
                            <br />
                            <li><span className="fa fa-check icon-success" id="check"></span> Increased sex drive</li>
                            <br />
                            <li><span className="fa fa-check icon-success" id="check"></span> Stronger, more frequent errections</li>
                            <br />
                            <li><span className="fa fa-check icon-success" id="check"></span> Better mood</li>
                            <br />
                            <li><span className="fa fa-check icon-success" id="check"></span> Decreased body fat</li>
                        </ul>

                        <ul className="benefits" type="none">
                            <li><span className="fa fa-check icon-success" id="check"></span> Improved muscle mass and strength</li>
                            <br />
                            <li><span className="fa fa-check icon-success" id="check"></span> Improved bone density</li>
                            <br />
                            <li><span className="fa fa-check icon-success" id="check"></span> Improved memory and concentration</li>
                            <br />
                            <li><span className="fa fa-check icon-success" id="check"></span> Feel like yourself again!</li>
                        </ul>
                    </div>
                    <br />


                    <p className="text-center">
                        <a href="/expect" className="btn btn-secondary">Learn More Today <i className="fa fa-angle-right" id="next"></i></a>
                    </p>
                    <p className="text-center"><i>Most insurance plans accepted.</i></p>
                    <br />

                </div>
            </div >
        )
    }
}

export default Main
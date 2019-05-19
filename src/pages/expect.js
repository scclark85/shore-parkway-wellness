import React, { Component } from 'react';
import "./style.css"

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
                    <div className="container">
                        <h1>What To Expect Page</h1>
                    </div>
                </header>
                <br />

                <div className="container"
                    style={{
                        textAlign: "center",
                        fontFamily: 'Mitr, sans-serif',
                    }}>

                    <div className="row">
                        <div className="col-3">
                            <img
                                className="happy"
                                src="/images/Happy-Female.png"
                                alt="happy"
                            />
                        </div>

                        <div className="col-9">
                            <div className="jumbotron"
                                style={{
                                    backgroundColor: "rgb(140, 114, 114, .2)",
                                }}>
                                <b>WHAT IS TESTOSTERONE?</b>
                                <br />
                                <br />

                                <p>Testosterone is a hormone; hormones are chemicals that are produced by the glands. There are more than 100 types of hormones in the healthy body. The brain regulates this hormonal output when hormonal output is high for both men and women feel healthy, sensual and young.</p>
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="col-9">
                            <div className="jumbotron"
                                style={{
                                    backgroundColor: "rgb(140, 114, 114, .2)",
                                }}>
                                <b>WHAT TO EXPECT.</b>
                                <br />
                                <br />

                                <p>Most men and women begin to lose testosterone during their early to mid-20's/ This begins the process of gradual physical, mental, and sexual deterioration which, if uncorrected progresses for the rest of our lives. We tend to attribute this to "getting older" when in fact it is testosterone deficiency.</p>
                            </div>
                        </div>
                        <div className="col-3">
                            <img
                                className="happy"
                                src="/images/Happy-Male.png"
                                alt="happy"
                            />
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}
export default Expect
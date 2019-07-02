import React, { Component } from 'react';
import "./style.css"

class ExpectCont extends Component {
    render() {
        return (
            <div className="container"
                style={{
                    textAlign: "center",
                    fontFamily: 'Mitr, sans-serif',
                }}>

                <div className="row jumbotron" id="what"
                    style={{
                        backgroundColor: "rgb(140, 114, 114, .2)",
                    }}>
                    <div className="col-3">
                        <img
                            className="happy"
                            src="/images/Happy-Female.png"
                            alt="happy"
                        />
                    </div>

                    <div className="col-9">
                        <br />
                        <br />

                        <b>WHAT IS TESTOSTERONE?</b>
                        <br />
                        <br />

                        <p>Testosterone is a hormone; hormones are chemicals that are produced by the glands. There are more than 100 types of hormones in the healthy body. The brain regulates this hormonal output when hormonal output is high for both men and women feel healthy, sensual and young.</p>
                    </div>
                </div>
                <br />


                <div className="row jumbotron" id="what"
                    style={{
                        backgroundColor: "rgb(140, 114, 114, .2)",
                    }}>
                    <div className="col-9">
                        <br />
                        <br />

                        <b>WHAT TO EXPECT.</b>
                        <br />
                        <br />

                        <p>Most men and women begin to lose testosterone during their early to mid-20's/ This begins the process of gradual physical, mental, and sexual deterioration which, if uncorrected progresses for the rest of our lives. We tend to attribute this to "getting older" when in fact it is testosterone deficiency.</p>
                    </div>

                    <div className="col-3">
                        <img
                            className="happy"
                            src="/images/Happy-Male.png"
                            alt="happy"
                        />
                    </div>
                </div>
            </div>

        )
    }
}

export default ExpectCont


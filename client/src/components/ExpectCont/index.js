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

                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 order-lg-2">
                                <div className="p-5">
                                    <img className="img-fluid" id="male" src="/images/Happy-Male.png" alt="male" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="p-5" id="what">
                                    <h2 className="display-5">What is Testosterone?</h2>
                                    <br />

                                    <p>Testosterone is a hormone; hormones are chemicals that are produced by the glands. There are more than 100 types of hormones in a healthy body. The brain regulates the hormonal output.  When the hormonal output is high for both men and women they feel healthy, sensual and young.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <img className="img-fluid" id="female" src="/images/Happy-Female.png" alt="female" />
                                </div>
                            </div>
                            <div className="col-lg-6 order-lg-1">
                                <div className="p-5" id="what">
                                    <h2 className="display-5">Signs To Look For</h2>
                                    <br />

                                    <p>Most men and women begin to lose testosterone during their early to mid-20's.  This begins the process of gradual physical, mental, and sexual deterioration which, if uncorrected, it will progress for the rest of our lives. We tend to attribute this to "getting older" when in fact it is a testosterone deficiency.</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <br />
                <br />

                <section>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="">
                                <div className="p-5" id="what">
                                    <h2 className="display-5">We Are Here to Help!</h2>
                                    <br />
                                    <p>Not only do we offer <b>customized</b> testosterone and hormonal treatment plans, but we have a variety of other services available which can be found on our service page.</p>

                                    <p><b>Most insurance plans accepted.</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

        )
    }
}

export default ExpectCont


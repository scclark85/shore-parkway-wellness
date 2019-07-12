import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./style.css"

const Footer = () => {
    return (
        <MDBFooter className="font-small">
            <MDBContainer fluid className=" footer-top text-center text-md-left">
                <div className="container">
                    <br />

                    <MDBRow>
                        <MDBCol md="5">
                            <h6 className="title"><b>OUR INFORMATION:</b></h6>

                            <ul>
                                <li className="list-unstyled">
                                    <b><p>P: <a className="footer-phone" href="tel:(718)372-1031">
                                    718.372.1031
                                    </a></p></b>
                                </li>

                                <li className="list-unstyled">
                                    <b><p>E: <a className="footer-email" href="mailto:shoreparkwaywellness@gmail.com">
                                        shoreparkwaywellness@gmail.com
                                    </a></p></b>
                                </li>

                                <li className="list-unstyled">
                                    <span className="map-link">
                                        <b>A: 1736 Shore Pkwy, Brooklyn, NY 11214</b>
                                    </span>
                                </li>

                            </ul>
                        </MDBCol>

                        <MDBCol md="5">
                            <h6 className="title"><b>HOURS OF OPERATION:</b></h6>

                            <ul>
                                <li className="list-unstyled">
                                    <p>
                                        <b>Tuesday 6am-2pm</b>
                                    </p>
                                </li>

                                <li className="list-unstyled">
                                    <p>
                                        <b>Thursday 4pm-8pm</b>
                                    </p>
                                </li>

                                <li className="list-unstyled">
                                    <p>
                                        <b>Friday 6am-2pm</b>
                                    </p>
                                </li>

                            </ul>
                        </MDBCol>

                        <MDBCol md="2">
                            <div className="social">
                                <p>
                                    <b>SOCIAL MEDIA:</b>
                                </p>
                                <a className="fab fa-2x fa-instagram"
                                    href={
                                        "https://www.instagram.com/shoreparkwaywellness/"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer">
                                </a>

                                <a className="fab fa-2x fa-twitter-square"
                                    href={
                                        "https://twitter.com/wellnessshore?lang=en"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer">
                                </a>

                                <a className="fab fa-2x fa-facebook-square"
                                    href={
                                        "https://www.facebook.com/pages/Shore-Parkway-Medical-Wellness/1626806260939644"
                                    }
                                    target="_blank"
                                    rel="noopener noreferrer">
                                </a>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBContainer>

            <div className="footer-copyright py-3">
                <MDBContainer fluid>
                    <div className="container text-center">
                        &copy; {new Date().getFullYear()}<a className="footer-link" href="https://www.shoreparkwaywellness.com/"> Shore Parkway Wellness</a>
                    </div>
                </MDBContainer>
            </div>
        </MDBFooter>

    );
}
export default Footer
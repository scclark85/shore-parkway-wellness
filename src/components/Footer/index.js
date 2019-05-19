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
                        <MDBCol md="6">
                            <h6 className="title"><b>OUR INFORMATION:</b></h6>

                            <ul>
                                <li className="list-unstyled">
                                    <b><p>P: <a className="footer-phone" href="tel:+718-372-1031">
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

                        <MDBCol md="6">
                            <h6 className="title"><b>HOURS:</b></h6>

                            <ul>
                                <li className="list-unstyled">
                                    <p>
                                        <b>Sunday Closed</b>
                                    </p>
                                </li>

                                <li className="list-unstyled">
                                    <p>
                                        <b>Monday-Saturday 9AM-7PM</b>
                                    </p>
                                </li>

                            </ul>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBContainer>

            <div className="footer-copyright py-3">
                <MDBContainer fluid>
                    <div className="container">
                        &copy; {new Date().getFullYear()}<a className="footer-link" href="https://www.shoreparkwaywellness.com/"> Shore Parkway Wellness</a>
                    </div>
                </MDBContainer>
            </div>
        </MDBFooter>

    );
}
export default Footer
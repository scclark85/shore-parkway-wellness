import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import "./style.css"

const Footer = () => {
    return (
        <MDBFooter className="font-small pt-4 mt-4">
            <MDBContainer fluid className=" footer-top text-center text-md-left">
                <div className="container">
                    <br />

                    <MDBRow>
                        <MDBCol md="6">
                            <h6 className="title"><b>OUR INFORMATION:</b></h6>

                            <ul>
                                <li className="list-unstyled">
                                    <a href="tel:+718-372-1031">
                                        <b> P:  718.372.1031</b>
                                    </a>
                                </li>

                                <li className="list-unstyled">
                                    <a href="mailto:shoreparkwaywellness@gmail.com">
                                        <b>E:  shoreparkwaywellness@gmail.com</b>
                                    </a>
                                </li>

                                <li className="list-unstyled">
                                    <span class="map-link">
                                        <b>A:  6555 Hollywood Blvd, Hollywood, CA 90028</b>
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
                        &copy; {new Date().getFullYear()}<a href="https://www.shoreparkwaywellness.com/"> Shore Parkway Wellness</a>
                    </div>
                </MDBContainer>
            </div>
        </MDBFooter>

    );
}
export default Footer
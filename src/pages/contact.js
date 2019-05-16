import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import Map from "../components/Map";
import "./style.css"

class Contact extends Component {

    render() {
        return (
            <div>
                <br />
                <div className="container"
                    style={{
                        backgroundColor: "white",
                        borderBottom: "1px solid rgb(230, 230, 230)"
                    }}
                >
                    <h3>CONTACT US | SHORE PARKWAY WELLNESS OF BROOKLYN</h3>
                </div>
                <br />
                <br />

                <div className="container">

                    <Form>
                        <Form.Group controlId="formName" value="required">
                            <Form.Row>
                                <Col>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control />
                                </Col>
                                <Col>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control />
                                </Col>
                            </Form.Row>
                        </Form.Group>

                        <Form.Group controlId="fromEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>

                        <Form.Group controlId="fromPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="phone" placeholder="000.000.0000" />
                        </Form.Group>

                        <Form.Group controlId="fromPhone">
                            <Form.Label>Zip Code</Form.Label>
                            <Form.Control type="phone" />
                        </Form.Group>

                        <Form.Group controlId="fromReferralType">
                            <Form.Label>How Did You Hear About Us?</Form.Label>
                            <Form.Control as="select">
                                <option>Another Client</option>
                                <option>Digital / Internet</option>
                                <option>Drive By / Building Signage</option>
                                <option>Employee / Owner</option>
                                <option>Other</option>
                                <option>Print Advertisment</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                    </Form>

                    <Button type="submit" variant="dark" className="FormBtn" size="lg">
                        Submit
                    </Button>
                </div>
                <br />



                <Map />
            </div>
        )
    }
}
export default Contact
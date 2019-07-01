import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap';
import axios from "axios";

class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '', phone: '', zip: '', select: '', message: '' };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.formRef = null;
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })

    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, phone, zip, select, message } = this.state

        const form = await axios.post("api/form", {
            name,
            email,
            phone,
            zip,
            select, 
            message
        })
        console.log(form)
    }

    render() {
        return (
            <div className="container">
                <Form onSubmit={this.handleSubmit}>

                    <FormGroup>
                        <Row>
                            <Col>
                                <Label for="firstname"> First Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    placeholder="Jane"
                                    value={this.state.name} required />
                            </Col>
                            <Col>
                                <Label for="lastame">Last Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    placeholder="Smith"
                                    value={this.state.name} required />
                            </Col>
                        </Row>
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input
                            type="email"
                            name="email"
                            onChange={this.handleChange}
                            placeholder="random@random.com"
                            value={this.state.email} required />
                    </FormGroup>

                    <FormGroup>
                        <Label for="phone">Phone:</Label>
                        <Input
                            type="phone"
                            name="phone"
                            onChange={this.handleChange}
                            placeholder="(123)456-0000"
                            value={this.state.phone}
                            required />
                    </FormGroup>

                    <FormGroup>
                        <Label for="zip">Zip Code:</Label>
                        <Input
                            type="zip"
                            name="zip"
                            value={this.state.zip}
                            placeholder="11214"
                            onChange={this.handleChange}
                            required />
                    </FormGroup>

                    <FormGroup>
                        <Label for="referraltype">How Did You Hear About Us?</Label>
                        <Input type="select" name="select" id="formSelect" required>
                            <option></option>
                            <option>Another Client</option>
                            <option>Digital / Internet</option>
                            <option>Drive By / Building Signage</option>
                            <option>Employee / Owner</option>
                            <option>Other</option>
                            <option>Print Advertisment</option>
                        </Input>
                    </FormGroup>

                    <FormGroup>
                        <Label for="message">Message:</Label>
                        <Input
                            type="textarea"
                            name="message"
                            placeholder="Leave us a message..."
                            onChange={this.handleChange} />
                    </FormGroup>

                    <Button variant="dark" className="FormBtn" size="lg">
                        Submit
                    </Button>

                </Form>
            </div>

        )
    }
}

export default ContactForm
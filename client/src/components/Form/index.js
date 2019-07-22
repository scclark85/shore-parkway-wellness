import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import axios from "axios";

class ContactForm extends Component {

    resetForm() {
        document.getElementById('contact-form').reset();
    }

    render() {
        return (
            <div className="container">
                <Form id="contact-form" method="POST" action="https://formspree.io/sarahchristinec85@gmail.com">

                    <FormGroup>
                        <Label for="fullname"> Full Name</Label>
                        <Input
                            type="text"
                            name="name"
                            placeholder="John Smith"
                            required />
                    </FormGroup>

                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input
                            type="email"
                            name="email"
                            placeholder="random@random.com"
                            required />
                    </FormGroup>

                    <FormGroup>
                        <Label for="phone">Phone:</Label>
                        <Input
                            type="phone"
                            name="phone"
                            placeholder="(123)456-0000"
                            required />
                    </FormGroup>

                    <FormGroup>
                        <Label for="zip">Zip Code:</Label>
                        <Input
                            type="zip"
                            name="zip"
                            placeholder="11214"
                            required />
                    </FormGroup>

                    <FormGroup>
                        <Label for="referraltype">How Did You Hear About Us?</Label>
                        <br />
                        <select
                            type="select"
                            name="select"
                            id="formSelect"
                            required>
                            <option></option>
                            <option>Another Client</option>
                            <option>Digital / Internet</option>
                            <option>Drive By / Building Signage</option>
                            <option>Employee / Owner</option>
                            <option>Other</option>
                            <option>Print Advertisment</option>
                        </select>
                    </FormGroup>

                    <FormGroup>
                        <Label for="message">Message:</Label>
                        <Input
                            type="textarea"
                            name="message"
                            placeholder="Leave us a message..." />
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
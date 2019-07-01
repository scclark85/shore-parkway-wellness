import React, { Component } from 'react';
import ContactForm from "../components/Form";
import Map from "../components/Map";
import "./style.css"

class Contact extends Component {

    render() {
        return (
            <div>
                <header className="container">
                <br />
                    <p className="contact">CONTACT US | SHORE PARKWAY WELLNESS OF BROOKLYN</p>
                </header>
                <br />

                <div className="container">
                    <ContactForm />
                </div>
                <br />
                <br />

                <Map />
            </div>
        )
    }
}
export default Contact
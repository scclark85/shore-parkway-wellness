import React, { Component } from 'react';
import Map from ".././components/Map"
import "./style.css"

class Home extends Component {

    render() {
        return (
            <div>
                <header className="jumbotron"
                    style={{
                        color: "white",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        backgroundImage: "url(/images/couple-date-lens-flare-40525.jpg",
                        minHeight: 720,
                        padding: 0,
                    }}
                >
                    <br />

                    <div className="container"
                        style={{
                            textAlign: "",
                            fontFamily: 'Mitr, sans-serif',
                            fontSize: "50px"
                        }}>
                        <table style={{ height: "720px" }}>
                            <tbody>
                                <tr>
                                    <td className="align-middle">
                                        <b>YOUR TESTOSTERONE AND HORMONE REPLACEMENT SPECIALISTS</b>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                </header>

                <div className="jumbotron"
                    style={{
                        background: "white",
                    }}
                >
                    <br />

                    <div className="container"
                        style={{
                            textAlign: "center",
                            fontFamily: 'Mitr, sans-serif',
                        }}>
                        <b>WHAT ARE THE BENEFITS?</b>
                        <br />
                        <br />

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <br />
                </div>

                <Map />
            </div>
        )
    }
}
export default Home
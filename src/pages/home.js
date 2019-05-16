import React, { Component } from 'react';
import Map from ".././components/Map"
import "./style.css"

class Home extends Component {

    render() {
        return (
            <div>
                <div className="jumbotron"
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

                    <h1>
                        <b><div style={{
                            textAlign: "center",
                        }}>
                            Your Testosterone and Hormone Replacement Specialists
                        </div></b>
                    </h1>
                    <br />

                    <b><div style={{
                        textAlign: "center",
                    }}>
                        <p></p>
                    </div>
                    </b>
                </div>

                <Map />
            </div>
        )
    }
}
export default Home
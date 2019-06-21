import React, { Component } from 'react';
import Main from "../components/Main"
import Map from ".././components/Map"
import "./style.css"

class Home extends Component {

    render() {
        return (
            <div>
                <Main />
                <br />
                
                <Map />
            </div>
        )
    }
}
export default Home
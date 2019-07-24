import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.5931308,
      lng: -73.9974274
    },
    zoom: 11
  };

  render() {
    return (

      // Important! Always set the container height explicitly
      <div style={{ height: '40vh', width: '100%' }}>

        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBYM1XJoR58MKeCu2789M7Y3rc_CYHahdY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

          <AnyReactComponent
            lat={40.5931308}
            lng={-73.9974274}
            text= "1736 Shore PKWY"
          />

        </GoogleMapReact>
      </div >
    );
  }
}

export default SimpleMap;



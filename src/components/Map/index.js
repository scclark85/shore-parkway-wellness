import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
const API_KEY = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

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
          bootstrapURLKeys={{ API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={40.5931308}
            lng={-73.9974274}
            text="Shore Parkway Wellness"
          />
        </GoogleMapReact>
      </div >
    );
  }
}

export default SimpleMap;



import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  // initMap() {
  //   var myLatLng = {
  //     lat: 40.5931308,
  //     lng: -73.9974274
  //   };

  //   var map = new google.maps.Map(document.getElementById('map'), {
  //     zoom: 4,
  //     center: myLatLng
  //   });

  //   var marker = new google.maps.Marker({
  //     position: myLatLng,
  //     map: map,
  //     title: 'Hello World!'
  //   });
  // }
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
          const API_KEY="process.env.GOOGLE_MAPS_API_KEY"
          bootstrapURLKeys={{ key: ('API_KEY') }}
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



import React from "react";
import GoogleMapReact from 'google-map-react';
import "./Map.css"

const AnyReactComponent = ({ text }) => <div id="map-pin">{text}</div>;

export default function SimpleMap({latitude, longitude}){
  const defaultProps = {
    center: {
    //   lat: 10.99835602,
    //   lng: 77.01502627
        lat: latitude,
        lng: longitude
    },
    zoom: 14,
    latitude: latitude,
    longitude: longitude
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '300px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
      >
        <AnyReactComponent

        lat={defaultProps.latitude}
        lng ={defaultProps.longitude}
        text="🏠"
        />
      </GoogleMapReact>
    </div>
  );
}
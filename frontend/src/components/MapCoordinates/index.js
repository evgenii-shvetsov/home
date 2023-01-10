import React from 'react'
import './MapCoordinates.css'
import GoogleMapReact from "google-map-react";

import { useState } from 'react';




const AnyReactComponent = ({ text }) => <div id="map-pin">{text}</div>;

// const apiIsLoaded = (map, maps) => {
  
//     console.log(map, maps);
  
//   };
  

export default function MapCoordinates(){

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

  const defaultProps = {
    center: {
        lat: 37.776392,
        lng: -122.4194
    
    },
    zoom: 13
  };

  const mapOptions={
    fullscreenControl: false,
    disableDefaultUI : true
  }

  const getCoordinates = (e)=>{
    setLatitude(e.lat);
    setLongitude(e.lng)
        // console.log("In MAP component, latitide = ", e.lat);
        // console.log("In MAP component, longitude = ", e.lng);
  }

  console.log('MAP STATE', longitude)
  console.log('MAP STATE', latitude)
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '400px', width: '400px' }}>
      <GoogleMapReact onClick={getCoordinates}
        bootstrapURLKeys={{ /*key: process.env.REACT_APP_MAPS_API_KEY */}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        options = {mapOptions}
        draggable={true}
        yesIWantToUseGoogleMapApiInternals
        latitude={latitude} setLongitude={longitude}
        // onGoogleApiLoaded={({ map, maps }) => {
        //     apiIsLoaded(map, maps)
            
        //   }}
        
      >
        <AnyReactComponent 

        lat={defaultProps.center.lat}
        lng ={defaultProps.center.lng}
        // draggable={true}
        text="🏠"
        />
      </GoogleMapReact>
    </div>
  );
}
import React from 'react'
import './MapCoordinates.css'
import GoogleMapReact from "google-map-react";

import { useState } from 'react';




const AnyReactComponent = ({ text }) => <div id="map-pin">{text}</div>;

// const apiIsLoaded = (map, maps) => {
  
//     console.log(map, maps);
  
//   };
  

const MapCoordinates = ({setLat, setLng , lat, lng}) => {

    // const [latitude, setLatitude] = useState('bla');
    // const [longitude, setLongitude] = useState('bla');

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
    setLat(e.lat);
    setLng(e.lng)
        // console.log("In MAP component, latitide = ", e.lat);
        // console.log("In MAP component, longitude = ", e.lng);
  }

//   console.log('MAP STATE', longitude)
//   console.log('MAP STATE', latitude)
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
        
        // onGoogleApiLoaded={({ map, maps }) => {
        //     apiIsLoaded(map, maps)
            
        //   }}
      >
        
        <AnyReactComponent latitude={lat} setLongitude={lng}

        lat={defaultProps.center.lat}
        lng ={defaultProps.center.lng}
        // draggable={true}
        text="🏠"
        />
      </GoogleMapReact>
    </div>
  );
}

export default MapCoordinates;

// document.addEventListener('contextmenu',(event) => {
//     event.preventDefault();
//     console.log(event.type);
//     console.log(event.lat);
//   });
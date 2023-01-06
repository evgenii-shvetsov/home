import React from 'react'
import './MapSearch.css'
import GoogleMapReact from 'google-map-react';

const MapSearch = ({center, zoom}) => {
  return (
    <div className='map-search'>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
            defaultCenter={ center }
            defaultZoom={ zoom }>
                
            </GoogleMapReact>
    </div>
  )
}

MapSearch.defaultProps = {
    center: {
        lat: 37.776392,
        lng: -122.4194
    },
    zoom: 12
}

export default MapSearch


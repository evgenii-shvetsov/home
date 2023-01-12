import React from 'react'
import GoogleMapReact from 'google-map-react';
import ListingMarker from '../ListingMarker';
import './MapSearch.css'

const MapSearch = ({listings, center, zoom}) => {
  const mapOptions={
    fullscreenControl: false,
    disableDefaultUI : true
  }
  
 
  const markers = listings?.map((listing , idx)=>{
   return <ListingMarker lat={listing.lat} lng={listing.lng} key ={idx}
   markerInfo={
      {listing_type: listing.listing_type,
      deal_type: listing.deal_type,
      price: listing.price,
      bedroom: listing.bedroom,
      bathroom: listing.bathroom,
      listing_id: listing.id,
      listing_photo: listing.photoUrls.at(0)}} />
  })

  return (
    <div className='map-search'>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAPS_API_KEY }}
            defaultCenter={ center }
            defaultZoom={ zoom }
            options = {mapOptions}
            
            >
             {markers}
            </GoogleMapReact>
    </div>
  )
}

MapSearch.defaultProps = {
    center: {
        lat: 37.776392,
        lng: -122.4194
       
    },
    zoom: 13,
    // disableDefaultUI : true
}



export default MapSearch


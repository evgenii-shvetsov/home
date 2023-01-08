import React from 'react'
// import { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import ListingMarker from '../ListingMarker';
import './MapSearch.css'
// import ListingMarkerInfo from '../ListingMarkerInfo';

const MapSearch = ({listings, center, zoom}) => {
  // const [listingInfo, setListingInfo] = useState(null);
  const mapOptions={
    fullscreenControl: false,
    disableDefaultUI : true
  }
  
  // const hoverMarker = ()=> {
  //   setListingInfo({listing_type: listing.listing_type, price: listing.price, bedroom: listing.bedroom})
  // }
  const markers = listings?.map((listing , idx)=>{
   return <ListingMarker lat={listing.lat} lng={listing.lng} key ={idx}
   markerInfo={
      {listing_type: listing.listing_type,
      price: listing.price,
      bedroom: listing.bedroom,
      listing_id: listing.id}} />
  })
//()=>setListingInfo({listing_type: listing.listing_type, price: listing.price, bedroom: listing.bedroom})
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
            {/* {listingInfo && <ListingMarkerInfo info={listingInfo}/>} */}
    </div>
  )
}

MapSearch.defaultProps = {
    center: {
        lat: 37.776392,
        lng: -122.4194
    },
    zoom: 12,
    // disableDefaultUI : true
}



export default MapSearch


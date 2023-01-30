import React from 'react'
import './ListingMarkerInfo.css'
import logo from '../../assets/home-logo.png';

const ListingMarkerInfo = ( {info} ) => {

  let listingPhoto = info.listing_photo;

  return (
    <div className='listing-marker-info'>
                <img id="marker-listing-photo" src={listingPhoto ? listingPhoto : logo} alt="" />
                <p id="marker-listing-price">${info?.price.toLocaleString()}</p>
                <p>{info.bedroom} bd {info.bathroom} ba</p>
                <p>{info.listing_type} for {info.deal_type}</p>
            
    </div>
  )
}

export default ListingMarkerInfo
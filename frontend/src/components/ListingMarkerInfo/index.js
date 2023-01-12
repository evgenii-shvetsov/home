import React from 'react'
import './ListingMarkerInfo.css'
const ListingMarkerInfo = ( {info} ) => {
  return (
    <div className='listing-marker-info'>
                <img id="marker-listing-photo" src={info.listing_photo} alt="" />
                <p id="marker-listing-price">${info?.price.toLocaleString()}</p>
                <p>{info.bedroom} bd {info.bathroom} ba</p>
                <p>{info.listing_type} for {info.deal_type}</p>
            
    </div>
  )
}

export default ListingMarkerInfo
import React from 'react'
import './ListingMarkerInfo.css'
const ListingMarkerInfo = ( {info} ) => {
  return (
    <div className='listing-marker-info'>
            <h4>Listing Info</h4>
            <ul>
                <li>{info.listing_type}</li>
                <li>{info.price}</li>
                <li>{info.bedroom}</li>
            </ul>
    </div>
  )
}

export default ListingMarkerInfo
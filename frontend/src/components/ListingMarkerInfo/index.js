import React from 'react'
import './ListingMarkerInfo.css'
const ListingMarkerInfo = ( {info} ) => {
  return (
    <div className='listing-marker-info'>
            {/* <ul>
                <li>{info.listing_type}</li>
                <li>{info.price} price</li>
                <li>{info.bedroom} bd</li>
            </ul> */}
                <p>{info.listing_type}</p>
                <p>${info?.price.toLocaleString()}</p>
                <p>{info.bedroom} bd</p>
            
    </div>
  )
}

export default ListingMarkerInfo
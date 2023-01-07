import React from 'react'
import { Icon } from '@iconify/react'
import listingIcon from '@iconify/icons-mdi/home'
import "./ListingMarker.css"
import ListingMarkerInfo from '../ListingMarkerInfo';
import { useState } from 'react';
const ListingMarker = ({lat, lng, markerInfo}) => {

  const [condition, setCondition] = useState(false)
  return (
        <div className='location-marker' onMouseOver={()=>setCondition(true)} onMouseOut={()=>setCondition(false)}>

         { condition ?  <div className='blabla'>
            <ListingMarkerInfo info={markerInfo} />
         </div> : null}
            <Icon icon={listingIcon} className="listing-icon" />

        </div>
  )
}

export default ListingMarker
import React from 'react'
import { Icon } from '@iconify/react'
import listingIcon from '@iconify/icons-mdi/home'
import "./ListingMarker.css"
import ListingMarkerInfo from '../ListingMarkerInfo';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';


const ListingMarker = ({lat, lng, markerInfo}) => {
  const history = useHistory();
  const [condition, setCondition] = useState(false)

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/listings/${markerInfo.listing_id}`)
}

  return (
        <div className='location-marker' onMouseOver={()=>setCondition(true)} onMouseOut={()=>setCondition(false)} onClick={handleClick}>

         { condition ?  
         <div>
            <ListingMarkerInfo info={markerInfo} />
         </div> : null}

            <Icon icon={listingIcon} className="listing-icon" info={markerInfo}/>

        </div>
  )
}

export default ListingMarker
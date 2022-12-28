import React from 'react'
import ListingListItem from './ListingListItem'

const ListingList = ( {listings} ) => {
  return (
    <div className='listings-main'>
        <h1>Homes For You</h1>
        <section className='listings-output'>

        {listings?.map((listing, idx) => (
            <ListingListItem listing={listing} key ={idx}/>
        ))}
        </section>
    </div>
  )
}

export default ListingList
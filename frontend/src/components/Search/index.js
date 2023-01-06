import React, { useEffect } from 'react'
import './Search.css'

import MapSearch from '../MapSearch'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBuyListings, fetchRentListings, removeListings } from '../../store/listings'



const Search = () => {
    const { type } = useParams(); //string type
    const listings = useSelector(store => Object.values(store.listings))
    const dispatch = useDispatch(); 

    useEffect(()=>{
        dispatch(removeListings())
        
        if(type === 'buy'){
            dispatch(fetchBuyListings())
        } else {
            dispatch(fetchRentListings())
        }
    },[dispatch, type])

  return (

    <main className='search-type'>
        <section className='search-map'>
                <h4>google maps</h4>
                {/* <Map latitude={37.776392} longitude={-122.4194}/> */}
                <MapSearch />
        </section>

        <section className='search-listings'>
            <h4>Listings</h4>
                <ul>{listings?.map((listing)=> (
                    
                        <li>{listing.address} </li>
                    
                ))}
                </ul>
        </section>
        
    </main>
    
  )
}

export default Search

/* 
1.controller for search
2. custom routes
3. thunks in listings.js (store)

4. search component dispatch


    2 options of url with wildcards :sale :rent

    questions?
        1.  how to fetch "rent or sale query params from clicked link?
        2.  pass it to controller??
        3. process it with thunks???
        4. do i need store?

*/

/* Controller Model Routes 
    
    1 controller enough?

    RENT
    def index
        @listings_rent = Listing.where(deal_type:"rent")
        render :index
    end

    SALE
    def index
        @listings_rent = Listing.where(deal_type:"sale")
        render :index
    end

    Result: 
        sale page all listings with "deal_type: sale"
        rent page all listings with "deal_type: rent"

*/
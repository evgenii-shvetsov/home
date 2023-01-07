import React, { useEffect } from 'react'
import './Search.css'

import MapSearch from '../MapSearch'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBuyListings, fetchRentListings, removeListings } from '../../store/listings'

import ListingListItem from '../ListingIndexPage/ListingListItem'



const Search = () => {
    const { type } = useParams(); //string type
    const listings = useSelector(store => Object.values(store.listings))
    const dispatch = useDispatch(); 

    // const filteredListings = () =>{
    //     let filtered = []
    //     for(let i=0; i < listings.length; i++){
    //         if(i % 3 === 0){
    //             filtered.push(listings[i])
    //         }
    //     }
    //     return filtered;
    // }

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
                {/* add restriction on amount of listings */}
                <MapSearch listings={listings.slice(0,3)} />
                {/* <MapSearch listings={filteredListings} /> */}
        </section>

        <section className='search-listings'>
            <h4>Listings</h4>
                {/* <ul>{listings?.map((listing)=> (
                        <li>{listing.address} </li>
                ))}
                </ul> */}

                {listings?.map((listing, idx) => (          <ListingListItem listing={listing} key ={idx}/>)).splice(0,3)}
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
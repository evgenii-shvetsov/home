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
                    {/* <h4>google maps</h4> */}
                    {/* add restriction on amount of listings */}
                    <MapSearch  className="search-map-component" listings={listings} />
                    {/* <MapSearch listings={filteredListings} /> */}
                </section>

                <section className='search-listings'>
                {/* <h4>Listings</h4> */}
                    <div className='search-listings-cards'>
                        {listings?.map((listing, idx) => (<ListingListItem listing={listing} key ={idx}/>))}
                    </div>
                </section>

        </main>
    
  )
}

export default Search

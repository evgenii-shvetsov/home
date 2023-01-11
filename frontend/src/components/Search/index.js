import React, { useEffect } from 'react'
import './Search.css'

import MapSearch from '../MapSearch'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBuyListings, fetchRentListings, removeListings } from '../../store/listings'

import ListingListItem from '../ListingIndexPage/ListingListItem'
import SearchFilterSmall from '../SearchFilterSmall'



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
        <main id='search-type'>

            <section className='filters'>
                <div className='filters-wrapper'>
                    <SearchFilterSmall />  
                </div>
            </section>

            <section className='search-output-map-listings'>
                <section className='search-map'>
                    <MapSearch  className="search-map-component" listings={listings} />
                </section>

                <section className='search-listings'>
                    {type === 'buy'? <h4>Real Estate & Homes for Sale</h4> : <h4>Real Estate & Homes for Rent</h4> }
                    <div className='search-listings-cards'>
                        {listings?.map((listing, idx) => (<ListingListItem listing={listing} key ={idx}/>))}
                    </div>
                </section>
            </section>
        </main>
    
  )
}

export default Search

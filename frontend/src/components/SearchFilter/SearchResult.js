import React, { useEffect, useState } from 'react'
import './SearchFilter.css'
import MapSearch from '../MapSearch'
import { useLocation } from "react-router-dom"
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  removeListings, fetchSearchFilterListings, fetchListings } from '../../store/listings'

import ListingListItem from '../ListingIndexPage/ListingListItem'
import SearchFilterSmall from '../SearchFilterSmall'

const SearchResult = ({price, dealType, bedroom, bathroom, listing_type}) => {

    const dispatch = useDispatch(); 
    const location = useLocation()
    const [filter, setFilter] =useState(
        {
            dealType: "",
            bedroom: "",
            bathroom: "",
            listing_type: "",
        }
    )

    const listings = useSelector(store => Object.values(store.listings))
    const[match,setMatch] = useState(false)


    const {searchValue} = location.state


    useEffect(()=>{
        dispatch(removeListings())

        console.log('after remove', listings)
        
        dispatch(fetchSearchFilterListings(searchValue))
        .then((listings)=>{
            let result = listings
            if(!Object.keys(result).length){
                setMatch(true)
                dispatch(fetchListings())
                // setTimeout(()=> setMatch(false),1)
            }
        })
        
    },[dispatch, searchValue])

    

    return (
        <main id='search-type'>

            <section className='filters'>
                <div className='filters-wrapper'>
                    <SearchFilterSmall setFilter={setFilter} filter={filter}/>  
                </div>
            </section>

        <section className='search-output-map-listings'>

            <section className='search-map'>
                <MapSearch  className="search-map-component" listings={listings} />
            </section>

            <section className='search-listings' id='search-result-header'>
                <h4>Real Estate & Homes, based on your search " {searchValue} "</h4>


                {!match ? 
                        <div className='search-listings-cards'>
                            {listings?.filter(listing=>listing.deal_type.includes(filter.dealType) && listing.bedroom.includes(filter.bedroom)).map((listing, idx) => (<ListingListItem listing={listing} key ={idx}/>))}
                         </div>
                        : 
               
                <div className='search-listings-cards'>
                    <h4>No matching results, check what we have for you:</h4> 
                    {listings?.map((listing, idx) => (<ListingListItem listing={listing} key ={idx}/>))}
                    {/* {setTimeout(()=> setMatch(false),1)} */}
                </div>
                 } 


            </section>

        </section>

        </main>

    )
}

export default SearchResult
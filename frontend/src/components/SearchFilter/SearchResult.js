import React, { useEffect } from 'react'
import './SearchFilter.css'
import MapSearch from '../MapSearch'
import { useLocation } from "react-router-dom"
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  removeListings, fetchSearchFilterListings, fetchListings } from '../../store/listings'

import ListingListItem from '../ListingIndexPage/ListingListItem'
import SearchFilterSmall from '../SearchFilterSmall'

const SearchResult = () => {

    const dispatch = useDispatch(); 
    const location = useLocation()

    const listings = useSelector(store => Object.values(store.listings))


    const {searchValue} = location.state

    useEffect(()=>{
        dispatch(removeListings())
        console.log('after remove', listings)
        
        dispatch(fetchSearchFilterListings(searchValue))
        .then(()=>{
           console.log('inside then', listings)
            if(!listings.length){
                console.log("inside failed SEARCH", listings)
                dispatch(fetchListings())

            }
        })
        
    },[dispatch, searchValue])

    

    return (
        <main className='search-type'>
            <section className='filters'>

                <div className='filters-wrapper'>

                    <div >
                        <SearchFilterSmall />  
                    </div>
                    
                    <div className='filter-buttons'>
                        <select name="deal_type" id="">
                            <option value="" disabled selected>Deal type</option>
                            <option value="sale">For Sale</option>
                            <option value="rent">For Rent</option>
                        </select>

                        <select name="bedroom" id="">
                            <option value="" disabled selected>Beds</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>

                        <select name="bathroom" id="">
                            <option value="" disabled selected>Baths</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>

                        <select name="listing_type" id="">
                            <option value="" disabled selected>Home Type</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                        </select>
                    </div>
                </div>
            </section>



            <section className='search-map'>
                <MapSearch  className="search-map-component" listings={listings} />
            </section>

            <section className='search-listings' id='search-result-header'>
                <h4>Real Estate & Homes, based on your search " {searchValue} "</h4>

                {!listings?.length ? <h4>No matching results</h4> : 
                <div className='search-listings-cards'>
                    {listings?.map((listing, idx) => (<ListingListItem listing={listing} key ={idx}/>))}
                </div>
                } 
            </section>

        </main>

    )
}

export default SearchResult
import React, { useEffect } from 'react'
import './SearchFilter.css'
import MapSearch from '../MapSearch'
import { useLocation } from "react-router-dom"
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  removeListings, fetchSearchFilterListings, fetchListings } from '../../store/listings'

import ListingListItem from '../ListingIndexPage/ListingListItem'

const SearchResult = () => {

    const dispatch = useDispatch(); 
    const location = useLocation()

    const listings = useSelector(store => Object.values(store.listings))

    // const blabla = 

    const {searchValue} = location.state

    useEffect(()=>{
        dispatch(removeListings())
        console.log('after remove', listings)
        dispatch(fetchSearchFilterListings(searchValue))
        .then(()=>{
           console.log('inside then', listings)
            if(!listings?.length){
                console.log("inside failed SEARCH", listings)
                dispatch(fetchListings())

            }
        })
        
    },[dispatch, searchValue])

    

    return (
        <main className='search-type'>
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
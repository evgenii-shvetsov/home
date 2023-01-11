import React, { useEffect, useState } from 'react'
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
    const[test,setTest] = useState(false)


    const {searchValue} = location.state

    // useEffect(()=>{
    //     if(!listings.length){
    //         console.log("inside failed SEARCH", listings)
    //         dispatch(fetchListings())

    //     }
    // },[dispatch, listings])



    useEffect(()=>{
        dispatch(removeListings())

        console.log('after remove', listings)
        
        dispatch(fetchSearchFilterListings(searchValue))
        .then((listings)=>{
            let result = listings
            if(!Object.keys(result).length){
                setTest(true)
                dispatch(fetchListings())
            }

            // console.log(";asdadasda",result)


        //    console.log('inside then', listings)
            // if(!listings.length){
            //     console.log("inside failed SEARCH", listings)
            //     dispatch(fetchListings())

            // }
        })
        
    },[dispatch, searchValue])



    

    return (
        <main className='search-type'>

            <section className='filters'>
                <div className='filters-wrapper'>
                    <SearchFilterSmall />  
                </div>
            </section>

        <section className='search-output-map-listings'>

            <section className='search-map'>
                <MapSearch  className="search-map-component" listings={listings} />
            </section>

            <section className='search-listings' id='search-result-header'>
                <h4>Real Estate & Homes, based on your search " {searchValue} "</h4>

                {/* {!test ? <h4>No matching results</h4> : 
                <div className='search-listings-cards'>
                    {listings?.map((listing, idx) => (<ListingListItem listing={listing} key ={idx}/>))}
                </div>
                 }   */}

                {!test ? 
                        <div className='search-listings-cards'>
                        
                        {listings?.map((listing, idx) => (<ListingListItem listing={listing} key ={idx}/>))}
                    </div>
                        : 
               
               <div className='search-listings-cards'>
                    <h4>No matching results, check what we have for you:</h4> 
                    {listings?.map((listing, idx) => (<ListingListItem listing={listing} key ={idx}/>))}
                </div>
                 } 


            </section>

        </section>

        </main>

    )
}

export default SearchResult
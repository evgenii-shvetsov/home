import React, { useEffect, useState } from 'react'
import './SearchFilter.css'
import MapSearch from '../MapSearch'
import { useLocation } from "react-router-dom"
// import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {  removeListings, fetchSearchFilterListings, fetchListings } from '../../store/listings';

import ListingListItem from '../ListingIndexPage/ListingListItem';
import SearchFilterSmall from '../SearchFilterSmall';

import Spinner from '../Spinner/Spinner';
import { GridLoader } from 'react-spinners';

const SearchResult = () => {

    const dispatch = useDispatch(); 
    const location = useLocation()
    const [filter, setFilter] = useState(
        {   
            // dealType: "",
            bedroom: "",
            bathroom: "",
            listing_type: "",
        }
    )

    // console.log(filter.price)
    const [loading, setLoading] = useState(false);

    const listings = useSelector(store => Object.values(store.listings))
    const[match,setMatch] = useState(false)


    const {searchValue} = location.state


    useEffect(()=>{
        setLoading(true);
        dispatch(removeListings())

        // console.log('after remove', listings)
        
        dispatch(fetchSearchFilterListings(searchValue))
        .then((listings)=>{
            let result = listings
            if(!Object.keys(result).length){
                setMatch(true)
                // dispatch(fetchListings())
                // setTimeout(()=> setMatch(false),1)
                
            }
            setLoading(false);
        })
        
    },[dispatch, searchValue])

    setTimeout(()=> setMatch(false),7000)

    return (
        <main id='search-type'>

            <section className='filters'>
                <div className='filters-wrapper'>
                    <SearchFilterSmall setFilter={setFilter} filter={filter}/>  
                </div>
            </section>

        <section className='search-output-map-listings'>

            <section className='search-map'>
                <MapSearch  className="search-map-component" listings={listings?.filter(listing=>/*listing.deal_type.includes(filter.dealType) &&*/ listing.bedroom.includes(filter.bedroom) && listing.bathroom.includes(filter.bathroom) && listing.listing_type.includes(filter.listing_type))} />
            </section>

            <section className='search-listings' id='search-result-header'>
                <h4>Real Estate & Homes, based on your search " {searchValue} "</h4>

                <div>
                    {loading ? (
                      <div className="spinner-container">
                        <GridLoader size={30} color={'lightblue'} />
                      </div>
                    ) : (
                      !match ? (
                        listings
                          ?.filter(listing =>
                            listing.bedroom.includes(filter.bedroom) &&
                            listing.bathroom.includes(filter.bathroom) &&
                            listing.listing_type.includes(filter.listing_type)
                          ).length > 0 ? (
                          <div className="search-listings-cards">
                            {listings
                              ?.filter(listing =>
                                listing.bedroom.includes(filter.bedroom) &&
                                listing.bathroom.includes(filter.bathroom) &&
                                listing.listing_type.includes(filter.listing_type)
                              ).map((listing, idx) => <ListingListItem listing={listing} key={idx} />)
                            }
                          </div>
                        ) : (
                          <p id="no-match-text">No matching results</p>
                        )
                      ) : (
                        <div className="search-listings-cards">
                          <h4>No matching results</h4> <br />
                        </div>
                      )
                    )}
            </div>



            </section>

        </section>

        </main>

    )
}

export default SearchResult


// {!match ? 
//     <div className='search-listings-cards'>
//         {listings?.filter(listing=>/*listing.deal_type.includes(filter.dealType) &&*/ listing.bedroom.includes(filter.bedroom) && listing.bathroom.includes(filter.bathroom) && listing.listing_type.includes(filter.listing_type)).map((listing, idx) => (<ListingListItem listing={listing} key ={idx}/>))}
//      </div>
//     : 

// <div className='search-listings-cards'>
//  <h4>No matching results, check what we have for you: </h4> <br/> 
//     {listings?.filter(listing=>/*listing.deal_type.includes(filter.dealType) &&*/ listing.bedroom.includes(filter.bedroom) && listing.bathroom.includes(filter.bathroom) && listing.listing_type.includes(filter.listing_type)).map((listing, idx) => (<ListingListItem listing={listing} key ={idx}/>))}



// </div>
// } 
import React, { useEffect, useState } from 'react'
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

    const [filter, setFilter] = useState(
        {   price: "",
            dealType: "",
            bedroom: "",
            bathroom: "",
            listing_type: "",
        }
    )

    useEffect(()=>{
        dispatch(removeListings())
        
        if(type === 'buy'){
            dispatch(fetchBuyListings())
        } else {
            dispatch(fetchRentListings())
        }

    },[dispatch, type])

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
        <main id='search-type'>

            <section className='filters'>
                <div className='filters-wrapper'>
                    <SearchFilterSmall setFilter={setFilter} filter={filter}/>  
                </div>
            </section>

            <section className='search-output-map-listings'>
                <section className='search-map'>
                    <MapSearch  className="search-map-component" listings={listings?.filter(listing=>listing.deal_type.includes(filter.dealType) && listing.bedroom.includes(filter.bedroom) && listing.bathroom.includes(filter.bathroom) && listing.listing_type.includes(filter.listing_type))} />
                </section>

                <section className='search-listings'>
                    {type === 'buy'? <h4>Real Estate & Homes for Sale</h4> : <h4>Real Estate & Homes for Rent</h4> }
                    {/* <div className='search-listings-cards'> */}
                    {/* {listings?.filter(listing=>listing.deal_type.includes(filter.dealType) && listing.bedroom.includes(filter.bedroom) && listing.bathroom.includes(filter.bathroom) && listing.listing_type.includes(filter.listing_type)).map((listing, idx) => (<ListingListItem listing={listing} key ={idx}/>))} */}

                {listings
                    ?.filter(listing =>
                        listing.deal_type.includes(filter.dealType) &&
                        listing.bedroom.includes(filter.bedroom) &&
                        listing.bathroom.includes(filter.bathroom) &&
                        listing.listing_type.includes(filter.listing_type)
                    ).length > 0 ? (
                        <div className="search-listings-cards">
                        {listings
                            ?.filter(listing =>
                            listing.deal_type.includes(filter.dealType) &&
                            listing.bedroom.includes(filter.bedroom) &&
                            listing.bathroom.includes(filter.bathroom) &&
                            listing.listing_type.includes(filter.listing_type)
                            ).map((listing, idx) => <ListingListItem listing={listing} key={idx} />)
                        }
                        </div>
                    ) : (
                        <p id='no-match-text'>No matching results</p>
                    )}
                    {/* </div> */}
                </section>
            </section>
        </main>
    
  )
}

export default Search

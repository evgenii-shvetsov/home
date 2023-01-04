import React from 'react'
import ListingIndexPage from '../ListingIndexPage'
import ListingList from '../ListingIndexPage/ListingList';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchListings } from '../../store/listings';
import { fetchFavorites } from '../../store/favorites';
const MyHome = () => {

    const sessionUser = useSelector(state => state.session.user);

    const listingsSpecial = useSelector((store) => {
        return Object.values(store.listings).filter(listing=>listing.owner_id === sessionUser.id)
    });

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchListings());
        
        if(sessionUser){
          dispatch(fetchFavorites())
        }
    },[dispatch, sessionUser])

// const data = listings.map((listing)=> listing.owner_id)

    // console.log(listings)
    // console.log(data)
    console.log(listingsSpecial)
    const textSpecial = "Your Listings"
  return (
    <main>
        <div>MyHome</div>
        {/* <section><ListingIndexPage/></section> */}
        <section><ListingList listings={listingsSpecial} text ={textSpecial}/></section>
    </main>
  )
}

export default MyHome
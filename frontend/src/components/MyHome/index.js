import React from 'react'
import ListingIndexPage from '../ListingIndexPage'
import ListingList from '../ListingIndexPage/ListingList';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchListings } from '../../store/listings';
import { fetchFavorites } from '../../store/favorites';
const MyHome = () => {

    const sessionUser = useSelector(state => state.session.user);

    const favorites = useSelector((store) => store.favorites)

    const listings = useSelector((store) => Object.values(store.listings));


    // const ownerListings = useSelector((store) => {
    //     return Object.values(store.listings).filter(listing=>listing.owner_id === sessionUser.id)
    // });

    const ownerListings = Object.values(listings).filter(listing=>listing.owner_id === sessionUser.id);


    // const userFavorites = useSelector((store) => {
    //     return Object.values(favorites).filter(favorite => favorite.owner_id === sessionUser.id)
    // });

    const userFavorites = Object.values(favorites).filter(favorite => favorite.owner_id === sessionUser.id);

    //Object.values(favorits).find(favorite => favorite.owner_id === sessionUser.id)

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchListings());
        
        if(sessionUser){
          dispatch(fetchFavorites())
        }
    },[dispatch, sessionUser])

const userFavoritesListingsId = userFavorites.map((favorite)=> favorite.listing_id)

const matchedFavoritesListings = userFavoritesListingsId.map(el=> ({...listings.filter((listing)=> el === listing.id)[0]}))


// const desiredOutput = listings.map(listing=> data.map((el)=> el ===listing.id))

    // console.log(listings)
    // console.log(data)
    // console.log(ownerListings)
    // console.log(favorites)
    // console.log(userFavoritesListingsId)
// console.log(matchedFavoritesListings)
    const ownerListingText = "Your Listings"
    const favoriteListingText = "Your Favorites"
  return (
    <main>
        <div>MyHome</div>
        {/* <section><ListingIndexPage/></section> */}
        <section><ListingList listings={ownerListings} text ={ownerListingText}/></section>

        <section><ListingList listings={matchedFavoritesListings} text ={favoriteListingText}/></section>
    </main>
  )
}

export default MyHome
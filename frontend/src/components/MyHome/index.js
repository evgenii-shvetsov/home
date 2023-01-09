import React from 'react'
// import ListingIndexPage from '../ListingIndexPage'
import ListingList from '../ListingIndexPage/ListingList';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchListings } from '../../store/listings';
import { fetchFavorites } from '../../store/favorites';
import { Redirect} from 'react-router-dom';
// import { useHistory } from "react-router-dom";

// import Homepage from '../Homepage';

const MyHome = () => {
    const sessionUser = useSelector(state => state.session.user);
    const favorites = useSelector((store) => store.favorites)
    const listings = useSelector((store) => Object.values(store.listings));

    if(!sessionUser) {
      <Redirect to="/" />
   }

    let ownerListings;
    let userFavorites;

    if(sessionUser){
      ownerListings = Object.values(listings).filter(listing=>listing.owner_id === sessionUser.id);

      userFavorites = Object.values(favorites).filter(favorite => favorite.owner_id === sessionUser.id);
    }
    

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchListings());
        
        if(sessionUser){
          dispatch(fetchFavorites())
        }

    },[dispatch, sessionUser])

    

    const userFavoritesListingsId = userFavorites?.map((favorite)=> favorite.listing_id)

    const matchedFavoritesListings = userFavoritesListingsId?.map(el=> ({...listings.filter((listing)=> el === listing.id)[0]}))

    const ownerListingText = "Your Listings"
    const favoriteListingText = "Your Favorites"


  


  return (
    <main className='my-home'>
        {
          !ownerListings?.length ? null : 
          <section><ListingList listings={ownerListings} text ={ownerListingText}/></section>
        }

        
        {
          !userFavorites?.length ? null : 
            <section><ListingList listings={matchedFavoritesListings} text ={favoriteListingText}/></section>
         } 
    </main>
  )
}

export default MyHome
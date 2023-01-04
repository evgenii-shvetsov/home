import React from 'react'
import ListingIndexPage from '../ListingIndexPage'
import ListingList from '../ListingIndexPage/ListingList';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchListings } from '../../store/listings';
import { fetchFavorites } from '../../store/favorites';
// import { Route, Switch, Redirect} from 'react-router-dom';

// import Homepage from '../Homepage';

const MyHome = () => {
    const sessionUser = useSelector(state => state.session.user);
    const favorites = useSelector((store) => store.favorites)
    const listings = useSelector((store) => Object.values(store.listings));

    // if(!sessionUser) {
    //     <Switch>
    //         <Route exact path="/" component={Homepage} />
    //         <Redirect to="/" />
    //     </Switch>
    //  }

    const ownerListings = Object.values(listings).filter(listing=>listing.owner_id === sessionUser.id);

    const userFavorites = Object.values(favorites).filter(favorite => favorite.owner_id === sessionUser.id);

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchListings());
        
        if(sessionUser){
          dispatch(fetchFavorites())
        }

    },[dispatch, sessionUser])

    const userFavoritesListingsId = userFavorites.map((favorite)=> favorite.listing_id)

    const matchedFavoritesListings = userFavoritesListingsId.map(el=> ({...listings.filter((listing)=> el === listing.id)[0]}))

    const ownerListingText = "Your Listings"
    const favoriteListingText = "Your Favorites"

    // if(!sessionUser) {
    //    <Redirect to="/" />
    // }

  return (
    <main className='my-home'>
    
        <section><ListingList listings={ownerListings} text ={ownerListingText}/></section>

        <section><ListingList listings={matchedFavoritesListings} text ={favoriteListingText}/></section>
    </main>
  )
}

export default MyHome
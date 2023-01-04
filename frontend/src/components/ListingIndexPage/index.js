import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchListings } from '../../store/listings';
import ListingList from './ListingList';
import "./ListingIndexPage.css";
// import {Link, useHistory} from "react-router-dom";

import {fetchFavorites} from "../../store/favorites";

const ListingIndexPage = () => {
  const sessionUser = useSelector(state => state.session.user);

    const listings = useSelector((store) => Object.values(store.listings));
    

    const dispatch = useDispatch();
    // const history = useHistory();

    useEffect(()=>{
        dispatch(fetchListings());
        
        if(sessionUser){
          dispatch(fetchFavorites())
        }
    },[dispatch, sessionUser])
    
  return (
    <div >
        {/* <h1>Listing Index Page</h1> */}
        {/* <button onClick={() => history.push("/listings/new")}>
        <Link
          to="/listings/new"
          style={{ textDecoration: "none", color: "black" }}
        >
          Create Listing
        </Link>
      </button> */}
      <ListingList listings={listings}  />
    </div>
  )
}

export default ListingIndexPage
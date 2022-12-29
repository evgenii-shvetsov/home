import React from 'react';
import { useEffect } from 'react';
import { Link, useHistory, useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchListing } from '../../store/listings';
import "./ListingShowPage.css";



const ListingShowPage = () => {

    const { listingId } = useParams();
    const listing = useSelector((store) => store.listings[listingId]);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        dispatch(fetchListing(listingId))
    }, [dispatch, listingId])
    
    if(!listing) return null;

  return (
    <main>
        
        {/* <button onClick={() => history.push("/")}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Back
        </Link>
      </button> */}

        <h4>Listing Details</h4>
        <br />

        <h4>Listing type: {listing.listing_type}</h4>
        <h4>Deal type: {listing.deal_type}</h4>
        <h4>Price: {listing.price}</h4>
        <br />

        <h4>Address: {listing.address}</h4>
        <h4>ZIP: {listing.zip}</h4>
        <h4>State: {listing.state}</h4>
        <h4>City: {listing.city}</h4>
        <h4>Latitude: {listing.lat}</h4>
        <h4>Longitude: {listing.lng}</h4>
        <br />
        <h4>Size: {listing.size} sq.ft.</h4>
        <h4>Bedroom: {listing.bedroom}</h4>
        <h4>Bathroom: {listing.bathroom}</h4>
        <h4>Built in: {listing.year_built}</h4>
        <br />
        
        <p>Description: {listing.description}</p>
    </main>
  )
}

export default ListingShowPage
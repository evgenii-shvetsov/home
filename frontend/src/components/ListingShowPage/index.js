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
    <div>
        <h1>{listing.deal_type}</h1>
        <button onClick={() => history.push("/")}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Back
        </Link>
      </button>

      <h1>Details</h1>
        <p>{listing.description}</p>
        <h4>Address: {listing.address}</h4>
        <h4>Size: {listing.size} sq.ft.</h4>
        <h4>Price: {listing.price}</h4>
    </div>
  )
}

export default ListingShowPage
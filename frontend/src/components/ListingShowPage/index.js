import React from 'react';
import { useEffect } from 'react';
import { Link, useHistory, useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchListing } from '../../store/listings';
import "./ListingShowPage.css";
import logo from "../../assets/home-logo.png"


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
    <main className='listing-details-page'>
        
        {/* <button onClick={() => history.push("/")}>
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          Back
        </Link>
      </button> */}
      <section className='listing-gallery'>
        {/* <h1>Gallery </h1> */}
        <br />
        <img src={logo} alt="" />
      </section>

      <section className='listing-detailed-info'>
        {/* <h4>Listing Details</h4> */}

        <section>
            ${listing.price} &nbsp; &nbsp;
            {listing.bedroom} bds | &nbsp;
            {listing.bathroom} ba | &nbsp;
            {listing.size} sqft
        </section>

        <section>
            {listing.address}, &nbsp;
            {listing.city}, &nbsp;
            {listing.state}&nbsp;
            {listing.zip}
        </section>

        <h4>For {listing.deal_type}</h4>

        <button>CONTACT AGENT</button>

        <section className='listing-features'>
          <div> <i className="fa-regular fa-building"></i> {listing.listing_type}</div>
          <div><i className="fa-regular fa-calendar-days"></i> Built in {listing.year_built}</div>
          <div><i className="fa-solid fa-arrows-left-right"></i> {listing.size} sqft</div>
          <div><i className="fa-solid fa-bed"></i> {listing.bedroom} bedroom</div>
          <div><i className="fa-solid fa-bath"></i> {listing.bathroom} bathroom</div>
        </section>

        <section>
          <h4>Overview</h4>
          <p>{listing.description}</p>
        </section>

        <section>
          <h4>MAP</h4>
        </section>


        


        {/* <br />

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
        
        <p>Description: {listing.description}</p> */}
      </section>

        
    </main>
  )
}

export default ListingShowPage
import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory, useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchListing } from '../../store/listings';
import "./ListingShowPage.css";
import logo from "../../assets/home-logo.png"
import { deleteListing } from "../../store/listings";
import Map from '../Map'

const ListingShowPage = () => {

    const { listingId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const listing = useSelector((store) => store.listings[listingId]);
    const dispatch = useDispatch();
    const history = useHistory();

    const [heart, setHeart] = useState(false)

    useEffect(()=>{
        dispatch(fetchListing(listingId))
    }, [dispatch, listingId])

  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     history.push(`/listings/${listing.id}`)
  // }
    const heartClick = () =>{
      setHeart(!heart)
  }

  //   const initMap = () => {
  //     // The location of Uluru
  //     const uluru = { lat: listing.lat, lng: listing.lng };
  //     // The map, centered at Uluru
  //   const map = new google.maps.Map(document.getElementById("map"), {
  //   zoom: 4,
  //   center: uluru,
  // });
  //   }
    
    if(!listing) return null;

  return (
    <main className='listing-details-page'>

      <section className='listing-gallery'>
        <img src={logo} alt="" />
      </section>



      <section className='listing-detailed-info'>

        <section className='listing-detailed-info-header'>

          <button className="show-page-font-awesome-favorite" onClick={heartClick}>
                      {!heart ? <i className="fa-regular fa-heart"><span> Save</span></i> : <i className="fa-solid fa-heart"><span> Saved</span></i> }
          </button>

          {sessionUser?.id === listing.owner_id &&
                  <>
                      <Link to={`/listings/${listing.id}/edit`}> <button /*className="listing-card-update"*/>
                          <i className="fa-solid fa-pen"></i> Edit
                      </button>
                      </Link>

                      <button /*className="listing-card-delete"*/
                          onClick={()=> {
                            dispatch(deleteListing(listing.id))
                            history.push("/")
                          }}>
                              <i className="fa-solid fa-trash"></i> Delete
                      </button>
                  </>
          }
        </section>


        <section id='listing-short-description'>
            <span id='listing-price'>${listing.price.toLocaleString()} </span>
            <span className='bold-numbers'>{listing.bedroom}</span> bds | &nbsp;
            <span className='bold-numbers'>{listing.bathroom}</span> ba | &nbsp;
            <span className='bold-numbers'>{listing.size}</span> sqft
        </section>

        <section id='listing-location'>
            {listing.address}, &nbsp;
            {listing.city}, &nbsp;
            {listing.state}&nbsp;
            {listing.zip}
        </section>

        <section id='listing-deal-type'>
          <h4>For {listing.deal_type}</h4>
        </section>

        <section id='contact-agent'>
          <button id='contact-agent-btn'>CONTACT AGENT</button>
        </section>
        

        <section id='listing-features'>
          <div> <i className="fa-regular fa-building"></i>&nbsp; {listing.listing_type}</div>
          <div><i className="fa-regular fa-calendar-days"></i>&nbsp; built in {listing.year_built}</div>
          <div><i className="fa-solid fa-arrows-left-right"></i>&nbsp; {listing.size} sqft</div>
          <div><i className="fa-solid fa-bed"></i>&nbsp; {listing.bedroom} bedroom</div>
          <div><i className="fa-solid fa-bath"></i>&nbsp; {listing.bathroom} bathroom</div>
        </section>

        <section id='listing-overview' >
          <h4>Overview</h4>
          <p>{listing.description}</p>
        </section>

        <section id='listing-map'>
          <h4>Map</h4>
          <Map latitude={listing.lat} longitude={listing.lng}/>
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
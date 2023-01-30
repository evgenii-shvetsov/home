import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useHistory, useParams} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchListing } from '../../store/listings';
import "./ListingShowPage.css";
import logo from "../../assets/home-logo.png"
import { deleteListing } from "../../store/listings";
import { createFavorite ,deleteFavorite, fetchFavorites } from '../../store/favorites';

import { Modal } from '../../context/Modal';
import RequestForm from "../SaveModalRequest/RequestForm";

import Map from '../Map'

import mainPlaceholder from '../../assets/placeholders/main-placeholder.jpg'
import firstPlaceholder from '../../assets/placeholders/1-placeholder.jpg'
import secondlaceholder from '../../assets/placeholders/2-placeholder.jpg'
import thirdPlaceholder from '../../assets/placeholders/3-placeholder.jpg'
import fifthPlaceholder from '../../assets/placeholders/4-placeholder.jpg'


const ListingShowPage = () => {

    const { listingId } = useParams();
    const sessionUser = useSelector(state => state.session.user);
    const listing = useSelector((store) => store.listings[listingId]);
    const favorites = useSelector((store) => store.favorites)

    const [showModal, setShowModal] = useState(false);

    //temporary placeholders
    // const url_main = mainPlaceholder
    // const url_1 = firstPlaceholder
    // const url_2 = secondlaceholder
    // const url_3 = thirdPlaceholder
    // const url_4 = fifthPlaceholder
    
    //This is for production
    const url_main = listing?.photoUrls[0]
    const url_1 = listing?.photoUrls[1]
    const url_2 = listing?.photoUrls[2]
    const url_3 = listing?.photoUrls[3]
    const url_4 = listing?.photoUrls[4]
  

    const dispatch = useDispatch();
    const history = useHistory();

    const [heart, setHeart] = useState(false)

    useEffect(()=>{
        dispatch(fetchListing(listingId))
        if(sessionUser){
        dispatch(fetchFavorites()).then((favorites)=>{
          if(Object.values(favorites).find(el=>el.listing_id === +listingId)){
          setHeart(true)
          } 
        })}
        
    }, [dispatch, sessionUser, listingId])

    const heartClick = () =>{
      if(sessionUser){
        if(!heart){
          const favorite = {favorite: {owner_id: sessionUser.id, listing_id: listingId }}
          dispatch(createFavorite(favorite))
          setHeart(true)
        } else {
          dispatch(deleteFavorite(Object.values(favorites).find(el=>el.listing_id === +listingId).id))
          setHeart(false)
        }
      }
      else{
        setShowModal(true)
        // alert('AAAAA Please LOGIN TO USE THE FEATURE')
      }
  }
 
    
    if(!listing) return null;

  return (
    <main className='listing-details-page'>

      <section className='listing-gallery'>

        <div className='listing-gallery-main-wrapper'>
           {url_main ? <img id='listing-gallery-main' src={url_main} alt="" /> : <img id='listing-gallery-main-placeholder' src={logo} alt="" />}
        </div>

        <div className='listing-gallery-extra-wrapper'>

          {url_1 ? <img src={url_1} alt="" /> : null}
          {url_2 ? <img src={url_2} alt="" /> : null}
          {url_3 ? <img src={url_3} alt="" /> : null}
          {url_4 ? <img src={url_4} alt="" /> : null}
        </div>
      </section>



      <section className='listing-detailed-info'>

        <section className='listing-detailed-info-header'>
          
        {sessionUser?.id !== listing.owner_id &&
          <button className="show-page-font-awesome-favorite" onClick={heartClick}>
                      {!heart ? <i className="fa-regular fa-heart"><span> Save</span></i> : <i className="fa-solid fa-heart"><span> Saved</span></i> }
          </button>
        }
          {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                         <RequestForm setShowModal={setShowModal} onClose={() => setShowModal(false)}/>
                    </Modal>
                )}

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

        {/* <section id='contact-agent'>
          <button id='contact-agent-btn'>CONTACT AGENT</button>
        </section> */}
        
        <section id='contact-agent'>
          <button id='contact-agent-btn'>CONTACT AGENT <br/>(415) 123-4567</button>
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

      </section>

        
    </main>
  )
}

export default ListingShowPage
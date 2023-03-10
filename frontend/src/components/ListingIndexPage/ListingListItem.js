import React from "react";
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";
import logo from "../../assets/home-logo.png";

import {useDispatch} from 'react-redux';
import { deleteListing } from "../../store/listings";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { createFavorite, deleteFavorite} from "../../store/favorites";

import { Modal } from '../../context/Modal';
import RequestForm from "../SaveModalRequest/RequestForm";

import mainPlaceholder from '../../assets/placeholders/main-placeholder.jpg'





const ListingListItem = ( {listing} ) => {

    const favorites = useSelector((store) => store.favorites)
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user);

    const [showModal, setShowModal] = useState(false);



    // const url = mainPlaceholder

    //production code
    const url = listing?.photoUrls?.at(0)
    
    

    const history = useHistory();
    
    const [heart, setHeart] = useState(false)

    useEffect(()=>{
        
          if(Object.values(favorites).find(el=>el.listing_id === listing.id)){
          setHeart(true)
          }

    }, [dispatch, favorites, listing.id, sessionUser])

    const handleClick = (e) => {
        e.preventDefault();
        history.push(`/listings/${listing.id}`)
        window.scrollTo(0,0)
    }
    const heartClick = () => {
        // setShowModal(true)
        if(sessionUser){
            if(!heart){
                const favorite = {favorite: {owner_id: sessionUser.id, listing_id: listing.id }}
                dispatch(createFavorite(favorite))
                setHeart(true)
              } else {
                dispatch(deleteFavorite(Object.values(favorites).find(el=>el.listing_id === +listing.id).id))
                setHeart(false)
              }
        } else{
            setShowModal(true)
        }
    }

    if(listing){
  
    return (
        // <>
       
        //  {sessionUserId === listing.owner_id &&
        <div /*onClick={handleClick}*/ className="listing-container">
            <section className="listing-wrapper">
                
                {sessionUser?.id !== listing.owner_id &&
                <button className="font-awesome-favorite" onClick={heartClick}>
                    {!heart ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i> }
                </button>
                }

                {showModal && (
                    <Modal onClose={() => setShowModal(false)}>
                         <RequestForm setShowModal={setShowModal} onClose={() => setShowModal(false)} />
                    </Modal>
                )}

                <section className="listing-img">
                    {/* <img onClick={handleClick} id="home-logo" src={logo} alt="home logo" /> */}
                    {url ? <img onClick={handleClick} id="home-logo" src={url} alt="home logo" /> : <img onClick={handleClick} id="home-logo-placeholder" src={logo} alt="home logo" />}
                    {/* <img onClick={handleClick} id="home-logo" src={url} alt="home logo" /> */}
                </section>

                
             
                <section /*onClick={handleClick}*/ className="listing-detail">
                   <h2>${listing.price?.toLocaleString()}</h2>
                   {/* <h2>${listing.price}</h2> */}
                   <div>
                        {listing.bedroom} bds | &nbsp;
                        {listing.bathroom} ba | &nbsp;
                        {listing.size} sqft | &nbsp;
                        For {listing.deal_type}
                   </div>

                    <div>
                        {listing.address}, &nbsp;
                        {listing.city}, &nbsp;
                        {listing.state}&nbsp;
                        {listing.zip}
                    </div>
                    

                {sessionUser?.id === listing.owner_id &&
                <>
                    <Link to={`/listings/${listing.id}/edit`}> <button className="listing-card-update">
                        <i className="fa-solid fa-pen"></i>
                    </button>
                    </Link>

                    <button className="listing-card-delete"
                        onClick={()=> dispatch(deleteListing(listing.id))}>
                            <i className="fa-solid fa-trash"></i>
                    </button>
                </>
                }

                </section>
            </section>
        </div>
        // }
        // </>
    )
}
}
export default ListingListItem;
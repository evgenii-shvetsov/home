import React from "react";
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from "react";
import logo from "../../assets/home-logo.png";

import {useDispatch} from 'react-redux';
import { deleteListing } from "../../store/listings";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { createFavorite, deleteFavorite, fetchFavorites } from "../../store/favorites";

//commented code is for showing listings for specific user

const ListingListItem = ( {listing} ) => {

    const favorites = useSelector((store) => store.favorites)

     const dispatch = useDispatch()


    const sessionUser = useSelector(state => state.session.user);

    // console.log(listing.owner_id)
    // const dispatch = useDispatch()

    const history = useHistory();
    
    const [heart, setHeart] = useState(false)

    useEffect(()=>{
        
          if(Object.values(favorites).find(el=>el.listing_id === listing.id)){
          setHeart(true)
          }

    }, [dispatch, favorites, listing.id])

    const handleClick = (e) => {
        e.preventDefault();
        history.push(`/listings/${listing.id}`)
    }
    const heartClick = () =>{
        if(!heart){
            const favorite = {favorite: {owner_id: sessionUser.id, listing_id: listing.id }}
            dispatch(createFavorite(favorite))
            setHeart(true)
          } else {
            dispatch(deleteFavorite(Object.values(favorites).find(el=>el.listing_id === +listing.id).id))
            setHeart(false)
          }
    }

    return (
        // <>
        
        //  {sessionUserId === listing.owner_id &&
        <div /*onClick={handleClick}*/ className="listing-container">
            <section className="listing-wrapper">
                

                <button className="font-awesome-favorite" onClick={heartClick}>
                    {!heart ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i> }
                </button>

                <section className="listing-img">
                    <img onClick={handleClick} id="home-logo" src={logo} alt="home logo" />
                </section>

                
             
                <section /*onClick={handleClick}*/ className="listing-detail">
                   <h2>${listing.price.toLocaleString()}</h2>

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
                    <Link to={`listings/${listing.id}/edit`}> <button className="listing-card-update">
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

export default ListingListItem;
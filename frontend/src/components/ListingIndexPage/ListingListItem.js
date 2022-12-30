import React from "react";
import { useHistory } from 'react-router-dom';
import { useState } from "react";
import logo from "../../assets/home-logo.png";

// import { useSelector } from 'react-redux';

//commented code is for showing listings for specific user

const ListingListItem = ( {listing} ) => {
    // const sessionUserId = useSelector(state => state.session.user.id);
    // console.log(listing.owner_id)
    const history = useHistory();
    
    const [heart, setHeart] = useState(false)


    const handleClick = (e) => {
        e.preventDefault();
        history.push(`/listings/${listing.id}`)
    }
    const heartClick = () =>{
        setHeart(!heart)
    }

    return (
        // <>
        
        //  {sessionUserId === listing.owner_id &&
        <div /*onClick={handleClick}*/ className="listing-container">
            <section className="listing-wrapper">

                <button className="font-awesome-favorite" onClick={heartClick}>
                    {!heart ? <i class="fa-regular fa-heart"></i> : <i class="fa-solid fa-heart"></i> }
                </button>

                <section className="listing-img">
                    <img onClick={handleClick} id="home-logo" src={logo} alt="home logo" />
                </section>

                
             
                <section onClick={handleClick} className="listing-detail">
                   <h2>${listing.price}</h2>

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

                </section>
            </section>
        </div>
        // }
        // </>
    )
}

export default ListingListItem;
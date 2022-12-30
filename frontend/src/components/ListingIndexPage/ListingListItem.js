import React from "react";
import { useHistory } from 'react-router-dom';
import logo from "../../assets/home-logo.png";

// import { useSelector } from 'react-redux';

//commented code is for showing listings for specific user

const ListingListItem = ( {listing} ) => {
    // const sessionUserId = useSelector(state => state.session.user.id);
    // console.log(listing.owner_id)
    const history = useHistory();
    
    const handleClick = (e) => {
        e.preventDefault();
        history.push(`/listings/${listing.id}`)
    }

    return (
        // <>
        
        //  {sessionUserId === listing.owner_id &&
        <div onClick={handleClick} className="listing-container">
            <section className="listing-wrapper">
                <section className="listing-img">
                    <img id="home-logo" src={logo} alt="home logo" />
                </section>
             
                <section className="listing-detail">
                   
                    <h2>Listing type : {listing.listing_type}</h2>
                    <h2>Address: {listing.address}</h2>
                    <h2>Size: {listing.size} sq.ft.</h2>
                    <h2>Price: {listing.price}</h2>
                </section>
                </section>
                </div>
        // }
        // </>
    )
}

export default ListingListItem;
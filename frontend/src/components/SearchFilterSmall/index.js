import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  removeListings, fetchListings } from '../../store/listings'
import { useHistory } from "react-router-dom";


import "./SearchFilterSmall.css"

const SearchFilterSmall = ({filter, setFilter}) => {

    // const [price, setPrice] = useState('');

    // const [dealType, setDealType] = useState('');
    // const [bedroom, setBedroom] = useState('');
    // const [bathroom, setBathroom] = useState('');
    // const [listing_type, setListingType] = useState('');

    // const history = useHistory()

    const listings = useSelector(store => Object.values(store.listings))
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        // history.push({
        //     pathname: '/search',
        //     state: {searchValue}
        // })
        // setSearchValue('')
    }

    // console.log("Price Placeholder", price )
    // console.log("Deal_type",listings.filter(listing=>listing.deal_type.includes(dealType)))
    // console.log("Bedroom",listings.filter(listing=>listing.bedroom.includes(bedroom)))
    // console.log("Bathroom",listings.filter(listing=>listing.bathroom.includes(bathroom)))
    // console.log("Listing Type",listings.filter(listing=>listing.listing_type.includes(listing_type)))
  return (
    <>
            {/* <div className='filter-bar-small-wrapper'> 
                <form onSubmit={handleSubmit} className='filter-bar-small-form'>
                        <div className='filter-bar-small-form-wrapper'>

                            <input type="text" className='filter-bar-small-input'  placeholder="Enter a price"
                            value={filter.price} 
                            onChange={(e) => {const value = e.target.value
                                setPrice(value)}}/>

                            <button id='filter-bar-small-btn'>
                                <i className="fa fa-search"></i>
                            </button>
                        </div>
                </form> 
            </div> */}

            <div className='filter-buttons'>
                    <select name="deal_type" id="" 
                        onChange={(e)=>{const value = e.target.value
                            setFilter({...filter, dealType:value})}}>
                            <option disabled selected>Deal type</option>
                            <option value="sale">For Sale</option>
                            <option value="rent">For Rent</option>
                    </select>

                    <select name="bedroom" id=""
                        onChange={(e)=>{const value = e.target.value
                            setFilter({...filter, bedroom:value})}}>
                            <option value="" disabled selected>Beds</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                    </select>

                    {/* <select name="bathroom" id=""
                         onChange={(e)=>{const value = e.target.value
                            setBathroom(value)}}>
                            <option value="" disabled selected>Baths</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                    </select>

                    <select name="listing_type" id=""
                        onChange={(e)=>{const value = e.target.value
                            setListingType(value)}}>
                            <option value="" disabled selected>Home Type</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                    </select> */}
             </div>



    </>
  )
}

export default SearchFilterSmall










// BACKUP
// const SearchFilterSmall = () => {

//     const [searchValue, setSearchValue] = useState('');
//     const history = useHistory()
    
//     const handleSubmit = (e) =>{
//         e.preventDefault()
//         history.push({
//             pathname: '/search',
//             state: {searchValue}
//         })
//         setSearchValue('')
//     }
//   return (
//     <>
//             <div className='filter-bar-small-wrapper'> 
//                 <form onSubmit={handleSubmit} className='filter-bar-small-form'>
//                         <div className='filter-bar-small-form-wrapper'>

//                             <input type="text" className='filter-bar-small-input'  placeholder="Enter a Home Type or ZIP code"
//                             value={searchValue} 
//                             onChange={(e) => (setSearchValue(e.target.value))}/>

//                             <button id='filter-bar-small-btn'>
//                                 <i className="fa fa-search"></i>
//                             </button>
//                         </div>
//                 </form> 
//             </div>

//             <div className='filter-buttons'>
//                     <select name="deal_type" id="">
//                             <option value="" disabled selected>Deal type</option>
//                             <option value="sale">For Sale</option>
//                             <option value="rent">For Rent</option>
//                     </select>

//                     <select name="bedroom" id="">
//                             <option value="" disabled selected>Beds</option>
//                             <option value="1">1</option>
//                             <option value="2">2</option>
//                             <option value="3">3</option>
//                             <option value="4">4</option>
//                             <option value="5">5</option>
//                             <option value="6">6</option>
//                     </select>

//                     <select name="bathroom" id="">
//                             <option value="" disabled selected>Baths</option>
//                             <option value="1">1</option>
//                             <option value="2">2</option>
//                             <option value="3">3</option>
//                             <option value="4">4</option>
//                             <option value="5">5</option>
//                             <option value="6">6</option>
//                     </select>

//                     <select name="listing_type" id="">
//                             <option value="" disabled selected>Home Type</option>
//                             <option value="house">House</option>
//                             <option value="apartment">Apartment</option>
//                     </select>
//              </div>



//     </>
//   )
// }

// export default SearchFilterSmall
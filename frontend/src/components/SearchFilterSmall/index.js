import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  removeListings, fetchListings } from '../../store/listings'
import { useHistory } from "react-router-dom";


import "./SearchFilterSmall.css"

const SearchFilterSmall = ({filter, setFilter}) => {

    const [searchValue, setSearchValue] = useState('');

    // const [dealType, setDealType] = useState('');
    // const [bedroom, setBedroom] = useState('');
    // const [bathroom, setBathroom] = useState('');
    // const [listing_type, setListingType] = useState('');

    const history = useHistory()

    const listings = useSelector(store => Object.values(store.listings))
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        history.push({
            pathname: '/search',
            state: {searchValue}
        })
        setSearchValue('')
    }

    // console.log("Price Placeholder", price )
    // console.log("Deal_type",listings.filter(listing=>listing.deal_type.includes(dealType)))
    // console.log("Bedroom",listings.filter(listing=>listing.bedroom.includes(bedroom)))
    // console.log("Bathroom",listings.filter(listing=>listing.bathroom.includes(bathroom)))
    // console.log("Listing Type",listings.filter(listing=>listing.listing_type.includes(listing_type)))
  return (
    <>
            <div className='filter-bar-small-wrapper'> 
                <form onSubmit={handleSubmit} className='filter-bar-small-form'>
                         <div className='filter-bar-small-form-wrapper'>

                            <input type="text" className='filter-bar-small-input'  placeholder="Enter a Home Type or ZIP code"
                             value={searchValue} 
                             onChange={(e) => (setSearchValue(e.target.value))}/>

                             <button id='filter-bar-small-btn'>
                               <i className="fa fa-search"></i>
                            </button>
                         </div>
               </form> 
           </div>

            <div className='filter-buttons'>
                    <select name="deal_type" id="" 
                        onChange={(e)=>{const value = e.target.value
                            setFilter({...filter, dealType:value})}}>
                            <option value="" disabled selected>Deal type</option>
                            <option value="">Deal type: Any</option>
                            <option value="sale">For Sale</option>
                            <option value="rent">For Rent</option>
                    </select>

                    <select name="bedroom" id=""
                        onChange={(e)=>{const value = e.target.value
                            setFilter({...filter, bedroom:value})}}>
                            <option value="" disabled selected>Beds</option>
                            <option value="">Beds: Any</option>
                            <option value="1">Bed: 1</option>
                            <option value="2">Beds: 2</option>
                            <option value="3">Beds: 3</option>
                            <option value="4">Beds: 4</option>
                            <option value="5">Beds: 5</option>
                            <option value="6">Beds: 6</option>
                            <option value="7">Beds: 7</option>
                            <option value="8">Beds: 8</option>
                            <option value="9">Beds: 9</option>
                            <option value="10">Beds: 10</option>
                    </select>

                    <select name="bathroom" id=""
                         onChange={(e)=>{const value = e.target.value
                            setFilter({...filter, bathroom:value})}}>
                            <option value="" disabled selected>Baths</option>
                            <option value="">Baths: Any</option>
                            <option value="1">Bath: 1</option>
                            <option value="2">Baths: 2</option>
                            <option value="3">Baths: 3</option>
                            <option value="4">Baths: 4</option>
                            <option value="5">Baths: 5</option>
                            <option value="6">Baths: 6</option>
                            <option value="7">Baths: 7</option>
                            <option value="8">Baths: 8</option>
                            <option value="9">Baths: 9</option>
                            <option value="10">Baths: 10</option>
                    </select>

                    <select name="listing_type" id=""
                        onChange={(e)=>{const value = e.target.value
                            setFilter({...filter, listing_type:value})}}>
                            <option value="" disabled selected>Home Type</option>
                            <option value="">Home: Any</option>
                            <option value="house">House</option>
                            <option value="apartment">Apartment</option>
                    </select>
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
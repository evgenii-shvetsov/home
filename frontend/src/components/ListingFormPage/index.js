import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector  } from "react-redux";
import { useHistory } from 'react-router-dom';
import { fetchListing, updateListing, createListing } from "../../store/listings";

import "./ListingFormPage.css"

const ListingFormPage = () => {

    const sessionUser = useSelector(state => state.session.user);

    const { listingId } = useParams();
    const formType = listingId ? "Update Listing" : "Create Listing";
    let listing = useSelector((store) => store.listings[listingId]);

    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    if(formType === "Create Listing"){
        listing = {
            status: "",
            deal_type: "",
            description: "",
            zip: "",
            state: "",
            city: "",
            address: "",
            lat: "",
            lng: "",
            bedroom: "",
            bathroom: "",
            size: "",
            year_built: "",
            price: "",
            listing_type: ""
        }
    }

    const [status, setStatus] = useState(listing?.status);
    const [deal_type, setDealType] = useState(listing?.deal_type);
    const [description, setDescription] = useState(listing?.description);
    const [zip, setZip] = useState(listing?.zip);
    const [state, setState] = useState(listing?.state);
    const [city, setCity] = useState(listing?.city);
    const [address, setAddress] = useState(listing?.address);
    const [lat, setLat] = useState(listing?.lat);
    const [lng, setLng] = useState(listing?.lng);
    const [bedroom, setBedroom] = useState(listing?.bedroom);
    const [bathroom, setBathroom] = useState(listing?.bathroom);
    const [size, setSize] = useState(listing?.size);
    const [year_built, setYearBuilt] = useState(listing?.year_built);
    const [price, setPrice] = useState(listing?.price);
    const [listing_type, setListingType] = useState(listing?.listing_type);

    // const [status, setStatus] = useState("");
    // const [deal_type, setDealType] = useState("");
    // const [description, setDescription] = useState("");
    // const [zip, setZip] = useState("");
    // const [state, setState] = useState("");
    // const [city, setCity] = useState("");
    // const [address, setAddress] = useState("");
    // const [lat, setLat] = useState("");
    // const [lng, setLng] = useState("");
    // const [bedroom, setBedroom] = useState("");
    // const [bathroom, setBathroom] = useState("");
    // const [size, setSize] = useState("");
    // const [year_built, setYearBuilt] = useState("");
    // const [price, setPrice] = useState("");
    // const [listing_type, setListingType] = useState("");

    useEffect(() => {
        if(listingId){
            dispatch(fetchListing(listingId))
            /*.then((listing)=>{*/
                // console.log(listing)
                // setStatus(listing.status)
                // setDealType(listing.deal_type)
                // setDescription(listing.description)
                // setZip(listing.zip)
                // setState(listing.state)
                // setCity(listing.city)
                // setAddress(listing.address)
                // setLat(listing.lat)
                // setLng(listing.lng)
                // setBedroom(listing.bedroom)
                // setBathroom(listing.bathroom)
                // setSize(listing.size)
                // setYearBuilt(listing.year_built)
                // setPrice(listing.price)
                // setListingType(listing.listing_type)
            

        


        }
    },[listingId])

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);

        listing = {...listing, status, deal_type, description, zip, state,city,address,lat, lng,  bedroom,  bathroom,  size, year_built,  price, listing_type }

        if(formType === "Create Listing"){
            return dispatch(createListing(listing))
            .then(() => history.push("/myhome"))
            // .then(() => history.push(`/listings/${listingId}`))
            .catch(async (res) => {
                let data;
                try {
                  // .clone() essentially allows you to read the response body twice
                  data = await res.clone().json();
                } catch {
                  data = await res.text(); // Will hit this case if the server is down
                }
                if (data?.errors) {
                  setErrors(data.errors)
        
                }
                else if (data) {
                  setErrors([data])
        
                }
                else {
                  setErrors([res.statusText])
                }
              });
        } else {
             dispatch(updateListing(listing))
            .then(() => history.push(`/listings/${listingId}`))
            .catch(async (res) => {
                let data;
                try {
                  // .clone() essentially allows you to read the response body twice
                  data = await res.clone().json();
                } catch {
                  data = await res.text(); // Will hit this case if the server is down
                }
                if (data?.errors) {
                  setErrors(data.errors)
        
                }
                else if (data) {
                  setErrors([data])
        
                }
                else {
                  setErrors([res.statusText])
                }
              });
        }
    };

    if(!listing) return null;

    return (
        <main className="listing-form">
            {/* <h1>{!sessionUser && "Log In to create a new listing "}</h1> */}
            {!sessionUser ? <h1>Log In To Modify The Listing</h1> : 
                <form onSubmit={handleSubmit}>
                    <h1>{formType}</h1>
                    
                    <label> Status: 
                        {/* <input required
                        type="text" 
                        placeholder="Status" 
                        value={status} 
                        onChange={e => setStatus(e.target.value)}/> */}
                        <select required
                            name="status"
                            value={status}
                            onChange={e => setStatus(e.target.value)}
                        >
                                <option value="" disabled>Select Status...</option>
                                <option key={"Active"}>active</option>
                                <option key={"Archive"}>archive</option>
                        </select>
                        
                    </label>

                    <label> Deal Type: 
                        {/* <input required
                        type="text" 
                        placeholder="Deal type" 
                        value={deal_type} 
                        onChange={e => setDealType(e.target.value)}/> */}
                        <select required
                            name="deal_type" 
                            value={deal_type} 
                            onChange={e => setDealType(e.target.value)}
                        >
                            <option value="" disabled>Select Deal Type...</option>
                            <option key={"Sale"}>sale</option>
                            <option key={"Rent"}>rent</option>

                        </select>
                    </label>

                    <label> Description: 
                        <textarea required
                        placeholder="Description" 
                        value={description} 
                        onChange={e => setDescription(e.target.value)}/>
                    </label>

                    <label> ZIP:
                        <input type="number" required
                        placeholder="ZIP"
                        value={zip}
                        onChange={e=>setZip(e.target.value)} />
                    </label>

                    <label> State: 
                        <input required
                        type="text" 
                        placeholder="State" 
                        value={state} 
                        onChange={e => setState(e.target.value)}/>
                    </label>         

                    <label> City: 
                        <input required
                        type="text" 
                        placeholder="City" 
                        value={city} 
                        onChange={e => setCity(e.target.value)}/>
                    </label>   

                    <label> Address: 
                        <input required
                        type="text" 
                        placeholder="Address" 
                        value={address} 
                        onChange={e => setAddress(e.target.value)}/>
                    </label>

                    <label> Latitude:
                        <input type="number" required
                        placeholder="Latitude"
                        value={lat}
                        onChange={e=>setLat(e.target.value)} />
                    </label> 

                    <label> Longitude:
                        <input type="number" required
                        placeholder="Longitude"
                        value={lng}
                        onChange={e=>setLng(e.target.value)} />
                    </label>

                    <label> Bedroom:
                        <input type="number" required
                        placeholder="Bedroom"
                        value={bedroom}
                        onChange={e=>setBedroom(e.target.value)} />
                    </label>

                    <label> Bathroom:
                        <input type="number" required
                        placeholder="Bathroom"
                        value={bathroom}
                        onChange={e=>setBathroom(e.target.value)} />
                    </label>

                    <label> Size:
                        <input type="number" required
                        placeholder="Size"
                        value={size}
                        onChange={e=>setSize(e.target.value)} />
                    </label>

                    <label> Built in:
                        <input type="number" required
                        placeholder="Built in"
                        value={year_built}
                        onChange={e=>setYearBuilt(e.target.value)} />
                    </label>

                    <label> Price:
                        <input type="number" required
                        placeholder="Price"
                        value={price}
                        onChange={e=>setPrice(e.target.value)} />
                    </label>

                    <label> Listing Type: 
                        {/* <input required
                        type="text" 
                        placeholder="Listing Type"  
                        value={listing_type} 
                        onChange={e => setListingType(e.target.value)}/> */}
                         <select required
                            name="listing_type"
                            value={listing_type}
                            onChange={e => setListingType(e.target.value)}
                        >
                                <option value="" disabled>Select Listing Type...</option>
                                <option key={"House"}>house</option>
                                <option key={"Apartment"}>apartment</option>
                        </select>    
                    </label>

                    <ul className="listing-form-errors" >
                        {errors?.map(error => <li key={error}>{error}</li>)}
                    </ul>

                    <button type="submit">{formType}</button>
                
                </form>
            }
        </main>


    )
}

export default ListingFormPage
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { createListing } from "../../store/listings";

import "./ListingFormPage.css"

const ListingFormPage = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [errors, setErrors] = useState([]);

    const [status, setStatus] = useState("");
    const [deal_type, setDealType] = useState("");
    const [description, setDescription] = useState("");
    const [zip, setZip] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [bedroom, setBedroom] = useState("");
    const [bathroom, setBathroom] = useState("");
    const [size, setSize] = useState("");
    const [year_built, setYearBuilt] = useState("");
    const [price, setPrice] = useState("");
    const [listing_type, setListingType] = useState("");

    const handleSubmit = (e) => {
        e.preventDafault();
        const listingData = {
            status,
            deal_type, 
            description, 
            zip, 
            state,
            city, 
            address, 
            lat, 
            lng, 
            bedroom, 
            bathroom, 
            size, 
            year_built, 
            price, 
            listing_type
        };
        setErrors([]);
        return dispatch(createListing(listingData))
            .then(() => history.push("/"))
            .catch(async (res) => {
            let data;
            try {
                data = await res.clone().json();
            } catch {
                data = await res.text();
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        });
    };


    return (
        <main className="listing-form">
            <form onSubmit={handleSubmit}>
                <h1>Create New Listing</h1>

                <label> Status: 
                    <input 
                    type="text" 
                    placeholder="Status" 
                    value={status} 
                    onChange={e => setStatus(e.target.value)}/>
                </label>

                <label> Deal Type: 
                    <input 
                    type="text" 
                    placeholder="Deal type" 
                    value={deal_type} 
                    onChange={e => setDealType(e.target.value)}/>
                </label>

                <label> Description: 
                    <textarea
                    placeholder="Description" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)}/>
                </label>

                <label> ZIP:
                    <input type="number"
                    placeholder="ZIP"
                    value={zip}
                    onChange={e=>setZip(e.target.value)} />
                </label>

                <label> State: 
                    <input 
                    type="text" 
                    placeholder="State" 
                    value={state} 
                    onChange={e => setState(e.target.value)}/>
                </label>         

                <label> City: 
                    <input 
                    type="text" 
                    placeholder="City" 
                    value={city} 
                    onChange={e => setCity(e.target.value)}/>
                </label>   

                <label> Address: 
                    <input 
                    type="text" 
                    placeholder="Address" 
                    value={address} 
                    onChange={e => setAddress(e.target.value)}/>
                </label>

                <label> Latitude:
                    <input type="number"
                    placeholder="Latitude"
                    value={lat}
                    onChange={e=>setLat(e.target.value)} />
                </label> 

                <label> Longitude:
                    <input type="number"
                    placeholder="Longitude"
                    value={lng}
                    onChange={e=>setLng(e.target.value)} />
                </label>

                <label> Bedroom:
                    <input type="number"
                    placeholder="Bedroom"
                    value={bedroom}
                    onChange={e=>setBedroom(e.target.value)} />
                </label>

                <label> Bathroom:
                    <input type="number"
                    placeholder="Bathroom"
                    value={bathroom}
                    onChange={e=>setBathroom(e.target.value)} />
                </label>

                <label> Size:
                    <input type="number"
                    placeholder="Size"
                    value={size}
                    onChange={e=>setSize(e.target.value)} />
                </label>

                <label> Built in:
                    <input type="number"
                    placeholder="Built in"
                    value={year_built}
                    onChange={e=>setYearBuilt(e.target.value)} />
                </label>

                <label> Price:
                    <input type="number"
                    placeholder="Price"
                    value={price}
                    onChange={e=>setPrice(e.target.value)} />
                </label>

                <label> Listing Type: 
                    <input 
                    type="text" 
                    placeholder="Listing Type" 
                    value={listing_type} 
                    onChange={e => setListingType(e.target.value)}/>
                </label>

                <button>Submit</button>


                <ul className="listing-form-errors" >
                    {errors?.map(error => <li key={error}>{error}</li>)}
                </ul>
            </form>
        </main>


    )
}

export default ListingFormPage
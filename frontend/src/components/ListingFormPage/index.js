import { useState, useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector  } from "react-redux";
import { useHistory } from 'react-router-dom';
import { fetchListing, updateListing, createListing } from "../../store/listings";
import "./ListingFormPage.css"

import Carousel from 'react-elastic-carousel';
import MapCoordinates from "../MapCoordinates";

const breakPoints = [
    {width:1, itemsToShow: 1},
    {width:550, itemsToShow: 2},
    {width:768, itemsToShow: 3},
    {width:1200, itemsToShow: 4},
  ];


const ListingFormPage = () => {

    // console.log("In Form", latitude)
    // console.log("In Form", longitude)


    const fileRef = useRef(null); //photo feature
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
            listing_type: "",
            photoFiles: [], //photo feature
            photoUrls: [] //photo feature
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

    const [photoFiles, setPhotoFiles] = useState([]); //photo feature
    const [photoUrls, setPhotoUrls] = useState(listing?.photoUrls) //photo feature



    useEffect(() => {
        if(listingId){
            dispatch(fetchListing(listingId))
        }
    },[dispatch, listingId])

    const handleFile = ({currentTarget}) => {
        console.log([...currentTarget.files])
        Array.from(currentTarget.files).forEach((file)=>{
        if (file) {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                setPhotoFiles(prev => [...prev, file]);
                setPhotoUrls(prev => [...prev, fileReader.result]);
            };
        }
        })
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fileRef.current.value = null;

        const formData = new FormData();
        setErrors([]);

        formData.append('listing[status]',status)
        formData.append('listing[deal_type]', deal_type)
        formData.append('listing[description]', description)
        formData.append('listing[zip]', zip)
        formData.append('listing[state]', state)
        formData.append('listing[city]', city)
        formData.append('listing[address]', address)
        formData.append('listing[lat]', lat)
        formData.append('listing[lng]', lng)
        formData.append('listing[bedroom]', bedroom)
        formData.append('listing[bathroom]', bathroom)
        formData.append('listing[size]', size)
        formData.append('listing[year_built]', year_built)
        formData.append('listing[price]', price)
        formData.append('listing[listing_type]', listing_type)


        if (photoFiles.length !== 0) {
            photoFiles.forEach(photo => {
              formData.append('listing[photos][]', photo);  
            })
        }


        if(formType === "Create Listing"){
            return dispatch(createListing(formData))
            .then(() => history.push("/myhome"))
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
             dispatch(updateListing(formData, listingId))
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

    // console.log(photoFiles)
    // console.log(photoUrls)

    const preview = photoUrls ? photoUrls?.map((photoUrl,idx) => {
    return <div key ={idx}><img className="single-image-style" src={photoUrl} alt=""  /></div> }) : null;

    // const preview = photoUrls ? <img src={photoUrls} alt="" height="200" /> : null;

    return (
        <main className="listing-form">
            
                {!sessionUser ? <h1>Log In To Modify The Listing</h1> : 

                <>
                <form onSubmit={handleSubmit}>
                    <h1>{formType}</h1>
                    
                    <section className="inputs-wrapper">

                        <div className="input-columns">
                            <label> Status: 
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

                            <label> Listing Type: 
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

                            <label> Deal Type: 
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
                                rows='1'
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
                        </div>

                    

                        <div className="input-columns">

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


                            <label> Upload Photos:
                                <input type="file" ref={fileRef} onChange={handleFile} multiple />
                            </label>
                        </div>

                        <div className="map-coordinates" >
                            <h1>Get Coordinates</h1>
                            <MapCoordinates setLat={setLat} setLng={setLng} lat={lat} lng={lng} />
                        </div>


                    </section>

                    
                    
                    <section className="submit-upload-section">

                        

                        <ul className="listing-form-errors" >
                            {errors?.map(error => <li key={error}>{error}</li>)}
                        </ul>

                        <button type="submit">{formType}</button>

                    </section>
                   
                
                </form>
                
                <div className="image-preview">
                    {!photoUrls?.length ? null : 
                        <>
                    <h1>Uploaded images</h1>
                    
                    <div className="photos-bucket">
                        <Carousel breakPoints={breakPoints} pagination={false}/*enableAutoPlay autoPlaySpeed={3000}*/>
                        {preview}
                        </Carousel>
                    </div>
                    </>
                    }
                </div>
            
            
                
              </>  
            }


        </main>


    )
}

export default ListingFormPage
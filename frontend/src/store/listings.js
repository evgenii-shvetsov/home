import csrfFetch from './csrf';

//Action constants
const SET_LISTINGS = "listings/setListings";
const ADD_LISTING = "listings/addListings";
const REMOVE_LISTING = "listings/removeListing"

//Action creators
const setListings = (listings) => ({
    type: SET_LISTINGS,
    payload: listings
});

const addListing = (listing) => ({
    type: ADD_LISTING,
    payload: listing
});

const removeListing = (listingId) => ({
    type: REMOVE_LISTING,
    listingId
})

//THUNK ACTION CREATORS

export const fetchListings = () => async (dispatch) =>{
    const res = await csrfFetch("/api/listings");
    if(res.ok){
        const listings = await res.json();
        dispatch(setListings(listings));
    }
};

export const fetchListing = (listingId) => async (dispatch) =>{
    const res = await csrfFetch(`/api/listings/${listingId}`);
    if(res.ok){
        const listing = await res.json();
        dispatch(addListing(listing));
    }
};

export const createListing = (listingData) => async (dispatch) =>{
    const res = await csrfFetch("/api/listings", {
        method: "POST",
        body: JSON.stringify(listingData),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    });
    if(res.ok){
        const listing = await res.json();
        dispatch(addListing(listing))
    }
}

////////////////
//add thunk for EDIT AND DESTROY
////////////////

export const updateListing = (listing) => async (dispatch) => {
    const res = await csrfFetch(`/api/listings/${listing.id}`, {
        method: "PATCH",
        body: JSON.stringify(listing),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    if(res.ok){
        const listing = await res.json();
        dispatch(addListing(listing)) 
    }
}

export const deleteListing = (listingId) => async (dispatch)=> {
    const res = await csrfFetch(`/api/listings/${listingId}`, {
        method: "DELETE"
    })
    if(res.ok){
        dispatch(removeListing(listingId));
    }
}

const listingsReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_LISTINGS:
            return {...state, ...action.payload};
        case ADD_LISTING:
            return {...state, ...action.payload};
        case REMOVE_LISTING:
            const newState = {...state}
            delete newState[action.listingId]
            return newState
        default:
            return state;
    }
};

export default listingsReducer;

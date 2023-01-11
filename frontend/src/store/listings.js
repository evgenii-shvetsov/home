import csrfFetch from './csrf';

//Action constants
const SET_LISTINGS = "listings/setListings";
const ADD_LISTING = "listings/addListing";
const REMOVE_LISTING = "listings/removeListing"
const REMOVE_LISTINGS = "listings/removeListings"

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

export const removeListings = () => ({
    type: REMOVE_LISTINGS
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
        // return listing
    }
};

// export const createListing = (listing) => async (dispatch) =>{
//     const res = await csrfFetch("/api/listings", {
//         method: "POST",
//         body: JSON.stringify(listing),
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//     });
//     if(res.ok){
//         const listing = await res.json();
//         dispatch(addListing(listing))
//     }
// }


export const createListing = (formData) => async (dispatch) =>{
    const res = await csrfFetch("/api/listings", {
        method: "POST",
        body: formData,
    });
    if(res.ok){
        const listing = await res.json();
        dispatch(addListing(listing))
    }
}


export const updateListing = (formData, id) => async (dispatch) => {
    const res = await csrfFetch(`/api/listings/${id}`, {
        method: "PATCH",
        body: formData,
        // body: JSON.stringify(listingData),
        // body: JSON.stringify({listing: listingData}),
        // headers: {
        //     "Content-Type": "application/json",
        //     "Accept": "application/json"
        // }
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

export const fetchBuyListings = () => async (dispatch)=> {
    const res = await csrfFetch(`/api/search/buy`)
    if(res.ok){
        const listings = await res.json();
        dispatch(setListings(listings));
    }
}

export const fetchRentListings = () => async (dispatch)=> {
    const res = await csrfFetch(`/api/search/rent`)
    if(res.ok){
        const listings = await res.json();
        dispatch(setListings(listings));
    }
}

export const fetchSearchFilterListings = (searchValue) => async(dispatch) => {
    const res = await csrfFetch(`/api/search?query=${searchValue}`)
    if(res.ok){
        const listings = await res.json();
        dispatch(setListings(listings));
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
        case REMOVE_LISTINGS:
            return {}
        default:
            return state;
    }
};

export default listingsReducer;

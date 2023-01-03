//Action constants
const SET_FAVORITES = 'favorites/setFavorites';
const ADD_FAVORITE = 'favorites/addFavorite';
const REMOVE_FAVORITE = 'favorites/removeFavorite'

//Action creators

const setFavorites = (favorites) => ({
    type: SET_FAVORITES,
    payload: favorites
});

const addFavorite = ({owner_id, listing_id}) => ({
    type: ADD_FAVORITE,
    owner_id,
    listing_id
});

const removeFavorite = (listingId) => ({
    type: REMOVE_FAVORITE,
    listingId
});

//Thunk action creators

export const fetchFavorites = () => async (dispatch) =>{
    const res = await fetch("/api/favorites");
    if(res.ok){
        const favorites = await res.json();
        dispatch(setFavorites(favorites));
    }
};

export const createFavorite = ({ownerId, listingId }) => async (dispatch) =>{
    const res = await fetch('/api/favorites', {
        method: "POST",
        body: JSON.stringify({ownerId, listingId}),
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
    })
    if(res.ok){
        const favorite = await res.json();
        dispatch(addFavorite(favorite))
    }
}


export const deleteFavorite = (listingId) => async (dispatch) =>{
    const res = await fetch(`/api/favorites/${listingId}`, {
        method: "DELETE"
    })
    if(res.ok){
        dispatch(removeFavorite(listingId))
    }
}

//Favorites Reducers

const favoritesReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_FAVORITES:
            return {...state, ...action.payload};
        case ADD_FAVORITE:
            return {...state, ...{[action.listing_id]: {owner_id: action.owner_id, listing_id: action.listing_id }}}
        case REMOVE_FAVORITE:
            const newState = {...state}
            delete newState[action.listingId]
            return newState;
        default:
            return state;
    }


}

export default favoritesReducer
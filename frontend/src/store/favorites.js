import csrfFetch from './csrf';

//Action constants
const SET_FAVORITES = 'favorites/setFavorites';
const ADD_FAVORITE = 'favorites/addFavorite';
const REMOVE_FAVORITE = 'favorites/removeFavorite'
const CLEAR_FAVORITES ='favorites/clearFavorites'

//Action creators

const setFavorites = (favorites) => ({
    type: SET_FAVORITES,
    payload: favorites
});

const addFavorite = (favorite) => ({
    type: ADD_FAVORITE,
    payload: favorite
});

const removeFavorite = (favoriteId) => ({
    type: REMOVE_FAVORITE,
    favoriteId
});

export const clearFavorites = () => ({
    type: CLEAR_FAVORITES
});

//Thunk action creators

export const fetchFavorites = () => async (dispatch) =>{
    const res = await csrfFetch("/api/favorites");
    if(res.ok){
        const favorites = await res.json();
        dispatch(setFavorites(favorites));
        return favorites
    }
};

export const createFavorite = (favoriteData) => async (dispatch) =>{
    const res = await csrfFetch('/api/favorites', {
        method: "POST",
        body: JSON.stringify(favoriteData)
    })
    if(res.ok){
        const favorite = await res.json();
        dispatch(addFavorite(favorite))
    }
}


export const deleteFavorite = (favoriteId) => async (dispatch) =>{
    const res = await csrfFetch(`/api/favorites/${favoriteId}`, {
        method: "DELETE"
    })
    if(res.ok){
        dispatch(removeFavorite(favoriteId))
    }
}

//Favorites Reducers

const favoritesReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_FAVORITES:
            return {...state, ...action.payload};
        case ADD_FAVORITE:
            return {...state, ...action.payload}
        case REMOVE_FAVORITE:
            const newState = {...state}
            delete newState[action.favoriteId]
            return newState;
        case CLEAR_FAVORITES:
            return {};
        default:
            return state;
    }


}

export default favoritesReducer
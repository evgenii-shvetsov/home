//Action constants
const SET_FAVORITES = 'favorites/setFavorites';
const ADD_FAVORITE = 'favorites/addFavorite';
const REMOVE_FAVORITE = 'favorites/removeFavorite'

//Action creators

const setFavorites = (favorites) => ({
    type: SET_FAVORITES,
    favorites
});

const addFavorite = ({owner_id, listing_id}) => ({
    type: ADD_FAVORITE,
    owner_id,
    listing_id
});

const removeFavorite = (listing_id) => ({
    type: REMOVE_FAVORITE,
    listing_id
});

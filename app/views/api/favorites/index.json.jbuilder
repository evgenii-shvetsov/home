@favorites.each do |favorite|
    json.set! favorite.listing_id do
        json.partial! 'favorite', favorite: favorite
        # json.partial! 'api/favorites/favorites', favorite: favorite
    end
end
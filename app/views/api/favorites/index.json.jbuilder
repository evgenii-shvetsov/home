@favorites.each do |favorite|
    json.set! favorite.id do
        json.partial! 'favorites', favorite: favorite
    end
end
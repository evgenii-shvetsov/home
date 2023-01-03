# json.set! @favorite, :id, :owner_id, :listing_id

json.set! @favorite.id do
    json.partial! 'favorite', favorite: @favorite
end
json.extract! listing, 
                        :id,
                        :status,
                        :owner_id,
                        :listing_type,
                        :deal_type, 
                        :price, 
                        :size, 
                        :zip, 
                        :state,
                        :city, 
                        :address, 
                        :description, 
                        :bedroom, 
                        :bathroom, 
                        :year_built, 
                        :lat,
                        :lng

# json.photoUrls listing.photos.map { |file| url_for(file) } if listing.photos.attached?
json.photoUrls listing.photos.map { |photo| photo.url } #if listing.photos.attached?


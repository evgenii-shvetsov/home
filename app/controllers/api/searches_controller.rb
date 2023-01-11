class Api::SearchesController < ApplicationController
    def rent_index
        @listings = Listing.where(deal_type:"rent")
        render :index
    end

    def sale_index
        @listings = Listing.where(deal_type:"sale")
        render :index
    end

    # api_searches_get GET    
    #/api/searches/search(.:format)   

    def search_filter
        query = params[:query] #94107
        if query.to_i != 0
            @listings = Listing.where("zip = (?)", query)
            render :index
       
        else
            @listings = Listing.where("listing_type = (?)", query.downcase)
            render :index
        end



    end

end

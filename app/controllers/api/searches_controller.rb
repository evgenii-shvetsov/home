class Api::SearchesController < ApplicationController
    def rent_index
        @listings = Listing.where(deal_type:"rent")
        render :index
    end

    def sale_index
        @listings = Listing.where(deal_type:"sale")
        render :index
    end
end

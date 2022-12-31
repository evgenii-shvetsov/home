class Api::ListingsController < ApplicationController
    def index
        @listings = Listing.all
        render :index
    end

    def create
        @listing = Listing.new(listing_params)
        @listing.owner_id = current_user.id # owner_id will be added automatically
        if @listing.save #don't need ! sign
            render :show
            return 
        end
        render json: {errors: @listing.errors.full_messages}, status: 422
    end

    def show
        @listing = Listing.find(params[:id])
        render :show
    end

    def update
        @listing = Listing.find(params[:id])
        if (@listing.owner_id === current_user.id) && @listing.update(listing_params) # add update logic
            render :show
            return 
        end

        render json: {errors: @listing.errors.full_messages}, status: 422

        # if @listing.update(listing_params)
        #     render :show
        #   else
        #     render json: @listing.errors.full_messages, status: :unprocessable_entity
        #   end
    end
    

    def destroy
        #we need to find specific object
        @listing = Listing.find(params[:id])
        if (@listing.owner_id === current_user.id) && @listing.destroy
            head :no_content
        end
    end

    private 
    def listing_params
        params.require(:listing).permit(
            :status,
            :deal_type, 
            :description, 
            :zip, 
            :state,
            :city, 
            :address, 
            :lat, 
            :lng, 
            :bedroom, 
            :bathroom, 
            :size, 
            :year_built, 
            :price, 
            :listing_type
        )
    end



end
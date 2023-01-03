class Api::FavoritesController < ApplicationController
    def index
        if current_user
            @favorites = Favorite.all.where(owner_id: current_user.id)
            render :index #optional
        else
            @favorites = {}
            render :index #optional
        end
    end


    def create
        @favorite = Favorite.new(listing_id: params[:listingId])
        @favorite.owner_id = current_user.id

        if @favorite.save
            # render 'api/favorites/show'
            render :show
            return
        end
        render json: {errors: @favorite.errors.full_messages}, status: 422
    end

    def destroy
        # @favorite = Favorite.find_by(params[:id])
        @favorite = Favorite.find_by(listing_id: params[:id])
        if(@favorite.owner_id = current_user.id) && @favorite.destroy
            render json: [@favorite.listing_id]
        # if @favorite.destroy
        #     render json: [@favorite.listing_id]
        else
            render json: ["Oops, there's an error"], status: 404
        end
    end

end
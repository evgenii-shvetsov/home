class Api::FavoritesController < ApplicationController

    wrap_parameters include: Favorite.attribute_names

    def index
        if current_user
            @favorites = Favorite.where(owner_id: current_user.id)
            render :index

    end


    def create
        @favorite = Favorite.new(favorite_params)
        @favorite.owner_id = current_user.id

        if @favorite.save
            # render 'api/favorites/show'
            render :show
            return
        end
        render json: {errors: @favorite.errors.full_messages}, status: 422
    end

    def destroy

        @favorite = Favorite.find(params[:id])

        if(@favorite.owner_id == current_user.id) &&        @favorite.destroy
            head :no_content
        else
            render json: ["Oops, there's an error"], status: 404
        end
    end

    private
    def favorite_params
        params.require(:favorite).permit(:owner_id,:listing_id)
    end

end
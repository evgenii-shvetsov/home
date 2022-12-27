class Api::SessionsController < ApplicationController
  # before_action :require_logged_out, only: [:create]
  before_action :require_logged_in, only: [:destroy]

  def show
    #returns info about current user
    # if current_user 
      @user = current_user

      if @user
        render 'api/users/show'
      else 
        render json: {user: nil}
    end
  end

  def create
    #login
    # User is just a user table
    @user = User.find_by_credentials(
      params[:credential],
      params[:password]
    )

    if @user
      login!(@user)
      render 'api/users/show'  
    else
      render json: { errors: ['The provided credentials are invalid'] }, status: :unauthorized 

  end
end

  def destroy
    #logout
    logout!
    head :no_content
    # render json: { message: 'success' }
  end
end

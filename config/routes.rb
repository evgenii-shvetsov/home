Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  # testing route
  # post 'api/test', to: 'application#test'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:show, :create, :destroy]
    resources :listings, only: [:index, :show, :create, :update, :destroy]
    resources :favorites, only: [:index, :show, :create, :destroy] #ability to check a listing and uncheck

  # http #backend       #controller  #action
  # verb #route         #
    get '/search/buy', to: 'searches#sale_index'
    get '/search/rent', to: 'searches#rent_index'
    get '/search', to: 'searches#search_filter'
  # get '/listings', to: 'listings#index'
  end

  get '*path', to: "static_pages#frontend_index"
  
end

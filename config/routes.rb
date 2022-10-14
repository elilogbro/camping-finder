Rails.application.routes.draw do
  resources :amenities, only: [:index]
  resources :visits
  resources :reviews, only: [:index, :create]
  resources :types, only: [:index]
  resources :campsites, only: [:index, :show, :create]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

Rails.application.routes.draw do
  resources :amenities, only: [:index]
  resources :visits
  resources :reviews, only: [:index, :create, :show]
  resources :types, only: [:index]
  resources :campsites, only: [:index, :create]
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  post "/select-campsite", to: "selected_campsite#create"
  delete "/deselected-campsite", to: "selected_campsite#destroy"
  get "/selected-campsite", to: "campsites#show"
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
end

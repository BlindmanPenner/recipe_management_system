Rails.application.routes.draw do
  resources :recipes do
    resources :ingredients
  end

  resources :grocery_lists do
    get 'add_recipes', on: :member
    post 'add_recipes', on: :member
  end

  root to: 'recipes#index'
end

Rails.application.routes.draw do
  resources :recipes do
    resources :ingredients
    delete 'delete_recipe', to: 'recipes#delete_recipe', as: :delete_recipe_recipe
  end

  resources :grocery_lists do
    get 'add_recipes', on: :member
    post 'add_recipes', on: :member
  end

  root to: 'recipes#index'
end

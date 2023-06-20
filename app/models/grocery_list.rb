class GroceryList < ApplicationRecord
  has_many :grocery_list_recipes
  has_many :recipes, through: :grocery_list_recipes
end

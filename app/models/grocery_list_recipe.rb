class GroceryListRecipe < ApplicationRecord
  belongs_to :recipe
  belongs_to :grocery_list
end

class Recipe < ApplicationRecord
  has_many :ingredients, dependent: :destroy
  has_many :grocery_list_recipes
  has_many :grocery_lists, through: :grocery_list_recipes
  accepts_nested_attributes_for :ingredients, reject_if: :all_blank, allow_destroy: true
  validates :name, :description, presence: true
end

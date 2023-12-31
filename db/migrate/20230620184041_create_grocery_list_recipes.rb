class CreateGroceryListRecipes < ActiveRecord::Migration[7.0]
  def change
    create_table :grocery_list_recipes do |t|
      t.references :grocery_list, null: false, foreign_key: true
      t.references :recipe, null: false, foreign_key: true

      t.timestamps
    end
  end
end

class GroceryListsController < ApplicationController
  before_action :set_grocery_list, only: [:show, :edit, :update, :destroy, :add_recipes]

  def index
    @grocery_lists = GroceryList.all
  end

  def show
  end

  def new
    @grocery_list = GroceryList.new
  end

  def create
    @grocery_list = GroceryList.new(grocery_list_params)

    if @grocery_list.save
      redirect_to @grocery_list, notice: 'Grocery list was successfully created.'
    else
      render :new
    end
  end

  def add_recipes
    if request.post?
      @grocery_list.recipes = Recipe.where(id: params[:recipe_ids])
      redirect_to @grocery_list, notice: 'Recipes were successfully added.'
    else
      @recipes = Recipe.all
    end
  end

  private
    def set_grocery_list
      @grocery_list = GroceryList.find(params[:id])
    end

    def grocery_list_params
      params.require(:grocery_list).permit(:name)
    end
end

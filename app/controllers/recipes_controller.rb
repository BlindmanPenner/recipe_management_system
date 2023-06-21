class RecipesController < ApplicationController
  # before any recipe action, set the recipe
  before_action :set_recipe, only: [:show, :edit, :update, :destroy]

  def index
    # get all recipes in descending order
    @recipes = Recipe.all.order(created_at: :desc)
  end

  def show
    # show a single recipe
    # before_action has set @recipe for us
  end

  def new
    # build a new recipe and multiple ingredients
    @recipe = Recipe.new
    3.times { @recipe.ingredients.build }  # Replace "3" with the desired number of initial ingredients
  end

  def create
    # create a new recipe from params
    @recipe = Recipe.new(recipe_params)

    if @recipe.save
      # if the save was successful, redirect to the index action
      redirect_to recipes_path, notice: 'Recipe was successfully created.'
    else
      # otherwise render the new template
      render :new
    end
  end

  def destroy
    @recipe.destroy
    redirect_to recipes_path, notice: 'Recipe was successfully deleted.'
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_recipe
    @recipe = Recipe.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def recipe_params
    params.require(:recipe).permit(:name, :description, :instructions, :special_notes, ingredients_attributes: [:id, :name, :amount, :_destroy])
  end
end



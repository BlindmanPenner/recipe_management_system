document.addEventListener("turbo:load", function() {
  // Add ingredient functionality
  document.querySelectorAll('.add_ingredient').forEach(function(addIngredientButton) {
    addIngredientButton.addEventListener('click', function(event) {
      event.preventDefault();
      // Get all ingredient elements
      var ingredients = document.querySelectorAll('.ingredient');
      // Get the last ingredient element
      var lastIngredient = ingredients[ingredients.length - 1];
      // Clone the last ingredient element
      var newIngredient = lastIngredient.cloneNode(true);
      // Increment the ingredient index
      var ingredientIndex = parseInt(newIngredient.dataset.index) + 1;
      // Update the ingredient index in the dataset
      newIngredient.dataset.index = ingredientIndex;
      // Update the labels, inputs, and names with the new index
      newIngredient.querySelectorAll('label, input').forEach(function(element) {
        if (element.htmlFor) {
          element.htmlFor = element.htmlFor.replace(/\d+/g, ingredientIndex);
        }
        if (element.id) {
          element.id = element.id.replace(/\d+/g, ingredientIndex);
        }
        if (element.name) {
          element.name = element.name.replace(/\d+/g, ingredientIndex);
        }
      });
      // Clear the input values of the new ingredient
      newIngredient.querySelectorAll('input').forEach(function(input) {
        input.value = '';
      });
      // Append the new ingredient to the ingredients container
      document.querySelector('.ingredients').appendChild(newIngredient);
    });
  });
});

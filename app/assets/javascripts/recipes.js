document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.add_ingredient').forEach(function(addIngredientButton) {
    addIngredientButton.addEventListener('click', function(event) {
      event.preventDefault();
      var ingredients = document.querySelectorAll('.ingredient');
      var lastIngredient = ingredients[ingredients.length - 1];
      var newIngredient = lastIngredient.cloneNode(true);
      var ingredientIndex = parseInt(newIngredient.id.match(/\d+/g), 10) + 1;
      newIngredient.id = newIngredient.id.replace(/\d+/g, ingredientIndex);
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
      newIngredient.querySelectorAll('input').forEach(function(input) {
        input.value = '';
      });
      document.querySelector('.ingredients').appendChild(newIngredient);
    });
  });
});

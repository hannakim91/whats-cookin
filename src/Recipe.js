class Recipe {
  constructor(id, image, ingredients = [], instructions = [], tags = [], name = '') {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.tags = tags;
    this.name = name;
  }

  getInstructions() {
    let recipeInstructions = this.instructions.map(step =>  step.instruction)
    console.log(recipeInstructions);
    return recipeInstructions
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}


function findRecipeIngredients() {
    let recipeIngredients = recipeToDisplay.ingredients.map(recipeIngredient => {
      let ingredient = ingredientsData.find(ingredient => {
        return ingredient.id === recipeIngredient.id;
      })
      return {
        name: ingredient.name,
        amount: recipeIngredient.quantity.amount,
        unit: recipeIngredient.quantity.unit
      };
    })
    console.log(recipeIngredients)
    return ingredientHTML;
  }

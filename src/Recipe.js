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
    this.instructions = this.instructions.map(step => {
      let listStep = `${step.number}. ${step.instruction}`
      return listStep
    })
  }

  getIngredients(recipe1IngredientList) {
    this.ingredients = this.ingredients.map(recipeIngredient => {
      let ingredient = recipe1IngredientList.find(ingredient => {
        return ingredient.id === recipeIngredient.id;
      })
      return {
        name: ingredient.name,
        amount: recipeIngredient.quantity.amount,
        unit: recipeIngredient.quantity.unit
      };
    })
  }
}

if (typeof module !== 'undefined') {
  module.exports = Recipe;
}

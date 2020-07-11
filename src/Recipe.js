class Recipe {
  constructor(id, image, ingredients = [], instructions = [], tags = []) {
    this.id = id;
    this.image = image;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.tags = tags;
  }

  getInstructions() {
    return this.instructions;
  }
}

module.exports = Recipe;

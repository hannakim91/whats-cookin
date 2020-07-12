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
    return this.instructions;
  }
}

module.exports = Recipe;

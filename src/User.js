const Recipe = require('../src/Recipe');

class User {
  constructor(favoriteRecipes) {
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addRecipe(recipe) {
    this.favoriteRecipes.push(recipe);
  }

};


module.exports = User;

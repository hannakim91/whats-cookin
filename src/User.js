const Recipe = require('../src/Recipe');

class User {
  constructor(favoriteRecipes) {
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  addRecipe(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeRecipe(keyword) {
    let selectedRecipe = this.favoriteRecipes.indexOf(keyword)
    this.favoriteRecipes.forEach(recipe => {
      if (recipe === keyword) {
      this.favoriteRecipes.splice(selectedRecipe, 1);
      }
    });
  }

};


module.exports = User;

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

  searchFavoritesByTag(searchedTag, recipeList) {
    let selectedRecipes = [];
    recipeList.forEach(recipe => {
      if (recipe.tags.includes(searchedTag)) {
        selectedRecipes.push(recipe);
      }
    })
      if (selectedRecipes.length === 0) {
        return 'Sorry, not a valid entry.'
      }
    return selectedRecipes;
  }

  searchFavoritesByName(recipeName, recipeList) {
    let selectedFavorites = [];
    recipeList.forEach(recipe => {
      if (recipe.name === recipeName) {
        selectedFavorites.push(recipe);
      }
    });
      if (selectedFavorites.length === 0) {
        return 'Sorry, not a valid entry.'
      }
    return selectedFavorites;
  }

  searchFavoritesByIngredient(ingredientName, recipeList) {

  }

}


module.exports = User;

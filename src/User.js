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
      };
      return selectedRecipes;
    });
    return selectedRecipes;
  }


  // sendErrorMessage() {
  //   return 'Sorry, not a valid entry.'
  // }


  searchFavoritesByName(recipeName, recipeList) {
    let returnedFavorite;
    recipeList.forEach(recipe => {
      if (recipe.name === recipeName) {
        console.log(recipeName);
        returnedFavorite = recipe;
      };
      return returnedFavorite;
    });
    return returnedFavorite;
  };



};


module.exports = User;

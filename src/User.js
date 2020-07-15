class User {
  constructor() {
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  toggleFavoriteRecipes(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    } else {
      this.favoriteRecipes = this.favoriteRecipes.filter(recipeInFavorites =>
        recipeInFavorites.id !== recipe.id)
    }
  }

  // removeRecipe(keyword) {
  //   let selectedRecipe = this.favoriteRecipes.indexOf(keyword)
  //   this.favoriteRecipes.forEach(recipe => {
  //     if (recipe === keyword) {
  //       this.favoriteRecipes.splice(selectedRecipe, 1);
  //     }
  //   });
  // }

  //combine add/remove recipe to toggle recipe--how to know if recipe is/isnt already in favorites array

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

  searchFavoritesByIngredient(ingredientName, recipeList, ingredientList) {

    let namedIngredient = ingredientList.find(ingredient => {
      return ingredient.name === ingredientName;
    });
    let foundRecipes = recipeList.filter(recipe => {
      let ingredientIDs = recipe.ingredients.map(ingredient => {
        return ingredient.id;
      });
      return ingredientIDs.includes(namedIngredient.id);
    });
    return foundRecipes;
  }

}


if (typeof module !== 'undefined') {
  module.exports = User;
}

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

  searchByName(recipeName, recipeList) {
    let selectedRecipes = recipeList.filter(recipe => {
      recipe.name === recipeName;
    })
    if (selectedRecipes.length === 0) {
      return 'Sorry, not a valid entry.'
    }
    return selectedRecipes;
  }

  searchByIngredient(ingredientName, recipeList, ingredientList) {

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

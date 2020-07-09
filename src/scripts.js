const recipeData = require('../data/recipes');

function searchByTag(searchedTag, recipeList) {
  let selectedRecipes = [];
  recipeList.forEach(recipe => {
    if (recipe.tags.includes(searchedTag)) {
      selectedRecipes.push(recipe);
    }
  });
  if (selectedRecipes.length === 0) {
    return 'Sorry, not a valid entry.'
  }
  return selectedRecipes;
}

module.exports = {
  searchByTag: searchByTag
}

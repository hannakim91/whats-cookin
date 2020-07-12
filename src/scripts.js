const recipeData = require('../data/recipes');

const recipeLibrary = document.querySelector('.recipe-library');
const individualRecipeView = document.querySelector('.individual-recipe-view');

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

function showIndividualRecipe() {


}


module.exports = {
  searchByTag: searchByTag
}

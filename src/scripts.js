const recipeLibrary = document.querySelector('.recipe-library');
const individualRecipeView = document.querySelector('.individual-recipe-view');
const recipeCardContainer = document.querySelector('.cards');

window.addEventListener('load', makeRecipeCards);

function makeRecipeCards(e) {
  e.preventDefault();
  let recipeCards = recipeData.map(currentRecipe => {
    let recipeCardData = new Recipe(currentRecipe.id, currentRecipe.image, currentRecipe.ingredients, currentRecipe.instructions, currentRecipe.tags, currentRecipe.name);
    return recipeCardData;
  })
  console.log('hello');
  console.log('test', recipeCards);
  showRecipeCards(recipeCards);
}

function showRecipeCards(recipeCards) {
  // console.log('test', recipeCards);
  recipeCards.map((currentRecipeCard) => {
    recipeCardContainer.innerHTML +=
    `
    <div class="card" id="${currentRecipeCard.id}">
    <div class="image-container" style="--image-url:url(${currentRecipeCard.image})">
      <input type="image" class="favorites-button" alt="Add to favorites" src="../images/favorites-icon-active.png">
      </div>
      <div class="recipe-name-container">
        <button class="make-recipe-button">View Recipe</button>
        <h3>${currentRecipeCard.name}</h3>
      </div>
    </div>
    `
  })

}

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

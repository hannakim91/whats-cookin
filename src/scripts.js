const recipeLibraryView = document.querySelector('.recipe-library-view');
const individualRecipeView = document.querySelector('.individual-recipe-view');
const recipeCardContainer = document.querySelector('.cards');

window.addEventListener('load', makeRecipeCards);
recipeCardContainer.addEventListener('click', viewRecipeDetails);

function viewRecipeDetails(e) {
  console.log(e.target);
  if (e.target.closest('.recipe-name-container')) {
    recipeLibraryView.classList.add('hidden');
    individualRecipeView.classList.remove('hidden');
  }
}
//recipe ID used to display each recipe

function makeRecipeCards() {
  let recipeCards = recipeData.map(currentRecipe => {
    let recipeCardData = new Recipe(currentRecipe.id, currentRecipe.image, currentRecipe.ingredients, currentRecipe.instructions, currentRecipe.tags, currentRecipe.name);
    return recipeCardData;
  })
  console.log('hello');
  console.log('test', recipeCards);
  showRecipeCards(recipeCards);
}

function showRecipeCards(recipeCards) {
  recipeCards.map((currentRecipeCard) => {
    recipeCardContainer.innerHTML +=
    `
    <div class="card" id="${currentRecipeCard.id}">
    <div class="image-container" style="--image-url:url(${currentRecipeCard.image})">
      <input type="image" class="favorites-button" alt="Add to favorites" src="../images/favorites-icon-active.png">
      </div>
      <div class="recipe-name-container">
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

        // <button class="view-recipe-button">View Recipe</button>
        
// module.exports = {
//   searchByTag: searchByTag
// }

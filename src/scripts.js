const recipeLibraryView = document.querySelector('.recipe-library-view');
const individualRecipeView = document.querySelector('.individual-recipe-view');
const favoriteRecipesView = document.querySelector('.favorite-recipes-view');
const recipeCardContainer = document.querySelector('.cards');
const userFavoritesButton = document.querySelector('.user-favorites');

let recipeCards;
let user1 = new User()

window.addEventListener('load', setUpMainPageView);
recipeCardContainer.addEventListener('click', handlerFunction);
userFavoritesButton.addEventListener('click', toggleFavoriteRecipesView);

function handlerFunction(e) {

  if (e.target.closest('.recipe-name-container')) {
    let recipeDetails = getRecipeDetails(e)
    let instructionList = formatInstructions(recipeDetails)
    let ingredientList = formatIngredients(recipeDetails)
    displayIngredients(recipeDetails, instructionList, ingredientList)
    toggleIndividualRecipeView()
  }

  if (e.target.closest('.image-container')) {
    let recipeToAdd = getRecipe(e)
    user1.addRecipe(recipeToAdd)
    console.log(user1)
    toggleHeartColor()
    // if clear heart: add clicked recipe to favorites array and change from clear heart button to red heart button on display
    // if red heart: remove clicked recipe from favorites array and change to clear heart
    // need to instantiate user to be able to use user methods?
  }
}

function toggleHeartColor() {

}


function getRecipe(e) {
  let recipeID = e.target.closest('.favorites-button')
  let recipeToFavorite = recipeData.find(recipeCard => {
    return parseInt(recipeID.id) === recipeCard.id
  })
  console.log(recipeToFavorite)
  return recipeToFavorite
}

function removeFromUserFavorites() {}


function getRecipeDetails(e) {
  let individualRecipe = e.target.closest('.recipe-name-container')
  let recipeToDisplay = recipeCards.find(recipeCard =>
    recipeCard.name === individualRecipe.innerText);
  return recipeToDisplay
}

function formatIngredients(recipe) {
  let ingredients = recipe.getIngredients(ingredientsData)
  let ingredientList =
   recipe.ingredients.reduce((ingredientList, ingredient) => {
    ingredientList += `${ingredient.name}: ${ingredient.amount} ${ingredient.unit} </br>`
    return ingredientList;
  },'')
  console.log(ingredientList)
  return ingredientList;
}

function formatInstructions(recipe) {
  recipe.getInstructions()
  return recipe.instructions
}

function displayIngredients(recipe, instructions, ingredients) {
  individualRecipeView.innerHTML = `
    <h2 class="individual-recipe-title">${recipe.name}</h2>
    <section class="individual-recipe-box">
      <div class="main-div">
        <img class='individual-recipe-img' src='${recipe.image}' alt="picture of yummy food">
        <p class="individual-recipe-ingredients">Ingredients: ${ingredients}</p>
      </div>
      <p class="individual-recipe-instructions">Instructions: ${instructions}</p>
    </section>
    `;
};

function toggleIndividualRecipeView() {
  recipeLibraryView.classList.add('hidden');
  individualRecipeView.classList.remove('hidden');
}

function toggleFavoriteRecipesView() {
  recipeLibraryView.classList.add('hidden');
  individualRecipeView.classList.add('hidden');
  favoriteRecipesView.classList.remove('hidden');
}

function setUpMainPageView() {
  recipeCards = recipeData.map(currentRecipe => {
    let recipeCardData = new Recipe(currentRecipe.id, currentRecipe.image, currentRecipe.ingredients, currentRecipe.instructions, currentRecipe.tags, currentRecipe.name);
    return recipeCardData;
  })
  showRecipeCards(recipeCards);
}

function showRecipeCards(recipeCards) {
  recipeCards.map((currentRecipeCard) => {
    recipeCardContainer.innerHTML +=
    `
    <div class="card" id="${currentRecipeCard.id}">
      <div class="image-container" style="--image-url:url(${currentRecipeCard.image})">
        <input type="image" class="favorites-button" id="${currentRecipeCard.id}" alt="Add to favorites" src="../images/favorites-icon-inactive.png">
      </div>
      <div class="recipe-name-container">
        <h3 class="recipe-name">${currentRecipeCard.name}</h3>
      </div>
    </div>
    `
  })
}


// function searchByTag(searchedTag, recipeList) {
//   let selectedRecipes = [];
//   recipeList.forEach(recipe => {
//     if (recipe.tags.includes(searchedTag)) {
//       selectedRecipes.push(recipe);
//     }
//   });
//   if (selectedRecipes.length === 0) {
//     return 'Sorry, not a valid entry.'
//   }
//   return selectedRecipes;
// }

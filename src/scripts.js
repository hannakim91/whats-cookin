const recipeLibraryView = document.querySelector('.recipe-library-view');
const individualRecipeView = document.querySelector('.individual-recipe-view');
const favoriteRecipesView = document.querySelector('.favorite-recipes-view');
const recipeCardContainer = document.querySelector('.cards');
let recipeCards;

window.addEventListener('load', makeRecipeCards);
recipeCardContainer.addEventListener('click', handlerFunction);

function handlerFunction(e) {
  if (e.target.closest('.recipe-name-container')) {
    let recipeDetails = getRecipeDetails(e)
    let instructionList = formatInstructions(recipeDetails)
    let ingredientList = formatIngredients(recipeDetails)
    displayIngredients(recipeDetails, instructionList, ingredientList)
    toggleIndividualRecipeView()
  }

  if (e.target.closest('.favorites-button')) {
    toggleFavoriteRecipesView()
  }
}

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

function makeRecipeCards() {
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
        <input type="image" class="favorites-button" alt="Add to favorites" src="../images/favorites-icon-active.png">
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

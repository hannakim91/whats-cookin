// const recipeLibraryView = document.querySelector('.recipe-library-view');
// const individualRecipeView = document.querySelector('.individual-recipe-view');
// const recipeCardContainer = document.querySelector('.cards');
// let recipeCards;
//
// window.addEventListener('load', makeRecipeCards);
// recipeCardContainer.addEventListener('click', viewRecipeDetails);

function viewRecipeDetails(e) {
  let individualRecipe = e.target;
  if (individualRecipe.closest('.recipe-name-container')) {
    let recipeToDisplay = recipeCards.find(recipeCard =>
      recipeCard.name === individualRecipe.innerText);

    recipeLibraryView.classList.add('hidden');
    individualRecipeView.classList.remove('hidden');

    let recipeInstructions = recipeToDisplay.instructions.map(step =>  step.instruction)

    let recipeIngredients = recipeToDisplay.ingredients.map(recipeIngredient => {
      let ingredient = ingredientsData.find(ingredient => {
        return ingredient.id === recipeIngredient.id;
      })
      return {
        name: ingredient.name,
        amount: recipeIngredient.quantity.amount,
        unit: recipeIngredient.quantity.unit
      };
    })

    let ingredientHTML = recipeIngredients.reduce((ingredientHTML, ingredient) => {
      ingredientHTML += `${ingredient.name}: ${ingredient.amount} ${ingredient.unit} `
      return ingredientHTML;
    },'')

    console.log(ingredientHTML);
  individualRecipeView.innerHTML = `
    <h2 class="individual-recipe-title">${recipeToDisplay.name}</h2>
    <section class="individual-recipe-box">
      <img class='individual-recipe-img' src='${recipeToDisplay.image}' alt="picture of yummy food">
      <p class="individual-recipe-ingredients">${ingredientHTML}</p>
    </section>
    <p class="individual-recipe-instructions">${recipeInstructions}</p>
    `;
  return recipeToDisplay;

  };
}

// when someone clicks a recipe:
// -displays change from main view to individual recipe view
// -retrieve recipe details (instructions, ingredients, etc) and display on DOM (separate page)
// -recipe dataset -- iterate through recipes array to retrieve instructions
// -recipe dataset -- [[{{}}]] iterate through recipe's ingredients array - and quantity object -amount/unit, retrieve ingredient id and use it to go into ingredients dataset to get name of ingredient; display ingredient name
//
// output: new array with names of each element: recipe.ingredients.map

//later -- turn recipe ingredients / instruction steps into a list on html -- loop over recipe instructions and create a list item for each one


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

id in ingredients.js and recipes.js match up
multiply estimatedcost in cents by amt needed in recipe

- start with easy test files (ingredients, recipe)
- trickier = pantry, user

user story:
recipe - i should be able to filter recipes by type/tag

User is searching through array of recipeData's objects by tag to find if tags property (array) contains same value
--- array inside an object inside an array: truncatedRecipes[0][tags]

iterate through recipeList objects and find recipes which tags include searchedTag and add to a new array

conditional - if recipe tags property includes specified keyword, return those recipes
filter through array of objects to access properties -- get new array

condition - if recipe include ingredient specified, return those recipes

karen notes:
who should own each method?
-- script.js** where methods belong when it doesn't fit into a class -- make separate script-test.js file
-read through spec again
-build out user class using users.js file - what does User Class consist of

script - what is app doing?
what are methods doing and where are methods being called?

**Search by ingredient notes**

  use .find() to search the ingredients list by name and locate the id# of the named ingredient.
  return the ingredient object
  if (ingredientlist.includes(id#))

  use filter w/ ingredient.id to return an array of recipes that include the id number.

**pseudocode**
// when someone clicks a recipe:
// -displays change from main view to individual recipe view
// -retrieve recipe details (instructions, ingredients, etc) and display on DOM (separate page)
// -recipe dataset -- iterate through recipes array to retrieve instructions
// -recipe dataset -- [[{{}}]] iterate through recipe's ingredients array - and quantity object -amount/unit, retrieve ingredient id and use it to go into ingredients dataset to get name of ingredient; display ingredient name
//
// output: new array with names of each element: recipe.ingredients.map

//later -- turn recipe ingredients / instruction steps into a list on html -- loop over recipe instructions and create a list item for each one

-
// function makeRecipeDetailsView(e) {
//     let individualRecipe = e.target;
//     console.log(individualRecipe.innerText);
//     let recipeToDisplay = recipeCards.forEach(recipeCard => {
//     if (recipeCard.name === individualRecipe.innerText) {
//       individualRecipeView.innerHTML = `
//       <img class='individual-recipe-img' src='https://spoonacular.com/recipeImages/595736-556x370.jpg' alt="picture of yummy food">
//       <p class="individual-recipe-ingredients">${individualRecipe.ingredients}</p>
//       <p class="individual-recipe-instructions"></p>
//       `
//     }
//   });
// }


**likely unneeded in scripts now that it's in Recipe class:**
// let recipeInstructions = recipeToDisplay.instructions.map(step =>  step.instruction)
//
// let recipeIngredients = recipeToDisplay.ingredients.map(recipeIngredient => {
//   let ingredient = ingredientsData.find(ingredient => {
//     return ingredient.id === recipeIngredient.id;
//   })
//   return {
//     name: ingredient.name,
//     amount: recipeIngredient.quantity.amount,
//     unit: recipeIngredient.quantity.unit
//   };
// })

**event handler function**
// series of if statements -- if click happens on recipe name -- i want these thigns to happen
// if click happens on heart -- iw ant other things to happen
//call recipe methods get instructions/ingredients

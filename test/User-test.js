const expect = require('chai').expect;
const Pantry = require('../src/Pantry');
const User = require('../src/User');
const Ingredient = require('../src/Ingredient');


describe('User', function() {
  let user;
  let truncatedRecipes;
  beforeEach(function() {
    user = new User();
    truncatedRecipes = [
      {
        "id": 595736,
        "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
        "ingredients": [
          {
            "id": 20081,
            "quantity": {
              "amount": 1.5,
              "unit": "c"
            }
          },
          {
            "id": 18372,
            "quantity": {
              "amount": 0.5,
              "unit": "tsp"
            }
          },
          {
            "id": 1123,
            "quantity": {
              "amount": 1,
              "unit": "large"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
            "number": 1
          }
        ],
        "name": "Loaded Chocolate Chip Pudding Cookie Cups",
        "tags": [
          "antipasti",
          "starter"
        ]
      },
      {
        "id": 583502,
        "image": "https://spoonacular.com/recipeImages/583502-556x370.jpg",
        "ingredients": [
          {
            "id": 6150,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          },
          {
            "id": 19334,
            "quantity": {
              "amount": 2,
              "unit": "tbsp"
            }
          },
          {
            "id": 6194,
            "quantity": {
              "amount": 1,
              "unit": "cup"
            }
          }
        ],
        "instructions": [
          {
            "instruction": "Combine 1 cup chicken broth, 1 cup BBQ sauce, 3 tbsp liquid smoke, 2 tbsp Worcestershire sauce, 3 pressed garlic cloves, 2 tbsp brown sugar and stir to combine.Generously sprinkle the pork roast with salt, pepper and paprika.Rub the seasoning into the pork shoulder.Chop 1 large onion and place it into the bottom of the slow cooker.",
            "number": 1
          }
        ],
        "name": "Pulled Pork",
        "tags": [
          "lunch"
        ]
      }
    ]
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should have favorite recipes', function() {
    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should have a collection of recipes to cook', function() {
    expect(user.recipesToCook).to.deep.equal([]);
  });

  //method to add recipes to this.favoriteRecipes and remove
  // if else -or- toggle (bang?)

  it('should be able to add a favorite recipe', function() {

    user.addRecipe(truncatedRecipes[0]);

    expect(user.favoriteRecipes).to.deep.equal([truncatedRecipes[0]]);
  });

  it('should be able to remove a recipe from favorite recipes list', function() {

    user.addRecipe(truncatedRecipes[0]);
    user.removeRecipe(truncatedRecipes[0]);

    expect(user.favoriteRecipes).to.deep.equal([]);
  });

})

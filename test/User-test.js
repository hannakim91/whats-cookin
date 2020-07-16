const expect = require('chai').expect;
const Pantry = require('../src/Pantry');
const User = require('../src/User');
const Ingredient = require('../src/Ingredient');
const testData = require('../data/testData');

describe('User', function() {
  let user;
  beforeEach(function() {
    user = new User();
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

  it('should be able to add a favorite recipe', function() {

    user.toggleFavoriteRecipes(testData.truncatedRecipes[0]);

    expect(user.favoriteRecipes).to.deep.equal([testData.truncatedRecipes[0]]);
  });

  it.only('should be able to remove a recipe from favorite recipes list', function() {

    user.toggleFavoriteRecipes(testData.truncatedRecipes[0]);
    user.toggleFavoriteRecipes(testData.truncatedRecipes[0]);

    expect(user.favoriteRecipes).to.deep.equal([]);
  });

  it('should be able to search favorite recipes by tag', function() {

    user.addRecipe(truncatedRecipes[0]);
    user.searchFavoritesByTag('antipasti', user.favoriteRecipes);

    expect(user.searchFavoritesByTag('antipasti', user.favoriteRecipes)).to.deep.equal([truncatedRecipes[0]]);
  });

  it('should return a message if no results are found', function() {

    user.searchFavoritesByTag('antipasti', user.favoriteRecipes);

    expect(user.searchFavoritesByTag('antipasti', user.favoriteRecipes)).to.equal('Sorry, not a valid entry.');
  });

  it('should be able to search favorite recipes by name', function() {
    let recipeName = 'Pulled Pork';
    user.addRecipe(truncatedRecipes[1]);

    user.searchFavoritesByName('Pulled Pork', user.favoriteRecipes);

    expect(user.searchFavoritesByName(recipeName, user.favoriteRecipes)).to.deep.equal([truncatedRecipes[1]]);
  });

  it('should return a message if no results are found', function() {

    user.searchFavoritesByName('antipasti', user.favoriteRecipes);

    expect(user.searchFavoritesByName('antipasti', user.favoriteRecipes)).to.equal('Sorry, not a valid entry.');
  });

  it('should be able to search favoriteRecipes for recipes that use a named ingredient', function() {

    user.addRecipe(truncatedRecipes[1]);
    let foundRecipe = user.searchFavoritesByIngredient('brown sugar',  user.favoriteRecipes, truncatedIngredients)

    expect(foundRecipe).to.deep.equal([truncatedRecipes[1]]);

  });



})

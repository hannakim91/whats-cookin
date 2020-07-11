const expect = require('chai').expect;

const Recipe = require('../src/Recipe');
const recipe1Image = 'https://spoonacular.com/recipeImages/595736-556x370.jpg';
const recipe2Image = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
const recipe1Tags = ['antipasti', 'starter'];
const recipe1Instructions = ['']
const recipe1Ingredients = [
  {
    'id': 20081,
    'quantity': {
      'amount': 1.5,
      'unit': 'c'
    }
  },
  {
    'id': 18372,
    'quantity': {
      'amount': 0.5,
      'unit': 'tsp'
    }
  },
  {
    'id': 1123,
    'quantity': {
      'amount': 1,
      'unit': 'large'
    }
  }
];

const recipe2Ingredients = [
  {
    'id': 1009016,
    'quantity': {
      'amount': 1.5,
      'unit': 'cups'
    }
  },
  {
    'id': 9003,
    'quantity': {
      'amount': 2,
      'unit': ''
    }
  },
  {
    'id': 20027,
    'quantity': {
      'amount': 1,
      'unit': 'tablespoon'
    }
  }
];

describe('Recipe', function() {

  let recipe1, recipe2;
  beforeEach(function() {
    recipe1 = new Recipe(595736, recipe1Image, recipe1Ingredients, recipe1Tags);
    recipe2 = new Recipe(678353, recipe2Image);
  });

  it('should be a function', function() {
    expect(Recipe).to.be.a('function');
  });

  it('should be an instance of Recipe', function() {
    expect(recipe1).to.be.an.instanceof(Recipe);
  });

  it('should have an id number', function() {
    expect(recipe1.id).to.equal(595736);
  });

  it('should have an image', function() {
    expect(recipe1.image).to.equal(recipe1Image);
  });

  it('should have ingredients default to an empty array', function() {
    expect(recipe2.ingredients).to.deep.equal([]);
  })

  it('should have ingredients', function() {
    expect(recipe1.ingredients).to.equal(recipe1Ingredients);
  });

  it('should have instructions', function() {
    expect(recipe1.instructions).to.equal(recipe1Instructions);
  })

  it('should have no instructions by default', function() {
    expect('recipe2.instructions').to.deep.equal([]);
  })

  it('should have tags default to empty array', function() {
    expect(recipe2.tags).to.deep.equal([]);
  });

  it('should have descriptive tags', function() {
    expect(recipe1.tags).to.equal(recipe1Tags);
  });

});

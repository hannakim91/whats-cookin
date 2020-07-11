const expect = require('chai').expect;

const scripts = require('../src/scripts.js');
const Recipe = require('../src/Recipe');
const Pantry = require('../src/Pantry');
const Ingredient = require('../src/Ingredient');
// recipe1 = cookies, recipe2 = pulled pork, recipe3 = pancakes
const recipe1ID = 595736;
const recipe1Image = 'https://spoonacular.com/recipeImages/595736-556x370.jpg';
const recipe1Tags = ['antipasti', 'starter'];
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

const recipe1Instructions = [
  {
    "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
    "number": 1
  },
  {
    "instruction": "Add egg and vanilla and mix until combined.",
    "number": 2
  },
  {
    "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
    "number": 3
  }
];

const recipe2ID = 412309;
const recipe2Image = 'https://spoonacular.com/recipeImages/678353-556x370.jpg';
const recipe2Ingredients = [
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
];

const recipe3ID = 741603;
const recipe3Image = 'https://spoonacular.com/recipeImages/741603-556x370.jpeg';
const recipe3Tags = [ "side dish" ];
const recipe3Instructions = [
    {
      "instruction": "Watch how to make this recipe.",
      "number": 1
    },
    {
      "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
      "number": 2
    },
    {
      "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
      "number": 3
    },
];

const recipe4ID = 721146;
const recipe4Image = 'https://spoonacular.com/recipeImages/721146-556x370.jpg';
const recipe4Tags = [ "side dish" ];
const recipe4Instructions = [
    {
      "instruction": "Watch how to make this recipe.",
      "number": 1
    },
    {
      "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
      "number": 2
    },
    {
      "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
      "number": 3
    },
];
const recipe4Ingredients = [
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
    "id": 12061,
    "quantity": {
      "amount": 0.5,
      "unit": "cup"
    }
  }
];

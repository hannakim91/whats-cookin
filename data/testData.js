const expect = require('chai').expect;

const scripts = require('../src/scripts.js');
const Recipe = require('../src/Recipe');
const Pantry = require('../src/Pantry');
const Ingredient = require('../src/Ingredient');
// recipe1 = cookies, recipe2 = pulled pork, recipe3 = pancakes
const recipe1 = {
  id: 595736,
  image: 'https://spoonacular.com/recipeImages/595736-556x370.jpg',
  tags: ['antipasti', 'starter'],
  name: "Loaded Chocolate Chip Pudding Cookie Cups",
  ingredients: [
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
  ],

  instructions: [
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
  ]

};

const recipe2 = {
  id: 412309,
  image: 'https://spoonacular.com/recipeImages/678353-556x370.jpg',
  name: "Dirty Steve's Original Wing Sauce",
  ingredients: [
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
  ]
}

const recipe3 = {
  id:741603,
  image: 'https://spoonacular.com/recipeImages/741603-556x370.jpeg',
  tags: [ "side dish" ],
  name: "Elvis Pancakes",
  instructions: [
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
  ]
};

const recipe4 = {
  id: 721146,
  image: 'https://spoonacular.com/recipeImages/721146-556x370.jpg',
  tags: [ "side dish" ],
  instructions: [
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
  ],

  ingredients: [
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
  ]
};

module.exports = {
  recipe1: recipe1,
  recipe2: recipe2,
  recipe3: recipe3,
  recipe4: recipe4
}

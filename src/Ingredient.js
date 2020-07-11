class Ingredient {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.estimatedCostInCents = price;
  }
}

module.exports = Ingredient;
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

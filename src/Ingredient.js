class Ingredient {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.estimatedCostInCents = price;
  }
}


if (typeof module !== 'undefined') {
  module.exports = Ingredient;
}

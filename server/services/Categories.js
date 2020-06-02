const CategoriesModel = require('../models/Categories');

class CategoriesService {
  constructor(model) {
    this.model = model;
  }

  getCategories() {
    return this.model.query().select().pluck('name');
  }
}

module.exports = (model = CategoriesModel) => new CategoriesService(model);

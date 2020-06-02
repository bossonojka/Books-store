const { Model } = require('objection');
const BooksModel = require('../models/Books');
const CategoriesModel = require('../models/Categories');

class Categories extends Model {
  static tableName = 'categories';

  static relationMappings = {
    books: {
      relation: Model.HasManyRelation,
      modelClass: BooksModel,
      join: {
        from: 'categories.id',
        to: 'books.category_id'
      }
    }
  };
}

module.exports = Categories;

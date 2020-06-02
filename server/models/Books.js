const { Model } = require('objection');
const CategoriesModel = require('../models/Categories');
const BooksModel = require('../models/Books');

class Books extends Model {
  static tableName = 'books';

  static relationMappings = {
    category: {
      relation: Model.BelongsToOneRelation,
      modelClass: CategoriesModel,
      join: {
        from: 'books.category_id',
        to: 'categories.id'
      }
    }
  };
}

module.exports = Books;

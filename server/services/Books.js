/* eslint-disable class-methods-use-this */
const BooksModel = require('../models/Books');

class BooksService {
  constructor(model) {
    this.model = model;
  }

  deleteById(id) {
    return this.model.query().deleteById(id);
  }

  updateById(id, body) {
    return this.model.query().update(body).where({ id });
  }

  getById(id) {
    return this.model.query().select().where({ id });
  }

  add(body) {
    return this.model.query().insert(body);
  }

  getIds(ids) {
    return this.model.query().select().whereIn('id', ids);
  }

  getWithCategories() {
    return this.model.query().select('books.id', 'books.title', 'books.price', 'books.description', 'books.img', 'categories.name AS category').innerJoin('categories', 'books.category_id', 'categories.id').orderBy('id');
  }

  async getBooksLength(query) {
    return (await query).length;
  }

  getCategories(categories, query) {
    return query.whereIn('name', categories);
  }

  searchByTitle(title_like, query) {
    return query.where('title', 'like', `%${title_like}%`);
  }

  getWithPagination(_page, _limit, query) {
    return query.limit(_limit).offset(_limit * (_page - 1));
  }
}

module.exports = (model = BooksModel) => new BooksService(model);

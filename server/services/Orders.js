const OrdersModel = require('../models/Orders');

class OrdersService {
  constructor(model) {
    this.model = model;
  }

  add(body) {
    return this.model.query().insert({ ...body, books: JSON.stringify(body.books) });
  }
}

module.exports = (model = OrdersModel) => new OrdersService(model);

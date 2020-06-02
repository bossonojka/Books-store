const { Model } = require('objection');

class Orders extends Model {
  static tableName = 'orders';
}

module.exports = Orders;

const bcrypt = require('bcrypt');
const UsersModel = require('../models/Users');

const saltRounds = 10;

class AuthService {
  constructor(model) {
    this.model = model;
  }

  async login(username, password) {
    const user = (await this.model.query().select().where({ username }))[0];

    if (!user) {
      return null;
    }

    if (await bcrypt.compare(password, user.password)) {
      return user;
    }

    return null;
  }
}

module.exports = (model = UsersModel) => new AuthService(model);

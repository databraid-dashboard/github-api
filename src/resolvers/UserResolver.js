const User = require('../models/User');

const root = {
  getUser(username) {
    return new User(username);
  },
};

module.exports = root;

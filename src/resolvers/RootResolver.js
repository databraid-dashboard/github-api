const User = require('../models/User');

const root = {
  gitData(username) {
    return new User(username);
  },
};

module.exports = root;

const User = require('../models/User');

const root = {
  getGitData(username) {
    return new User(username);
  },
};

module.exports = root;

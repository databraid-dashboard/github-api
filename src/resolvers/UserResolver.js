const User = require('../models/User');

const root = {
  getOrgs(username) {
    return new User(username);
  },
};

module.exports = root;

const User = require('../models/User');

const root = {
  userData: async (user) => {
    const newUser = new User();
    const response = await newUser.fetchUser(user);
    return response;
  },
};

module.exports = root;

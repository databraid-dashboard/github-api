const User = require('../models/User')

const root = {
  userData: async (user) => {
    newUser = new User();
    let response = await newUser.fetchUser(user);
    return await response;
  },
};

module.exports = root;

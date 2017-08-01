const User = require('../models/User');
// const cache = require('../utils/cache');

// const orgs = '';

const root = {
  getOrgs(username) {
    return new User(username);
  },
  // userData: async (user) => {
  //   const newUser = new User();
  //   const response = await newUser.fetchUser(user);
  //   // cache.set(orgs, response.organizations_url);
  //   return response;
  // },

  // orgData: () => {
  // const newUser = new User();
  // console.log(newUser);
  // const user = newUser.fetchOrgs();
  // console.log(user);
  // return user;
  // const response = await newUser.fetchOrgs(url);
  // console.log(response.map(org => org.login));
  // return response.map(org => org.login);
  // orgNames.push(org.login);
  // });
  // return response;
  // },

  // orgData: async (url) => {
  //   const newUser = new User();
  //   const response = await newUser.fetchOrgs(url);
  //   return response;
  // },
};

module.exports = root;

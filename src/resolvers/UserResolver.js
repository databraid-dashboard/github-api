const User = require('../models/User')
// import User from '../models/User'

const root = {
  allUserData: (user) => {
    return `${user}`
    // return fetchUser(user);
  },
  // quoteOfTheDay: () => {
  //   return Math.random() < 0.5 ? 'Take it easy' : 'Salvation lies within';
  // },
  // random: () => {
  //   return Math.random();
  // },
  // rollThreeDice: () => {
  //   return [1, 2, 3].map(_ => 1 + Math.floor(Math.random() * 6));
  // },
};

module.exports = root;

const User = require('../models/User');
const Orgs = require('../models/Orgs');
const Repos = require('../models/Repos');

const root = {
  user(userName) {
    return new User(userName);
  },

  orgs({ userName, orgName }) {
    return new Orgs(userName, orgName);
  },

  repos({ userName, orgName, repoName }) {
    return new Repos(userName, orgName, repoName);
  },
};

module.exports = root;

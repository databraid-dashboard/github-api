// require('es6-promise').polyfill();
require('dotenv').config();
const fetch = require('isomorphic-fetch');
const Org = require('./Org');
const Repo = require('./Repo');

class User {
  constructor(username) {
    this.base = 'https://api.github.com/users/';
    this.username = username;

    this.fetchOrgs = () => fetch(`${this.base}${this.username.name}?access_token=${process.env.TKN}`)
      .then(response => response.json())
      .then(result => result.organizations_url)
      .then(orgsUrl => fetch(`${orgsUrl}?access_token=${process.env.TKN}`))
      .then(response => response.json())
      .then(result => result.map((org) => {
        const userOrg = new Org(org);
        return userOrg;
      }));

    this.fetchUserRepo = () => fetch(`${this.base}${this.username.name}?access_token=${process.env.TKN}`)
      .then(response => response.json())
      .then(user => user.repos_url)
      .then(repoUrl => fetch(`${repoUrl}?access_token=${process.env.TKN}`))
      .then(response => response.json())
      .then(result => result.map((repo) => {
        const userRepo = new Repo(repo);
        return userRepo;
      }));
  }
}

module.exports = User;

// require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');
const Org = require('./Org.js');

class User {
  constructor(username) {
    this.base = 'https://api.github.com/users/';
    this.username = username;
  }

  async fetchUser(user) {
    return fetch(`${this.base}${user.name}`)
      .then(response => response.json());
  }

  fetchOrgs() {
    return fetch(`${this.base}${this.username.name}?access_token=cc9898e38b925b1922482b425c881fdd3fd8e459`)
      .then(response => response.json())
      .then(result => result.organizations_url)
      .then(orgsUrl => fetch(`${orgsUrl}?access_token=cc9898e38b925b1922482b425c881fdd3fd8e459`))
      .then(response => response.json())
      .then(result => result.map((org) => {
        const userOrg = new Org(org);
        return userOrg;
      }));
  }
}

module.exports = User;

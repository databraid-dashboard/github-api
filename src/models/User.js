require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

class User {
  constructor() {
    this.base = 'https://api.github.com/users/';
  }

  async fetchUser(user) {
    return fetch(`${this.base}${user.name}`)
      .then(response => response.json())
      .then(response => response);
  }
}

module.exports = User;

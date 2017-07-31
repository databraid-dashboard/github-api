require('es6-promise').polyfill();
require('isomorphic-fetch');

class User {
  constructor() {
    this.base = 'https://api.github.com/users/';
  }

  async fetchUser(user) {
    return fetch(`${this.base}${user.name}`)
      .then(response => {
        return response.json()
      })
      .then(response => {
        return response;
      })
  }
}

module.exports = User;

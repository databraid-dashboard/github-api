require('dotenv').config();
const fetch = require('isomorphic-fetch');

function getJson(response) {
  return response.json();
}

class User {
  constructor(userName) {
    this.base = 'https://api.github.com/users/';
    this.userName = userName.userName;
  }

  get userAvatar() {
    return fetch(`${this.base}${this.userName}?access_token=${process.env.TKN}`)
      .then(getJson)
      .then(result => result.avatar_url);
  }
}

module.exports = User;

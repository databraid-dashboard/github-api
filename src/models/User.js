// require('es6-promise').polyfill();
const fetch = require('isomorphic-fetch');

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
    fetch(`${this.base}${this.username.name}`)
      .then(response => response.json())
      .then((result) => {
        console.log(result);
        return result.organizations_url;
      })
      .then((orgUrl) => {
        fetch(orgUrl)
          .then(response => response.json())
          .then((result) => {
            console.log(result);
            return result;
          });
        // return fetch(orgUrl);
      });
    // return new Org();
    // return fetch(`${this.base}${user.name}`)
    //   .then(response => response.json())
    //   .then(response => fetch(response.organizations_url)
    //     .then(result => result.json())
    //     .then(data => data),
    //   );
  }

  // async fetchOrgs(url) {
  //   return fetch(`${url.url}`)
  //     .then(response => response.json());
  // }
}

module.exports = User;

const fetch = require('isomorphic-fetch');

class Org {
  constructor(org) {
    this.org = org;
  }

  login() {
    return this.org.login;
  }

  id() {
    return this.org.id;
  }

  url() {
    return this.org.url;
  }

  // fetchRepos() {
  // }
}

module.exports = Org;

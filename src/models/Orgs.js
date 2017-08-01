const fetch = require('isomorphic-fetch');

class Org {
  constructor(url) {
    this.url = url;
  }

  async getOrgs() {
    return fetch(this.url)
      .then(response => response.json())
      .then(response => response);
  }
}

module.exports = Org;

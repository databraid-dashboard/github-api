const fetch = require('isomorphic-fetch');
const Repo = require('./Repo');

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

  fetchRepos() {
    return fetch(`${this.org.repos_url}?access_token=${process.env.TKN}`)
      .then(response => response.json())
      .then(result => result.map((repo) => {
        const orgRepo = new Repo(repo);
        return orgRepo;
      }));
  }
}

module.exports = Org;

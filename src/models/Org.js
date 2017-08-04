const fetch = require('isomorphic-fetch');
const Repo = require('./Repo');

class Org {
  constructor(org) {
    this.org = org;
    this.login = this.org.login;
    this.id = this.org.id;
    this.url = this.org.url;
  }
  get orgRepos() {
    return fetch(`${this.org.repos_url}?access_token=${process.env.TKN}`)
      .then(response => response.json())
      .then(result =>
        result.map((repo) => {
          const orgRepo = new Repo(repo);
          return orgRepo;
        }),
      );
  }
}

module.exports = Org;

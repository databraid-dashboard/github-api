const fetch = require('isomorphic-fetch');
const Issue = require('./Issue');

class Repo {
  constructor(repo) {
    this.repo = repo;
  }

  name() {
    return this.repo.name;
  }

  id() {
    return this.repo.id;
  }

  fetchIssue() {
    return fetch(`${this.repo.issues_url.slice(0, -9)}?state=all&access_token=${process.env.TKN}`)
      .then(response => response.json())
      .then(response => response.map((issue) => {
        const repoIssue = new Issue(issue);
        return repoIssue;
      }));
  }
}

module.exports = Repo;

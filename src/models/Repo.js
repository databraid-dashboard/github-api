const fetch = require('isomorphic-fetch');
const Issue = require('./Issue');
const PullRequest = require('./PullRequest');

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

  async fetchPullRequest() {
    return fetch(`${this.repo.pulls_url.slice(0, -9)}?access_token=${process.env.TKN}`)
      .then(response => response.json())
      .then(response => response.map(pullRequests => fetch(`${pullRequests.url}?access_token=${process.env.TKN}`)))
      .then(promiseArray => Promise.all(promiseArray))
      .then(responses => responses.map(response => response.json()))
      .then(responses => Promise.all(responses))
      .then(pullRequests => pullRequests.map((pullRequest) => {
        const pr = new PullRequest(pullRequest);
        return pr;
      }));
  }
}

module.exports = Repo;

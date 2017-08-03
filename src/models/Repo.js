const fetch = require('isomorphic-fetch');
const Issue = require('./Issue');
const PullRequest = require('./PullRequest');
const Milestone = require('./Milestone');

class Repo {
  constructor(repo) {
    this.repo = repo;
    this.name = () => this.repo.name;

    this.id = () => this.repo.id;
    this.openIssues = () => this.repo.open_issues;

    this.fetchIssue = () => fetch(`${this.repo.issues_url.slice(0, -9)}?state=all&access_token=${process.env.TKN}`)
      .then(response => response.json())
      .then(response => response.map((issue) => {
        const repoIssue = new Issue(issue);
        return repoIssue;
      }));

    this.fetchPullRequest = () => fetch(`${this.repo.pulls_url.slice(0, -9)}?access_token=${process.env.TKN}`)
      .then(response => response.json())
      .then(response => response.map(pullRequests => fetch(`${pullRequests.url}?access_token=${process.env.TKN}`)))
      .then(promiseArray => Promise.all(promiseArray))
      .then(responses => responses.map(response => response.json()))
      .then(responses => Promise.all(responses))
      .then(pullRequests => pullRequests.map((pullRequest) => {
        const pr = new PullRequest(pullRequest);
        return pr;
      }));

    this.fetchMilestone = () => fetch(`${this.repo.milestones_url.slice(0, -9)}?access_token=${process.env.TKN}`)
      .then(response => response.json())
      .then(response => response.map((milestone) => {
        const repoMilestone = new Milestone(milestone);
        return repoMilestone;
      }));
  }
}

module.exports = Repo;

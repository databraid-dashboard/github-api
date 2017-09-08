const fetch = require('isomorphic-fetch');
const Repo = require('./Repo');

function getJson(response) {
  return response.json();
}

function addToArray(value) {
  return [value];
}

function filterRelevantFields(repos) {
  return repos.filter(({ id, name, open_issues, issues_url, pulls_url, milestones_url }) => ({
    id,
    name,
    openIssues: open_issues,
    issuesUrl: issues_url,
    pullRequestsUrl: pulls_url,
    milestonesUrl: milestones_url,
  }));
}

function createRepoInstances(repos) {
  return repos.map(repo => new Repo(repo));
}

class Repos {
  constructor(userName, repoName, orgName) {
    this.orgName = orgName;
    this.repoName = repoName;
    this.userReposUrl = `https://api.github.com/users/${userName}/repos?access_token=${process.env.TKN}`;
    this.userRepoUrl = `https://api.github.com/repos/${userName}/${repoName}?access_token=${process.env.TKN}`;
    this.orgReposUrl = `https://api.github.com/orgs/${orgName}/repos?access_token=${process.env.TKN}`;
    this.orgRepoUrl = `https://api.github.com/repos/${orgName}/${repoName}?access_token=${process.env.TKN}`;
  }

  get repos() {
    return this.orgName ? this.orgRepos : this.userRepos;
  }

  get userRepos() {
    if (this.repoName !== undefined) {
      return fetch(this.userRepoUrl)
        .then(getJson)
        .then(addToArray)
        .then(filterRelevantFields)
        .then(createRepoInstances);
    }
    return fetch(this.userReposUrl)
      .then(getJson)
      .then(filterRelevantFields)
      .then(createRepoInstances);
  }

  get orgRepos() {
    if (this.repoName !== undefined && this.orgName !== undefined) {
      return fetch(this.orgRepoUrl)
        .then(getJson)
        .then(addToArray)
        .then(filterRelevantFields)
        .then(createRepoInstances);
    }
    return fetch(this.orgReposUrl)
      .then(getJson)
      .then(filterRelevantFields)
      .then(createRepoInstances);
  }
}

module.exports = Repos;

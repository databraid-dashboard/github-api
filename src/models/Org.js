/* eslint-disable camelcase */
const fetch = require('isomorphic-fetch');
const Repo = require('./Repo');

function getJson(response) {
  return response.json();
}

function addToArray(value) {
  return [value];
}

function filterRelevantFields(repos) {
  return repos.filter(({ id, name, openIssues, issues, pullRequests, milestones }) => ({
    id,
    name,
    openIssues,
    issues,
    pullRequests,
    milestones,
  }));
}

function createRepoInstances(repos) {
  return repos.map(repo => new Repo(repo));
}

class Org {
  constructor({ id, login, url, avatar_url, repos_url }) {
    this.id = id;
    this.login = login;
    this.url = url;
    this.avatarUrl = avatar_url;
    this.reposUrl = repos_url;
  }

  orgRepos() {
    return fetch(this.reposUrl)
      .then(getJson)
      .then(addToArray)
      .then(filterRelevantFields)
      .then(createRepoInstances);
  }
}

module.exports = Org;

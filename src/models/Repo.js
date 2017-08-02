<<<<<<< HEAD
/* eslint-disable camelcase, no-prototype-builtins */
const fetch = require('isomorphic-fetch');
const Issue = require('./Issue');
const PullRequest = require('./PullRequest');
const Milestone = require('./Milestone');

function fetchData(url, all) {
  if (all) {
    return fetch(`${url.slice(0, -9)}?state=all&access_token=${process.env.TKN}`);
  }
  return fetch(`${url.slice(0, -9)}?access_token=${process.env.TKN}`);
}

function getJson(response) {
  return response.json();
}

function filterRelevantFields(issues) {
  return issues.filter(({ id, title, labels, state, number, assignee, assigneeAvatar }) => ({
    id,
    title,
    labels,
    state,
    number,
    assignee,
    assigneeAvatar,
  }));
}

function sortByState(data) {
  if (data.length === 0) {
    return data;
  }

  if (data[0].hasOwnProperty('pullRequest')) {
    return data.filter(pr => pr.pullRequest.state === 'open');
  } else if (data[0].hasOwnProperty('issue')) {
    return data.filter(issue => issue.issue.state === 'open');
  }
  return data;
}

function createIssueInstances(issues) {
  return issues.map(issue => new Issue(issue));
}

function createPullRequestInstances(pullRequests) {
  return pullRequests.map(pullRequest => new PullRequest(pullRequest));
}

function createMilestoneInstances(milestones) {
  return milestones.map(milestone => new Milestone(milestone));
}

class Repo {
  constructor({ id, name, open_issues, issues_url, pulls_url, milestones_url }) {
    this.id = id;
    this.name = name;
    this.openIssues = open_issues;
    this.issuesUrl = issues_url;
    this.pullRequestUrl = pulls_url;
    this.milestonesUrl = milestones_url;
  }

  get issues() {
    return fetchData(this.issuesUrl, true)
      .then(getJson)
      .then(filterRelevantFields)
      .then(createIssueInstances)
      .then(sortByState);
  }

  get pullRequests() {
    return fetchData(this.pullRequestUrl)
      .then(getJson)
      .then(response =>
        response.map(pullRequests => fetch(`${pullRequests.url}?access_token=${process.env.TKN}`),
        ),
      )
      .then(promiseArray => Promise.all(promiseArray))
      .then(responses => responses.map(response => response.json()))
      .then(responses => Promise.all(responses))
      .then(createPullRequestInstances)
      .then(sortByState);
  }

  get milestones() {
    return fetchData(this.milestonesUrl)
      .then(getJson)
      .then(createMilestoneInstances);
=======
const fetch = require('isomorphic-fetch');
const Issue = require('./Issue');
const PullRequest = require('./PullRequest');
const Milestone = require('./Milestone');

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
  openIssues() {
    return this.repo.open_issues;
  }

  fetchIssue() {
    return fetch(`${this.repo.issues_url.slice(0, -9)}?state=all&access_token=${process.env.TKN}`)
      .then(response => response.json())
      .then(response => response.map((issue) => {
        const repoIssue = new Issue(issue);
        return repoIssue;
      }));
>>>>>>> Complete Repo Resolver and Model
  }

  fetchPullRequest() {
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

  fetchMilestone() {
    return fetch(`${this.repo.milestones_url.slice(0, -9)}?access_token=${process.env.TKN}`)
      .then(response => response.json())
      .then(response => response.map((milestone) => {
        const repoMilestone = new Milestone(milestone);
        return repoMilestone;
      }));
  }
}

module.exports = Repo;

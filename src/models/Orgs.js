const fetch = require('isomorphic-fetch');
const Org = require('./Org');

function getJson(response) {
  return response.json();
}

function addToArray(value) {
  return [value];
}

function filterRelevantFields(orgs) {
  return orgs.filter(({ id, login, url, repos_url, avatar_url }) => ({
    id,
    login,
    url,
    repos_url,
    avatar_url,
  }));
}

function createOrgInstances(orgs) {
  return orgs.map(org => new Org(org));
}

class Orgs {
  constructor(userName, orgName) {
    this.orgName = orgName;
    this.userOrgsUrl = `https://api.github.com/users/${userName}/orgs?access_token=${process.env.TKN}`;
    this.userOrgUrl = `https://api.github.com/orgs/${orgName}?access_token=${process.env.TKN}`;
  }

  get orgs() {
    return this.orgName ? this.getOrg : this.getAllUserOrgs;
  }

  get getAllUserOrgs() {
    return fetch(this.userOrgsUrl)
      .then(getJson)
      .then(filterRelevantFields)
      .then(createOrgInstances);
  }

  get getOrg() {
    return fetch(this.userOrgUrl)
      .then(getJson)
      .then(addToArray)
      .then(filterRelevantFields)
      .then(createOrgInstances);
  }
}

module.exports = Orgs;

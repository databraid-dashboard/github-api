/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
require('dotenv').config();
const { repoFetch, reposFetch, orgRepoFetch, orgReposFetch } = require('./ReposMock');
const nock = require('nock');
const Repos = require('../src/models/Repos');
const Repo = require('../src/models/Repo');

describe('Repos model with username, reponame, and orgname passed in', () => {
  const repos = new Repos('michaelmurray6298', 'skiski-app', 'ski-ski');

  it('accepts username, reponame, and orgname as passed in arguments', () => {
    expect(repos.userReposUrl).to.equal(`https://api.github.com/users/michaelmurray6298/repos?access_token=${process.env.TKN}`);
    expect(repos.orgReposUrl).to.equal(`https://api.github.com/orgs/ski-ski/repos?access_token=${process.env.TKN}`);
    expect(repos.userRepoUrl).to.equal(`https://api.github.com/repos/michaelmurray6298/skiski-app?access_token=${process.env.TKN}`);
    expect(repos.orgRepoUrl).to.equal(`https://api.github.com/repos/ski-ski/skiski-app?access_token=${process.env.TKN}`);
    expect(repos.orgName).to.equal('ski-ski');
    expect(repos.repoName).to.equal('skiski-app');
  });
  after((done) => {
    done();
  });
});

describe('Repos model with username', () => {
  const allReposByUser = new Repos('michaelmurray6298', undefined, undefined);

  it('accepts username as a passed in arguments', () => {
    expect(allReposByUser.userReposUrl).to.equal(`https://api.github.com/users/michaelmurray6298/repos?access_token=${process.env.TKN}`);
    expect(allReposByUser.orgReposUrl).to.equal(`https://api.github.com/orgs/undefined/repos?access_token=${process.env.TKN}`);
    expect(allReposByUser.userRepoUrl).to.equal(`https://api.github.com/repos/michaelmurray6298/undefined?access_token=${process.env.TKN}`);
    expect(allReposByUser.orgRepoUrl).to.equal(`https://api.github.com/repos/undefined/undefined?access_token=${process.env.TKN}`);
    expect(allReposByUser.orgName).to.equal(undefined);
    expect(allReposByUser.repoName).to.equal(undefined);
  });
  after((done) => {
    done();
  });

  it('should fetch the user repos', async () => {
    nock('https://api.github.com')
      .get(`/users/michaelmurray6298/repos?access_token=${process.env.TKN}`)
      .reply(200, reposFetch);
    const userRepos = await allReposByUser.userRepos;
    expect(userRepos[0]).to.be.an.instanceof(Repo);
  });
  after((done) => {
    done();
  });
});

describe('Repos model with username and reponame passed in', () => {
  const singleRepoByUser = new Repos('michaelmurray6298', 'react-inbox', undefined);

  it('accepts username and reponame as a passed in arguments', () => {
    expect(singleRepoByUser.userReposUrl).to.equal(`https://api.github.com/users/michaelmurray6298/repos?access_token=${process.env.TKN}`);
    expect(singleRepoByUser.orgReposUrl).to.equal(`https://api.github.com/orgs/undefined/repos?access_token=${process.env.TKN}`);
    expect(singleRepoByUser.userRepoUrl).to.equal(`https://api.github.com/repos/michaelmurray6298/react-inbox?access_token=${process.env.TKN}`);
    expect(singleRepoByUser.orgRepoUrl).to.equal(`https://api.github.com/repos/undefined/react-inbox?access_token=${process.env.TKN}`);
    expect(singleRepoByUser.orgName).to.equal(undefined);
    expect(singleRepoByUser.repoName).to.equal('react-inbox');
  });
  after((done) => {
    done();
  });

  it('should fetch the user repo', async () => {
    nock('https://api.github.com')
      .get(`/repos/michaelmurray6298/react-inbox?access_token=${process.env.TKN}`)
      .reply(200, repoFetch);
    const userRepo = await singleRepoByUser.userRepos;
    expect(userRepo[0]).to.be.an.instanceof(Repo);
  });
  after((done) => {
    done();
  });
});

describe('Repos model with username and orgname passed in', () => {
  const allReposByOrg = new Repos('michaelmurray6298', undefined, 'ski-ski');

  it('accepts username and orgname as a passed in arguments', () => {
    expect(allReposByOrg.userReposUrl).to.equal(`https://api.github.com/users/michaelmurray6298/repos?access_token=${process.env.TKN}`);
    expect(allReposByOrg.orgReposUrl).to.equal(`https://api.github.com/orgs/ski-ski/repos?access_token=${process.env.TKN}`);
    expect(allReposByOrg.userRepoUrl).to.equal(`https://api.github.com/repos/michaelmurray6298/undefined?access_token=${process.env.TKN}`);
    expect(allReposByOrg.orgRepoUrl).to.equal(`https://api.github.com/repos/ski-ski/undefined?access_token=${process.env.TKN}`);
    expect(allReposByOrg.orgName).to.equal('ski-ski');
    expect(allReposByOrg.repoName).to.equal(undefined);
  });
  after((done) => {
    done();
  });

  it('should fetch the org repos', async () => {
    nock('https://api.github.com')
      .get(`/orgs/ski-ski/repos?access_token=${process.env.TKN}`)
      .reply(200, orgReposFetch);
    const orgRepos = await allReposByOrg.orgRepos;
    expect(orgRepos[0]).to.be.an.instanceof(Repo);
  });
  after((done) => {
    done();
  });
});

describe('Repos model with reponame and orgname passed in', () => {
  const singleRepoByOrg = new Repos(undefined, 'skiski-app', 'ski-ski');

  it('accepts reponame, and orgname as passed in arguments', () => {
    expect(singleRepoByOrg.userReposUrl).to.equal(`https://api.github.com/users/undefined/repos?access_token=${process.env.TKN}`);
    expect(singleRepoByOrg.orgReposUrl).to.equal(`https://api.github.com/orgs/ski-ski/repos?access_token=${process.env.TKN}`);
    expect(singleRepoByOrg.userRepoUrl).to.equal(`https://api.github.com/repos/undefined/skiski-app?access_token=${process.env.TKN}`);
    expect(singleRepoByOrg.orgRepoUrl).to.equal(`https://api.github.com/repos/ski-ski/skiski-app?access_token=${process.env.TKN}`);
    expect(singleRepoByOrg.orgName).to.equal('ski-ski');
    expect(singleRepoByOrg.repoName).to.equal('skiski-app');
  });
  after((done) => {
    done();
  });

  it('should fetch the org repo', async () => {
    nock('https://api.github.com')
      .get(`/repos/ski-ski/skiski-app?access_token=${process.env.TKN}`)
      .reply(200, orgRepoFetch);
    const orgRepo = await singleRepoByOrg.orgRepos;
    expect(orgRepo[0]).to.be.an.instanceof(Repo);
  });
  after((done) => {
    done();
  });
});

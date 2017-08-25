/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
require('chai').use(require('sinon-chai'));
require('dotenv').config();
const { repoFetch, reposFetch, orgRepoFetch, orgReposFetch } = require('./ReposMock');
const nock = require('nock');
const Repos = require('../src/models/Repos');
const Repo = require('../src/models/Repo');

describe('Repos model', () => {
  const repos = new Repos('michaelmurray6298', 'skiski-app', 'ski-ski');
  const allReposByUser = new Repos('michaelmurray6298', undefined, undefined);
  const allReposByOrg = new Repos('michaelmurray6298', undefined, 'ski-ski');
  const singleRepoByUser = new Repos('michaelmurray6298', 'react-inbox', undefined);
  const singleRepoByOrg = new Repos(undefined, 'skiski-app', 'ski-ski');

  it('accepts username, reponame, and orgname as passed in arguments', () => {
    expect(allReposByUser.userReposUrl).to.equal(`https://api.github.com/users/michaelmurray6298/repos?access_token=${process.env.TKN}`);
    expect(allReposByOrg.orgReposUrl).to.equal(`https://api.github.com/orgs/ski-ski/repos?access_token=${process.env.TKN}`);
    expect(singleRepoByUser.userRepoUrl).to.equal(`https://api.github.com/repos/michaelmurray6298/react-inbox?access_token=${process.env.TKN}`);
    expect(singleRepoByOrg.orgRepoUrl).to.equal(`https://api.github.com/repos/ski-ski/skiski-app?access_token=${process.env.TKN}`);
    expect(repos.orgName).to.equal('ski-ski');
    expect(repos.repoName).to.equal('skiski-app');
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

/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
require('dotenv').config();
const { org, reposFetch } = require('./OrgMock');
const nock = require('nock');
const Repo = require('../src/models/Repo');

describe('Org model', () => {
  it('accepts passed in arguments', () => {
    expect(org.id).to.equal(29638033);
    expect(org.login).to.equal('ski-ski');
    expect(org.url).to.equal('https://api.github.com/orgs/ski-ski');
    expect(org.avatarUrl).to.equal('https://avatars3.githubusercontent.com/u/29638033?v=4');
    expect(org.reposUrl).to.equal(`https://api.github.com/orgs/ski-ski/repos?access_token=${process.env.TKN}`);
  });
  after((done) => {
    done();
  });

  it('should fetch the user orgs', async () => {
    nock('https://api.github.com')
      .get(`/orgs/ski-ski/repos?access_token=${process.env.TKN}`)
      .reply(200, reposFetch);
    const singleOrg = await org.orgRepos;
    expect(singleOrg[0]).to.be.an.instanceof(Repo);
  });
  after((done) => {
    done();
  });
});

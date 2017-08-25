/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
require('chai').use(require('sinon-chai'));
require('dotenv').config();
const nock = require('nock');
const Orgs = require('../src/models/Orgs');
const Org = require('../src/models/Org');

describe('Orgs model', () => {
  const orgs = new Orgs('michaelmurray6298');
  const org = new Orgs('michaelmurray6298', 'ski-ski');

  it('accepts username and orgname as passed in arguments', () => {
    expect(org.userOrgsUrl).to.equal(`https://api.github.com/users/michaelmurray6298/orgs?access_token=${process.env.TKN}`);
    expect(org.orgName).to.equal('ski-ski');
  });
  after((done) => {
    done();
  });

  it('contains user orgs url', () => {
    expect(orgs.userOrgsUrl).to.equal(`https://api.github.com/users/michaelmurray6298/orgs?access_token=${process.env.TKN}`);
  });
  after((done) => {
    done();
  });

  it('contains specific org url if an orgname is passed in', () => {
    expect(org.userOrgsUrl).to.equal(`https://api.github.com/users/michaelmurray6298/orgs?access_token=${process.env.TKN}`);
    expect(org.userOrgUrl).to.equal(`https://api.github.com/orgs/ski-ski?access_token=${process.env.TKN}`);
  });
  after((done) => {
    done();
  });

  it('should fetch the user orgs', async () => {
    const orgsFetch = [
      {
        login: 'gSchool',
        id: 3484345,
        url: 'https://api.github.com/orgs/gSchool',
        repos_url: 'https://api.github.com/orgs/gSchool/repos',
        events_url: 'https://api.github.com/orgs/gSchool/events',
        hooks_url: 'https://api.github.com/orgs/gSchool/hooks',
        issues_url: 'https://api.github.com/orgs/gSchool/issues',
        members_url: 'https://api.github.com/orgs/gSchool/members{/member}',
        public_members_url: 'https://api.github.com/orgs/gSchool/public_members{/member}',
        avatar_url: 'https://avatars1.githubusercontent.com/u/3484345?v=4',
        description: 'Home of all the Galvanize education repositories',
      },
    ];
    nock('https://api.github.com')
      .get(`/users/michaelmurray6298/orgs?access_token=${process.env.TKN}`)
      .reply(200, orgsFetch);
    const allOrgs = await orgs.getAllUserOrgs;
    expect(allOrgs[0]).to.be.an.instanceof(Org);
  });
  after((done) => {
    done();
  });

  it('should fetch the user orgs', async () => {
    const orgFetch = [
      {
        login: 'ski-ski',
        id: 29638033,
        url: 'https://api.github.com/orgs/ski-ski',
        repos_url: 'https://api.github.com/orgs/ski-ski/repos',
        events_url: 'https://api.github.com/orgs/ski-ski/events',
        hooks_url: 'https://api.github.com/orgs/ski-ski/hooks',
        issues_url: 'https://api.github.com/orgs/ski-ski/issues',
        members_url: 'https://api.github.com/orgs/ski-ski/members{/member}',
        public_members_url: 'https://api.github.com/orgs/ski-ski/public_members{/member}',
        avatar_url: 'https://avatars3.githubusercontent.com/u/29638033?v=4',
        description: null,
        has_organization_projects: true,
        has_repository_projects: true,
        public_repos: 2,
        public_gists: 0,
        followers: 0,
        following: 0,
        html_url: 'https://github.com/ski-ski',
        created_at: '2017-06-22T18:04:32Z',
        updated_at: '2017-06-22T18:05:56Z',
        type: 'Organization',
        total_private_repos: 0,
        owned_private_repos: 0,
        private_gists: 0,
        disk_usage: 472,
        collaborators: 0,
        billing_email: 'michaelmurray6298@gmail.com',
        plan: {
          name: 'free',
          space: 976562499,
          private_repos: 0,
          filled_seats: 2,
          seats: 0,
        },
        default_repository_permission: 'admin',
        members_can_create_repositories: true,
      },
    ];
    nock('https://api.github.com')
      .get(`/orgs/ski-ski?access_token=${process.env.TKN}`)
      .reply(200, orgFetch);
    const singleOrg = await org.getOrg;
    expect(singleOrg[0]).to.be.an.instanceof(Org);
  });
  after((done) => {
    done();
  });
});

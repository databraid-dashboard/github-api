/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
require('chai').use(require('sinon-chai'));
require('dotenv').config();
const nock = require('nock');
const User = require('../src/models/User');

describe('User model', () => {
  const user = new User({ userName: 'michaelmurray6298' });

  it('accepts a passed in argument', () => {
    expect(user.userName).to.equal('michaelmurray6298');
  });
  after((done) => {
    done();
  });

  it('contains base url', () => {
    expect(user.base).to.equal('https://api.github.com/users/');
  });
  after((done) => {
    done();
  });

  it('should fetch the user avatar', async () => {
    const userFetch = {
      login: 'michaelmurray6298',
      id: 24865792,
      avatar_url: 'https://avatars1.githubusercontent.com/u/24865792?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/michaelmurray6298',
      html_url: 'https://github.com/michaelmurray6298',
      followers_url: 'https://api.github.com/users/michaelmurray6298/followers',
      following_url:
    'https://api.github.com/users/michaelmurray6298/following{/other_user}',
      gists_url:
    'https://api.github.com/users/michaelmurray6298/gists{/gist_id}',
      starred_url:
    'https://api.github.com/users/michaelmurray6298/starred{/owner}{/repo}',
      subscriptions_url:
    'https://api.github.com/users/michaelmurray6298/subscriptions',
      organizations_url: 'https://api.github.com/users/michaelmurray6298/orgs',
      repos_url: 'https://api.github.com/users/michaelmurray6298/repos',
      events_url:
    'https://api.github.com/users/michaelmurray6298/events{/privacy}',
      received_events_url:
    'https://api.github.com/users/michaelmurray6298/received_events',
      type: 'User',
      site_admin: false,
      name: 'Michael Murray',
      company: null,
      blog: '',
      location: null,
      email: 'michaelmurray6298@gmail.com',
      hireable: null,
      bio: null,
      public_repos: 20,
      public_gists: 0,
      followers: 0,
      following: 0,
      created_at: '2017-01-01T19:17:16Z',
      updated_at: '2017-07-27T16:44:43Z',
      private_gists: 0,
      total_private_repos: 28,
      owned_private_repos: 0,
      disk_usage: 18833,
      collaborators: 0,
      two_factor_authentication: false,
      plan: {
        name: 'free',
        space: 976562499,
        collaborators: 0,
        private_repos: 0,
      },
    };
    nock('https://api.github.com')
      .get(`/users/michaelmurray6298?access_token=${process.env.TKN}`)
      .reply(200, userFetch);
    const avatar = await user.userAvatar;
    expect(avatar).to.equal(userFetch.avatar_url);
  });
  after((done) => {
    done();
  });
});

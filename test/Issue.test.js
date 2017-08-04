/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
require('chai').use(require('sinon-chai'));
const Issue = require('../src/models/Issue');

describe('Issue model', () => {
  const repoIssue = new Issue({
    url: 'https://api.github.com/repos/ski-ski/skiski-app/issues/67',
    repository_url: 'https://api.github.com/repos/ski-ski/skiski-app',
    labels_url:
   'https://api.github.com/repos/ski-ski/skiski-app/issues/67/labels{/name}',
    comments_url:
   'https://api.github.com/repos/ski-ski/skiski-app/issues/67/comments',
    events_url:
   'https://api.github.com/repos/ski-ski/skiski-app/issues/67/events',
    html_url: 'https://github.com/ski-ski/skiski-app/pull/67',
    id: 247520833,
    number: 67,
    title: 'Dev',
    user: {
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
    },
    labels: [],
    state: 'closed',
    locked: false,
    assignee: null,
    assignees: [],
    milestone: null,
    comments: 0,
    created_at: '2017-08-02T21:01:02Z',
    updated_at: '2017-08-02T22:19:42Z',
    closed_at: '2017-08-02T22:19:42Z',
    pull_request: {
      url: 'https://api.github.com/repos/ski-ski/skiski-app/pulls/67',
      html_url: 'https://github.com/ski-ski/skiski-app/pull/67',
      diff_url: 'https://github.com/ski-ski/skiski-app/pull/67.diff',
      patch_url: 'https://github.com/ski-ski/skiski-app/pull/67.patch',
    },
    body: '',
  });
  it('constructor accepts a passed in argument', () => {
    expect(repoIssue.issue.id).to.equal(247520833);
  });

  it('has title property', () => {
    expect(repoIssue.issue.title).to.equal('Dev');
  });

  it('has id property', () => {
    expect(repoIssue.issue.id).to.equal(247520833);
  });

  it('has assigneeLogin property', () => {
    expect(repoIssue.issue.user.login).to.equal('michaelmurray6298');
  });

  it('has assigneeAvatar property', () => {
    expect(repoIssue.issue.user.avatar_url).to.equal(
      'https://avatars1.githubusercontent.com/u/24865792?v=4',
    );
  });

  it('has labels property', () => {
    expect(repoIssue.issue.labels).to.be.an('array');
  });

  it('has state property', () => {
    expect(repoIssue.issue.state).to.equal('closed');
  });

  it('has number property', () => {
    expect(repoIssue.issue.number).to.equal(67);
  });
});

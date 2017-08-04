/* eslint-disable no-undef, no-unused-expressions */
const { expect } = require('chai');
require('chai').use(require('sinon-chai'));
const Milestone = require('../src/models/Milestone');

describe('Milestone model', () => {
  const repoMilestone = new Milestone({
    url: 'https://api.github.com/repos/ski-ski/skiski-app/milestones/1',
    html_url: 'https://github.com/ski-ski/skiski-app/milestone/1',
    labels_url:
   'https://api.github.com/repos/ski-ski/skiski-app/milestones/1/labels',
    id: 2679653,
    number: 1,
    title: 'Test',
    description: null,
    creator: {
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
    open_issues: 1,
    closed_issues: 0,
    state: 'open',
    created_at: '2017-08-03T19:50:57Z',
    updated_at: '2017-08-03T19:50:57Z',
    due_on: null,
    closed_at: null,
  });
  it('constructor accepts a passed in argument', () => {
    expect(repoMilestone.milestone.id).to.equal(2679653);
  });

  it('has id property', () => {
    expect(repoMilestone.milestone.id).to.equal(2679653);
  });

  it('has title property', () => {
    expect(repoMilestone.milestone.title).to.equal('Test');
  });

  it('has openIssues property', () => {
    expect(repoMilestone.milestone.open_issues).to.equal(1);
  });

  it('has closedIssues property', () => {
    expect(repoMilestone.milestone.closed_issues).to.equal(0);
  });

  it('has dueOn property', () => {
    expect(repoMilestone.milestone.due_on).to.equal(null);
  });
});
